/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F8FAFC',
          mist: '#F1F5F9',
        },
        pastel: {
          lavender: '#E0E7FF',
          teal: '#CCFBF1',
          ink: '#1E293B',
          mute: '#475569',
        },
        neon: {
          cyan: '#06B6D4',
          purple: '#A855F7',
          crimson: '#EF4444',
          void: '#030712',
          navy: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        pastel: '0 24px 60px -28px rgba(79, 70, 229, 0.35)',
        neon: '0 0 0 1px rgba(6, 182, 212, 0.45), 0 18px 50px -20px rgba(168, 85, 247, 0.55)',
        glow: '0 0 32px rgba(6, 182, 212, 0.35)',
      },
      backgroundImage: {
        'pastel-mesh':
          'radial-gradient(900px 500px at 0% -10%, rgba(224, 231, 255, 0.95), transparent 55%), radial-gradient(800px 480px at 100% 0%, rgba(204, 251, 241, 0.9), transparent 50%)',
        'neon-mesh':
          'radial-gradient(700px 420px at 10% -10%, rgba(6, 182, 212, 0.18), transparent 55%), radial-gradient(640px 420px at 100% 0%, rgba(168, 85, 247, 0.18), transparent 50%), radial-gradient(500px 300px at 80% 100%, rgba(239, 68, 68, 0.08), transparent 50%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
