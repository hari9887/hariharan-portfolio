import PullCharacter from './PullCharacter.jsx'

export default function ScrollStack({ children }) {
  return (
    <div className="relative mt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-2 top-0 bottom-0 rounded-[1.85rem] border border-white/50 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-md dark:border-white/10 dark:bg-[#0a1220]/35"
      />
      <div className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-x-2 px-2 py-4">
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute bottom-0 top-8 w-px bg-gradient-to-b from-sky-400/50 via-slate-400/30 to-transparent dark:from-cyan-400/40"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] dark:bg-cyan-300"
          />
          <PullCharacter />
        </div>
        <div className="min-w-0 space-y-1">{children}</div>
      </div>
    </div>
  )
}
