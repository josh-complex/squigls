import { AffiliateCard } from '@/components/AffiliateCard'
import CurvedLoop from '@/components/ui/CurvedLoop'
import AnimatedContent from '@/components/ui/AnimatedContent'
import FadeContent from '@/components/ui/FadeContent'

const affiliates = [
  {
    brand: 'RagePADs',
    code: 'SQUIGLS_',
    desc: 'Premium Desk Surfaces',
    url: 'https://shop.ragepads.com/SQUIGLS_',
  },
  {
    brand: 'V1 Tech',
    code: 'SQUIGLS',
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
    <section id="affiliates" className="bg-rose-50 text-rose-950 relative overflow-hidden">
      {/* Affiliate content — sits above the curve visually */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-8">
        <FadeContent duration={600} delay={100}>
          <p className="uppercase tracking-widest text-[10px] sm:text-xs text-rose-900/60 text-center mb-12 sm:mb-16">
            Use Code SQUIGLS for your selection
          </p>
        </FadeContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
          {affiliates.map((aff, i) => (
            <AnimatedContent key={aff.brand} distance={40} direction="vertical" duration={0.6} delay={0.1 * i}>
              <AffiliateCard {...aff} />
            </AnimatedContent>
          ))}
        </div>
      </div>

      {/* CurvedLoop — decorative, sits below the affiliate cards and overlaps */}
      <div className="w-full -mt-28 sm:-mt-36 pb-28 sm:pb-36 relative z-0 opacity-50">
        <CurvedLoop
          marqueeText="Exclusive ♥ Access ♥ "
          speed={1}
          className="fill-rose-950! opacity-10"
          curveAmount={400}
          direction="left"
          interactive
        />
      </div>
    </section>
  )
}
