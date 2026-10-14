import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? 'Switch to daytime' : 'Switch to nighttime'}
      className="relative h-12 w-12 overflow-hidden rounded-full border border-white/70 bg-white/70 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#101827]/80"
    >
      <motion.span
        className="absolute inset-0"
        animate={{ backgroundColor: isDark ? '#0b1a33' : '#7ec8ff' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.svg
        viewBox="0 0 32 32"
        className="relative h-12 w-12"
        animate={{ rotate: isDark ? 160 : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.circle
          cx="16"
          cy="16"
          r="6"
          fill="#FFD056"
          animate={{ scale: isDark ? 0.15 : 1, opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <motion.rect
            key={deg}
            x="15.25"
            y="2.2"
            width="1.5"
            height="4.6"
            rx="0.75"
            fill="#FFD056"
            transform={`rotate(${deg} 16 16)`}
            animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.3 : 1 }}
          />
        ))}
        <motion.path
          d="M20.5 9.2A7.4 7.4 0 1 0 23.8 20.6 6.2 6.2 0 0 1 20.5 9.2Z"
          fill="#E8F0FF"
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.6 }}
          style={{ transformOrigin: '16px 16px' }}
        />
      </motion.svg>
    </motion.button>
  )
}
