import { useRef } from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Navigation from './components/Navigation'
import Projects from './components/Projects'

export default function App() {
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

  return (
    <main>
      <div className="app-root">
        <Navigation />

        <div className="main-content">
          <section id="about" ref={aboutRef}>
            <About />
          </section>
          <section id="experience" ref={experienceRef}>
            <Experience />
          </section>
          <section id="projects" ref={projectsRef}>
            <Projects />
          </section>
        </div>
      </div>
    </main>
  )
}
