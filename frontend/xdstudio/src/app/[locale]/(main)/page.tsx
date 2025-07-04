"use client";

import { useStore } from "@/shared/stores/useNameStore";

export default function HomePage() {
  // const t = useTranslations("HomePage");
  const { dataStore } = useStore();
  return <div>{dataStore.test}</div>;
}
