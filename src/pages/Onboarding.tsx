import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { positioningQuestions } from '@/data'
import { QuizCard } from '@/components/QuizCard'
import { useProgress } from '@/store/progress'
import { ProgressBar } from '@/components/ui/ProgressBar'

export default function Onboarding() {
  const questions = useMemo(() => positioningQuestions(), [])
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const setOnboarded = useProgress((s) => s.setOnboarded)
  const record = useProgress((s) => s.recordAttempt)
  const navigate = useNavigate()

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const verdict =
      pct < 40
        ? 'Débutant : on démarre avec les fiches et les domaines à plus faible pondération.'
        : pct < 70
          ? 'Intermédiaire : tu as une bonne base. Focus sur les modes entraînement par domaine.'
          : 'Avancé : direction examen blanc pour finaliser ta préparation.'
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card max-w-xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold">Positionnement terminé</h1>
        <div className="text-5xl font-bold tabular-nums">{pct}%</div>
        <ProgressBar value={pct} />
        <p className="text-muted">{verdict}</p>
        <button
          className="btn-primary"
          onClick={() => {
            setOnboarded(pct)
            navigate('/')
          }}
        >
          Continuer
        </button>
      </motion.div>
    )
  }

  const q = questions[i]

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Quiz de positionnement</h1>
        <p className="text-muted text-sm">10 questions pour situer ton niveau. Pas de stress, c'est pour t'aider à choisir par où commencer.</p>
      </div>
      <ProgressBar value={((i + 1) / questions.length) * 100} />
      <QuizCard
        question={q}
        index={i}
        total={questions.length}
        onValidated={(correct) => {
          record({
            qid: q.id,
            certId: q.certId,
            domainId: q.domainId,
            correct,
            ms: 0,
          })
          if (correct) setScore((s) => s + 1)
        }}
        onNext={() => {
          if (i + 1 >= questions.length) setDone(true)
          else setI((x) => x + 1)
        }}
      />
    </div>
  )
}
