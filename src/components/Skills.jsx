import { skillGroups } from '../data/portfolioData.js'
import PullCard from './PullCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="pt-2">
      <SectionHeading
        eyebrow="Stack"
        title="Skills from the resume"
        description="Grouped the same way the resume lists them: languages through delivery tools."
      />
      <div className="space-y-1">
        {skillGroups.map((group, index) => (
          <PullCard key={group.title} index={index}>
            <article className="paper paper-hover">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="skill-chip">
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
