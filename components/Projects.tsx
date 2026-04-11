import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import ScrollReveal from './ScrollReveal'

const projects = [
  {
    name: 'Artsibyl',
    url: 'https://www.artsibyl.com',
    summary: 'Full-stack AI-powered art print marketplace',
    description:
      'Technical co-founder of a complete e-commerce platform combining ML-powered art discovery with international print fulfillment. Features a ResNet50 style classifier trained on 25,600+ artworks and a recommendation engine using ResNet101 embeddings for similarity-based discovery.',
    tech: ['Next.js 14', 'Django 5', 'PostgreSQL', 'Redis', 'Celery', 'Stripe', 'ResNet50', 'ResNet101'],
    metrics: [
      { value: '62', label: 'React Components' },
      { value: '13.7K+', label: 'Lines of Code' },
      { value: '6 / 7', label: 'Currencies / Regions' },
    ],
    gradientFrom: '#B8963E',
    gradientTo: '#3B82F6',
    featured: true,
  },
  {
    name: 'Dream Protocol',
    liveBadge: true,
    summary: 'Multi-agent autonomous AI storytelling system',
    description:
      'Creator and architect of an autonomous system where 5 AI personalities investigate a fictional mystery across 16 weeks of YouTube content. Orchestrates 6 autonomous agents with a multi-model LLM architecture and 3-layer persistent state management.',
    tech: ['Python', 'Claude API', 'YouTube API', 'Discord', 'Multi-Agent Systems'],
    metrics: [
      { value: '~15K', label: 'Lines of Python' },
      { value: '6', label: 'Autonomous Agents' },
      { value: '16', label: 'Week Narrative Arc' },
    ],
    gradientFrom: '#6366F1',
    gradientTo: '#8B5CF6',
  },
  {
    name: 'The Fitness Academy',
    summary: 'Data-driven performance consulting',
    description:
      'Designed KPI frameworks and built custom performance tracking tools for a small fitness centre, translating business needs into data-driven decision instruments for a non-technical client.',
    tech: ['Excel', 'KPI Design', 'Data Analytics'],
    metrics: [
      { value: 'Custom', label: 'KPI Framework' },
      { value: '1', label: 'Non-Tech Client' },
      { value: '100%', label: 'Adoption Rate' },
    ],
    gradientFrom: '#059669',
    gradientTo: '#10B981',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-primary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Portfolio"
            title="Selected Work"
            subtitle="Real projects. Real impact."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.1} className={project.featured ? 'md:col-span-2' : ''}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
