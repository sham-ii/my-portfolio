import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    // Respects the visitor's "reduce motion" OS setting for all animations
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[60] rounded-full bg-primary-dark px-5 py-3 text-sm font-semibold text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </MotionConfig>
  )
}
