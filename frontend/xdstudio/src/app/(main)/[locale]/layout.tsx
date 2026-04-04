import { routing } from "@/libs/i18n/routing";
import clsx from "clsx";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "../providers";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { GoToTopButton } from "@/shared/components/ui/GoToTopButton";
import { ThemeProvider } from "@wrksz/themes/next";

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
  const { locale = "en" } = await params;
  const session = await auth();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={clsx(
          // geistSans.variable, geistMono.variable,
          `antialiased`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Providers locale={locale} session={session}>
              <NextIntlClientProvider>
                {children}
                <GoToTopButton />
              </NextIntlClientProvider>
            </Providers>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
