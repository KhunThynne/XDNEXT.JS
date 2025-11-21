
import { routing } from "@/libs/i18n/routing";
import clsx from "clsx";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { GoToTopButton } from "@/shared/components/ui/GoToTopButton";

export const metadata: Metadata = {
  title: "XD Shop",
  description: "This is a static description for all locales",
};
export default async function LocaleLayout({
  children,
  params,
}: WithChildren & {
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  const session = await auth();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale ?? "en"}>
      <body
        suppressHydrationWarning
        className={clsx(
          // geistSans.variable, geistMono.variable,
          `antialiased`
        )}
      >
        <SessionProvider>
          <NextIntlClientProvider>
            <Providers locale={locale} session={session}>
              {children}
              <GoToTopButton />
            </Providers>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
