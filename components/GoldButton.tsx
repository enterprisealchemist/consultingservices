import { Calendar } from 'lucide-react'
import Link from 'next/link'

interface GoldButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  size?: 'default' | 'lg'
  showCalendarIcon?: boolean
  external?: boolean
}

export default function GoldButton({
  href,
  children,
  variant = 'primary',
  size = 'default',
  showCalendarIcon = false,
  external = false,
}: GoldButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-mono text-xs tracking-wider uppercase rounded-full transition-all duration-300'

  const sizeClasses = size === 'lg'
    ? 'px-10 py-4'
    : 'px-7 py-3'

  const variantClasses =
    variant === 'primary'
      ? 'text-bg-primary shadow-lg hover:shadow-accent-gold/25 hover:scale-[1.02]'
      : 'border border-accent-gold/60 text-accent-gold hover:bg-accent-gold/10 hover:border-accent-gold'

  const className = `${baseClasses} ${sizeClasses} ${variantClasses}`

  const linkProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      className={className}
      style={
        variant === 'primary'
          ? { background: 'linear-gradient(135deg, #B8963E 0%, #E6C068 40%, #F0D68A 100%)' }
          : undefined
      }
      {...linkProps}
    >
      {showCalendarIcon && <Calendar className="mr-2 h-4 w-4" />}
      {children}
    </Link>
  )
}
