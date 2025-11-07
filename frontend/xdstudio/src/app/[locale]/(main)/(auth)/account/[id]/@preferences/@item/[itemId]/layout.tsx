
export default async function ItemLayout({
  params,
  children,
}: WithChildren & {
  params: Promise<{ locale: string; itemId: string }>;
}) {
  const { itemId } = await params;
  if (itemId) return children;
  return null;
}
