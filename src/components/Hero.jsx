import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { intro, profile } from '../data/portfolioData.js'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="pt-2">
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="text-[12px] font-medium text-slate-600 dark:text-slate-300"
      >
        {profile.now.title} at {profile.now.org}
      </motion.p>
      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease }}
        className="mt-2 text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.05em]"
      >
        {profile.name}
      </motion.h1>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{profile.role}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{profile.location}</p>

      <div id="about" className="mt-7 space-y-4 text-[16px] leading-[1.65] tracking-[-0.011em] text-slate-700 dark:text-slate-200">
        {intro.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 * index, ease }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <a href={profile.resume} download={profile.resumeFileName} className="btn-primary">
          <Download size={16} />
          Download resume
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
          LinkedIn
          <ArrowUpRight size={16} />
        </a>
      </div>

      <motion.figure
        initial={reduce ? false : { opacity: 0, y: 18, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -2.5 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
        className="mx-auto mt-10 w-[86%] bg-white p-3 pb-8 shadow-[0_24px_50px_-28px_rgba(15,23,42,0.55)] dark:bg-[#f4f1ea]"
      >
        <img
          src={profile.photo}
          alt="Hariharan Thiyagarajan"
          className="aspect-[4/5] w-full object-cover object-[center_38%]"
        />
        <figcaption className="mt-3 text-center font-[cursive] text-sm text-slate-600">
          Chennai, Tamil Nadu
        </figcaption>
      </motion.figure>
    </section>
  )
}
