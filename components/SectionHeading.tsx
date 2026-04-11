interface SectionHeadingProps {
  title: string
  subtitle: string
  label?: string
}

export default function SectionHeading({ title, subtitle, label }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {label && (
        <span className="font-mono text-xs tracking-wider uppercase text-accent-gold mb-3 block">
          {label}
        </span>
      )}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-gold/40" />
        <h2 className="font-display text-3xl md:text-5xl text-text-primary">
          {title}
        </h2>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-gold/40" />
      </div>
      <p className="text-text-secondary font-light max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  )
}
