import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import { LanguageSwitcher } from './components/LanguageSwitcher'

export default function App() {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)

  return (
    <main>
      <LanguageSwitcher />
      <div className="hero">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite" />
        </a>
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noreferrer"
        >
          <img src={typescriptLogo} className="logo" alt="TypeScript" />
        </a>
      </div>
      <h1>{t('app.title')}</h1>
      <p className="subtitle">{t('app.subtitle')}</p>
      <p>{t('app.description')}</p>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((value) => value + 1)}
      >
        {t('app.count', { count })}
      </button>
      <p className="hint">
        <Trans i18nKey="app.editHint" components={{ code: <code /> }} />
      </p>
    </main>
  )
}
