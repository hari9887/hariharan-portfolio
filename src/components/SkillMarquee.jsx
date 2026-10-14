import { useMemo } from 'react'
import { skillGroups } from '../data/portfolioData.js'

export default function SkillMarquee() {
  const items = useMemo(
    () => skillGroups.flatMap((group) => group.items).filter((item, index, list) => list.indexOf(item) === index),
    [],
  )
  const line = items.join(' · ')

  return (
    <div
      className="relative mt-10 -mx-5 overflow-hidden border-y border-white/50 bg-white/35 py-2.5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}
