import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  label: string
  featured?: boolean
}

export default function ServiceCard({ icon: Icon, title, description, label, featured = false }: ServiceCardProps) {
  if (featured) {
    return (
      <div
        className="group relative bg-bg-surface border border-accent-gold/30 rounded-xl p-8 md:p-10 transition-all duration-300 hover:border-accent-gold/60 hover:shadow-lg hover:shadow-accent-gold/10 overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(184,150,62,0.08) 0%, rgba(26,26,38,1) 50%, rgba(26,26,38,1) 100%)',
        }}
      >
        {/* Subtle gold gradient accent line on top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(230,192,104,0.6), transparent)' }}
        />

        <div className="flex items-start gap-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, rgba(184,150,62,0.25) 0%, rgba(230,192,104,0.12) 100%)' }}
          >
            <Icon className="h-7 w-7 text-accent-gold" />
          </div>
          <div className="flex-1">
            <span className="font-mono text-[11px] tracking-wider uppercase text-accent-gold block mb-2">
              {label}
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-3">{title}</h3>
            <p className="text-text-secondary md:text-base font-light leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group bg-bg-surface border border-border-subtle rounded-xl p-6 md:p-8 border-l-4 border-l-accent-gold/60 hover:border-l-accent-gold transition-all duration-300 hover:bg-warm-800 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5">
      <div className="flex items-start gap-5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, rgba(184,150,62,0.15) 0%, rgba(230,192,104,0.08) 100%)' }}
        >
          <Icon className="h-5 w-5 text-accent-gold" />
        </div>
        <div>
          <span className="font-mono text-[10px] tracking-wider uppercase text-accent-gold/70 block mb-1">
            {label}
          </span>
          <h3 className="font-display text-xl text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary text-sm font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
