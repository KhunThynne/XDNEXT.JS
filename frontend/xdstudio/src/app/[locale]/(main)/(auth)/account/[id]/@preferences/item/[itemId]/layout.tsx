export default async function ItemLayout({
  children,
}: WithChildren & {
  params: Promise<{ locale: string }>;
}) {
  return children;
}
