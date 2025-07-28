import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";

export default function TemplateAccount({ children }: WithChildren) {
  return (
    <div className="px-5">
      <BreadcrumbComponent /> {children}{" "}
    </div>
  );
}
