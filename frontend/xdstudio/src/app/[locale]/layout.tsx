import { routing } from "@/libs/i18n/routing";
import clsx from "clsx";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { Kanit } from "next/font/google";
export const metadata: Metadata = {
  title: "XD SHOP :: ระบบร้านค้า Fivem",
  description: "Website Developer by XD.STUDIO",
};

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["500"],
  display: "swap",
});
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={clsx(
          // geistSans.variable, geistMono.variable,
          `antialiased`,
          kanit.className
        )}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
