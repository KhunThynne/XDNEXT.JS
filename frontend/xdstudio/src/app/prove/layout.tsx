import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xdstudio",
  description: "This is a static description for all locales",
};
export default async function GGLayout({
  children,
  params,
  dd,
  text,
}: {
  children: React.ReactNode;
  text: React.ReactNode;
  dd: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html>
      <body
        className={clsx(
          // geistSans.variable, geistMono.variable,
          `antialiased`
        )}
      >
        <aside>{text}</aside>
        <aside>{dd}</aside>
        {children}
      </body>
    </html>
  );
}
