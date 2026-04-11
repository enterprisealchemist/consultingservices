import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'

const milestones = [
  { number: '01', title: 'BSc Mathematics', subtitle: 'University of Victoria' },
  { number: '02', title: 'Financial Services', subtitle: 'Front-line advisory & financial planning' },
  { number: '03', title: 'Data & Analytics', subtitle: 'Performance reporting to executive leadership' },
  { number: '04', title: 'Enterprise Data & AI', subtitle: 'Product Owner, cloud migration, Agile delivery' },
  { number: '05', title: 'IT Contracts & Licensing', subtitle: 'Westland Insurance Group' },
  { number: '06', title: 'Enterprise Alchemist', subtitle: 'Owner-Operator, AI & data consulting' },
]

export default function About() {
  return (
    <section id="about" className="bg-bg-secondary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Background"
            title="About"
            subtitle="Business-first thinking. Technical depth."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Timeline */}
          <ScrollReveal>
            <div className="space-y-0">
              {milestones.map((milestone, i) => (
                <div key={milestone.title} className="flex gap-5">
                  {/* Number + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full border border-accent-gold/40 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm text-accent-gold">{milestone.number}</span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px bg-accent-gold/20 flex-1 min-h-[1.5rem]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6 pt-1.5">
                    <h3 className="font-display text-text-primary text-lg">{milestone.title}</h3>
                    <p className="text-text-secondary text-sm font-light">{milestone.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Narrative */}
          <div>
            <ScrollReveal delay={0.1}>
              {/* Pull quote */}
              <blockquote className="border-l-2 border-accent-gold/40 pl-5 mb-8">
                <p className="font-display text-xl text-text-primary italic leading-relaxed">
                  &ldquo;I&apos;ve sat in the seats. I build solutions that work in the real world.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-4 text-text-secondary font-light leading-relaxed">
                <p>
                  A <span className="text-accent-gold font-normal">self-driven learner</span> who
                  earned a BSc in Mathematics with multiple scholarships from the University of
                  Victoria, with a foundation in Computer Science and Physics.
                </p>
                <p>
                  My career started on the front lines of financial services — advising clients,
                  building ad-hoc reports, and earning recognition as a top performer. That
                  ground-floor understanding of how businesses actually operate became the
                  foundation for everything that followed.
                </p>
                <div className="h-px w-16 bg-accent-gold/20 my-6" />
                <p>
                  From there, I moved into{' '}
                  <span className="text-accent-gold font-normal">data analytics and business intelligence</span>,
                  owning performance reporting at the executive level. Then into{' '}
                  <span className="text-accent-gold font-normal">enterprise AI</span> — leading a
                  Data & Artificial Intelligence squad as Product Owner, driving cloud migration, and
                  working in Agile delivery frameworks.
                </p>
                <p>
                  Today, I bring that full arc — business operations, data strategy, and AI
                  engineering — to every engagement. I&apos;m not a technologist parachuting in.
                  I&apos;ve sat in the seats, and I build solutions that work in the real world.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
