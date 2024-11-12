'use client'

import TranslationsProvider from '@/components/TranslationsProvider'
import Home from '@/components/home/home'

const i18nNamespaces = ['default']

export default function App({ params: { locale } }) {
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
      <Home />
    </TranslationsProvider>
  )
}
