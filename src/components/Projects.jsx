import { projects } from '../data/portfolioData.js'
import PullCard from './PullCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Projects() {
  return (
    <section id="projects" className="pt-10 pb-2">
      <SectionHeading
        eyebrow="Build"
        title="Projects"
        description="Only the two projects named on the resume — IoT agriculture and the first portfolio site."
      />
      <div className="space-y-1">
        {projects.map((project, index) => (
          <PullCard key={project.title} index={index}>
            <article className="paper paper-hover">
              <h3 className="text-lg font-semibold tracking-[-0.03em]">{project.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li key={tag} className="rounded-full border border-slate-300/80 px-3 py-1 text-[12px] font-medium dark:border-white/15">
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
