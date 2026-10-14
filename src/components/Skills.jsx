import { skillGroups } from '../data/portfolioData.js'
import PullCard from './PullCard.jsx'

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="section-title">Skills from the resume</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
        These groups follow the resume headings: languages, mobile, frontend, backend, databases, and the tools used
        to ship the work.
      </p>
      <div className="mt-6 space-y-4">
        {skillGroups.map((group, index) => (
          <PullCard key={group.title} index={index}>
            <article className="paper">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-sky-100/80 px-3 py-1.5 text-[13px] font-medium text-sky-950 dark:bg-white/10 dark:text-sky-50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </PullCard>
        ))}
      </div>
    </section>
  )
}
