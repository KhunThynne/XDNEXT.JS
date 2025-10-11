"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { CartSummary } from "@/shared/components/ui/shopping/CartShopping.form";

export const CardCartSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <CartSummary userTotalPoint={0} />
      </CardContent>
    </Card>
  );
};
