import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xdstudio",
  description: "This is a static description for all locales",
};
export default async function LocaleLayout({
  children,
  params,
  products,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  return (
    <>
      <aside>{products}</aside>
      {children}
    </>
  );
}
