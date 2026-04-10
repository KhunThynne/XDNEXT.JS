import { auth } from "@/auth";
import { redirect } from "@navigation";

export default async function CartPage({
  params,
}: PageProps<"/[locale]/account/[id]/cart">) {
  const session = await auth();
  const { locale } = await params;
  const firstCart = session?.user?.carts?.docs?.[0];
  const cartId = typeof firstCart === "object" ? firstCart?.id : firstCart;
  if (cartId) {
    redirect({ locale, href: cartId });
  }
  return <>Cart</>;
}
