import { createFileRoute } from '@tanstack/react-router'
import {
  ExternalLink,
  Gamepad2,
  MessageCircle,
  PlayCircle,
  Music,
  Camera,
  Ghost,
  Clapperboard,
  AtSign,
  Citrus,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

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
  { label: 'Spotify', url: 'https://open.spotify.com/user/kaylee.mattox11', icon: Music },
  { label: 'Instagram', url: 'https://www.instagram.com/squigls_', icon: Camera },
  { label: 'X', url: 'https://x.com/squigls_', icon: AtSign },
  { label: 'Snapchat', url: 'https://snapchat.com/t/YdbjpYpe', icon: Ghost },
  { label: 'TikTok', url: 'https://www.tiktok.com/@squigls._', icon: Clapperboard },
  { label: 'Threads', url: 'https://www.threads.net/@squigls_', icon: AtSign },
  { label: 'Lemon8', url: 'https://v.lemon8-app.com/s/OgShbeQcR', icon: Citrus },
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

const supportLinks = [
  {
    label: 'Amazon Wishlist',
    desc: 'Curated collection of essentials',
    url: 'https://www.amazon.com/hz/wishlist/ls/21FPWDV06YN1S',
    type: 'wishlist',
  },
  {
    label: 'Throne',
    desc: 'Direct wishlist fulfillment',
    url: 'https://throne.com/squigls_',
    type: 'wishlist',
  },
  { label: 'Venmo', desc: '', url: 'https://venmo.com/u/Kaylee-Mattox', type: 'direct' },
  { label: 'PayPal', desc: '', url: 'https://www.paypal.me/kayleemattox11', type: 'direct' },
  { label: 'Cash App', desc: '', url: 'https://cash.app/$KayleeMattox', type: 'direct' },
]

function App() {
  return (
    <div className="min-h-screen bg-rose-dark text-rose-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Squigls"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-dark via-rose-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-dark/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 pb-24 pt-48">
          <p className="text-rose-200/60 text-xs tracking-[0.3em] uppercase mb-4">
            Content Creator &amp; Streamer
          </p>
          <h1 className="font-display text-7xl md:text-9xl text-rose-100 italic leading-[0.9] mb-6">
            Squigls
          </h1>
          <p className="text-rose-200/70 max-w-md text-lg leading-relaxed mb-8">
            Always looking for streaming, modeling, acting, &amp; voice acting opportunities.
          </p>
          <a
            href="#lookthrough"
            className="inline-block border border-rose-300/40 text-rose-100 px-8 py-3 text-sm tracking-widest uppercase hover:bg-rose-500/20 hover:border-rose-300/60 transition-all"
          >
            Enter Lookthrough
          </a>
        </div>
      </section>

      {/* The Lookthrough - Primary Social Links */}
      <section id="lookthrough" className="py-24 bg-rose-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-display italic text-rose-100">
              The Lookthrough
            </h2>
            <span className="hidden md:block text-rose-300/40 text-xs tracking-widest uppercase">
              Digital Editorial Spread
            </span>
          </div>

          {/* Primary links grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rose-600/20 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-rose-900 p-8 hover:bg-rose-800/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-rose-300/40 text-xs tracking-widest">
                    {link.num} / {link.section}
                  </span>
                  <span className="text-rose-400 text-xs font-mono">{link.tag}</span>
                </div>
                <h3 className="text-2xl text-rose-100 mb-1 group-hover:text-rose-200 transition-colors">
                  {link.label}
                </h3>
                <p className="text-rose-300/60 text-sm">{link.handle}</p>
                <ExternalLink
                  size={14}
                  className="mt-4 text-rose-400/40 group-hover:text-rose-400 transition-colors"
                />
              </a>
            ))}
          </div>

          {/* Secondary social links */}
          <div className="flex flex-wrap gap-3">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-rose-600/30 text-rose-200/70 text-sm hover:border-rose-400/50 hover:text-rose-100 hover:bg-rose-800/30 transition-all"
              >
                <link.icon size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Access - Affiliate Codes */}
      <section
        id="affiliates"
        className="py-24 bg-gradient-to-b from-rose-dark to-rose-900"
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-display italic text-rose-100 mb-4">
            Exclusive Access
          </h2>
          <p className="text-rose-300/50 text-sm tracking-widest uppercase mb-16">
            Use Code SQUIGLS for your selection
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {affiliates.map((aff) => (
              <a
                key={aff.brand}
                href={aff.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 border border-rose-600/20 hover:border-rose-400/40 hover:bg-rose-800/20 transition-all"
              >
                <div>
                  <h3 className="text-lg text-rose-100 mb-1">{aff.brand}</h3>
                  <p className="text-rose-300/50 text-sm">{aff.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-rose-400 font-mono text-sm tracking-wider">
                    {aff.code}
                  </span>
                  <ExternalLink
                    size={12}
                    className="ml-2 inline text-rose-400/30 group-hover:text-rose-400 transition-colors"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting the Muse */}
      <section id="support" className="py-24 bg-rose-900">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-display italic text-rose-100 mb-16">
            Supporting the Muse
          </h2>

          {/* Wishlists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {supportLinks
              .filter((s) => s.type === 'wishlist')
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border border-rose-600/20 hover:border-rose-400/40 hover:bg-rose-800/20 transition-all"
                >
                  <h3 className="text-lg text-rose-100 mb-2">{link.label}</h3>
                  <p className="text-rose-300/50 text-sm">{link.desc}</p>
                  <ExternalLink
                    size={12}
                    className="mt-3 text-rose-400/30 group-hover:text-rose-400 transition-colors"
                  />
                </a>
              ))}
          </div>

          {/* Direct support */}
          <div className="flex flex-wrap gap-4">
            {supportLinks
              .filter((s) => s.type === 'direct')
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-rose-600/20 text-rose-200/70 text-sm hover:border-rose-400/50 hover:text-rose-100 hover:bg-rose-800/30 transition-all flex items-center gap-2"
                >
                  {link.label}
                  <span className="text-rose-400/40 text-xs font-mono">DIRECT</span>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-rose-dark border-t border-rose-600/15">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="font-display text-2xl italic text-rose-200/40 mb-4">Squigls</p>
          <p className="text-rose-300/30 text-xs tracking-widest">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
