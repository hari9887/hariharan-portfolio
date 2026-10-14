import { ThemeProvider } from './context/ThemeContext.jsx'
import Sky from './components/Sky.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import { PullCharacter } from './components/PullCard.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Sky />
      <Navbar />
      <main id="main" className="page pb-28">
        <Hero />
        <div className="relative">
          <PullCharacter />
          <Skills />
          <Experience />
          <Projects />
        </div>
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
