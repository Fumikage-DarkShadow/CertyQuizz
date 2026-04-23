import type { CertId, Question } from '@/types'
import { SECURITY_PLUS_QUESTIONS } from './security-plus/questions'
import { EBIOS_RM_QUESTIONS } from './ebios-rm/questions'
import { SC_200_QUESTIONS } from './sc-200/questions'
import { ISO_42001_QUESTIONS } from './iso-42001/questions'
import { CISSP_QUESTIONS } from './cissp/questions'
import { CISA_QUESTIONS } from './cisa/questions'

export const QUESTIONS: Question[] = [
  ...SECURITY_PLUS_QUESTIONS,
  ...EBIOS_RM_QUESTIONS,
  ...SC_200_QUESTIONS,
  ...ISO_42001_QUESTIONS,
  ...CISSP_QUESTIONS,
  ...CISA_QUESTIONS,
]

export function questionsFor(certId: CertId, domainId?: string) {
  return QUESTIONS.filter((q) => q.certId === certId && (!domainId || q.domainId === domainId))
}

export function questionById(id: string) {
  return QUESTIONS.find((q) => q.id === id)
}

export function positioningQuestions(): Question[] {
  const pool = QUESTIONS.filter(
    (q) =>
      (q.certId === 'security-plus' || q.certId === 'ebios-rm' || q.certId === 'sc-200') &&
      (q.difficulty === 'easy' || q.difficulty === 'medium')
  )
  const byDomain = new Map<string, Question[]>()
  for (const q of pool) {
    const key = q.certId + ':' + q.domainId
    if (!byDomain.has(key)) byDomain.set(key, [])
    byDomain.get(key)!.push(q)
  }
  const picks: Question[] = []
  for (const [, arr] of byDomain) {
    if (picks.length >= 10) break
    picks.push(arr[0])
  }
  return picks.slice(0, 10)
}
