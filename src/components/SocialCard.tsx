import type { LucideIcon } from 'lucide-react'

export interface SocialCardProps {
  label: string
  handle: string
  tag: string
  section: string
  num: string
  url: string
  icon: LucideIcon
}

/**
 * Editorial-style primary social card used in the socials grid.
 * Tall glass card with watermark tag letter and hover lift effect.
 */
export function SocialCard({
  label,
  handle,
  tag,
  section,
  num,
  url,
}: SocialCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden aspect-[5/4] bg-rose-900/40 backdrop-blur-sm border border-rose-300/10 flex flex-col justify-end p-8 transition-all duration-400 hover:bg-rose-800/50 hover:border-rose-300/30 hover:-translate-y-1"
    >
      <div className="absolute top-8 left-8 text-xs tracking-[0.3em] uppercase text-rose-200/50">
        {num} / {section}
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-3xl text-rose-100 transition-all duration-300 group-hover:italic">
          {label}
        </h3>
        <p className="text-rose-300/60 text-sm tracking-widest uppercase">{handle}</p>
      </div>

      <div className="absolute -bottom-4 -right-4 text-9xl font-display italic text-rose-100/5 transition-opacity group-hover:text-rose-100/10 select-none pointer-events-none">
        {tag}
      </div>
    </a>
  )
}
