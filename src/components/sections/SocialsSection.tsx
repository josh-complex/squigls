import {
  AtSign,
  Camera,
  Citrus,
  Clapperboard,
  Gamepad2,
  Ghost,
  MessageCircle,
  Music,
  PlayCircle,
} from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { SocialCard } from '@/components/SocialCard'
import { SocialPill } from '@/components/SocialPill'

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

export function SocialsSection() {
  return (
    <section id="socials" className="bg-rose-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading title="The Socials" badge="Digital Editorial Spread" />

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
  )
}
