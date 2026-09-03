import { useTranslation } from 'react-i18next'
import About from './components/About'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import Navigation from './components/Navigation'

export default function App() {
  const { t } = useTranslation()

  return (
    <main>
      <div className="app-root">
        <Navigation />
        <About />
      </div>
    </main>
  )
}
