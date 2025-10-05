import clsx from "clsx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XD Shop",
  description: "This is a static description for all locales",
};
export default async function LocaleLayout({
  children,
  footer,
  navbar,
}: WithlDefaultProps & NextJSReactNodes<"footer" | "navbar">) {
  return (
    <div className={clsx("flex min-h-screen flex-col")}>
      <header>{navbar}</header>
      <main className="flex-1">{children}</main>
      <footer className="flex-none">{footer}</footer>
    </div>
  );
}
