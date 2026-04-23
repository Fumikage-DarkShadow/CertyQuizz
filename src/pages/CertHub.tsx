import { Link, useParams } from 'react-router-dom'
import { ExternalLink, Play, Repeat, TargetIcon, FileText, BookOpen, FolderOpen, Sparkles } from 'lucide-react'
import { CertLogo } from '@/components/CertLogo'
import { getCert } from '@/data/certifications'
import { questionsFor } from '@/data'
import { sheetsFor } from '@/data/course-sheets'
import { useProgress } from '@/store/progress'
import { ProgressBar } from '@/components/ui/ProgressBar'

export default function CertHub() {
  const { certId } = useParams()
  const cert = getCert(certId || '')
  const attemptsByDomain = useProgress((s) => s.attemptsByDomain)
  const failedIds = useProgress((s) => s.failedQuestionIds)
  const readiness = useProgress((s) => s.readiness)

  if (!cert) return <div>Certification inconnue.</div>

  const byDomain = attemptsByDomain(cert.id)
  const failed = failedIds(cert.id)
  const sheets = sheetsFor(cert.id)

  return (
    <div className="space-y-6">
      <header className="card flex flex-col md:flex-row md:items-center gap-4">
        <CertLogo cert={cert} size={64} />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{cert.name}</h1>
          <p className="text-muted">{cert.tagline}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="badge">Langue : {cert.language}</span>
            <span className="badge">{cert.examQuestions} questions / {cert.examMinutes} min</span>
            <span className="badge">Seuil : {cert.passingScore}</span>
          </div>
        </div>
        <div className="md:w-48">
          <div className="text-xs text-muted mb-1">Readiness</div>
          <div className="text-2xl font-bold tabular-nums">{readiness(cert.id)}%</div>
          <ProgressBar value={readiness(cert.id)} color="rgb(34 197 94)" className="mt-1" />
        </div>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Link to={`/cert/${cert.id}/train`} className="card hover:shadow-md">
          <Play className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Entraînement libre</div>
          <div className="text-xs text-muted">Session courte : 5, 10 ou 20 questions au choix.</div>
        </Link>
        <Link to={`/cert/${cert.id}/exam`} className="card hover:shadow-md">
          <TargetIcon className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Examen blanc</div>
          <div className="text-xs text-muted">
            Chrono + conditions réelles + bilan.
          </div>
        </Link>
        <Link
          to={`/cert/${cert.id}/review`}
          className={`card hover:shadow-md ${failed.length === 0 ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <Repeat className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Révision ciblée</div>
          <div className="text-xs text-muted">
            {failed.length > 0 ? `${failed.length} question(s) à retravailler.` : 'Aucune erreur pour le moment.'}
          </div>
        </Link>
        <Link to={`/flashcards?cert=${cert.id}`} className="card hover:shadow-md">
          <BookOpen className="h-5 w-5 text-[rgb(var(--primary))]" />
          <div className="mt-2 font-semibold">Flashcards</div>
          <div className="text-xs text-muted">Acronymes & concepts clés.</div>
        </Link>
      </section>

      <section className="card">
        <h2 className="font-semibold mb-3">Domaines</h2>
        <div className="space-y-3">
          {cert.domains.map((d) => {
            const stat = byDomain[d.id] || { correct: 0, total: 0 }
            const qs = questionsFor(cert.id, d.id)
            const pct = stat.total === 0 ? 0 : Math.round((stat.correct / stat.total) * 100)
            return (
              <div key={d.id} className="rounded-xl border border-[rgb(var(--border))] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">
                      {d.label} {d.weight !== undefined && <span className="text-muted text-xs">· {d.weight}%</span>}
                    </div>
                    {d.description && <div className="text-xs text-muted mt-0.5">{d.description}</div>}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/cert/${cert.id}/train?domain=${d.id}`}
                      className="btn-outline text-xs"
                    >
                      Quiz ({qs.length})
                    </Link>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <ProgressBar value={pct} className="flex-1" />
                  <span className="text-xs tabular-nums w-16 text-right">
                    {stat.correct}/{stat.total}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {cert.extraResources && cert.extraResources.length > 0 && (
        <section
          className="rounded-2xl border-2 p-5"
          style={{
            borderColor: cert.hexColor + '66',
            background: cert.hexColor + '0F',
          }}
        >
          <div className="flex items-start gap-3">
            <span
              className="h-10 w-10 rounded-xl flex items-center justify-center text-white shrink-0"
              style={{ background: cert.hexColor }}
            >
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Ressources complémentaires</h2>
              <p className="text-xs text-muted mt-0.5">
                Dossiers partagés pour approfondir le programme officiel.
              </p>
              <ul className="mt-3 space-y-2">
                {cert.extraResources.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-medium hover:underline"
                      style={{ color: cert.hexColor }}
                    >
                      <FolderOpen className="h-4 w-4 shrink-0" />
                      {r.label}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-60" />
                    </a>
                    {r.description && (
                      <div className="text-xs text-muted ml-6 mt-0.5">{r.description}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {sheets.length > 0 && (
        <section className="card">
          <h2 className="font-semibold mb-3">Fiches de cours</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {sheets.map((s) => (
              <Link
                key={s.id}
                to={`/cert/${cert.id}/sheet/${s.id}`}
                className="rounded-xl border border-[rgb(var(--border))] p-3 hover:bg-[rgb(var(--card))]"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[rgb(var(--primary))]" />
                  <span className="font-medium">{s.title}</span>
                </div>
                <div className="text-xs text-muted mt-1">{s.readMinutes} min de lecture</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="card">
        <h2 className="font-semibold mb-3">Ressources officielles</h2>
        <ul className="space-y-2">
          {cert.resources.map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[rgb(var(--primary))] hover:underline break-all"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
