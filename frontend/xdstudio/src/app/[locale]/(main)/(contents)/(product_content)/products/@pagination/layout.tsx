export default async function PaginationLayout({
  children,
  params,
}: WithChildren & { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      {id}
      {children}
    </>
  );
}
