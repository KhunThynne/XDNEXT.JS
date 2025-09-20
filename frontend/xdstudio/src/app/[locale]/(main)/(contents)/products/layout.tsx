export default function LayoutProducts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="my-5 min-h-screen">{children}</section>;
}
