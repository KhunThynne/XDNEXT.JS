import { Card, CardHeader, CardTitle } from "@/shared/libs/shadcn/ui/card";
import clsx from "clsx";
import { CartOrdersSummaryForm } from "./forms/CardCartOrdersSummaryForm";

export function CardCartOrdersSummary({
  className,
  children,
}: WithlDefaultProps) {
  return (
    <Card className={clsx(className, `gap-0 divide-y`)}>
      <CardHeader className="pb-3">
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CartOrdersSummaryForm />
      {children}
    </Card>
  );
}
