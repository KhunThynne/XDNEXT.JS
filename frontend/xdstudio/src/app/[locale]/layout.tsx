import { routing } from "@/libs/i18n/routing";
import clsx from "clsx";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "./providers";
import type { Metadata } from "next";
import Content from "@/shared/components/ui/Content";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

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
  // const session = await auth();
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
                <Content
                  classNames={{
                    outsite: "grow  relative grid  bg-secondary-foreground/5 ",
                    content: "container mx-auto py-5 flex flex-col gap-4",
                  }}
                >
                  <section className="grow">{children}</section>
                </Content>
                {footer}
              </main>
            </Providers>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
