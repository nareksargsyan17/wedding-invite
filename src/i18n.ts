import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './locales/en.json'
import hyTranslation from './locales/hy.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hy: { translation: hyTranslation }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
