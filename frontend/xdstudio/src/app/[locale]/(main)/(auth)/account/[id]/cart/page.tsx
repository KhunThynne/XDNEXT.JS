import { auth } from "@/auth";
import { redirect } from "@navigation";

export default async function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const session = await auth();
  const { locale } = await params;
  if (session?.user?.carts?.[0]?.id) {
    redirect({ locale, href: session?.user?.carts?.[0]?.id });
  }
  return <>Cart</>;
}
