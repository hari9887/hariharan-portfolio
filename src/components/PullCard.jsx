import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function PullCard({ children, index = 0, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.96', 'start 0.52'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 90, 0])
  const y = useSpring(rawY, { stiffness: 70, damping: 16, mass: 0.8 })
  const rotate = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : index % 2 === 0 ? -7 : 7, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span className="absolute -top-7 left-1/2 h-7 w-px -translate-x-1/2 bg-slate-400/50 dark:bg-sky-200/30" />
      <motion.div style={{ y, rotate, scale }} className="origin-top">
        {children}
      </motion.div>
    </div>
  )
}

export function PullCharacter() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const tug = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 18])
  const climb = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 28])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none sticky top-24 z-20 -mb-16 flex justify-end pr-1"
      style={{ y: climb }}
    >
      <svg width="78" height="78" viewBox="0 0 78 78" fill="none">
        <motion.g style={{ y: tug }}>
          <path d="M39 8 v18" stroke="currentColor" className="text-slate-400 dark:text-sky-200/50" strokeWidth="2" />
          <circle cx="39" cy="32" r="8.5" className="fill-[#1b2430] dark:fill-sky-100" />
          <circle cx="36.5" cy="30.5" r="1.2" className="fill-white dark:fill-[#071018]" />
          <circle cx="41.5" cy="30.5" r="1.2" className="fill-white dark:fill-[#071018]" />
          <path d="M39 40.5 v10" className="stroke-[#1b2430] dark:stroke-sky-100" strokeWidth="3.2" strokeLinecap="round" />
          <motion.path
            d="M39 44 L28 54"
            className="stroke-[#1b2430] dark:stroke-sky-100"
            strokeWidth="3.2"
            strokeLinecap="round"
            style={{ rotate: tug }}
          />
          <path d="M39 44 L50 53" className="stroke-[#1b2430] dark:stroke-sky-100" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M39 50.5 L32 64" className="stroke-[#1b2430] dark:stroke-sky-100" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M39 50.5 L47 64" className="stroke-[#1b2430] dark:stroke-sky-100" strokeWidth="3.2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </motion.div>
  )
}
