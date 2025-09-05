export default function LayoutBlank({ children }: WithChildren) {
  return (
    <div className="bg-accent absolute inset-0 z-20 flex h-screen flex-col">
      {children}
    </div>
  );
}
