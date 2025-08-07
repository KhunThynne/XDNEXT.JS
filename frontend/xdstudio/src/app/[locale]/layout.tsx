import { routing } from "@/libs/i18n/routing";
import clsx from "clsx";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "./providers";
import type { Metadata } from "next";
import Content from "@/shared/components/ui/Content";
import { getSession, SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Xdstudio",
  description: "This is a static description for all locales",
};
export default async function LocaleLayout({
  children,
  params,
  footer,
  navbar,
}: GlobalDefaultProps &
  NextJSReactNodes<"footer" | "navbar"> & {
    params: Promise<{ locale: string }>;
  }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={clsx(
          // geistSans.variable, geistMono.variable,
          `antialiased`
        )}
      >
        <SessionProvider>
          <NextIntlClientProvider>
            <Providers locale={locale}>
              <main className={clsx("flex flex-col", "min-h-screen")}>
                {navbar}
                {children}
                {footer}
              </main>
            </Providers>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
