import clsx from "clsx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xdstudio",
  description: "This is a static description for all locales",
};
export default async function LocaleLayout({
  children,
  footer,
  navbar,
}: WithlDefaultProps & NextJSReactNodes<"footer" | "navbar">) {
  return (
    <main className={clsx("flex flex-col", "min-h-screen")}>
      {navbar}
      {children}
      {footer}
    </main>
  );
}
