import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData.js'
import { useTheme } from '../context/ThemeContext.jsx'

const dockLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Path' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [touchStart, setTouchStart] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
          scrolled || open
            ? 'border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-neon-void/80'
            : 'bg-transparent'
        }`}
      >
        <div className="section-shell flex h-[4.5rem] items-center justify-between gap-3">
          <a href="#home" className="flex min-h-12 items-center gap-3" onClick={close}>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pastel-ink font-display text-sm font-semibold text-white dark:bg-gradient-to-br dark:from-neon-cyan dark:to-neon-purple dark:text-slate-950">
              {profile.initials}
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-sm font-semibold leading-tight">{profile.shortName}</span>
              <span className="block text-xs text-pastel-mute dark:text-slate-400">Frontend & Software</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-12 rounded-full px-3 py-3 text-[12px] font-medium uppercase tracking-[0.16em] text-slate-600 transition hover:text-pastel-ink dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white/80 text-pastel-ink transition hover:border-teal-400 dark:border-white/10 dark:bg-white/5 dark:text-neon-cyan dark:hover:shadow-glow"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Hire me
            </a>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white/80 lg:hidden dark:border-white/10 dark:bg-white/5"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={close}
      />

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open ? '' : undefined}
        className={`fixed inset-y-0 right-0 z-40 flex w-[min(100%,22rem)] flex-col gap-2 border-l border-slate-200 bg-canvas px-5 pb-28 pt-24 transition duration-300 lg:hidden dark:border-white/10 dark:bg-neon-void ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart == null) return
          const delta = event.changedTouches[0].clientX - touchStart
          if (delta > 64) close()
          setTouchStart(null)
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="flex min-h-12 items-center rounded-2xl px-4 text-lg font-semibold text-pastel-ink hover:bg-pastel-lavender dark:text-white dark:hover:bg-white/5"
          >
            {link.label}
          </a>
        ))}
        <a href={profile.resume} download={profile.resumeFileName} className="btn-secondary mt-4" onClick={close}>
          Download Resume
        </a>
      </nav>

      <nav
        className={`fixed inset-x-3 bottom-3 z-40 grid-cols-5 rounded-2xl border border-slate-200/80 bg-white/90 p-1 shadow-pastel backdrop-blur-md lg:hidden dark:border-white/10 dark:bg-neon-navy/90 dark:shadow-neon ${
          open ? 'hidden' : 'grid'
        }`}
        aria-label="Section shortcuts"
      >
        {dockLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex min-h-12 items-center justify-center rounded-xl text-[11px] font-semibold uppercase tracking-wide text-slate-600 active:bg-pastel-teal dark:text-slate-200 dark:active:bg-white/10"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}
