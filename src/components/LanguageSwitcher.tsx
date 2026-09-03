import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', labelKey: 'lang.en' },
  { code: 'ja', labelKey: 'lang.ja' },
] as const

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const active = i18n.resolvedLanguage ?? i18n.language

  useEffect(() => {
    document.documentElement.lang = active
  }, [active])

  return (
    <fieldset className="lang-switcher">
      <legend className="sr-only">{t('lang.label')}</legend>
      {LANGUAGES.map(({ code, labelKey }) => (
        <button
          key={code}
          type="button"
          className={active.startsWith(code) ? 'active' : undefined}
          onClick={() => {
            void i18n.changeLanguage(code)
          }}
        >
          {t(labelKey)}
        </button>
      ))}
    </fieldset>
  )
}
