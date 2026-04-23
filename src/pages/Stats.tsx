import { useProgress } from '@/store/progress'
import { CERTIFICATIONS } from '@/data/certifications'
import { ProgressBar } from '@/components/ui/ProgressBar'

const BADGES_META: Record<string, { emoji: string; label: string }> = {
  'first-steps': { emoji: '🌱', label: 'Premiers pas (10 questions)' },
  'warrior-50': { emoji: '⚔️', label: 'Warrior (50 questions)' },
  'century': { emoji: '💯', label: 'Century (100 questions)' },
  'hall-500': { emoji: '🏆', label: 'Hall of fame (500 questions)' },
  'exam-passed': { emoji: '🎓', label: 'Premier examen blanc réussi' },
}

export default function Stats() {
  const attempts = useProgress((s) => s.attempts)
  const exams = useProgress((s) => s.exams)
  const streak = useProgress((s) => s.streak)
  const badges = useProgress((s) => s.badges)
  const reset = useProgress((s) => s.reset)
  const accuracy = useProgress((s) => s.accuracy)
  const attemptsByDomain = useProgress((s) => s.attemptsByDomain)

  const totals = accuracy()
  const avgMs =
    attempts.length === 0 ? 0 : Math.round(attempts.reduce((a, b) => a + b.ms, 0) / attempts.length)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tes statistiques</h1>

      <section className="grid sm:grid-cols-4 gap-3">
        <div className="card">
          <div className="text-xs text-muted uppercase">Questions tentées</div>
          <div className="text-3xl font-bold tabular-nums">{attempts.length}</div>
        </div>
        <div className="card">
          <div className="text-xs text-muted uppercase">Précision globale</div>
          <div className="text-3xl font-bold tabular-nums">{totals.pct}%</div>
        </div>
        <div className="card">
          <div className="text-xs text-muted uppercase">Temps moyen / Q</div>
          <div className="text-3xl font-bold tabular-nums">
            {avgMs > 0 ? `${Math.round(avgMs / 100) / 10}s` : '…'}
          </div>
        </div>
        <div className="card">
          <div className="text-xs text-muted uppercase">Streak</div>
          <div className="text-3xl font-bold tabular-nums">
            🔥 {streak.current} <span className="text-sm text-muted">/ max {streak.longest}</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-semibold mb-3">Progression par certification</h2>
        <div className="space-y-3">
          {CERTIFICATIONS.map((c) => {
            const acc = accuracy(c.id)
            const byDomain = attemptsByDomain(c.id)
            return (
              <div key={c.id} className="card">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">{c.shortName}</div>
                  <div className="text-xs tabular-nums">
                    {acc.correct}/{acc.total} ({acc.pct}%)
                  </div>
                </div>
                <ProgressBar value={acc.pct} className="mt-2" />
                <div className="mt-4 grid sm:grid-cols-2 gap-2 text-xs">
                  {c.domains.map((d) => {
                    const s = byDomain[d.id] || { correct: 0, total: 0 }
                    const p = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100)
                    return (
                      <div key={d.id}>
                        <div className="flex justify-between">
                          <span className="truncate mr-2">{d.label}</span>
                          <span className="tabular-nums">{s.correct}/{s.total}</span>
                        </div>
                        <ProgressBar value={p} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="font-semibold mb-3">Badges</h2>
        {badges.length === 0 ? (
          <div className="card text-sm text-muted">
            Aucun badge pour l'instant. Commence à répondre à quelques questions pour débloquer tes premiers trophées !
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-3">
            {badges.map((b) => (
              <div key={b} className="card flex items-center gap-3">
                <span className="text-3xl">{BADGES_META[b]?.emoji || '🏅'}</span>
                <span className="font-medium">{BADGES_META[b]?.label || b}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {exams.length > 0 && (
        <section>
          <h2 className="font-semibold mb-3">Historique des examens blancs</h2>
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-muted text-xs uppercase">
                  <th className="text-left py-2 pr-3">Date</th>
                  <th className="text-left py-2 pr-3">Certif</th>
                  <th className="text-right py-2 pr-3">Score</th>
                  <th className="text-right py-2">Statut</th>
                </tr>
              </thead>
              <tbody>
                {exams
                  .slice()
                  .reverse()
                  .map((e) => (
                    <tr key={e.id} className="border-t border-[rgb(var(--border))]">
                      <td className="py-2 pr-3">
                        {new Date(e.startedAt).toLocaleString('fr-FR', {
                          dateStyle: 'short',
                          timeStyle: 'short',
                        })}
                      </td>
                      <td className="py-2 pr-3">
                        {CERTIFICATIONS.find((c) => c.id === e.certId)?.shortName}
                      </td>
                      <td className="py-2 pr-3 text-right tabular-nums">{e.score}%</td>
                      <td className="py-2 text-right">
                        {e.passed ? (
                          <span className="text-green-500 font-semibold">✔ Réussi</span>
                        ) : (
                          <span className="text-red-500 font-semibold">✘ Échoué</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="card">
        <h2 className="font-semibold mb-2">Zone de danger</h2>
        <p className="text-sm text-muted mb-3">
          Réinitialiser ta progression efface toutes les tentatives, examens, badges et streaks. L'action est irréversible.
        </p>
        <button
          onClick={() => {
            if (confirm('Confirmer la réinitialisation complète de la progression ?')) reset()
          }}
          className="btn-outline border-red-500/50 text-red-500 hover:bg-red-500/10"
        >
          Réinitialiser
        </button>
      </section>
    </div>
  )
}
