import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartPanel } from '@/components/cart-panel'

const serif = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
})

const sans = Inter({
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://glowflow.example'),
  title: {
    default: 'GLOW FLOW — Sculptural Candles & Natural Crystals',
    template: '%s | GLOW FLOW',
  },
  description:
    'GLOW FLOW creates sculptural candles, natural crystals and ritual objects inspired by light, earth and the quiet beauty of the home.',
  openGraph: {
    title: 'GLOW FLOW',
    description:
      'Light for the moment. Stone for what remains.',
    url: 'https://glowflow.example',
    siteName: 'GLOW FLOW',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLOW FLOW',
    description:
      'Light for the moment. Stone for what remains.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${serif.variable} ${sans.variable} bg-[#f5f0e8] text-stone-800 antialiased`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(207,181,142,0.24),_transparent_35%),linear-gradient(180deg,#f7f3ee_0%,#f5f0e8_100%)]">
          <Header />
          <main>{children}</main>
          <Footer />
          <CartPanel />
        </div>
      </body>
    </html>
  )
}
