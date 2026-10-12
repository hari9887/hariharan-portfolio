import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { profile } from '../data/portfolioData.js'

const ease = [0.22, 1, 0.36, 1]

const sentence = [
  { text: 'Hi, I am' },
  { photo: true },
  { text: 'Hariharan,' },
  { text: 'building' },
  { chip: 'React' },
  { text: 'and' },
  { chip: 'Gemini' },
  { text: 'products from Chennai.' },
]

const pills = ['React.js', 'Angular', 'React Native', 'TypeScript', 'PostgreSQL', 'Gemini API']

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="section-shell pb-16 text-center sm:pb-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:tracking-[0.28em]"
        >
          <span className="block sm:inline">Chennai, Tamil Nadu</span>
          <span className="mx-2 hidden text-slate-300 sm:inline dark:text-slate-600">·</span>
          <span className="mt-1 block sm:mt-0 sm:inline">Open to work</span>
        </motion.p>

        <h1 className="mt-6 w-full text-center font-display font-semibold tracking-[-0.06em] text-pastel-ink dark:text-white">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="block text-[clamp(3.15rem,11vw,8.25rem)] leading-[0.86] text-slate-300 dark:text-white/20"
          >
            Frontend
          </motion.span>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease }}
            className="block text-[clamp(3.15rem,11vw,8.25rem)] leading-[0.86]"
          >
            Engineer
          </motion.span>
        </h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: reduce ? 0 : 0.25 } },
          }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[clamp(1.25rem,2.5vw,1.85rem)] font-medium leading-snug tracking-[-0.035em] text-pastel-ink dark:text-slate-100"
        >
          {sentence.map((part) => {
            if (part.photo) {
              return (
                <motion.img
                  key="photo"
                  src={profile.photo}
                  alt=""
                  variants={{ hidden: { opacity: 0, scale: 0.86 }, show: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.45, ease }}
                  className="mx-0.5 inline-block h-9 w-9 rounded-full object-cover object-[70%_22%] align-middle sm:h-11 sm:w-11"
                />
              )
            }
            if (part.chip) {
              return (
                <motion.span
                  key={part.chip}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.45, ease }}
                  className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 text-[0.72em] font-semibold tracking-[-0.03em] dark:border-white/15 dark:bg-white/10"
                >
                  {part.chip}
                </motion.span>
              )
            }
            return (
              <motion.span
                key={part.text}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease }}
              >
                {part.text}
              </motion.span>
            )
          })}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href={profile.resume} download={profile.resumeFileName} className="btn-primary w-full sm:w-auto">
            <Download size={16} />
            Download Resume
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mx-auto mt-12 grid max-w-5xl items-center gap-8 text-left md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
        >
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-[0_30px_60px_-36px_rgba(15,23,42,0.55)] dark:bg-neon-navy dark:shadow-[0_30px_70px_-36px_rgba(6,182,212,0.45)]">
              <img
                src={profile.photo}
                alt="Hariharan Thiyagarajan"
                className="aspect-[4/5] w-full object-cover object-[70%_20%]"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 backdrop-blur-md dark:bg-slate-950/70">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Now</p>
                <p className="text-sm font-semibold tracking-[-0.02em]">{profile.now.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{profile.now.org}</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>
          </div>

          <div>
            <p className="max-w-xl text-base leading-relaxed tracking-[-0.011em] text-slate-600 dark:text-slate-300 sm:text-lg">
              {profile.summary}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {pills.map((pill, index) => (
                <li
                  key={pill}
                  className={`rounded-full px-4 py-2 text-sm font-medium tracking-[-0.02em] ${
                    index === 0 || index === 4
                      ? 'bg-pastel-ink text-white dark:bg-white dark:text-slate-950'
                      : 'border border-slate-300/80 bg-white/70 text-pastel-ink dark:border-white/10 dark:bg-white/5 dark:text-slate-100'
                  }`}
                >
                  {pill}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm tracking-[-0.01em] text-slate-500 dark:text-slate-400">{profile.availability}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
