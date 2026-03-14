import { Gift, Heart } from 'lucide-react'
import AnimatedContent from '@/components/ui/AnimatedContent'
import FadeContent from '@/components/ui/FadeContent'

const wishlists = [
  {
    label: 'Amazon Wishlist',
    desc: 'Curated collection of essentials',
    url: 'https://www.amazon.com/hz/wishlist/ls/21FPWDV06YN1S',
  },
  {
    label: 'Throne',
    desc: 'Direct wishlist fulfillment',
    url: 'https://throne.com/squigls_',
  },
]

const directLinks = [
  { label: 'Venmo', url: 'https://venmo.com/u/Kaylee-Mattox' },
  { label: 'PayPal', url: 'https://www.paypal.me/kayleemattox11' },
  { label: 'Cash App', url: 'https://cash.app/$KayleeMattox' },
]

export function SupportSection() {
  return (
    <section id="support" className="py-20 sm:py-32 bg-rose-950 border-t border-rose-300/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Prominent heading with subtitle */}
        <div className="text-center mb-6">
          <FadeContent duration={800} delay={0} blur>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-rose-100 mb-4">
              Supporting the Muse
            </h2>
          </FadeContent>
          <FadeContent duration={800} delay={200}>
            <p className="text-rose-200/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Love the content? Here are ways to show your support and help fuel the creative vision.
            </p>
          </FadeContent>
        </div>

        {/* Wishlists — featured prominently */}
        <div className="mb-16 mt-12">
          <FadeContent duration={600} delay={100}>
            <div className="flex items-center gap-3 justify-center mb-8">
              <Gift size={16} className="text-rose-400" />
              <h3 className="text-xs sm:text-sm tracking-[0.4em] uppercase text-rose-400 font-light">
                Wishlists
              </h3>
            </div>
          </FadeContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {wishlists.map((link, i) => (
              <AnimatedContent key={link.label} distance={40} direction="vertical" duration={0.6} delay={0.15 * i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 border border-rose-300/20 hover:border-rose-300/50 hover:bg-rose-800/20 transition-all text-left"
                >
                  <Heart size={20} className="text-rose-400/40 group-hover:text-rose-400 transition-colors shrink-0" />
                  <div>
                    <span className="font-display text-lg sm:text-xl text-rose-100 group-hover:text-rose-200 transition-colors block">
                      {link.label}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-rose-200/40">
                      {link.desc}
                    </span>
                  </div>
                </a>
              </AnimatedContent>
            ))}
          </div>
        </div>

        {/* Direct support — secondary */}
        <AnimatedContent distance={30} direction="vertical" duration={0.6} delay={0.3}>
          <div className="text-center">
            <h3 className="text-xs sm:text-sm tracking-[0.4em] uppercase text-rose-400/60 mb-6 font-light">
              Direct Contribution
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {directLinks.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border border-rose-300/15 text-rose-200/60 text-xs sm:text-sm tracking-widest uppercase hover:border-rose-300/40 hover:text-rose-100 transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
