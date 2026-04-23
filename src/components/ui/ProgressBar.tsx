import { cn } from '@/lib/cn'

interface Props {
  value: number
  max?: number
  className?: string
  color?: string
  showLabel?: boolean
}

export function ProgressBar({ value, max = 100, className, color = 'rgb(var(--primary))', showLabel }: Props) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={cn('w-full', className)}>
      <div className="h-2.5 rounded-full bg-[rgb(var(--border))] overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-muted tabular-nums">{Math.round(pct)} %</div>
      )}
    </div>
  )
}
