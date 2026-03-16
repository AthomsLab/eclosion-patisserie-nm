import type { Metadata } from 'next'
import { Fleur_De_Leah, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fleurDeLeah = Fleur_De_Leah({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fleur-de-leah',
})

const playfair = Playfair_Display({ 
  weight: ['400', '500', '600'],
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
    <html lang="fr" className={`${fleurDeLeah.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased m-0 p-0 w-screen overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
