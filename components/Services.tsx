import { Compass, Brain, Plug, BarChart3, Layers } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import ScrollReveal from './ScrollReveal'

const featuredService = {
  icon: Layers,
  label: 'Flagship',
  title: 'AI-Powered Products & Platforms',
  description:
    'Full-stack development for AI-native products. From recommendation engines to multi-agent systems, I architect and ship production-grade platforms that put AI at the core. End-to-end ownership from concept to launch.',
}

const services = [
  {
    icon: Compass,
    label: 'Strategy',
    title: 'AI Strategy & Roadmaps',
    description:
      'Navigate the AI landscape with clarity. We help you identify high-impact AI opportunities, build a phased adoption roadmap, and align AI initiatives with your business goals.',
  },
  {
    icon: Brain,
    label: 'Engineering',
    title: 'Custom AI/ML Solutions',
    description:
      'Bespoke AI that works for your business. From intelligent agents and RAG pipelines to custom ML models and automations, we build production-grade AI systems tailored to your needs.',
  },
  {
    icon: Plug,
    label: 'Integration',
    title: 'AI Integration',
    description:
      'Embed AI into how you already work. We integrate AI tools and capabilities into your existing workflows, systems, and processes — minimizing disruption while maximizing impact.',
  },
  {
    icon: BarChart3,
    label: 'Analytics',
    title: 'Data & Analytics',
    description:
      'Turn your data into decisions. From KPI frameworks and dashboards to deep analytics, we transform raw data into actionable business intelligence.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-bg-secondary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Our Services"
            title="What We Do"
            subtitle="Full-spectrum AI consulting — from strategy to production"
          />
        </ScrollReveal>

        {/* Featured / flagship service */}
        <ScrollReveal>
          <div className="mb-6">
            <ServiceCard {...featuredService} featured />
          </div>
        </ScrollReveal>

        {/* Supporting services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
