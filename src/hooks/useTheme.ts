import { useEffect } from 'react'
import { useProgress } from '@/store/progress'

export function useTheme() {
  const theme = useProgress((s) => s.settings.theme)
  const setTheme = useProgress((s) => s.setTheme)

  useEffect(() => {
    const root = document.documentElement
    const apply = (dark: boolean) => root.classList.toggle('dark', dark)
    if (theme === 'dark') apply(true)
    else if (theme === 'light') apply(false)
    else {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      apply(mql.matches)
      const h = (e: MediaQueryListEvent) => apply(e.matches)
      mql.addEventListener('change', h)
      return () => mql.removeEventListener('change', h)
    }
  }, [theme])

  return { theme, setTheme }
}
