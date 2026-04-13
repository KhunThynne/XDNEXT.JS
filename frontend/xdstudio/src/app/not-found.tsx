import { getLocale } from "next-intl/server";
import getRequestConfig from "@/shared/libs/i18n/request";
import { createTranslator } from "next-intl";
import Link from "next/link";
import { Button } from "@/shared/libs/shadcn/ui/button";
import _ from "lodash";

import Content from "@/shared/components/Content";
import clsx from "clsx";
import { ThemeProvider } from "@wrksz/themes/next";
export default async function NotFoundRoot() {
  const locale = await getLocale();
  const { messages } = await getRequestConfig({
    requestLocale: Promise.resolve(locale),
  });
  if (!messages) {
    throw new Error("Translation messages not found");
  }
  const t = createTranslator({ locale, messages });
  return (
    <html key="global-not-found" suppressHydrationWarning>
      <body className={clsx(`antialiased`)} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Content className="relative h-screen place-content-center place-items-center bg-accent/40 text-center">
            <div className="">
              <h1 className="mb-4 text-6xl font-extrabold text-foreground dark:text-white">
                {404}
              </h1>
              <p className="mb-6 max-w-md text-lg text-muted-foreground">
                {t("not_found.description")}
              </p>
              <Link href="/">
                <Button variant="default">{t(`not_found.navigation`)}</Button>
              </Link>
            </div>{" "}
          </Content>
        </ThemeProvider>
      </body>
    </html>
  );
}
