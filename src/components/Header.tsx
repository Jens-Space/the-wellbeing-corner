'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuItems = [
  { href: '/adults', label: 'For Adults', emoji: '👥', color: 'bg-blue-500 hover:bg-blue-600 border-blue-600' },
  { href: '/teens', label: 'For Teens', emoji: '🧑‍🎓', color: 'bg-purple-500 hover:bg-purple-600 border-purple-600' },
  { href: '/children', label: 'For Families', emoji: '👨‍👩‍👧‍👦', color: 'bg-orange-500 hover:bg-orange-600 border-orange-600' },
  { href: '/resources', label: 'Get Help', emoji: '🆘', color: 'bg-emerald-500 hover:bg-emerald-600 border-emerald-600' },
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
          <div className="hidden md:flex gap-2">
            <ul className="flex gap-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-5 py-2 ${item.color} text-white border-2 rounded-full transition-all duration-300 font-semibold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2`}
                  >
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
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
                    className={`block py-3 px-4 ${item.color} text-white border rounded-lg transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
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
