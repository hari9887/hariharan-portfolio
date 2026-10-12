import { navLinks, profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 pb-28 pt-10 dark:border-white/10 lg:pb-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="min-h-12 py-3 hover:text-teal-700 dark:hover:text-neon-cyan">
              {link.label}
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="min-h-12 py-3 hover:text-teal-700 dark:hover:text-neon-cyan"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="section-shell mt-8 text-xs text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind.
      </div>
    </footer>
  )
}
