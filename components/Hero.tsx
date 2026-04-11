'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import GoldButton from './GoldButton'

const transformations = [
  { from: 'data', to: 'decisions' },
  { from: 'complexity', to: 'clarity' },
  { from: 'ideas', to: 'systems' },
  { from: 'strategy', to: 'results' },
  { from: 'risk', to: 'confidence' },
  { from: 'challenges', to: 'growth' },
]

const INTERVAL = 2400
const STAGGER_DELAY = 300
const TRANSITION_DURATION = 0.4

export default function Hero() {
  const [fromIndex, setFromIndex] = useState(0)
  const [toIndex, setToIndex] = useState(0)
  const fromRef = useRef(0)

  const advance = useCallback(() => {
    const next = fromRef.current + 1
    if (next >= transformations.length) return false
    fromRef.current = next
    setFromIndex(next)
    return next < transformations.length - 1
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const shouldContinue = advance()
      if (!shouldContinue) clearInterval(timer)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [advance])

  useEffect(() => {
    if (fromIndex === 0) return
    const delay = setTimeout(() => {
      setToIndex(fromIndex)
    }, STAGGER_DELAY)
    return () => clearTimeout(delay)
  }, [fromIndex])

  const currentFrom = transformations[fromIndex]
  const currentTo = transformations[toIndex]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-8"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(230,192,104,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <Image
          src="/enterprise-alchemist-wordmark.png"
          alt="Enterprise Alchemist"
          width={400}
          height={96}
          priority
          className="mb-8"
        />

        <h1
          className="font-display text-text-primary leading-tight mb-4"
          style={{ fontSize: 'clamp(1.1rem, 4.8vw, 3.75rem)' }}
        >
          <LayoutGroup>
            <motion.span layout className="flex items-baseline justify-center gap-[0.3em]">
              <motion.span layout="position">Transform</motion.span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentFrom.from}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
                  className="text-accent-gold"
                >
                  {currentFrom.from}
                </motion.span>
              </AnimatePresence>
              <motion.span layout="position">into</motion.span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTo.to}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
                  className="text-accent-gold"
                >
                  {currentTo.to}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </LayoutGroup>
        </h1>

        <p className="font-mono text-xs md:text-sm tracking-wider uppercase text-text-secondary mb-8">
          AI Strategy &middot; Custom Solutions &middot; Data-Driven Results
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <GoldButton
            href="https://calendly.com/vito-enterprisealchemist/30min"
            showCalendarIcon
            external
          >
            Book a Free Consultation
          </GoldButton>
          <GoldButton href="#services" variant="outline">
            View Services
          </GoldButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-text-muted" />
      </div>
    </section>
  )
}
