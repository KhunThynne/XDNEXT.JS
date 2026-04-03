import { ErrorComponent } from "@/shared/components/ui/ErrorComponent";

export default async function NotFoundLocale() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <ErrorComponent
        status="404"
        description="Sorry, the page you are looking for does not found"
        buttonText="Go back home"
      />
    </div>
  );
}
