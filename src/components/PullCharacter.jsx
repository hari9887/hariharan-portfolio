import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function PullCharacter() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const climb = useSpring(useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 220]), {
    stiffness: 55,
    damping: 18,
  })
  const tug = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0, 8, 14, 10, 6])
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none sticky top-[32vh] z-10 -mt-2"
      style={{ y: climb }}
    >
      <svg width="52" height="72" viewBox="0 0 52 72" fill="none" className="drop-shadow-sm">
        <motion.g style={{ y: tug }}>
          <path
            d="M26 4v14"
            stroke="currentColor"
            className="text-sky-500/60 dark:text-cyan-300/50"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="26" cy="24" r="7" className="fill-[#1b2430] dark:fill-sky-100" />
          <circle cx="24" cy="22.5" r="1" className="fill-white dark:fill-[#071018]" />
          <circle cx="28" cy="22.5" r="1" className="fill-white dark:fill-[#071018]" />
          <path
            d="M26 31v8"
            className="stroke-[#1b2430] dark:stroke-sky-100"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M26 35 L16 44"
            className="stroke-[#1b2430] dark:stroke-sky-100"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M26 35 L36 43"
            className="stroke-[#1b2430] dark:stroke-sky-100"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M26 39 L20 52"
            className="stroke-[#1b2430] dark:stroke-sky-100"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M26 39 L33 52"
            className="stroke-[#1b2430] dark:stroke-sky-100"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  )
}
