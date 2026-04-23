import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Popover({ trigger, children, className }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        className="underline decoration-dotted decoration-[rgb(var(--primary))] underline-offset-4 hover:opacity-80"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {trigger}
      </button>
      {open && (
        <span
          role="tooltip"
          className={cn(
            'absolute z-50 bottom-full left-0 mb-2 w-64 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3 text-xs shadow-xl',
            className
          )}
        >
          {children}
        </span>
      )}
    </span>
  )
}
