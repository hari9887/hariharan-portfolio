import { useTheme } from '../context/ThemeContext.jsx'

export default function Sky() {
  const { isDark, skyShift } = useTheme()
  const sunY = 8 + skyShift * 38
  const moonY = 10 + (1 - skyShift) * 10
  const dusk = Math.min(1, skyShift * 1.15)

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 transition-colors duration-[900ms] ease-in-out"
        style={{
          background: isDark
            ? `linear-gradient(${180 + dusk * 8}deg, #071325 0%, #0b1a2e ${40 + dusk * 10}%, #050810 100%)`
            : `linear-gradient(${180 + dusk * 12}deg, #9fd4ff 0%, #d7ecff ${42 + dusk * 18}%, #f7fbff 100%)`,
        }}
      />

      <div
        className={`absolute right-[12%] h-28 w-28 rounded-full blur-2xl transition-all duration-[900ms] ease-in-out ${
          isDark ? 'pointer-events-none opacity-0 translate-y-32 scale-50' : 'opacity-70'
        }`}
        style={{ top: `${Math.max(0, sunY - 6)}%`, background: 'radial-gradient(circle, #ffe08a 0%, rgba(255,208,90,0.12) 70%)' }}
      />
      <div
        className={`absolute right-[16%] h-12 w-12 rounded-full transition-all duration-[900ms] ease-in-out ${
          isDark ? 'pointer-events-none opacity-0 translate-y-32 scale-50' : 'opacity-100'
        }`}
        style={{
          top: `calc(${Math.max(0, sunY - 4)}% + 0.4rem)`,
          background: '#ffd056',
          boxShadow: '0 0 36px 10px rgba(255,208,86,0.5)',
        }}
      />

      <div
        className={`absolute right-[16%] h-16 w-16 rounded-full transition-all duration-[900ms] ease-in-out sm:right-[26%] ${
          isDark ? 'opacity-100' : 'opacity-0 -translate-y-10'
        }`}
        style={{
          top: `${moonY}%`,
          background: 'radial-gradient(circle at 30% 30%, #f8fbff 0%, #d7e3f7 70%)',
          boxShadow: '0 0 32px 8px rgba(186, 214, 255, 0.35)',
        }}
      />

      <div className={`absolute inset-0 transition-opacity duration-[900ms] ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: 28 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-0.5 w-0.5 rounded-full bg-white"
            style={{
              top: `${(index * 37) % 70}%`,
              left: `${(index * 53) % 100}%`,
              opacity: 0.35 + ((index * 13) % 50) / 100,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[38vh] transition-colors duration-[900ms]"
        style={{
          background: isDark
            ? 'linear-gradient(to top, #050810, transparent)'
            : 'linear-gradient(to top, rgba(247,251,255,0.95), transparent)',
        }}
      />
    </div>
  )
}
