import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  label: string
}

export default function ServiceCard({ icon: Icon, title, description, label }: ServiceCardProps) {
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
