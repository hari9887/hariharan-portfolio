import { skillGroups } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

const toneClass = {
  lavender: 'bg-pastel-lavender text-indigo-950 dark:bg-neon-purple/15 dark:text-fuchsia-100',
  teal: 'bg-pastel-teal text-teal-950 dark:bg-neon-cyan/15 dark:text-cyan-100',
  slate: 'bg-slate-200/80 text-slate-900 dark:bg-white/10 dark:text-slate-100',
  neon: 'bg-indigo-100 text-indigo-950 dark:bg-neon-purple/20 dark:text-purple-100',
  crimson: 'bg-rose-100 text-rose-950 dark:bg-neon-crimson/15 dark:text-rose-100',
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">02 — Skills</p>
          <h2 className="section-title mt-3 max-w-2xl">
            A stack that runs from the pixel to the procedure.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Frontend systems in React and Angular, mobile in React Native, APIs in Node and Spring Boot, and data work
            in PostgreSQL — plus Gemini and Apps Script when the workflow should generate or standardize itself.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className={index < 2 ? 'xl:col-span-3' : 'xl:col-span-2'}
            >
              <article className="glass-card h-full p-6">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full px-3 py-2 text-sm font-medium ${toneClass[group.tone]}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
