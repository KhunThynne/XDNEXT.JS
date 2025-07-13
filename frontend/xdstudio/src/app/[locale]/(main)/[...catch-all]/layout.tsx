// app/[...catch-all]/layout.tsx
export default function CatchAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
