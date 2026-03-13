import { Link } from '@tanstack/react-router'

import ClerkHeader from '../integrations/clerk/header-user.tsx'

import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-8 py-5 flex items-center justify-between bg-transparent">
        <Link to="/" className="font-display text-2xl text-rose-100 tracking-wide italic">
          Squigls
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-rose-200/80">
          <a href="#lookthrough" className="hover:text-rose-100 transition-colors">Lookthrough</a>
          <a href="#affiliates" className="hover:text-rose-100 transition-colors">Affiliates</a>
          <a href="#support" className="hover:text-rose-100 transition-colors">Support</a>
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 hover:bg-rose-800/50 rounded-lg transition-colors text-rose-100"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-rose-900 text-rose-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-rose-800">
          <h2 className="font-display text-xl italic text-rose-100">Squigls</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-rose-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-rose-500 hover:bg-rose-500/80 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>
          <a
            href="#lookthrough"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-800 transition-colors mb-2"
          >
            <span className="font-medium">Lookthrough</span>
          </a>
          <a
            href="#affiliates"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-800 transition-colors mb-2"
          >
            <span className="font-medium">Affiliates</span>
          </a>
          <a
            href="#support"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-800 transition-colors mb-2"
          >
            <span className="font-medium">Support</span>
          </a>
        </nav>

        <div className="p-4 border-t border-rose-800 bg-rose-900 flex flex-col gap-2">
          <ClerkHeader />
        </div>
      </aside>
    </>
  )
}
