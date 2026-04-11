'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Calendar } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md shadow-[0_1px_20px_rgba(230,192,104,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <Link href="#home">
          <Image
            src="/enterprise-alchemist-wordmark.png"
            alt="Enterprise Alchemist"
            width={160}
            height={38}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wider uppercase text-text-secondary hover:text-accent-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/vito-enterprisealchemist/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-xs tracking-wider uppercase px-5 py-2.5 text-bg-primary rounded-full hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-accent-gold/25"
            style={{ background: 'linear-gradient(135deg, #B8963E 0%, #E6C068 40%, #F0D68A 100%)' }}
          >
            <Calendar className="mr-1.5 h-3.5 w-3.5" />
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg-primary/98 backdrop-blur-md flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm tracking-wider uppercase text-text-secondary hover:text-accent-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/vito-enterprisealchemist/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center font-mono text-xs tracking-wider uppercase px-7 py-3 text-bg-primary rounded-full transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #B8963E 0%, #E6C068 40%, #F0D68A 100%)' }}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
