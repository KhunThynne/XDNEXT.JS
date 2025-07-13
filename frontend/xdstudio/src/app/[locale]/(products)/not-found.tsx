import { ErrorComponent } from "@/shared/components/ui/ErrorComponent";

export default async function NotFoundLocale() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <ErrorComponent
        status="404"
        description=" Sorry,xxx the page you are looking for does not exist.zxcxzc"
        buttonText="Go back home"
      />
    </div>
  );
}
