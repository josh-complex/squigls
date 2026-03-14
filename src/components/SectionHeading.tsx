export interface SectionHeadingProps {
  title: string
  /** Small subtitle displayed below the title. */
  subtitle?: string
  /** Optional label text shown right of a horizontal rule. */
  badge?: string
}

/**
 * Repeated section heading pattern used across the landing page.
 * Renders an italic display title with a horizontal rule and optional
 * right-aligned label, or a subtitle line.
 */
export function SectionHeading({ title, subtitle, badge }: SectionHeadingProps) {
  return (
    <div className={subtitle ? 'mb-4' : 'mb-16'}>
      <div className="flex items-center gap-8">
        <h2 className="font-display text-4xl italic text-rose-100 md:text-5xl shrink-0">
          {title}
        </h2>
        {badge && (
          <>
            <div className="h-px flex-grow bg-rose-300/20 hidden md:block" />
            <span className="hidden text-xs tracking-widest text-rose-300/40 uppercase md:block shrink-0">
              {badge}
            </span>
          </>
        )}
      </div>
      {subtitle && (
        <p className="mt-4 mb-16 text-sm tracking-widest text-rose-300/50 uppercase">
          {subtitle}
        </p>
      )}
    </div>
  )
}
