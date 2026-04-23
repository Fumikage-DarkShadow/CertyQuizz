import { Link } from 'react-router-dom'
import { CERTIFICATIONS } from '@/data/certifications'
import { useProgress } from '@/store/progress'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { CertLogo } from '@/components/CertLogo'

export default function Certifications() {
  const accuracy = useProgress((s) => s.accuracy)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Certifications</h1>
        <p className="text-muted">Choisis ta certification pour accéder au hub, aux modes d'entraînement et aux fiches.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((c) => {
          const acc = accuracy(c.id)
          return (
            <Link key={c.id} to={`/cert/${c.id}`} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <CertLogo cert={c} size={40} />
                <div>
                  <div className="font-semibold">{c.shortName}</div>
                  <div className="text-xs text-muted">{c.language} · {c.examMinutes} min · {c.passingScore}</div>
                </div>
              </div>
              <p className="text-sm text-muted mt-3">{c.tagline}</p>
              <div className="mt-3">
                <ProgressBar value={acc.pct} />
                <div className="text-xs text-muted mt-1 tabular-nums">
                  {acc.total} questions tentées
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
