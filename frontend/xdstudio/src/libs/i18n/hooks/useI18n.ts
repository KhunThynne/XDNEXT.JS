"use client";

import { useTranslations } from "next-intl";

const loggedMissingKeys = ((globalThis as any).__i18nLoggedMissingKeys__ ??=
  new Set<string>());

export function useI18n(namespace?: string) {
  const t = useTranslations(namespace);

  const translate = (key: string, values?: Record<string, any>) => {
    if (!t.has(key)) {
      const fullKey = namespace ? `${namespace}.${key}` : key;
      if (!loggedMissingKeys.has(fullKey)) {
        console.warn(`[i18n] Missing translation key: ${fullKey}`);
        loggedMissingKeys.add(fullKey);
      }
      return key;
    }

    return t(key, values);
  };

  return translate;
}
