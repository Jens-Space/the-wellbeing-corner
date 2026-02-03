'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuItems = [
  { href: '/adults', label: 'For Adults', color: 'bg-sky-100 hover:bg-sky-200 border-sky-400' },
  { href: '/teens', label: 'For Teens', color: 'bg-violet-100 hover:bg-violet-200 border-violet-400' },
  { href: '/children', label: 'For Families', color: 'bg-amber-100 hover:bg-amber-200 border-amber-400' },
  { href: '/resources', label: 'Get Help', color: 'bg-teal-100 hover:bg-teal-200 border-teal-400' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="px-4 py-2 bg-white">
      <div className="container mx-auto">
        {/* Logo - always centered */}
        <div className="flex justify-center mb-3 lg:mb-0">
          <Link href="/" aria-label="The Wellbeing Corner Home">
            <img
              src="/the-wellbeing-corner/logo.png"
              alt="The Wellbeing Corner Logo"
              className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
              style={{ width: '400px', height: 'auto' }}
            />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
          {/* Desktop Menu - hidden on smaller screens */}
          <div className="hidden lg:flex gap-2">
            <ul className="flex gap-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-5 py-2 ${item.color} border-2 rounded-full transition-all duration-300 font-semibold text-base md:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button - only on smaller screens */}
          <button
            className="lg:hidden p-2 text-purple-600 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-3 pb-4 rounded-xl shadow-lg border border-purple-200 mx-2">
            <ul className="space-y-2 px-2 text-center">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-3 px-4 ${item.color} border rounded-lg transition-all duration-300 font-medium text-lg`}
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
