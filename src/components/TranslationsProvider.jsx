"use client";

import { I18nextProvider } from "react-i18next";
import { useEffect, useState } from "react";
import initTranslations from "@/i18n";
import { createInstance } from "i18next";

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}) {
  const [i18nInstance, setI18nInstance] = useState(null);

  useEffect(() => {
    const i18n = createInstance();
    initTranslations(locale, namespaces, i18n, resources).then(() => {
      setI18nInstance(i18n);
    });
  }, [locale, namespaces, resources]);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
