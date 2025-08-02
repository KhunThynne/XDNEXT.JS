
export default function TemplateAccount({ children }: WithChildren) {
  return (
    <div className="px-5">
      {children}
      {/* <BreadcrumbComponent /> {children}{" "} */}
    </div>
  );
}
