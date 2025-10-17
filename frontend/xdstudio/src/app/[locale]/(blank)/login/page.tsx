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
    <Card
      className={clsx(
        "grow md:max-w-md",
        "max-sm:p-0",
        "max-sm:border-0 max-sm:shadow-none max-sm:ring-0"
      )}
    >
      <CardContent className="h-full place-content-center">
        <SignForm />
      </CardContent>
    </Card>
  );
}
