import { Suspense } from "react";

import { CartItemsClient } from "./_components/CartItemsClient";

export default async function PageOrderList({
  params,
}: PageProps<"/[locale]/account/[id]/cart/[cartId]">) {
  const { cartId, id } = await params;
  return (
    <Suspense fallback="Loading...">
      <CartItemsClient cartId={cartId} userId={id} />
    </Suspense>
  );
}
