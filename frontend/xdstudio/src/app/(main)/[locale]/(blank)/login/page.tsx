import { SignFormNew } from "@/shared/components/forms/auth/SignFormNew";

// export const dynamic = "force-static";
export default async function LoginModal({
  searchParams,
}: PageProps<"/[locale]/login">) {
  const params = await searchParams;
  if (params.error) {
    throw new Error("login error ");
  }
  return (
    <SignFormNew
      searchParams={params as { error: string; callbackUrl: string }}
    />
  );
}
