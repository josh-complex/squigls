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
      {/* CurvedLoop heading — visible at top on mobile, decorative overlay on desktop */}
      <div className="w-full pt-8 sm:pt-0 sm:-mb-20 md:-mb-28 relative z-0 sm:opacity-50">
        <CurvedLoop
          marqueeText="Exclusive ♥ Access ♥ "
          speed={1}
          className="fill-rose-950! sm:opacity-10"
          curveAmount={400}
          direction="left"
          interactive
        />
      </div>

      {/* Affiliate content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-24 pb-16 sm:pb-24">
        <FadeContent duration={600} delay={100}>
          <p className="uppercase tracking-widest text-[10px] sm:text-xs text-rose-900/60 text-center mb-8 sm:mb-16">
            Use Code SQUIGLS for your selection
          </p>
        </FadeContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-12">
          {affiliates.map((aff, i) => (
            <AnimatedContent key={aff.brand} distance={40} direction="vertical" duration={0.6} delay={0.1 * i}>
              <AffiliateCard {...aff} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
