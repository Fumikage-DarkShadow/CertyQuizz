import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import type { Certification } from '@/types'

interface Props {
  cert: Certification
  size?: number
  /** true pour afficher un badge avec fond blanc et bordure colorée (logo officiel bien visible). */
  framed?: boolean
}

/**
 * Affiche le logo officiel d'une certif. Tombe en fallback sur un carré coloré
 * aux initiales de la certif si le fichier image est absent ou en erreur.
 */
export function CertLogo({ cert, size = 40, framed = true }: Props) {
  const [failed, setFailed] = useState(false)
  const hasLogo = !!cert.logoPath && !failed

  const radius = Math.max(8, Math.round(size / 4))

  if (hasLogo) {
    return (
      <div
        className="shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          background: framed ? 'white' : 'transparent',
          border: framed ? `2px solid ${cert.hexColor}` : 'none',
        }}
      >
        <img
          src={cert.logoPath}
          alt={cert.shortName}
          loading="lazy"
          className="h-full w-full object-contain p-0.5"
          onError={() => setFailed(true)}
        />
      </div>
    )
  }

  // Fallback : carré coloré avec initiales ou bouclier
  const initials = cert.shortName.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase()
  return (
    <div
      className="shrink-0 flex items-center justify-center text-white font-bold"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: cert.hexColor,
        fontSize: Math.max(10, Math.round(size / 4)),
      }}
      aria-label={cert.shortName}
    >
      {initials.length > 0 ? (
        initials
      ) : (
        <ShieldCheck style={{ width: size * 0.5, height: size * 0.5 }} />
      )}
    </div>
  )
}
