import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const active = i18n.resolvedLanguage ?? i18n.language
  const isEnglish = active.startsWith('en')
  const targetLang = isEnglish ? 'ja' : 'en'
  const label = isEnglish ? t('lang.ja') : t('lang.en')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    document.documentElement.lang = active
  }, [active])

  useEffect(() => {
    if (!isTransitioning) return
  }, [isTransitioning])

  return (
    <button
      type="button"
      className="lang-switcher"
      aria-label={`${t('lang.label')}: ${label}`}
      onClick={() => {
        void i18n.changeLanguage(targetLang)
        setIsTransitioning(true)
      }}
    >
      {label}
    </button>
  )
}
