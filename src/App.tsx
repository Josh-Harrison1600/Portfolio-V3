import About from './components/About'
import Experience from './components/Experience'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
export default function App() {
  return (
    <main>
      <div className="app-root">
        <Navigation />

        <div className="main-content">
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  )
}
