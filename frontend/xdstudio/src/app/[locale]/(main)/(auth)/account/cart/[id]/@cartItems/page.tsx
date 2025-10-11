import { Suspense } from "react";

import { CartItemsClient } from "./components/CartItemsClient";

export default async function PageOrderList() {
  return (
    <Suspense fallback="Loading...">
      <CartItemsClient />
    </Suspense>
  );
}
