'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/adults', label: 'For Adults' },
  { href: '/teens', label: 'For Teens' },
  { href: '/children', label: 'For Families' },
  { href: '/resources', label: 'Get Help' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="px-4 py-3 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Logo */}
          <Link href="/" aria-label="The Wellbeing Corner Home">
            <Image
              src="/logo.png"
              alt="The Wellbeing Corner Logo"
              width={500}
              height={500}
              className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
              style={{ width: '280px', height: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            <ul className="flex gap-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-5 py-2 bg-white text-gray-800 border-2 border-emerald-600 rounded-full transition-all duration-300 font-semibold text-base md:text-lg shadow-md hover:bg-emerald-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-emerald-600 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm mt-3 pb-4 rounded-xl shadow-lg border border-emerald-200 mx-2">
            <ul className="space-y-2 px-2 text-center">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 bg-white text-gray-800 border border-emerald-300 hover:text-white hover:bg-emerald-600 rounded-lg transition-all duration-300 font-medium text-lg"
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
