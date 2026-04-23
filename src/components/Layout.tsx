import { Link, NavLink, Outlet } from 'react-router-dom'
import { Flame, Home, Library, LineChart, BookOpen, Sparkles, Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useProgress } from '@/store/progress'
import { cn } from '@/lib/cn'

const NAV = [
  { to: '/', label: 'Accueil', icon: Home },
  { to: '/certifications', label: 'Certifs', icon: Library },
  { to: '/stats', label: 'Stats', icon: LineChart },
  { to: '/definitions', label: 'Définitions', icon: BookOpen },
  { to: '/roadmap', label: 'Roadmap', icon: Sparkles },
]

export function Layout() {
  const { theme, setTheme } = useTheme()
  const streak = useProgress((s) => s.streak.current)

  const ThemeIcon = theme === 'dark' ? Moon : theme === 'light' ? Sun : Monitor
  const cycleTheme = () =>
    setTheme(theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system')

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src="/favicon.svg" alt="" className="h-8 w-8" aria-hidden />
            <span className="text-base bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              CertyQuiz
            </span>
          </Link>
          <nav className="ml-auto hidden md:flex items-center gap-1">
            {NAV.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  cn(
                    'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--card))]',
                    isActive && 'text-[rgb(var(--fg))] bg-[rgb(var(--card))]'
                  )
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {streak > 0 && (
              <span className="badge" title={`Streak de ${streak} jour${streak > 1 ? 's' : ''}`}>
                <Flame className="h-3.5 w-3.5 text-orange-500" />
                {streak}
              </span>
            )}
            <button
              onClick={cycleTheme}
              className="btn-ghost p-2"
              aria-label={`Thème : ${theme}`}
              title={`Thème : ${theme}`}
            >
              <ThemeIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6 pb-24 md:pb-6">
        <Outlet />
      </main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]/95 backdrop-blur">
        <div className="grid grid-cols-5">
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-0.5 py-2 text-[11px] text-muted',
                  isActive && 'text-[rgb(var(--primary))]'
                )
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      <footer className="hidden md:block border-t border-[rgb(var(--border))] py-4 text-center text-xs text-muted">
        CertyQuiz · Security+ · EBIOS RM · SC 200
      </footer>
    </div>
  )
}
