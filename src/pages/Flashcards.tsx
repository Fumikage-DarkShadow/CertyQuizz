import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCcw, ArrowLeft, ArrowRight } from 'lucide-react'
import { FLASHCARDS } from '@/data/flashcards'
import { CERTIFICATIONS } from '@/data/certifications'
import type { CertId } from '@/types'

export default function Flashcards() {
  const [params, setParams] = useSearchParams()
  const certId = (params.get('cert') as CertId | null) || 'security-plus'
  const cards = useMemo(() => FLASHCARDS.filter((f) => f.certId === certId), [certId])
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const c = cards[i]

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Flashcards</h1>
        <p className="text-muted text-sm">Clique sur la carte pour voir la réponse.</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {CERTIFICATIONS.map((cert) => (
          <button
            key={cert.id}
            onClick={() => {
              setParams({ cert: cert.id })
              setI(0)
              setFlipped(false)
            }}
            className={`btn text-xs ${certId === cert.id ? 'btn-primary' : 'btn-outline'}`}
          >
            {cert.shortName}
          </button>
        ))}
      </div>

      {cards.length === 0 ? (
        <div className="card">Aucune flashcard pour cette certification.</div>
      ) : (
        <>
          <AnimatePresence mode="wait">
            <motion.button
              key={c.id + String(flipped)}
              onClick={() => setFlipped((v) => !v)}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full card min-h-[220px] text-left flex flex-col justify-center"
            >
              <div className="text-xs uppercase tracking-wider text-muted mb-2">
                {flipped ? 'Réponse' : 'Question'} · {i + 1}/{cards.length}
              </div>
              <div className="text-lg font-semibold leading-relaxed">
                {flipped ? c.back : c.front}
              </div>
              <div className="mt-4 text-xs text-muted">Clique pour {flipped ? 'revenir' : 'retourner'}.</div>
            </motion.button>
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setI((x) => (x - 1 + cards.length) % cards.length)
                setFlipped(false)
              }}
              className="btn-outline"
            >
              <ArrowLeft className="h-4 w-4" /> Précédente
            </button>
            <button
              onClick={() => setFlipped((v) => !v)}
              className="btn-ghost"
              aria-label="Retourner"
            >
              <RefreshCcw className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                setI((x) => (x + 1) % cards.length)
                setFlipped(false)
              }}
              className="btn-outline"
            >
              Suivante <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
