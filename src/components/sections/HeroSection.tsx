import { Heart } from 'lucide-react'
import Waves from '@/components/Waves'
import SplitText from '@/components/ui/SplitText'
import GradientText from '@/components/ui/GradientText'
import FadeContent from '@/components/ui/FadeContent'
import AnimatedContent from '@/components/ui/AnimatedContent'

export function HeroSection() {
  return (
    <section className="relative h-screen max-h-[1024px] overflow-hidden">

      {/* Waves background — fills entire section behind everything */}
      <Waves className="absolute! inset-0 z-0"/>

      {/* Full-width content layer */}
      <div className="absolute inset-0 z-10 flex justify-center">

        {/* Centered content island — capped width so waves peek on sides */}
        <div className="relative w-full max-w-[1400px] h-full overflow-hidden">

          {/* Rose fill behind image so no gaps show */}
          <div className="absolute inset-0 bg-rose-950" />

          {/* Hero image — contained within the left portion, no cropping */}
          <img
            src="/hero.png"
            alt="Squigls"
            className="absolute inset-y-0 left-0 h-full object-contain object-bottom pointer-events-none select-none"
          />

          {/* Right-side rose gradient — fades image into text area */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent 0%, transparent 25%, rgba(76,5,25,0.3) 38%, rgba(76,5,25,0.7) 48%, rgba(76,5,25,0.95) 55%, rgb(76,5,25) 60%)',
            }}
          />

          {/* Bottom gradient for mobile text readability */}
          <div
            className="absolute inset-0 pointer-events-none md:hidden"
            style={{
              background: 'linear-gradient(to top, rgb(76,5,25) 0%, rgba(76,5,25,0.95) 15%, rgba(76,5,25,0.6) 35%, transparent 55%)',
            }}
          />

          {/* Left edge — blend into waves */}
          <div
            className="absolute inset-y-0 left-0 w-16 pointer-events-none hidden xl:block"
            style={{
              background: 'linear-gradient(to left, transparent 0%, rgba(76,5,25,1) 100%)',
            }}
          />

          {/* Right edge — blend into waves */}
          <div
            className="absolute inset-y-0 right-0 w-16 pointer-events-none hidden xl:block"
            style={{
              background: 'linear-gradient(to left, transparent 0%, rgba(76,5,25,1) 100%)',
            }}
          />

          {/* Hero text — bottom on mobile, right-center on md+ */}
          <div className="absolute inset-0 flex items-end md:items-center md:justify-end">
            <div className="relative z-10 px-6 pb-12 md:pb-0 md:w-[42%] md:px-8 lg:px-12 xl:px-16">
              <FadeContent duration={800} delay={0} blur>
                <span className="block text-rose-300 tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.4em] uppercase text-[9px] sm:text-[11px] md:text-sm mb-2 sm:mb-4">
                  Content Creator
                </span>
              </FadeContent>

              {/* Squigls title — always gradient, blurred in */}
              <FadeContent duration={1200} delay={200} blur>
                <GradientText
                  colors={['#ffe4e6', '#fb7185', '#fda4af', '#ffe4e6']}
                  animationSpeed={6}
                  className="!rounded-none"
                >
                  <h1 className="font-display text-[3.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] italic">
                    Squigls
                  </h1>
                </GradientText>
              </FadeContent>

              <div className="mb-5 sm:mb-8 mt-3 sm:mt-6 max-w-xs sm:max-w-sm">
                <SplitText
                  text="Always looking for streaming, modeling, acting, & voice acting opportunities!"
                  className="text-rose-100/70 font-light text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
                  splitType="words"
                  delay={40}
                  duration={0.8}
                  ease="power3.out"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  tag="p"
                  textAlign="left"
                />
              </div>

              <AnimatedContent distance={30} direction="vertical" duration={0.6} delay={0.4}>
                <div className="flex">
                  <a
                    href="#support"
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-4 border border-rose-300/40 text-[9px] sm:text-[11px] md:text-xs tracking-widest uppercase hover:bg-rose-300/10 hover:border-rose-300/60 transition-all duration-500 text-rose-100"
                  >
                    <Heart size={14} className="text-rose-300/70" />
                    Show Your Support
                  </a>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
