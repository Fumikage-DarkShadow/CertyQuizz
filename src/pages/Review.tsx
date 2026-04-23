import { useMemo, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getCert } from '@/data/certifications'
import { questionById } from '@/data'
import { useProgress } from '@/store/progress'
import { QuizCard } from '@/components/QuizCard'
import { ProgressBar } from '@/components/ui/ProgressBar'

export default function Review() {
  const { certId } = useParams()
  const navigate = useNavigate()
  const cert = getCert(certId || '')
  const failedIds = useProgress((s) => s.failedQuestionIds)
  const record = useProgress((s) => s.recordAttempt)

  const ids = cert ? failedIds(cert.id) : []
  const questions = useMemo(
    () => ids.map((id) => questionById(id)).filter(Boolean) as NonNullable<ReturnType<typeof questionById>>[],
    [ids.join(',')]
  )

  const [i, setI] = useState(0)

  if (!cert) return null

  if (questions.length === 0) {
    return (
      <div className="card text-center space-y-3">
        <h1 className="text-xl font-bold">Pas d'erreurs à retravailler 🎉</h1>
        <p className="text-muted">
          Tu n'as pas encore d'erreurs enregistrées pour cette certification. Lance un entraînement pour constituer ta liste.
        </p>
        <Link to={`/cert/${cert.id}`} className="btn-primary inline-flex">Retour au hub</Link>
      </div>
    )
  }

  if (i >= questions.length) {
    return (
      <div className="card text-center space-y-3">
        <h1 className="text-xl font-bold">Révision terminée</h1>
        <Link to={`/cert/${cert.id}`} className="btn-primary inline-flex">Retour au hub</Link>
      </div>
    )
  }

  const q = questions[i]

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-[rgb(var(--fg))]"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </button>
        <span className="text-xs text-muted">Révision ciblée · {cert.shortName}</span>
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
            ms: 0,
          })
        }}
        onNext={() => setI((x) => x + 1)}
      />
    </div>
  )
}
