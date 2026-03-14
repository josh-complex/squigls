export interface AffiliateCardProps {
  brand: string
  code: string
  desc: string
  url: string
}

/**
 * Affiliate brand tile for the light "Exclusive Access" section.
 * Centered layout with the affiliate code in a bordered box.
 */
export function AffiliateCard({ brand, code, desc, url }: AffiliateCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block text-center space-y-4"
    >
      <h4 className="font-display text-2xl text-rose-950">{brand}</h4>
      <div className="py-3 px-6 border border-rose-900/20 inline-block transition-colors group-hover:border-rose-700/50">
        <span className="tracking-[0.3em] font-bold font-mono text-rose-900">{code}</span>
      </div>
      <p className="text-[10px] uppercase tracking-widest text-rose-900/50">{desc}</p>
    </a>
  )
}
