"use client";

import Error from "next/error";
import { useLocaleStore } from "../stores/useLocaleStore";

export default function TextComponent() {
  const { dataStore } = useLocaleStore();
  return (
    <>
      <Error statusCode={404} withDarkMode={true}  />
      {JSON.stringify(dataStore)}
    </>
  );
}
