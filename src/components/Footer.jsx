import { navLinks, profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70 pt-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
      <p className="font-display text-lg font-medium tracking-[-0.03em] text-slate-800 dark:text-slate-100">
        Thanks for scrolling.
      </p>
      <p className="mt-2 font-medium text-slate-700 dark:text-slate-200">{profile.name}</p>
      <p className="mt-1">{profile.role}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="min-h-12 py-3">
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-6 text-xs">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
