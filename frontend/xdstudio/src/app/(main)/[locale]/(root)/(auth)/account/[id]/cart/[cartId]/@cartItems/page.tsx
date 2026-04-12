import { CartItemsClient } from "./_components/CartItemsClient";

export default async function PageOrderList({
  params,
}: PageProps<"/[locale]/account/[id]/cart/[cartId]">) {
  const { cartId, id } = await params;
  return <CartItemsClient cartId={cartId} userId={id} />;
}
