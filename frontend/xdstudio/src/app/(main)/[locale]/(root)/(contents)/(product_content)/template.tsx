export default function ProductsContentTemplate({ children }: WithChildren) {
  return (
    <section className="relative flex h-full flex-col space-y-5">
      {children}
    </section>
  );
}

//  min-h-screen
