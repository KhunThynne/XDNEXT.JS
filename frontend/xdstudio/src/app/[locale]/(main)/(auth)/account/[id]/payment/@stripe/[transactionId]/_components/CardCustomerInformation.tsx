import { Avatar, AvatarFallback, AvatarImage } from "@/libs/shadcn/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/libs/shadcn/ui/card";

import { Separator } from "@radix-ui/react-separator";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";
import type Stripe from "stripe";

export const CardCustomerInformation = ({
  metaData,
}: FromTypePointTransactionStripe) => {
  const billingDetails = (metaData?.latest_charge as Stripe.Charge)
    ?.billing_details;
  if (!billingDetails) {
    return null;
  }
  const customerName =
    billingDetails?.name || metaData?.shipping?.name || "N/A";
  const customerEmail = billingDetails?.email || "N/A";
  const address = billingDetails?.address;

  const formattedAddress = (
    <>
      {address?.line1 || metaData?.shipping?.address?.line1}
      <br />
      {address?.city ? `${address?.city} ,` : null} {address?.state}{" "}
      {address?.postal_code}
      <br />
      {address?.country}
    </>
  );
  return (
    <Card className="flex-3">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Customer Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />

            <AvatarFallback>{customerName?.slice(0, 2) || "?"}</AvatarFallback>
          </Avatar>

          <div>
            <div className="font-edium">{customerName}</div>
            <div className="text-xs text-muted-foreground">{customerEmail}</div>
          </div>
        </div>
        <Separator />
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground">
            Billing Address
          </div>

          <div className="tmext-sm">{formattedAddress}</div>
        </div>
      </CardContent>
    </Card>
  );
};
