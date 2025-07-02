// src/hooks/useI18n.ts
"use client";

import { useTranslations } from "next-intl";

export function useI18n(namespace?: string) {
  const t = useTranslations(namespace);

  const translate = (key: string, values?: Record<string, any>) => {
    if (!t.has(key)) {
      console.warn(
        `[i18n] Missing translation key: ${namespace ? namespace + "." : ""}${key}`
      );
      return key;
    }
    return t(key, values);
  };

  return translate;
}
