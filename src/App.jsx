import { ThemeProvider } from './context/ThemeContext.jsx'
import Sky from './components/Sky.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ScrollStack from './components/ScrollStack.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Sky />
      <div className="phone-shell">
        <Navbar />
        <main id="main" className="page pb-28">
          <Hero />
          <ScrollStack>
            <Skills />
            <Experience />
            <Projects />
          </ScrollStack>
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}
