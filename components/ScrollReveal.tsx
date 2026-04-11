'use client'

import { motion } from 'framer-motion'

type AnimationVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: AnimationVariant
}

const variants = {
  fadeUp: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  fadeLeft: { initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 } },
  fadeRight: { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  variant = 'fadeUp',
}: ScrollRevealProps) {
  const v = variants[variant]
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
