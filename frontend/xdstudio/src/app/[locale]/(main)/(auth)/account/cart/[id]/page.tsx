import { Card, CardHeader, CardContent } from "@/libs/shadcn/ui/card";
import { CartOrdersSummaryForm } from "./components/CartOrdersSummary.form";

export default function CartPage() {
  return (
    <Card className="h-full">
      <CardHeader className="text-lg font-semibold">Order Summary</CardHeader>
      <CardContent className="grow">
        <CartOrdersSummaryForm />
      </CardContent>
    </Card>
  );
}
