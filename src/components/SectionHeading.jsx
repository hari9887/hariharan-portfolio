import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description }) {
  const reduce = useReducedMotion()

  return (
    <Reveal className="mb-6">
      {eyebrow && (
        <motion.p
          initial={reduce ? false : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-800/80 dark:text-sky-300/90"
        >
          {eyebrow}
        </motion.p>
      )}
      <h2 className="section-title mt-2">{title}</h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      )}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-300/80 via-slate-200/40 to-transparent dark:from-white/20 dark:via-white/5" />
    </Reveal>
  )
}
