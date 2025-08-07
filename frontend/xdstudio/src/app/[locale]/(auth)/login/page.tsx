import { SignForm } from "@/shared/components/forms/auth/SignForm";

// export const dynamic = "force-static";
export default async function LoginModal({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string }>;
}) {
  const { callbackUrl } = await searchParams;
  return (
    <>
      {callbackUrl}
      <div className="mx-auto max-w-lg">
        <SignForm />
      </div>
    </>
  );
}
