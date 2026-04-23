import React from 'react'

/**
 * Lightweight inline renderer : **bold**, `code`, and line breaks.
 * Removes literal asterisks in output and renders real <strong>.
 */
export function InlineFormat({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {renderLine(line)}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  )
}

function renderLine(text: string) {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return tokens.map((t, i) => {
    if (t.startsWith('**') && t.endsWith('**')) {
      return <strong key={i}>{t.slice(2, -2)}</strong>
    }
    if (t.startsWith('`') && t.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded bg-[rgb(var(--card))] text-[0.9em] font-mono"
        >
          {t.slice(1, -1)}
        </code>
      )
    }
    return <React.Fragment key={i}>{t}</React.Fragment>
  })
}
