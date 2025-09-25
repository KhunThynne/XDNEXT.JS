import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { OrdersQueryClient } from "./forms/OrdersQueryClient";
import { Suspense } from "react";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";

export default async function PageOrderList() {
  return (
    <ContainerSection
      title="Your Shopping Cart"
      classNames={{
        container: "",
        separator: "max-sm:hidden",
      }}
    >
      <Card className=" ">
        <CardContent className="divide-y overflow-auto">
          <Suspense fallback="Loading...">
            <OrdersQueryClient />
          </Suspense>
        </CardContent>
      </Card>
    </ContainerSection>
  );
}
