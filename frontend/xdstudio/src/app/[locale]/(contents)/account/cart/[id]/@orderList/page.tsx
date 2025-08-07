import { Card, CardContent } from "@/libs/shadcn/ui/card";

import { OrdersForm } from "./forms/OrdersForm";

import { auth } from "@/auth";

export default async function PageOrderList() {
  // const res = await execute(GetOrderDocument, { where: { id } });
  // if (!res.data.user) {
  //   return notFound();
  // }
  const session = await auth();

  if (!session?.user) return null;
  return (
    <Card>
      {JSON.stringify(session)}
      <CardContent className="h-[65vh] divide-y overflow-auto">
        <OrdersForm />
      </CardContent>
    </Card>
  );
}
