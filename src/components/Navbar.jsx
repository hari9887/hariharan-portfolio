import { navLinks, profile } from '../data/portfolioData.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import ThemeToggle from './ThemeToggle.jsx'

const dock = [
  { href: '#home', label: 'Home', match: ['home'] },
  { href: '#work', label: 'Work', match: ['skills', 'work'] },
  { href: '#projects', label: 'Build', match: ['projects'] },
  { href: '#contact', label: 'Mail', match: ['contact'] },
]

export default function Navbar() {
  const active = useActiveSection()

  return (
    <>
      <header className="sticky top-0 z-40">
        <div className="page flex items-center justify-between rounded-b-2xl border-b border-white/40 bg-white/30 py-2 backdrop-blur-xl dark:border-white/5 dark:bg-[#071018]/40">
          <a href="#home" className="min-h-12 py-3 text-[15px] font-semibold tracking-[-0.03em]">
            {profile.shortName}
          </a>
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = active === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`min-h-12 rounded-full px-3 py-3 text-[12px] font-medium transition ${
                    isActive
                      ? 'bg-white/80 text-[#1b2430] shadow-sm dark:bg-white/10 dark:text-white'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <nav
        className="fixed bottom-3 left-1/2 z-40 grid w-[min(calc(100%-1.5rem),26.5rem)] -translate-x-1/2 grid-cols-4 gap-1 rounded-2xl border border-white/70 bg-white/[0.88] p-1 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgb(16_24_39/0.92)]"
        aria-label="Section shortcuts"
      >
        {dock.map((link) => {
          const isActive = link.match.includes(active)
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex min-h-12 items-center justify-center rounded-xl text-[11px] font-semibold uppercase tracking-wide transition ${
                isActive
                  ? 'bg-[#1b2430] text-white dark:bg-white dark:text-[#071018]'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </nav>
    </>
  )
}
