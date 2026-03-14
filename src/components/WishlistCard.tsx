export interface WishlistCardProps {
  label: string
  desc: string
  url: string
}

/**
 * Wishlist text link used inside the Support section gifting list.
 */
export function WishlistCard({ label, desc, url }: WishlistCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <span className="font-display text-xl text-rose-100 group-hover:text-rose-300 transition-colors">
        {label}
      </span>
      <p className="text-[10px] uppercase tracking-widest text-rose-200/50 mt-1">{desc}</p>
    </a>
  )
}
