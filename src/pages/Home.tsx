import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Play, Repeat, Sparkles } from 'lucide-react'
import { CERTIFICATIONS } from '@/data/certifications'
import { useProgress } from '@/store/progress'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { CertLogo } from '@/components/CertLogo'

export default function Home() {
  const onboarded = useProgress((s) => s.onboarded)
  const streak = useProgress((s) => s.streak.current)
  const badges = useProgress((s) => s.badges)
  const accuracy = useProgress((s) => s.accuracy)
  const readiness = useProgress((s) => s.readiness)
  const totalAttempts = useProgress((s) => s.attempts.length)

  return (
    <div className="space-y-8">
      {!onboarded && (
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-gradient-to-br from-indigo-500/10 to-sky-500/10 border-indigo-500/30"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Bienvenue 👋</h1>
              <p className="text-muted mt-1">
                Fais un petit quiz de positionnement (10 questions) pour qu'on situe ton niveau et
                t'oriente vers la bonne certification.
              </p>
            </div>
            <Link to="/onboarding" className="btn-primary whitespace-nowrap">
              <Sparkles className="h-4 w-4" /> Démarrer le positionnement
            </Link>
          </div>
        </motion.section>
      )}

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Tes certifications</h2>
          <Link to="/certifications" className="text-sm text-muted hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c) => {
            const acc = accuracy(c.id)
            const ready = readiness(c.id)
            const color = `rgb(var(--primary))`
            return (
              <motion.div
                key={c.id}
                whileHover={{ y: -2 }}
                className="card hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <CertLogo cert={c} size={40} />
                  <div className="flex-1">
                    <h3 className="font-semibold">{c.shortName}</h3>
                    <p className="text-xs text-muted line-clamp-2">{c.tagline}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted">Précision</span>
                    <span className="font-semibold tabular-nums">
                      {acc.correct}/{acc.total} ({acc.pct}%)
                    </span>
                  </div>
                  <ProgressBar value={acc.pct} color={color} />
                  <div className="flex justify-between text-xs mt-3">
                    <span className="text-muted">Readiness examen</span>
                    <span className="font-semibold tabular-nums">{ready}%</span>
                  </div>
                  <ProgressBar value={ready} color="rgb(34 197 94)" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link to={`/cert/${c.id}/train`} className="btn-primary text-xs">
                    <Play className="h-3.5 w-3.5" /> Session
                  </Link>
                  <Link to={`/cert/${c.id}`} className="btn-outline text-xs">
                    Hub
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <div className="text-muted text-xs uppercase tracking-wider">Streak</div>
          <div className="text-3xl font-bold mt-1">🔥 {streak}</div>
          <div className="text-xs text-muted mt-1">
            jours consécutifs. Reviens chaque jour pour l'entretenir.
          </div>
        </div>
        <div className="card">
          <div className="text-muted text-xs uppercase tracking-wider">Questions tentées</div>
          <div className="text-3xl font-bold mt-1 tabular-nums">{totalAttempts}</div>
          <Link to="/stats" className="text-xs text-[rgb(var(--primary))] hover:underline mt-1 inline-block">
            Voir les statistiques →
          </Link>
        </div>
        <div className="card">
          <div className="text-muted text-xs uppercase tracking-wider">Badges</div>
          <div className="text-3xl font-bold mt-1">🏅 {badges.length}</div>
          <div className="text-xs text-muted mt-1">Débloque-les à 10, 50, 100 et 500 questions.</div>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-3">
        <Link to="/flashcards" className="card hover:shadow-md transition-shadow">
          <Repeat className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Flashcards</div>
          <div className="text-xs text-muted">Acronymes & définitions clés.</div>
        </Link>
        <Link to="/definitions" className="card hover:shadow-md transition-shadow">
          <BookOpen className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Définitions</div>
          <div className="text-xs text-muted">CIA, SIEM, KQL, PACS, SR/OV…</div>
        </Link>
        <Link to="/roadmap" className="card hover:shadow-md transition-shadow">
          <Sparkles className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Roadmap</div>
          <div className="text-xs text-muted">Débloque les étapes une à une.</div>
        </Link>
        <Link to="/stats" className="card hover:shadow-md transition-shadow">
          <Play className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Mes stats</div>
          <div className="text-xs text-muted">Progression par domaine.</div>
        </Link>
      </section>
    </div>
  )
}
