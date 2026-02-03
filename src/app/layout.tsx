import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'The Wellbeing Corner',
  description: 'An inclusive, compassionate website supporting adults, teens, and children with mental health education and resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl xl:max-w-8xl mx-auto py-6 sm:px-6 lg:px-8 px-4">
            {children}
          </main>
          <footer className="bg-white border-t mt-12">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500 mb-2">
                This website provides educational and supportive information only and is not a substitute for professional mental health care.
              </p>
              <p className="text-center text-xs text-gray-400">
                © 2026 Jen's Space. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}