import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-accent-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="#home">
            <Image
              src="/enterprise-alchemist-wordmark.png"
              alt="Enterprise Alchemist"
              width={120}
              height={29}
              className="h-6 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] tracking-wider uppercase text-text-muted hover:text-accent-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="mailto:vito@enterprisealchemist.com"
            className="text-sm font-light text-text-muted hover:text-accent-gold transition-colors"
          >
            vito@enterprisealchemist.com
          </a>
        </div>

        <div className="border-t border-border-subtle mt-8 pt-6 text-center">
          <p className="text-text-muted text-xs font-light">
            &copy; {new Date().getFullYear()} Enterprise Alchemist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
