import {
  Gamepad2,
  MessageCircle,
  PlayCircle,
} from 'lucide-react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  SpotifyIcon,
  InstagramIcon,
  NewTwitterIcon,
  SnapchatIcon,
  TiktokIcon,
  ThreadsIcon,
} from '@hugeicons/core-free-icons'
import { SectionHeading } from '@/components/SectionHeading'
import { SocialCard } from '@/components/SocialCard'
import { LogoLoop } from '@/components/ui/LogoLoop'
import type { LogoItem } from '@/components/ui/LogoLoop'
import AnimatedContent from '@/components/ui/AnimatedContent'
import FadeContent from '@/components/ui/FadeContent'

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

const secondaryLinks: Array<{
  label: string
  url: string
  category: string
  hugeicon?: any
}> = [
  { label: 'Spotify', url: 'https://open.spotify.com/user/kaylee.mattox11', category: 'Listen', hugeicon: SpotifyIcon },
  { label: 'Instagram', url: 'https://www.instagram.com/squigls_', category: 'Visual', hugeicon: InstagramIcon },
  { label: 'X', url: 'https://x.com/squigls_', category: 'Thoughts', hugeicon: NewTwitterIcon },
  { label: 'Snapchat', url: 'https://snapchat.com/t/YdbjpYpe', category: 'Personal', hugeicon: SnapchatIcon },
  { label: 'TikTok', url: 'https://www.tiktok.com/@squigls._', category: 'Motion', hugeicon: TiktokIcon },
  { label: 'Threads', url: 'https://www.threads.net/@squigls_', category: 'Social', hugeicon: ThreadsIcon },
  { label: 'Lemon8', url: 'https://v.lemon8-app.com/s/OgShbeQcR', category: 'Lifestyle' },
]

const secondaryLogoItems: LogoItem[] = secondaryLinks.map((link) => ({
  node: (
    <div className="flex items-center gap-3 px-5 py-3 border border-rose-300/10 hover:border-rose-300/40 transition-all group cursor-pointer">
      {link.hugeicon ? (
        <HugeiconsIcon icon={link.hugeicon} className="text-rose-300/60 group-hover:text-rose-300 transition-colors" size={20} />
      ) : (
        <span className="font-display text-sm italic text-rose-300/60 group-hover:text-rose-300 transition-colors w-5 h-5 inline-flex items-center justify-center">{link.label.charAt(0)}</span>
      )}
      <span className="font-display text-base text-rose-100 group-hover:italic transition-all duration-300">
        {link.label}
      </span>
    </div>
  ),
  href: link.url,
  title: link.label,
}))

export function SocialsSection() {
  return (
    <section id="socials" className="bg-rose-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <FadeContent duration={800} delay={100}>
          <SectionHeading title="The Socials" badge="Digital Editorial Spread" />
        </FadeContent>

        <div className="mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {socialLinks.map((link, i) => (
            <AnimatedContent key={link.label} distance={60} direction="vertical" duration={0.7} delay={0.15 * i}>
              <SocialCard {...link} />
            </AnimatedContent>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <LogoLoop
          logos={secondaryLogoItems}
          speed={40}
          direction="left"
          gap={16}
          logoHeight={48}
          pauseOnHover
          fadeOut
          fadeOutColor="rgb(76,5,25)"
          ariaLabel="Secondary social platforms"
        />
      </div>
    </section>
  )
}
