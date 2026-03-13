import type { Metadata } from 'next'
import { Sofia, Playfair_Display_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sofia = Sofia({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sofia',
})

const playfair = Playfair_Display_SC({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Éclosion – Pâtisserie Artisanale',
  description: 'Élégance & infinie gourmandise. Pâtisserie artisanale française, commandes sur réservation.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${sofia.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
