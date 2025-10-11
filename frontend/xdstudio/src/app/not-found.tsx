import { getLocale } from "next-intl/server";
import getRequestConfig from "@/libs/i18n/request";
import { createTranslator } from "next-intl";
import Link from "next/link";
import { Button } from "@/libs/shadcn/ui/button";
import _ from "lodash";
import { ThemeProvider } from "@/shared/components/providers";
import Content from "@/shared/components/ui/Content";
import clsx from "clsx";
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
    <html key="global-not-found">
      <body className={clsx(`antialiased`)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Content className="bg-accent/40 relative h-screen place-content-center place-items-center text-center">
            <div className="">
              <h1 className="text-foreground mb-4 text-6xl font-extrabold dark:text-white">
                {404}
              </h1>
              <p className="text-muted-foreground mb-6 max-w-md text-lg">
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
