import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Metric {
  value: string
  label: string
}

interface ProjectCardProps {
  name: string
  url?: string
  liveBadge?: boolean
  summary: string
  description: string
  tech: string[]
  metrics: Metric[]
  gradientFrom?: string
  gradientTo?: string
  featured?: boolean
}

export default function ProjectCard({
  name,
  url,
  liveBadge,
  summary,
  description,
  tech,
  metrics,
  gradientFrom = '#1A1A26',
  gradientTo = '#12121A',
  featured = false,
}: ProjectCardProps) {
  return (
    <div className="bg-bg-surface border border-border-subtle rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20">
      {/* Gradient header */}
      <div
        className="h-2"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      />

      <div className={`p-6 md:p-8 ${featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}`}>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display text-2xl text-text-primary">{name}</h3>
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gold hover:text-accent-gold-hover transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
            {liveBadge && (
              <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                Live
              </span>
            )}
          </div>

          <p className="text-accent-gold font-light text-sm mb-3">{summary}</p>
          <p className="text-text-secondary font-light text-sm leading-relaxed mb-6">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full bg-accent-gold/8 text-accent-gold/80 border border-accent-gold/15"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stat blocks */}
        <div className={`grid gap-4 ${featured ? 'grid-cols-1 md:self-center' : 'grid-cols-3'}`}>
          {metrics.map((m) => (
            <div key={m.label} className="text-center p-3 rounded-lg bg-bg-primary/50">
              <div className="font-display text-lg text-accent-gold">{m.value}</div>
              <div className="font-mono text-[10px] tracking-wider uppercase text-text-muted mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
