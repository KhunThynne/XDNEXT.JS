import { routing } from "@/libs/i18n/routing";
import clsx from "clsx";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "./providers";
import type { Metadata } from "next";
import Main from "@/shared/components/layouts/main";
export const metadata: Metadata = {
  title: "Xdstudio",
  description: "This is a static description for all locales",
};
export default async function LocaleLayout({
  children,
  params,
}: GlobalDefaultProps & {
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
        <NextIntlClientProvider>
          <Providers locale={locale}>
            <Main>{children}</Main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
