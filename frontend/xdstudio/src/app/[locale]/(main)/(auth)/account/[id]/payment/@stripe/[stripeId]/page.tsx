import { auth } from "@/auth";

export default async function StripePage({
  params,
}: {
  params: Promise<{ stripeId: string }>;
}) {
  const { stripeId } = await params;
  const session = await auth();
  if (!stripeId) return null;
  return <>{/* <CheckoutMainForm session={session!} /> */}</>;
}
