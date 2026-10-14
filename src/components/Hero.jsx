import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { intro, profile } from '../data/portfolioData.js'
import SkillMarquee from './SkillMarquee.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const photoY = useTransform(scrollYProgress, [0, 0.35], [0, reduce ? 0 : -24])
  const photoRotate = useTransform(scrollYProgress, [0, 0.35], [-2.5, reduce ? -2.5 : 0])

  return (
    <section id="home" className="pt-2">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-[11px] font-medium text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Open to work · {profile.location}
      </motion.div>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="mt-4 text-[12px] font-medium text-slate-500 dark:text-slate-400"
      >
        {profile.now.title} at {profile.now.org}
      </motion.p>

      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease }}
        className="mt-2 font-display text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.055em]"
      >
        <span className="block bg-gradient-to-br from-[#1b2430] via-[#334155] to-[#0f172a] bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-slate-400">
          Hariharan
        </span>
        <span className="block text-[2.05rem] text-slate-600 dark:text-slate-300">Thiyagarajan</span>
      </motion.h1>

      <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{profile.role}</p>

      <motion.figure
        style={{ y: photoY, rotate: photoRotate }}
        initial={reduce ? false : { opacity: 0, y: 22, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -2.5 }}
        transition={{ duration: 0.95, delay: 0.15, ease }}
        className="group relative mx-auto mt-8 w-[88%]"
      >
        <div
          aria-hidden="true"
          className="absolute -left-3 top-3 h-10 w-16 rotate-[-8deg] rounded-sm bg-amber-100/80 shadow-sm dark:bg-amber-200/20"
        />
        <div className="relative overflow-hidden rounded-[1.35rem] bg-white p-3 pb-7 shadow-[0_28px_60px_-32px_rgba(15,23,42,0.55)] ring-1 ring-black/5 transition duration-500 group-hover:rotate-0 group-hover:shadow-[0_32px_70px_-30px_rgba(15,23,42,0.5)] dark:bg-[#f4f1ea] dark:ring-white/10">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/25 to-white/0 opacity-0 transition duration-700 group-hover:opacity-100" />
          <img
            src={profile.photo}
            alt="Hariharan Thiyagarajan"
            className="aspect-[4/5] w-full rounded-xl object-cover object-[center_38%]"
          />
          <figcaption className="mt-3 text-center font-[cursive] text-sm text-slate-600">Chennai, Tamil Nadu</figcaption>
        </div>
      </motion.figure>

      <div id="about" className="mt-8 space-y-4 text-[16px] leading-[1.68] tracking-[-0.011em] text-slate-700 dark:text-slate-200">
        {intro.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: index * 0.06, ease }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <SkillMarquee />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mt-8 flex flex-col gap-3"
      >
        <a href={profile.resume} download={profile.resumeFileName} className="btn-primary shadow-lg shadow-slate-900/10 dark:shadow-none">
          <Download size={16} />
          Download resume
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
          LinkedIn
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  )
}
