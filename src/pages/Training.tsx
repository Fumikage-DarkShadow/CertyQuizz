import { useMemo, useState } from 'react'
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Zap, Target, Flame } from 'lucide-react'
import { getCert } from '@/data/certifications'
import { questionsFor } from '@/data'
import { useProgress } from '@/store/progress'
import { QuizCard } from '@/components/QuizCard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { cn } from '@/lib/cn'

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const TIERS = [
  { size: 5, label: 'Éclair', time: '≈ 3 min', icon: Zap, desc: 'Pause courte, idéal pour garder le streak.' },
  { size: 10, label: 'Standard', time: '≈ 7 min', icon: Target, desc: 'Session équilibrée, recommandée au quotidien.' },
  { size: 20, label: 'Focus', time: '≈ 15 min', icon: Flame, desc: 'Révision appuyée sur un domaine ou la certif.' },
] as const

export default function Training() {
  const { certId } = useParams()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const cert = getCert(certId || '')
  const domainId = params.get('domain') || undefined

  const record = useProgress((s) => s.recordAttempt)

  const pool = useMemo(
    () => questionsFor(cert?.id as any, domainId),
    [cert?.id, domainId]
  )

  const [tierSize, setTierSize] = useState<number | null>(null)
  const [questions, setQuestions] = useState<ReturnType<typeof questionsFor>>([])
  const [i, setI] = useState(0)
  const [startedAt, setStartedAt] = useState(Date.now())
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  if (!cert) return <div>Certification inconnue.</div>

  if (pool.length === 0) {
    return (
      <div className="card">
        <p>Aucune question disponible pour ce périmètre pour le moment.</p>
        <Link to={`/cert/${cert.id}`} className="btn-outline mt-3 inline-flex">
          <ArrowLeft className="h-4 w-4" /> Retour au hub
        </Link>
      </div>
    )
  }

  const scopeLabel = domainId
    ? cert.domains.find((d) => d.id === domainId)?.label
    : `Toutes les questions · ${cert.shortName}`

  // Écran 1 : choix du palier
  if (tierSize === null) {
    return (
      <div className="max-w-2xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-[rgb(var(--fg))]"
          >
            <ArrowLeft className="h-4 w-4" /> Retour
          </button>
          <span className="text-xs text-muted">{cert.shortName}</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Entraînement</h1>
          <p className="text-muted text-sm">
            Choisis la durée de ta session. Les questions sont tirées aléatoirement depuis :{' '}
            <span className="font-medium text-[rgb(var(--fg))]">{scopeLabel}</span>{' '}
            <span className="text-xs">({pool.length} disponibles)</span>.
          </p>
          <p className="text-xs text-muted mt-1">
            Pour un examen chronométré complet, utilise plutôt le mode <strong>Examen blanc</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {TIERS.map((t) => {
            const Icon = t.icon
            const actualSize = Math.min(t.size, pool.length)
            const disabled = pool.length === 0
            return (
              <motion.button
                key={t.size}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={disabled}
                onClick={() => {
                  const picked = shuffle(pool).slice(0, actualSize)
                  setQuestions(picked)
                  setTierSize(actualSize)
                  setStartedAt(Date.now())
                }}
                className={cn(
                  'card text-left transition-shadow hover:shadow-lg border-2 border-transparent hover:border-[rgb(var(--primary))]',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="h-9 w-9 rounded-xl bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--primary))] flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold">{t.label}</div>
                    <div className="text-xs text-muted">{t.time}</div>
                  </div>
                </div>
                <div className="mt-3 text-3xl font-bold tabular-nums">
                  {actualSize}
                  <span className="text-sm text-muted font-medium"> questions</span>
                </div>
                <p className="text-xs text-muted mt-1">{t.desc}</p>
                {actualSize < t.size && (
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-2">
                    Seulement {pool.length} questions dans ce périmètre.
                  </p>
                )}
              </motion.button>
            )
          })}
        </div>

        {domainId && (
          <Link
            to={`/cert/${cert.id}/train`}
            className="inline-flex text-xs text-[rgb(var(--primary))] hover:underline"
          >
            Élargir à toute la certification →
          </Link>
        )}
      </div>
    )
  }

  // Écran 2 : écran de fin
  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="card max-w-xl mx-auto space-y-4 text-center">
        <h1 className="text-2xl font-bold">Bien joué !</h1>
        <div className="text-5xl font-bold tabular-nums">{pct}%</div>
        <ProgressBar value={pct} />
        <p className="text-muted text-sm">
          Score : <span className="font-semibold">{score}</span> / {questions.length}
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={() => {
              setTierSize(null)
              setQuestions([])
              setI(0)
              setScore(0)
              setDone(false)
            }}
            className="btn-primary"
          >
            Nouvelle session
          </button>
          <Link to={`/cert/${cert.id}`} className="btn-outline">
            Retour au hub
          </Link>
        </div>
      </div>
    )
  }

  // Écran 3 : quiz
  const q = questions[i]

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            if (confirm('Abandonner la session en cours ?')) {
              setTierSize(null)
              setQuestions([])
              setI(0)
              setScore(0)
            }
          }}
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-[rgb(var(--fg))]"
        >
          <ArrowLeft className="h-4 w-4" /> Quitter
        </button>
        <span className="text-xs text-muted">
          Entraînement · {cert.shortName}
          {domainId && ` · ${cert.domains.find((d) => d.id === domainId)?.label}`}
        </span>
      </div>

      <ProgressBar value={((i + 1) / questions.length) * 100} />

      <QuizCard
        question={q}
        index={i}
        total={questions.length}
        onValidated={(correct) => {
          record({
            qid: q.id,
            certId: cert.id,
            domainId: q.domainId,
            correct,
            ms: Date.now() - startedAt,
          })
          if (correct) setScore((s) => s + 1)
        }}
        onNext={() => {
          setStartedAt(Date.now())
          if (i + 1 >= questions.length) setDone(true)
          else setI((x) => x + 1)
        }}
      />
    </div>
  )
}
