export interface DirectPayLinkProps {
  label: string
  url: string
}

/**
 * Direct-payment text link (Venmo, PayPal, Cash App) with DIRECT badge.
 */
export function DirectPayLink({ label, url }: DirectPayLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between"
    >
      <span className="font-display text-xl text-rose-100 group-hover:text-rose-300 transition-colors">
        {label}
      </span>
      <span className="text-[10px] border border-rose-100/20 px-2 py-1 text-rose-200/50">
        DIRECT
      </span>
    </a>
  )
}
