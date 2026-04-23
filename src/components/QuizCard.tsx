import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, X, Info, ExternalLink, AlertOctagon, Lightbulb } from 'lucide-react'
import type { Question } from '@/types'
import { cn } from '@/lib/cn'
import { InlineFormat } from './InlineFormat'

interface Props {
  question: Question
  index: number
  total: number
  revealAfterAnswer?: boolean
  hideExplanation?: boolean
  onValidated: (correct: boolean, selection: string[]) => void
  onNext: () => void
}

export function QuizCard({
  question,
  index,
  total,
  revealAfterAnswer = true,
  hideExplanation = false,
  onValidated,
  onNext,
}: Props) {
  const [selection, setSelection] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const isMulti = question.type === 'multi'

  const correctSet = useMemo(() => new Set(question.correct), [question.correct])

  const toggle = (id: string) => {
    if (submitted) return
    if (isMulti) {
      setSelection((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
    } else {
      setSelection([id])
    }
  }

  const validate = () => {
    if (selection.length === 0) return
    const isCorrect =
      selection.length === question.correct.length &&
      selection.every((s) => correctSet.has(s))
    setSubmitted(true)
    onValidated(isCorrect, selection)
  }

  const next = () => {
    setSelection([])
    setSubmitted(false)
    onNext()
  }

  const allCorrect =
    submitted &&
    selection.length === question.correct.length &&
    selection.every((s) => correctSet.has(s))

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="flex items-center justify-between text-xs text-muted">
        <span>
          Question {index + 1} / {total}
        </span>
        <div className="flex gap-1 items-center">
          <span className="badge capitalize">{question.difficulty}</span>
          {question.type === 'pbq' && <span className="badge text-[rgb(var(--primary))]">PBQ</span>}
          {question.type === 'multi' && <span className="badge">Multi-réponses</span>}
        </div>
      </div>

      {question.official && (
        <div className="mt-3 rounded-lg border border-red-500/60 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
          <AlertOctagon className="h-4 w-4 shrink-0" />
          Question officielle (source éditeur). Formulation reprise d'un support officiel.
        </div>
      )}

      <h2 className="mt-3 text-lg font-semibold leading-relaxed">
        <InlineFormat text={question.prompt} />
      </h2>
      {question.scenario && (
        <div className="mt-3 rounded-xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3 text-sm whitespace-pre-line">
          <Info className="h-4 w-4 inline mr-1 text-[rgb(var(--primary))]" />
          <InlineFormat text={question.scenario} />
        </div>
      )}

      <div className="mt-5 space-y-2">
        {question.options.map((o) => {
          const picked = selection.includes(o.id)
          const isCorrect = correctSet.has(o.id)
          const showRationale =
            submitted && !hideExplanation && revealAfterAnswer && (picked || isCorrect) && !!o.rationale

          const stateClass = submitted
            ? isCorrect
              ? 'border-green-500/60 bg-green-500/10'
              : picked
                ? 'border-red-500/60 bg-red-500/10'
                : 'opacity-60'
            : picked
              ? 'border-[rgb(var(--primary))] bg-[rgb(var(--primary)/0.08)]'
              : 'hover:bg-[rgb(var(--card))]'

          return (
            <div key={o.id} className="space-y-1.5">
              <button
                type="button"
                onClick={() => toggle(o.id)}
                disabled={submitted}
                className={cn(
                  'w-full text-left rounded-xl border border-[rgb(var(--border))] p-3 transition-colors flex items-start gap-3',
                  stateClass
                )}
              >
                <span
                  className={cn(
                    'mt-0.5 h-5 w-5 shrink-0 rounded-md border border-[rgb(var(--border))] flex items-center justify-center text-xs font-semibold',
                    picked && !submitted && 'bg-[rgb(var(--primary))] text-[rgb(var(--primary-fg))] border-transparent',
                    submitted && isCorrect && 'bg-green-500 text-white border-transparent',
                    submitted && picked && !isCorrect && 'bg-red-500 text-white border-transparent'
                  )}
                >
                  {submitted ? (
                    isCorrect ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : picked ? (
                      <X className="h-3.5 w-3.5" />
                    ) : (
                      o.id.toUpperCase()
                    )
                  ) : (
                    o.id.toUpperCase()
                  )}
                </span>
                <span className="text-sm leading-relaxed">
                  <InlineFormat text={o.text} />
                </span>
              </button>

              <AnimatePresence>
                {showRationale && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                      'ml-8 rounded-lg px-3 py-2 text-xs leading-relaxed border',
                      isCorrect
                        ? 'bg-green-500/10 border-green-500/30 text-green-900 dark:text-green-200'
                        : 'bg-red-500/10 border-red-500/30 text-red-900 dark:text-red-200'
                    )}
                  >
                    <span className="font-semibold mr-1">
                      {isCorrect ? '✓ Bonne réponse :' : '✗ Non :'}
                    </span>
                    <InlineFormat text={o.rationale!} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {submitted && revealAfterAnswer && !hideExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 space-y-3 overflow-hidden"
          >
            {question.explanation && (
              <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3 flex gap-2 items-start text-sm">
                <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted mb-0.5">
                    À retenir
                  </div>
                  <InlineFormat text={question.explanation} />
                </div>
              </div>
            )}
            {question.references && question.references.length > 0 && (
              <details className="rounded-xl border border-[rgb(var(--border))] p-3 text-xs">
                <summary className="cursor-pointer text-muted">Sources officielles</summary>
                <ul className="mt-2 space-y-1">
                  {question.references.map((r) => (
                    <li key={r.url}>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[rgb(var(--primary))] hover:underline inline-flex items-center gap-1 break-all"
                      >
                        <ExternalLink className="h-3 w-3 shrink-0" />
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="text-xs text-muted">
          {submitted
            ? allCorrect
              ? '🎉 Parfait !'
              : 'À retravailler. Reviens dessus via "Révision ciblée".'
            : isMulti
              ? 'Plusieurs réponses possibles.'
              : 'Une seule réponse correcte.'}
        </div>
        {!submitted ? (
          <button
            onClick={validate}
            disabled={selection.length === 0}
            className="btn-primary disabled:opacity-50"
          >
            Valider
          </button>
        ) : (
          <button onClick={next} className="btn-primary">
            Suivant <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </motion.div>
  )
}
