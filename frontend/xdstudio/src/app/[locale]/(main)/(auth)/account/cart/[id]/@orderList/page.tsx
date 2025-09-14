import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { OrdersQueryClient } from "./forms/OrdersQueryClient";
import { Suspense } from "react";

export default async function PageOrderList() {
  return (
    <Card>
      <CardContent className="h-[65vh] divide-y overflow-auto">
        <Suspense fallback="Loading...">
          <OrdersQueryClient />
        </Suspense>
      </CardContent>
    </Card>
  );
}
