import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  })

  if (reduce) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-amber-300 via-sky-400 to-indigo-400 dark:from-cyan-300 dark:via-violet-400 dark:to-rose-400"
      style={{ scaleX }}
    />
  )
}
