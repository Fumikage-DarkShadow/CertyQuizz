import { Popover } from './ui/Popover'
import { findGlossary } from '@/data/glossary'

interface Props {
  text: string
}

/**
 * Detects known acronyms and wraps them with a Popover definition.
 * Works on plain text (no markdown). For short explanations only.
 */
export function GlossaryText({ text }: Props) {
  const parts = text.split(/(\s+|[()\[\],.!?;:"'«»])/g)
  return (
    <>
      {parts.map((p, i) => {
        const g = findGlossary(p.trim())
        if (g) {
          return (
            <Popover
              key={i}
              trigger={<span>{p}</span>}
            >
              <strong>{g.term}</strong> : {g.definition}
            </Popover>
          )
        }
        return <span key={i}>{p}</span>
      })}
    </>
  )
}
