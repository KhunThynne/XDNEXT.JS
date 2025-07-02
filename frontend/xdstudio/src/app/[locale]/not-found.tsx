import { NotFound } from "@/components/shared/notFound";

export default async function NotFoundLocale() {
  return (
    <div className="h-full place-content-center place-items-center text-center">
      <NotFound />
    </div>
  );
}
