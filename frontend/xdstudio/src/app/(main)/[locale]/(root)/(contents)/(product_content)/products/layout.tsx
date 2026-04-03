export default function LayoutProducts({
  children,
  pagination,
}: NextJSReactNodes<"pagination">) {
  return (
    <>
      {children}
      <section className="ms-auto grow place-content-end lg:max-w-screen-sm">
        {pagination}
      </section>
    </>
  );
}
