import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SectionDivider from '@/components/SectionDivider'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider from="primary" to="secondary" />
        <Services />
        <SectionDivider from="secondary" to="primary" />
        <Projects />
        <SectionDivider from="primary" to="secondary" />
        <About />
        <SectionDivider from="secondary" to="primary" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
