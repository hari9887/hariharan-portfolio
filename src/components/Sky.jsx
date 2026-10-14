import { useTheme } from '../context/ThemeContext.jsx'

const clouds = [
  { w: 120, h: 36, top: '12%', left: '-8%', opacity: 0.55 },
  { w: 90, h: 28, top: '22%', left: '55%', opacity: 0.45 },
  { w: 140, h: 40, top: '8%', left: '70%', opacity: 0.35 },
]

export default function Sky() {
  const { isDark, skyShift } = useTheme()
  const sunY = 6 + skyShift * 34
  const moonY = 8 + (1 - skyShift) * 8
  const dusk = Math.min(1, skyShift * 1.12)

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 transition-[background] duration-[1000ms] ease-in-out"
        style={{
          background: isDark
            ? `linear-gradient(${182 + dusk * 6}deg, #06101f 0%, #0b1830 42%, #04070f 100%)`
            : `linear-gradient(${178 + dusk * 10}deg, #8ecfff 0%, #cfe9ff 38%, #f4f9ff 100%)`,
        }}
      />

      {!isDark &&
        clouds.map((cloud, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white blur-md transition-transform duration-[1000ms]"
            style={{
              width: cloud.w,
              height: cloud.h,
              top: cloud.top,
              left: cloud.left,
              opacity: cloud.opacity,
              transform: `translateY(${skyShift * 18}px)`,
            }}
          />
        ))}

      <div
        className={`absolute right-[10%] h-32 w-32 rounded-full blur-3xl transition-all duration-[1000ms] ${
          isDark ? 'scale-50 opacity-0' : 'opacity-80'
        }`}
        style={{
          top: `${Math.max(0, sunY - 8)}%`,
          background: 'radial-gradient(circle, rgba(255,224,138,0.9) 0%, rgba(255,224,138,0) 70%)',
        }}
      />
      <div
        className={`absolute right-[14%] h-11 w-11 rounded-full transition-all duration-[1000ms] ${
          isDark ? 'translate-y-24 scale-50 opacity-0' : 'opacity-100'
        }`}
        style={{
          top: `calc(${Math.max(0, sunY - 2)}% + 0.2rem)`,
          background: '#ffd056',
          boxShadow: '0 0 40px 14px rgba(255,208,86,0.45)',
        }}
      />

      <div
        className={`absolute right-[14%] h-14 w-14 rounded-full transition-all duration-[1000ms] ${
          isDark ? 'opacity-100' : '-translate-y-8 opacity-0'
        }`}
        style={{
          top: `${moonY}%`,
          background: 'radial-gradient(circle at 32% 28%, #ffffff 0%, #d9e6f8 72%)',
          boxShadow: '0 0 28px 10px rgba(186,214,255,0.28)',
        }}
      />

      <div className={`absolute inset-0 transition-opacity duration-[1000ms] ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: 36 }).map((_, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: index % 5 === 0 ? 2 : 1,
              height: index % 5 === 0 ? 2 : 1,
              top: `${(index * 29) % 75}%`,
              left: `${(index * 47) % 100}%`,
              opacity: 0.2 + ((index * 11) % 60) / 100,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light dark:opacity-20"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[42vh] transition-colors duration-[1000ms]"
        style={{
          background: isDark
            ? 'linear-gradient(to top, #04070f, transparent)'
            : 'linear-gradient(to top, rgba(244,249,255,0.98), transparent)',
        }}
      />
    </div>
  )
}
