export default async function LayoutLogin({ children }: WithChildren) {
  return (
    <section className="flex min-h-screen place-content-center md:place-items-center">
      {children}
    </section>
  );
}
