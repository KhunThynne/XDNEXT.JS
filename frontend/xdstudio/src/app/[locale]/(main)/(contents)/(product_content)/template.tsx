export default function ProductsContentTemplate({ children }: WithChildren) {
  return (
    <section className="flex h-full min-h-screen flex-col space-y-5">
      {children}
    </section>
  );
}
