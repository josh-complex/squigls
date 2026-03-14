import { createFileRoute } from '@tanstack/react-router'
import {
  AtSign,
  Camera,
  Citrus,
  Clapperboard,
  Gamepad2,
  Ghost,
  Gift,
  Heart,
  MessageCircle,
  Music,
  PlayCircle,
} from 'lucide-react'
import { AffiliateCard } from '@/components/AffiliateCard'
import { DirectPayLink } from '@/components/DirectPayLink'
import { SectionHeading } from '@/components/SectionHeading'
import { SocialCard } from '@/components/SocialCard'
import { SocialPill } from '@/components/SocialPill'
import DotGrid from '@/components/ui/dot-grid'
import { Separator } from '@/components/ui/separator'
import Waves from '@/components/Waves'
import { WishlistCard } from '@/components/WishlistCard'

export const Route = createFileRoute('/')({ component: HomePage })

// ─── Data ────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    label: 'Twitch',
    handle: '@squigls_',
    tag: 'Tw',
    section: 'Streaming',
    num: '01',
    url: 'https://twitch.tv/squigls_',
    icon: Gamepad2,
  },
  {
    label: 'Discord',
    handle: 'SquiglsHQ',
    tag: 'Dc',
    section: 'Community',
    num: '02',
    url: 'https://discord.gg/Zn2yjDqt',
    icon: MessageCircle,
  },
  {
    label: 'YouTube',
    handle: 'squigls',
    tag: 'Yt',
    section: 'Archive',
    num: '03',
    url: 'https://youtube.com/@squigls_',
    icon: PlayCircle,
  },
]

const secondaryLinks = [
  { label: 'Spotify', url: 'https://open.spotify.com/user/kaylee.mattox11', icon: Music, category: 'Listen' },
  { label: 'Instagram', url: 'https://www.instagram.com/squigls_', icon: Camera, category: 'Visual' },
  { label: 'X', url: 'https://x.com/squigls_', icon: AtSign, category: 'Thoughts' },
  { label: 'Snapchat', url: 'https://snapchat.com/t/YdbjpYpe', icon: Ghost, category: 'Personal' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@squigls._', icon: Clapperboard, category: 'Motion' },
  { label: 'Threads', url: 'https://www.threads.net/@squigls_', icon: AtSign, category: 'Social' },
  { label: 'Lemon8', url: 'https://v.lemon8-app.com/s/OgShbeQcR', icon: Citrus, category: 'Lifestyle' },
]

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

// ─── Page ─────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <div className="min-h-screen bg-rose-950 text-rose-50 overflow-x-hidden">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative h-screen max-h-[1024px] overflow-hidden bg-rose-950" id="hero">

        {/* Waves background */}
        <Waves
          className="!absolute inset-0 z-0 bg-white"
        />

        {/* Two-column grid: left = wave space (narrower), right = image + text */}
        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1fr_4fr] h-full">

          {/* Left column — transparent so Waves show; narrower fade */}
          <div className="relative hidden xl:block">
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-rose-950 pointer-events-none" />
          </div>

          {/* Right column — image fills entire area, text overlays right */}
          <div className="relative flex items-end sm:items-center justify-end h-full bg-rose-950">

            {/* Portrait: covers the entire column, no bottom fade */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              <img
                src="/hero.png"
                alt="Squigls"
                className="h-full w-full max-w-[1200px] object-cover object-center"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, black 2%, black 65%, transparent 95%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, black 2%, black 65%, transparent 95%)',
                }}
              />
            </div>

            {/* Editorial text — responsive sizing, positioned bottom on mobile */}
            <div className="relative z-10 px-5 sm:px-8 md:pr-12 lg:pr-16 xl:pr-24 pb-16 sm:pb-0 text-right max-w-2xl ml-auto">
              <span className="block text-rose-300 tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.4em] uppercase text-[9px] sm:text-[11px] md:text-sm mb-2 sm:mb-4 animate-pulse">
                Content Creator &amp; Streamer
              </span>
              <h1 className="font-display text-[3.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-3 sm:mb-6 leading-[0.95] italic text-rose-100">
                Squigls
              </h1>
              <p className="text-rose-100/70 font-light text-xs sm:text-sm md:text-base lg:text-lg mb-5 sm:mb-8 max-w-xs sm:max-w-sm ml-auto leading-relaxed">
                Streaming, modeling, acting, &amp; voice acting.
                Always creating, always evolving.
              </p>
              <div className="flex justify-end">
                <a
                  href="#support"
                  className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-4 border border-rose-300/40 text-[9px] sm:text-[11px] md:text-xs tracking-widest uppercase hover:bg-rose-300/10 hover:border-rose-300/60 transition-all duration-500 text-rose-100"
                >
                  <Heart size={14} className="text-rose-300/70" />
                  Show Your Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical text decoration — sits in the wave column */}
        <div className="absolute bottom-12 left-12 hidden xl:block z-20">
          {/* <div
            className="rotate-[-90deg] origin-left font-display text-4xl uppercase tracking-widest opacity-25"
            style={{ WebkitTextStroke: '1px rgba(255,200,210,1)', color: 'transparent' }}
          >
            Volume 01 // The Lookthrough
          </div> */}
        </div>
      </section>

      {/* ── The Lookthrough ─────────────────────────────────────────────── */}
      <section id="lookthrough" className="bg-rose-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading title="The Lookthrough" badge="Digital Editorial Spread" />

          <div className="mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {socialLinks.map((link) => (
              <SocialCard key={link.label} {...link} />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {secondaryLinks.map((link) => (
              <SocialPill key={link.label} {...link} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Exclusive Access ────────────────────────────────────────────── */}
      <section id="affiliates" className="py-16 sm:py-24 bg-rose-50 text-rose-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 italic text-rose-950">Exclusive Access</h2>
            <p className="uppercase tracking-widest text-[10px] sm:text-xs text-rose-900/60">
              Use Code SQUIGLS for your selection
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

      {/* ── Supporting the Muse ─────────────────────────────────────────── */}
      <section id="support" className="py-20 sm:py-32 bg-rose-950 border-t border-rose-300/5">
        <div className="max-w-5xl mx-auto px-6">
          {/* Prominent heading with subtitle */}
          <div className="text-center mb-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-rose-100 mb-4">
              Supporting the Muse
            </h2>
            <p className="text-rose-200/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Love the content? Here are ways to show your support and help fuel the creative vision.
            </p>
          </div>

          {/* Wishlists — featured prominently */}
          <div className="mb-16 mt-12">
            <div className="flex items-center gap-3 justify-center mb-8">
              <Gift size={16} className="text-rose-400" />
              <h3 className="text-xs sm:text-sm tracking-[0.4em] uppercase text-rose-400 font-light">
                Wishlists
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {wishlists.map((link) => (
                <a
                  key={link.label}
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
              ))}
            </div>
          </div>

          {/* Direct support — secondary */}
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
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <Separator className="bg-rose-300/5" />
      <footer className="py-12 bg-rose-950 text-center">
        <div className="text-[10px] tracking-[0.5em] uppercase mb-4 text-primary">
          Squigls
        </div>
        <div className="text-[10px] tracking-widest text-rose-300/30">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
