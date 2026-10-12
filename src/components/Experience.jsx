import { certifications, education, experience } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">04 — Experience</p>
          <h2 className="section-title mt-3 max-w-2xl">
            Product delivery, then the credentials behind it.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <ol className="relative space-y-6 border-l border-slate-300/80 pl-6 dark:border-white/15">
            {experience.map((item, index) => (
              <Reveal key={`${item.org}-${item.dates}`} delay={index * 0.05}>
                <li className="glass-card relative p-6">
                  <span className="absolute -left-[1.95rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-white bg-teal-600 dark:border-neon-void dark:bg-neon-cyan" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-neon-cyan">
                    {item.dates}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.org} · {item.location}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="space-y-5">
            <Reveal>
              <article className="glass-card p-6">
                <p className="eyebrow">Education</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{education.degree}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{education.school}</p>
                <p className="mt-3 text-sm font-semibold text-pastel-ink dark:text-white">
                  {education.dates} · {education.detail}
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="glass-card p-6">
                <p className="eyebrow">Certifications</p>
                <ul className="mt-4 space-y-3">
                  {certifications.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-pastel-teal/70 px-4 py-3 text-sm font-medium text-teal-950 dark:bg-white/5 dark:text-slate-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
