import { Roboto, Merriweather } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-roboto' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-merriweather' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${merriweather.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}