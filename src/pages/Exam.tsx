import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, Trophy, AlertTriangle } from 'lucide-react'
import { getCert } from '@/data/certifications'
import { questionsFor } from '@/data'
import { useProgress } from '@/store/progress'
import { QuizCard } from '@/components/QuizCard'
import { ProgressBar } from '@/components/ui/ProgressBar'

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const EXAM_CONFIG: Record<string, { questions: number; minutes: number; passPct: number }> = {
  'security-plus': { questions: 50, minutes: 70, passPct: 83 },
  'ebios-rm': { questions: 40, minutes: 75, passPct: 70 },
  'sc-200': { questions: 45, minutes: 80, passPct: 70 },
  'iso-42001': { questions: 20, minutes: 45, passPct: 70 },
  'cissp': { questions: 25, minutes: 60, passPct: 70 },
  'cisa': { questions: 20, minutes: 50, passPct: 70 },
}

export default function Exam() {
  const { certId } = useParams()
  const cert = getCert(certId || '')
  const recordExam = useProgress((s) => s.recordExam)
  const recordAttempt = useProgress((s) => s.recordAttempt)

  const cfg = cert ? EXAM_CONFIG[cert.id] : null

  const questions = useMemo(() => {
    if (!cert || !cfg) return []
    const all = shuffle(questionsFor(cert.id))
    return all.slice(0, Math.min(cfg.questions, all.length))
  }, [cert, cfg])

  const [started, setStarted] = useState(false)
  const [startTs, setStartTs] = useState(0)
  const [i, setI] = useState(0)
  const [answers, setAnswers] = useState<Record<string, { correct: boolean }>>({})
  const [left, setLeft] = useState((cfg?.minutes || 0) * 60)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!started || done) return
    const t = setInterval(() => {
      setLeft((s) => {
        if (s <= 1) {
          finish()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [started, done])

  if (!cert || !cfg)
    return <div className="card">Configuration d'examen indisponible pour cette certification.</div>

  const mm = String(Math.floor(left / 60)).padStart(2, '0')
  const ss = String(left % 60).padStart(2, '0')

  const finish = () => {
    const perDomain: Record<string, { correct: number; total: number }> = {}
    let correct = 0
    for (const q of questions) {
      const d = q.domainId
      if (!perDomain[d]) perDomain[d] = { correct: 0, total: 0 }
      perDomain[d].total++
      if (answers[q.id]?.correct) {
        perDomain[d].correct++
        correct++
      }
    }
    const pct = Math.round((correct / questions.length) * 100)
    recordExam({
      id: crypto.randomUUID(),
      certId: cert.id,
      startedAt: startTs,
      endedAt: Date.now(),
      totalQuestions: questions.length,
      score: pct,
      perDomain,
      passed: pct >= cfg.passPct,
    })
    setDone(true)
  }

  if (!started) {
    return (
      <div className="card max-w-xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Examen blanc · {cert.shortName}</h1>
        <ul className="text-sm space-y-2">
          <li>📝 <strong>{cfg.questions}</strong> questions tirées au sort</li>
          <li>⏱️ <strong>{cfg.minutes} minutes</strong> chronométrées</li>
          <li>🎯 Seuil de réussite : <strong>{cfg.passPct}%</strong></li>
          <li>❌ Pas d'explication pendant l'examen</li>
          <li>📊 Bilan détaillé par domaine à la fin</li>
        </ul>
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-xs flex gap-2 items-start">
          <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" />
          <span>
            Mets-toi dans les conditions réelles : téléphone en silencieux, pas d'onglet tiers.
            Bonne chance !
          </span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setStarted(true)
              setStartTs(Date.now())
            }}
            className="btn-primary flex-1"
          >
            Démarrer l'examen
          </button>
          <Link to={`/cert/${cert.id}`} className="btn-outline">
            Annuler
          </Link>
        </div>
      </div>
    )
  }

  if (done) {
    const correct = Object.values(answers).filter((a) => a.correct).length
    const pct = Math.round((correct / questions.length) * 100)
    const passed = pct >= cfg.passPct
    const perDomain: Record<string, { correct: number; total: number }> = {}
    for (const q of questions) {
      const d = q.domainId
      if (!perDomain[d]) perDomain[d] = { correct: 0, total: 0 }
      perDomain[d].total++
      if (answers[q.id]?.correct) perDomain[d].correct++
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card max-w-2xl mx-auto space-y-5"
      >
        <div className="flex items-center gap-3">
          <Trophy className={passed ? 'h-10 w-10 text-green-500' : 'h-10 w-10 text-muted'} />
          <div>
            <h1 className="text-2xl font-bold">
              {passed ? 'Réussi 🎉' : 'Échec. À retravailler.'}
            </h1>
            <p className="text-muted text-sm">Score : {pct}% · seuil : {cfg.passPct}%</p>
          </div>
        </div>
        <ProgressBar value={pct} color={passed ? 'rgb(34 197 94)' : 'rgb(239 68 68)'} />
        <div>
          <h2 className="font-semibold mb-2">Résultats par domaine</h2>
          <div className="space-y-2">
            {Object.entries(perDomain).map(([id, s]) => {
              const d = cert.domains.find((dd) => dd.id === id)
              const p = Math.round((s.correct / s.total) * 100)
              return (
                <div key={id}>
                  <div className="flex justify-between text-xs">
                    <span>{d?.label || id}</span>
                    <span className="tabular-nums">
                      {s.correct}/{s.total} ({p}%)
                    </span>
                  </div>
                  <ProgressBar value={p} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex gap-3">
          <Link to={`/cert/${cert.id}/review`} className="btn-primary flex-1">
            Revoir mes erreurs
          </Link>
          <Link to={`/cert/${cert.id}`} className="btn-outline">
            Retour au hub
          </Link>
        </div>
      </motion.div>
    )
  }

  const q = questions[i]

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between sticky top-14 bg-[rgb(var(--bg))] py-2 z-30">
        <Link to={`/cert/${cert.id}`} className="text-sm text-muted inline-flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Quitter
        </Link>
        <div
          className={`flex items-center gap-1.5 text-sm font-semibold tabular-nums ${left < 60 ? 'text-red-500 animate-pulse' : ''}`}
        >
          <Clock className="h-4 w-4" />
          {mm}:{ss}
        </div>
      </div>
      <ProgressBar value={((i + 1) / questions.length) * 100} />
      <QuizCard
        question={q}
        index={i}
        total={questions.length}
        revealAfterAnswer={false}
        hideExplanation
        onValidated={(correct) => {
          setAnswers((a) => ({ ...a, [q.id]: { correct } }))
          recordAttempt({
            qid: q.id,
            certId: cert.id,
            domainId: q.domainId,
            correct,
            ms: 0,
          })
        }}
        onNext={() => {
          if (i + 1 >= questions.length) finish()
          else setI((x) => x + 1)
        }}
      />
    </div>
  )
}
