import { projects } from '../data/portfolioData.js'
import PullCard from './PullCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h2 className="section-title">Projects</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
        Only the two projects listed on the resume. The character above is pulling each card into place as you
        scroll.
      </p>
      <div className="mt-6 space-y-5">
        {projects.map((project, index) => (
          <PullCard key={project.title} index={index}>
            <article className="paper">
              <h3 className="text-lg font-semibold tracking-[-0.03em]">{project.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-300/80 px-3 py-1 text-[12px] font-medium dark:border-white/15"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                {project.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </PullCard>
        ))}
      </div>
    </section>
  )
}
