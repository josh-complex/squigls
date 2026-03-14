import type { LucideIcon } from 'lucide-react'

export interface SocialPillProps {
  label: string
  url: string
  icon: LucideIcon
  category: string
}

/**
 * Editorial grid cell for secondary social platforms.
 * Shows a category label above the platform name.
 */
export function SocialPill({ label, url, icon: Icon, category }: SocialPillProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center p-6 border border-rose-300/5 hover:border-rose-300/40 transition-all"
    >
      <span className="text-[10px] uppercase tracking-tighter text-primary mb-2">{category}</span>
      <span className="font-display text-lg text-rose-100 group-hover:italic transition-all duration-300">
        {label}
      </span>
    </a>
  )
}
