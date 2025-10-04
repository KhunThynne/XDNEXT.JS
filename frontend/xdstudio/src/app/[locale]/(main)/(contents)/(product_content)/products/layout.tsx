export default function LayoutProducts({
  children,
  pagination,
}: NextJSReactNodes<"pagination">) {
  return (
    <section className="my-5 min-h-screen space-y-6">
      {children}
      <section className="ms-auto lg:max-w-screen-sm">{pagination}</section>
    </section>
  );
}
