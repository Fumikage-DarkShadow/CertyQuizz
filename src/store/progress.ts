import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Attempt, ExamRun, Progress, CertId } from '@/types'

interface ProgressState extends Progress {
  recordAttempt: (a: Omit<Attempt, 'answeredAt'>) => void
  recordExam: (e: ExamRun) => void
  tickStreak: () => void
  unlockBadge: (b: string) => void
  setOnboarded: (score: number) => void
  setTheme: (t: 'light' | 'dark' | 'system') => void
  reset: () => void
  failedQuestionIds: (certId: CertId) => string[]
  accuracy: (certId?: CertId, domainId?: string) => { correct: number; total: number; pct: number }
  attemptsByDomain: (certId: CertId) => Record<string, { correct: number; total: number }>
  readiness: (certId: CertId) => number
}

const today = () => new Date().toISOString().slice(0, 10)

const BADGE_TRIGGERS = [
  { id: 'first-steps', threshold: 10, label: '10 questions' },
  { id: 'warrior-50', threshold: 50, label: '50 questions' },
  { id: 'century', threshold: 100, label: '100 questions' },
  { id: 'hall-500', threshold: 500, label: '500 questions' },
]

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      attempts: [],
      exams: [],
      streak: { current: 0, longest: 0, lastDay: null },
      badges: [],
      onboarded: false,
      positioningScore: undefined,
      settings: { theme: 'system', reducedMotion: false },

      recordAttempt: (a) => {
        const attempt: Attempt = { ...a, answeredAt: Date.now() }
        set((s) => ({ attempts: [...s.attempts, attempt] }))
        get().tickStreak()
        const count = get().attempts.length
        for (const b of BADGE_TRIGGERS) {
          if (count >= b.threshold && !get().badges.includes(b.id)) {
            get().unlockBadge(b.id)
          }
        }
      },

      recordExam: (e) =>
        set((s) => ({
          exams: [...s.exams, e],
          badges: s.badges.includes('exam-passed') || !e.passed ? s.badges : [...s.badges, 'exam-passed'],
        })),

      tickStreak: () => {
        const t = today()
        const s = get().streak
        if (s.lastDay === t) return
        let current = 1
        if (s.lastDay) {
          const diff = Math.floor(
            (new Date(t).getTime() - new Date(s.lastDay).getTime()) / 86_400_000
          )
          current = diff === 1 ? s.current + 1 : 1
        }
        const longest = Math.max(s.longest, current)
        set({ streak: { current, longest, lastDay: t } })
      },

      unlockBadge: (b) => set((s) => (s.badges.includes(b) ? s : { badges: [...s.badges, b] })),

      setOnboarded: (score) => set({ onboarded: true, positioningScore: score }),
      setTheme: (t) => set((s) => ({ settings: { ...s.settings, theme: t } })),

      reset: () =>
        set({
          attempts: [],
          exams: [],
          streak: { current: 0, longest: 0, lastDay: null },
          badges: [],
          onboarded: false,
          positioningScore: undefined,
        }),

      failedQuestionIds: (certId) => {
        const attempts = get().attempts.filter((a) => a.certId === certId)
        const last = new Map<string, Attempt>()
        for (const a of attempts) {
          const prev = last.get(a.qid)
          if (!prev || prev.answeredAt < a.answeredAt) last.set(a.qid, a)
        }
        return Array.from(last.values())
          .filter((a) => !a.correct)
          .map((a) => a.qid)
      },

      accuracy: (certId, domainId) => {
        const arr = get().attempts.filter(
          (a) => (!certId || a.certId === certId) && (!domainId || a.domainId === domainId)
        )
        const total = arr.length
        const correct = arr.filter((a) => a.correct).length
        const pct = total === 0 ? 0 : Math.round((correct / total) * 100)
        return { correct, total, pct }
      },

      attemptsByDomain: (certId) => {
        const out: Record<string, { correct: number; total: number }> = {}
        for (const a of get().attempts) {
          if (a.certId !== certId) continue
          if (!out[a.domainId]) out[a.domainId] = { correct: 0, total: 0 }
          out[a.domainId].total++
          if (a.correct) out[a.domainId].correct++
        }
        return out
      },

      readiness: (certId) => {
        const acc = get().accuracy(certId)
        if (acc.total < 20) return Math.min(40, Math.round(acc.pct * 0.4))
        // Weighted: accuracy + volume + passed exams
        const passed = get().exams.filter((e) => e.certId === certId && e.passed).length
        const bonus = Math.min(20, passed * 10)
        const volumeBonus = Math.min(20, Math.floor(acc.total / 10))
        return Math.min(100, Math.round(acc.pct * 0.6 + bonus + volumeBonus))
      },
    }),
    {
      name: 'cyber-prep-progress',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
)
