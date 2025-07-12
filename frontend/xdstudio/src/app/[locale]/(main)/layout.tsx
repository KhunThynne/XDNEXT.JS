export default async function LayoutMain({
  children,
  product,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
}) {
  return (
    <>
      {product}
      {children}
    </>
  );
}
