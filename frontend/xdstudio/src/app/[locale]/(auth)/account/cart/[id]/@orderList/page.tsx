import { Card, CardContent } from "@/libs/shadcn/ui/card";

import { auth } from "@/auth";
import { OrdersQueryClient } from "./forms/OrdersQueryClient";

export default async function PageOrderList() {
  // const res = await execute(GetOrderDocument, { where: { id } });
  // if (!res.data.user) {
  //   return notFound();
  // }
  const session = await auth();

  if (!session?.user) return null;
  return (
    <Card>
      <CardContent className="h-[65vh] divide-y overflow-auto">
        <OrdersQueryClient />
      </CardContent>
    </Card>
  );
}
