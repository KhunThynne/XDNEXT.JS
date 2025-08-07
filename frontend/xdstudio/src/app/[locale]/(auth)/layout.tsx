export default async function AuthenticationLayout({ children }: WithChildren) {
  return (
    <section className="bg-secondary/20 grow place-content-center">
      {children}
    </section>
  );
}
