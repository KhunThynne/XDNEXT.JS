"use client";

import { Card, CardContent } from "@/libs/shadcn/ui/card";

import { OrdersForm } from "./forms/OrdersForm";

export default function PageOrderList() {
  return (
    <Card>
      <CardContent className="h-[65vh] divide-y overflow-auto">
        <OrdersForm />
      </CardContent>
    </Card>
  );
}
