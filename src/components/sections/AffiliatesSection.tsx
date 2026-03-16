import { AffiliateCard } from '@/components/AffiliateCard'

const affiliates = [
  {
    brand: 'RagePADs',
    code: 'SQUIGLS_',
    desc: 'Premium Desk Surfaces',
    url: 'https://shop.ragepads.com/SQUIGLS_',
  },
  {
    brand: 'V1 Tech',
    desc: 'Custom PC Hardware',
    url: 'https://www.v1tech.com/?ref=SQUIGLS',
  },
  {
    brand: 'SHEIN',
    code: '3DXBK',
    desc: 'Seasonal Curations',
    url: 'https://onelink.shein.com/14/4u0m6m84lr0x',
  },
  {
    brand: 'Korura Club',
    code: 'SQUIGLS',
    desc: 'Anime Cosplay',
    url: 'https://www.koruraclub.com/?ref=SQUIGLS',
  },
]

export function AffiliatesSection() {
  return (
    <section id="affiliates" className="py-16 sm:py-24 bg-rose-50 text-rose-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 italic text-rose-950">Exclusive Access</h2>
          <p className="uppercase tracking-widest text-[10px] sm:text-xs text-rose-900/60">
            Shop my faves & save
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
          {affiliates.map((aff) => (
            <AffiliateCard key={aff.brand} {...aff} />
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-10 -left-10 text-[200px] font-display italic text-rose-950/5 select-none pointer-events-none leading-none">
        Couture
      </div>
    </section>
  )
}
