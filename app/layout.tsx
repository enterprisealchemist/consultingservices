import type { Metadata } from 'next'
import { Instrument_Serif, Outfit, Jura } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

const jura = Jura({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Enterprise Alchemist | AI Consulting',
  description: 'AI strategy, custom solutions, and data-driven consulting. We help businesses turn complexity into competitive advantage with AI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${outfit.variable} ${jura.variable}`}>
      <body className="font-sans bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
