import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, Play } from 'lucide-react'
import { COURSE_SHEETS } from '@/data/course-sheets'
import { getCert } from '@/data/certifications'
import { GlossaryText } from '@/components/GlossaryText'

/**
 * Minimal markdown-like renderer: bold (**x**), bullet lists (- x), code fences.
 */
function renderBody(text: string) {
  const blocks: React.ReactNode[] = []
  const lines = text.split('\n')
  let i = 0
  let key = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('```')) {
      const buf: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        buf.push(lines[i])
        i++
      }
      i++
      blocks.push(
        <pre
          key={key++}
          className="rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--border))] p-3 text-xs overflow-x-auto"
        >
          <code>{buf.join('\n')}</code>
        </pre>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      blocks.push(
        <ul key={key++} className="list-disc pl-5 space-y-1">
          {items.map((it, j) => (
            <li key={j}>{renderInline(it)}</li>
          ))}
        </ul>
      )
    } else if (line.trim() === '') {
      i++
    } else {
      blocks.push(
        <p key={key++} className="leading-relaxed">
          {renderInline(line)}
        </p>
      )
      i++
    }
  }
  return blocks
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return (
        <strong key={i}>
          <GlossaryText text={p.slice(2, -2)} />
        </strong>
      )
    }
    if (p.startsWith('`') && p.endsWith('`')) {
      return (
        <code key={i} className="px-1 py-0.5 rounded bg-[rgb(var(--card))] text-[0.9em]">
          {p.slice(1, -1)}
        </code>
      )
    }
    return <GlossaryText key={i} text={p} />
  })
}

export default function CourseSheet() {
  const { certId, sheetId } = useParams()
  const cert = getCert(certId || '')
  const sheet = COURSE_SHEETS.find((s) => s.id === sheetId)

  if (!cert || !sheet) return <div>Fiche introuvable.</div>
  const domain = cert.domains.find((d) => d.id === sheet.domainId)

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Link to={`/cert/${cert.id}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-[rgb(var(--fg))]">
        <ArrowLeft className="h-4 w-4" /> Retour au hub
      </Link>
      <article className="card space-y-4">
        <header className="space-y-1">
          <div className="text-xs text-muted">{cert.shortName} · {domain?.label}</div>
          <h1 className="text-2xl font-bold">{sheet.title}</h1>
          <div className="text-xs text-muted flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {sheet.readMinutes} min de lecture
          </div>
        </header>
        <div className="space-y-3 text-sm">{renderBody(sheet.body)}</div>
      </article>
      <Link to={`/cert/${cert.id}/train?domain=${sheet.domainId}`} className="btn-primary w-full">
        <Play className="h-4 w-4" /> Lancer un quiz sur ce domaine
      </Link>
    </div>
  )
}
