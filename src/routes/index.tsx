import { createFileRoute } from '@tanstack/react-router'
import { AffiliatesSection } from '@/components/sections/AffiliatesSection'
import { Footer } from '@/components/sections/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { SocialsSection } from '@/components/sections/SocialsSection'
import { SupportSection } from '@/components/sections/SupportSection'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <div className="min-h-screen bg-rose-950 text-rose-50 overflow-x-hidden">
      <HeroSection />
      <SocialsSection />
      <AffiliatesSection />
      <SupportSection />
      <Footer />
    </div>
  )
}
