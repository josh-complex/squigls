import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <>
      <Separator className="bg-rose-300/5" />
      <footer className="py-12 bg-rose-950 text-center">
        <div className="text-[10px] tracking-[0.5em] uppercase mb-4 text-primary">
          Squigls
        </div>
        <div className="text-[10px] tracking-widest text-rose-300/30">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </footer>
    </>
  )
}
