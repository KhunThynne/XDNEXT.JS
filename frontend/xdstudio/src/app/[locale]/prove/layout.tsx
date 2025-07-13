import clsx from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xdstudio",
  description: "This is a static description for all locales",
};
export default async function GGLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: Promise<{ locale: string }>;
}) {
  return children;
}
