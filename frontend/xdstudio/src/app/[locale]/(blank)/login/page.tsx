import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { SignForm } from "@/shared/components/forms/auth/SignForm";
import clsx from "clsx";
import { notFound } from "next/navigation";

// export const dynamic = "force-static";
export default async function LoginModal({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string }>;
}) {
  const { callbackUrl } = await searchParams;
  if (!callbackUrl) return notFound();
  return (
    <div className="mx-auto h-full max-w-md place-content-center py-5">
      <Card
        className={clsx(
          "p-5",
          "max-sm:p-0",
          "max-sm:border-0 max-sm:shadow-none max-sm:ring-0"
        )}
      >
        <CardContent>
          <SignForm />
        </CardContent>
      </Card>
    </div>
  );
}
