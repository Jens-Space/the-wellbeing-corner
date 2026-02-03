'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuItems = [
  { href: '/adults', label: 'For Adults' },
  { href: '/teens', label: 'For Teens' },
  { href: '/children', label: 'For Families' },
  { href: '/resources', label: 'Get Help' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="px-4 py-2 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {/* Logo */}
          <Link href="/" aria-label="The Wellbeing Corner Home">
            <img
              src="/the-wellbeing-corner/logo.png"
              alt="The Wellbeing Corner Logo"
              className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
              style={{ width: '400px', height: 'auto' }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            <ul className="flex gap-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 bg-white text-black border-2 border-purple-600 rounded-full transition-all duration-300 font-semibold text-base md:text-lg shadow-md hover:bg-purple-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-purple-600 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm mt-2 pb-4 rounded-xl shadow-lg border border-purple-200 mx-2">
            <ul className="space-y-2 px-2 text-center">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 bg-white text-black border border-purple-300 hover:text-white hover:bg-purple-600 rounded-lg transition-all duration-300 font-medium text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
