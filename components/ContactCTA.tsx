import GoldButton from './GoldButton'
import ScrollReveal from './ScrollReveal'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-bg-primary py-20 md:py-28">
      {/* Subtle radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(230,192,104,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Left: heading and text */}
          <ScrollReveal variant="fadeLeft">
            <div>
              <span className="font-mono text-xs tracking-wider uppercase text-accent-gold block mb-3">
                Get Started
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-4">
                Let&apos;s Build Something
              </h2>
              <p className="text-text-secondary font-light leading-relaxed">
                Whether you&apos;re exploring AI for the first time or scaling an existing initiative,
                a 30-minute conversation is the best place to start.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: CTA card */}
          <ScrollReveal variant="fadeRight" delay={0.1}>
            <div className="mt-8 md:mt-0 p-8 rounded-2xl border border-accent-gold/20 bg-bg-surface/50 text-center">
              <span className="font-mono text-[10px] tracking-wider uppercase text-accent-gold/70 block mb-6">
                Start the Conversation
              </span>
              <GoldButton
                href="https://calendly.com/vito-enterprisealchemist/30min"
                size="lg"
                showCalendarIcon
                external
              >
                Book a Free Consultation
              </GoldButton>
              <p className="mt-6 text-text-muted text-sm font-light">
                Or reach out directly:{' '}
                <a
                  href="mailto:vito@enterprisealchemist.com"
                  className="text-accent-gold hover:underline"
                >
                  vito@enterprisealchemist.com
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
