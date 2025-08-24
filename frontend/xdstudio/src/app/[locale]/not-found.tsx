import { ErrorComponent } from "@/shared/components/ui/ErrorComponent";

export default async function NotFoundLocale() {
  return (
    <div className="grow place-content-center">
      <ErrorComponent
        status="404"
        description=" Sorry, the page you are looking for does not exist.zxcxzc"
        buttonText="Go back home"
      />
    </div>
  );
}
