import { certifications, education, experience } from '../data/portfolioData.js'
import PullCard from './PullCard.jsx'

export default function Experience() {
  return (
    <section id="work" className="mt-16">
      <h2 className="section-title">Work</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
        Three roles, in order, as they appear on the resume. Each card is the same story written out so there is
        room to scroll.
      </p>
      <div className="mt-6 space-y-5">
        {experience.map((item, index) => (
          <PullCard key={`${item.org}-${item.dates}`} index={index}>
            <article className="paper">
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
          <article className="paper">
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
          <article className="paper">
            <h3 className="text-lg font-semibold tracking-[-0.03em]">Certifications and recognition</h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </PullCard>
      </div>
    </section>
  )
}
