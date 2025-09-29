import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { Suspense } from "react";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";

import { CartItemsClient } from "./components/CartItemsClient";
import { OrdersQueryClient } from "./forms/OrdersQueryClient";

export default async function PageOrderList() {
  return (
    <Card className="h-full gap-3">
      {/* <div className="h-screen"></div> */}
      <Suspense fallback="Loading...">
        <CartItemsClient />
      </Suspense>
    </Card>
  );
}
