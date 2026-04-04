"use client";
import type { ThemeProviderProps } from "@wrksz/themes/next";
import dynamic from "next/dynamic";
const NextThemesProvider = dynamic(
  () => import("@wrksz/themes/next").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
