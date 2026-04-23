import { Link } from 'react-router-dom'
import { Lock, CheckCircle2, Circle } from 'lucide-react'
import { CERTIFICATIONS } from '@/data/certifications'
import { useProgress } from '@/store/progress'
import { questionsFor } from '@/data'

/**
 * Chaque domaine est une "étape". Débloquée quand une étape est >60% d'accuracy
 * avec au moins 3 tentatives, ou les étapes suivantes apparaissent grisées.
 */
export default function Roadmap() {
  const attemptsByDomain = useProgress((s) => s.attemptsByDomain)
  const onboarded = useProgress((s) => s.onboarded)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Roadmap</h1>
        <p className="text-muted text-sm">
          Valide chaque domaine à ≥60% de précision (3+ tentatives) pour débloquer le suivant. L'examen blanc se débloque quand toutes les étapes sont validées.
        </p>
      </div>

      {!onboarded && (
        <Link to="/onboarding" className="card block border-indigo-500/40 bg-indigo-500/5">
          <div className="font-semibold">Étape 0 : Quiz de positionnement</div>
          <div className="text-sm text-muted">10 questions pour situer ton niveau.</div>
        </Link>
      )}

      {CERTIFICATIONS.map((c) => {
        const byDomain = attemptsByDomain(c.id)
        let prevValidated = true
        return (
          <section key={c.id} className="card">
            <h2 className="font-semibold text-lg mb-4">{c.shortName}</h2>
            <ol className="relative border-l-2 border-[rgb(var(--border))] ml-3 space-y-4">
              {c.domains.map((d, idx) => {
                const s = byDomain[d.id] || { correct: 0, total: 0 }
                const pct = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100)
                const validated = s.total >= 3 && pct >= 60
                const unlocked = idx === 0 || prevValidated
                const nbQ = questionsFor(c.id, d.id).length
                const state = validated ? 'done' : unlocked ? 'open' : 'locked'
                prevValidated = validated
                return (
                  <li key={d.id} className="ml-4">
                    <span
                      className={`absolute -left-[10px] h-5 w-5 rounded-full border-2 border-[rgb(var(--bg))] ${
                        state === 'done' ? 'bg-green-500' : state === 'open' ? 'bg-[rgb(var(--primary))]' : 'bg-[rgb(var(--border))]'
                      }`}
                    />
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {state === 'done' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : state === 'locked' ? (
                        <Lock className="h-4 w-4 text-muted" />
                      ) : (
                        <Circle className="h-4 w-4 text-[rgb(var(--primary))]" />
                      )}
                      <span>{d.label}</span>
                      {d.weight !== undefined && (
                        <span className="text-xs text-muted">· {d.weight}%</span>
                      )}
                    </div>
                    <div className="text-xs text-muted mt-1">
                      {s.correct}/{s.total} correctes · {pct}% · {nbQ} questions disponibles
                    </div>
                    {state !== 'locked' && (
                      <Link
                        to={`/cert/${c.id}/train?domain=${d.id}`}
                        className="btn-outline text-xs mt-2 inline-flex"
                      >
                        {state === 'done' ? 'Revoir' : 'Travailler'}
                      </Link>
                    )}
                  </li>
                )
              })}
              <li className="ml-4">
                <span
                  className={`absolute -left-[10px] h-5 w-5 rounded-full border-2 border-[rgb(var(--bg))] ${
                    prevValidated ? 'bg-green-500' : 'bg-[rgb(var(--border))]'
                  }`}
                />
                <div className="flex items-center gap-2 text-sm font-medium">
                  {prevValidated ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Lock className="h-4 w-4 text-muted" />
                  )}
                  <span>Examen blanc</span>
                </div>
                <div className="text-xs text-muted mt-1">
                  {prevValidated ? 'Débloqué. Tente le passage en conditions réelles.' : 'Verrouillé tant que les domaines ne sont pas validés.'}
                </div>
                {prevValidated && (
                  <Link to={`/cert/${c.id}/exam`} className="btn-primary text-xs mt-2 inline-flex">
                    Lancer l'examen blanc
                  </Link>
                )}
              </li>
            </ol>
          </section>
        )
      })}
    </div>
  )
}
