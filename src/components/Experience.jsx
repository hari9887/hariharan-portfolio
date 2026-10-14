import { certifications, education, experience } from '../data/portfolioData.js'
import PullCard from './PullCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="work" className="pt-10">
      <SectionHeading
        eyebrow="Timeline"
        title="Work"
        description="Three roles on the resume, written out so each scroll feels like turning a page."
      />
      <div className="space-y-1">
        {experience.map((item, index) => (
          <PullCard key={`${item.org}-${item.dates}`} index={index}>
            <article className="paper paper-hover">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-sky-800 dark:text-sky-300">
                {item.dates}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em]">{item.role}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.org}</p>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </PullCard>
        ))}

        <PullCard index={3}>
          <article className="paper paper-hover">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-sky-800 dark:text-sky-300">
              {education.dates}
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em]">{education.degree}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{education.school}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
              {education.detail}. The degree is in Electronics and Communication Engineering, completed between November
              2020 and June 2024.
            </p>
          </article>
        </PullCard>

        <PullCard index={4}>
          <article className="paper paper-hover">
            <h3 className="text-lg font-semibold tracking-[-0.03em]">Certifications and recognition</h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
              {certifications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </PullCard>
      </div>
    </section>
  )
}
