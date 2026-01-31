'use client'

import Link from 'next/link'

const menuItems = [
  { href: '/adults', label: '👥 For Adults' },
  { href: '/teens', label: '🧑‍🎓 For Teens' },
  { href: '/children', label: '👨‍👩‍👧‍👦 For Families' },
  { href: '/resources', label: '📞 Get Help' },
]

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-700 flex items-center gap-2 flex-shrink-0">
            🌱 Mental Health Hub
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="flex items-center space-x-3 flex-1 justify-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-5 py-3 rounded-md text-base font-semibold transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
