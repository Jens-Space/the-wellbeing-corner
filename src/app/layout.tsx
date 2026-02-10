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
  metadataBase: new URL('https://jens-space.github.io'),
  manifest: '/the-wellbeing-corner/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'The Wellbeing Corner',
  },
  formatDetection: {
    telephone: false,
  },
  icons: [
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-72x72.png', sizes: '72x72' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-96x96.png', sizes: '96x96' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-128x128.png', sizes: '128x128' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-144x144.png', sizes: '144x144' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-150x150.png', sizes: '150x150' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-152x152.png', sizes: '152x152' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-192x192.png', sizes: '192x192' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-310x310.png', sizes: '310x310' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-384x384.png', sizes: '384x384' },
    { rel: 'icon', url: '/the-wellbeing-corner/icons/icon-512x512.png', sizes: '512x512' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-72x72.png', sizes: '72x72' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-96x96.png', sizes: '96x96' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-128x128.png', sizes: '128x128' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-144x144.png', sizes: '144x144' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-150x150.png', sizes: '150x150' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-152x152.png', sizes: '152x152' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-192x192.png', sizes: '192x192' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-310x310.png', sizes: '310x310' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-384x384.png', sizes: '384x384' },
    { rel: 'apple-touch-icon', url: '/the-wellbeing-corner/icons/icon-512x512.png', sizes: '512x512' },
    { rel: 'maskable-icon', url: '/the-wellbeing-corner/icons/icon-512x512.png', sizes: '512x512' },
  ],
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/the-wellbeing-corner/manifest.json" />
        <meta name="theme-color" content="#818cf8" />
      </head>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/the-wellbeing-corner/sw.js');
                });
              }
            `,
          }}
        />
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
                © 2026 Jens-Space | All rights reserved
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
