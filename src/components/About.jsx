import { profile, stats } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-pastel dark:border-white/10 dark:bg-neon-navy dark:shadow-none">
              <img
                src={profile.aboutPhoto}
                alt="Hariharan Thiyagarajan seated indoors"
                className="aspect-[4/5] w-full object-cover object-[center_38%]"
              />
            </div>
            <div className="glass-card absolute bottom-6 left-4 right-4 px-4 py-3 sm:left-auto sm:right-5 sm:max-w-[14rem]">
              <p className="text-xs uppercase tracking-[0.18em] text-pastel-mute dark:text-slate-400">Based in</p>
              <p className="font-display text-sm font-semibold">{profile.location}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow">01 — About</p>
          <h2 className="section-title mt-3">
            Interfaces, systems, and the layer between them.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card px-4 py-4">
                <dt className="font-display text-2xl font-semibold text-pastel-ink dark:text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-pastel-mute dark:text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
