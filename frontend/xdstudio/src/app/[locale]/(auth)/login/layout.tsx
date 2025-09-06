export default async function LayoutLogin({ children }: WithChildren) {
  return (
    <section className="bg-secondary absolute inset-0 z-20 grow place-content-center">
      {children}
    </section>
  );
}
