import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HomeServer GTL - Votre Maison Intelligente, 100% Privée',
  description: 'Un seul boîtier dans votre tableau électrique qui gère TOUTE votre maison : sécurité, confort, économies, multimédia. Simple comme une box internet, mais 100× plus puissant.',
  keywords: 'domotique, smart home, maison intelligente, sécurité, privacy, économies énergie',
  openGraph: {
    title: 'HomeServer GTL - Votre Maison Intelligente',
    description: 'Sécurité, confort, économies, multimédia - contrôlé depuis votre smartphone',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
