import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useSmoothAnchors } from './hooks/useSmoothAnchors'
import { useTheme } from './hooks/useTheme'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Healthcare from './sections/Healthcare'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Skills from './sections/Skills'
import TechMarquee from './sections/TechMarquee'
import WhyMe from './sections/WhyMe'

export default function App() {
  const { theme, toggle } = useTheme()
  useSmoothAnchors()

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[70] -translate-y-20 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main id="main">
          <Hero />
          <TechMarquee />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Healthcare />
          <Services />
          <WhyMe />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </MotionConfig>
    </LazyMotion>
  )
}
