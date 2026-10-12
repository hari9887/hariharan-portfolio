import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function ProjectArt({ type }) {
  if (type === 'slides') {
    return (
      <div className="relative h-full">
        <div className="absolute left-6 top-6 h-24 w-40 rounded-xl border border-white/30 bg-white/10" />
        <div className="absolute left-10 top-10 h-24 w-40 rounded-xl border border-cyan-200/50 bg-cyan-400/20" />
        <div className="absolute left-14 top-14 flex h-24 w-40 flex-col justify-end rounded-xl border border-white/40 bg-slate-950/50 p-3">
          <span className="h-2 w-16 rounded-full bg-cyan-300" />
          <span className="mt-2 h-2 w-24 rounded-full bg-white/50" />
        </div>
      </div>
    )
  }

  if (type === 'factory') {
    return (
      <div className="grid h-full grid-cols-4 gap-2 p-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className={`rounded-lg border border-white/20 ${index % 3 === 0 ? 'bg-cyan-400/50' : 'bg-white/10'}`}
          />
        ))}
      </div>
    )
  }

  if (type === 'script') {
    return (
      <div className="flex h-full flex-col justify-center gap-3 px-6">
        <div className="h-px bg-white/40" />
        <div className="ml-8 h-12 w-28 rounded-md border border-dashed border-rose-300/80 bg-rose-400/20" />
        <div className="h-px bg-white/40" />
        <div className="ml-16 h-8 w-20 rounded-md border border-cyan-200/60 bg-cyan-300/20" />
      </div>
    )
  }

  if (type === 'farm') {
    return (
      <div className="relative h-full">
        <div className="absolute inset-x-8 bottom-6 h-16 rounded-full bg-emerald-400/30" />
        <div className="absolute left-10 top-8 h-3 w-3 rounded-full bg-lime-200 shadow-glow" />
        <div className="absolute left-24 top-16 h-3 w-3 rounded-full bg-cyan-200 shadow-glow" />
        <div className="absolute right-12 top-12 h-3 w-3 rounded-full bg-amber-200" />
      </div>
    )
  }

  return (
    <div className="space-y-2 p-5">
      {['w-full', 'w-10/12', 'w-8/12', 'w-11/12'].map((width) => (
        <div key={width} className="flex items-center gap-2">
          <span className={`h-3 ${width} rounded-full bg-white/25`} />
          <span className="h-3 w-3 rounded-full bg-rose-400" />
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id)

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">03 — Projects</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="section-title max-w-2xl">
              Work that has to look right and hold together.
            </h2>
            <p className="max-w-sm text-sm text-slate-600 dark:text-slate-300">
              Four product showcases plus the patented agriculture system. Demos are shared directly — write from the
              contact section and name the project.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const open = activeId === project.id
            return (
              <Reveal key={project.id} delay={(index % 2) * 0.06} className={index === 0 ? 'md:col-span-2' : ''}>
                <article
                  className={`group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-pastel backdrop-blur-md transition duration-300 hover:bg-white dark:border-white/10 dark:bg-neon-navy/75 dark:shadow-none dark:hover:bg-white/[0.04] ${
                    index === 0 ? 'md:grid md:grid-cols-[1.1fr_0.9fr]' : ''
                  }`}
                >
                  <div className="relative h-44 bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950 dark:from-neon-void dark:via-neon-navy dark:to-purple-950 md:h-full md:min-h-48">
                    <ProjectArt type={project.art} />
                    <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur-md">
                      {project.index}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-pastel-lavender px-3 py-1 text-xs font-semibold text-indigo-950 dark:bg-white/10 dark:text-cyan-100"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {open && (
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-neon-cyan" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setActiveId(open ? '' : project.id)}
                        className="btn-secondary"
                        aria-expanded={open}
                      >
                        {open ? 'Hide details' : 'View details'}
                      </button>
                      <a href={`#contact`} className="btn-primary">
                        {project.outcome}
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
