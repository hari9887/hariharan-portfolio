import { navLinks, profile } from '../data/portfolioData.js'
import ThemeToggle from './ThemeToggle.jsx'

const dock = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Build' },
  { href: '#contact', label: 'Mail' },
]

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/20 backdrop-blur-md dark:bg-[#071018]/30">
        <div className="page flex items-center justify-between py-2">
          <a href="#home" className="min-h-12 py-3 text-[15px] font-semibold tracking-[-0.03em]">
            {profile.shortName}
          </a>
          <nav className="hidden items-center gap-4 text-[12px] font-medium text-slate-600 dark:text-slate-300 sm:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="min-h-12 py-3">
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <nav
        className="fixed bottom-3 left-1/2 z-40 grid w-[min(calc(100%-1.5rem),26.5rem)] -translate-x-1/2 grid-cols-4 rounded-2xl border border-white/70 bg-white/85 p-1 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#101827]/90"
        aria-label="Section shortcuts"
      >
        {dock.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex min-h-12 items-center justify-center rounded-xl text-[11px] font-semibold uppercase tracking-wide"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}
