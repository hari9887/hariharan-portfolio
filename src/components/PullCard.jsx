import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function PullCard({ children, index = 0, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.94', 'start 0.5'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 72, 0])
  const y = useSpring(rawY, { stiffness: 82, damping: 18, mass: 0.65 })
  const rotate = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : index % 2 === 0 ? -5 : 5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.55, 1])

  return (
    <div ref={ref} className={`relative py-2 ${className}`}>
      <motion.div
        style={{ y, rotate, scale, opacity }}
        className="origin-top-left will-change-transform"
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-1 top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-sky-300/40 to-transparent dark:via-cyan-400/25"
          />
          {children}
        </div>
      </motion.div>
    </div>
  )
}
