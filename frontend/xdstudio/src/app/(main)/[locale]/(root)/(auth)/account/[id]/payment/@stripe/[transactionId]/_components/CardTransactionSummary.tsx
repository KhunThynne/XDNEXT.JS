import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/libs/shadcn/ui/card";
import { Separator } from "@/libs/shadcn/ui/separator";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";
import { useFormatter } from "next-intl";
import { Badge } from "@/libs/shadcn/ui/badge";
import { Button } from "@/libs/shadcn/ui/button";
import { Calendar, CreditCard, ExternalLink, Receipt } from "lucide-react";
import Link from "next/link";
import type Stripe from "stripe";

export const CardTransactionSummary = ({
  metaData,
}: FromTypePointTransactionStripe) => {
  const formatter = useFormatter();

  // Extract data safely with fallbacks
  const charge =
    metaData?.latest_charge && typeof metaData.latest_charge !== "string"
      ? (metaData.latest_charge as Stripe.Charge)
      : null;

  const amount = (charge?.amount ?? metaData?.amount ?? 0) / 100;
  const currency = (
    charge?.currency ??
    metaData?.currency ??
    "THB"
  ).toUpperCase();
  const created = charge?.created
    ? new Date(charge.created * 1000)
    : metaData?.created
      ? new Date(metaData.created * 1000)
      : new Date();
  const status = charge?.status || metaData?.status || "unknown";
  const receiptUrl = charge?.receipt_url;
  const paymentMethodDetails = charge?.payment_method_details?.card;
  const description = charge?.description || metaData?.description || "Payment";

  const getStatusColor = (status: string) => {
    switch (status) {
      case "succeeded":
        return "bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25 border-emerald-200";
      case "pending":
        return "bg-yellow-500/15 text-yellow-600 hover:bg-yellow-500/25 border-yellow-200";
      case "failed":
        return "bg-red-500/15 text-red-600 hover:bg-red-500/25 border-red-200";
      default:
        return "bg-slate-500/15 text-slate-600 hover:bg-slate-500/25 border-slate-200";
    }
  };

  return (
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Receipt className="size-5" />
            Transaction Summary
          </CardTitle>
          <Badge
            variant="secondary"
            className={`border capitalize ${getStatusColor(status)}`}
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Amount */}
        <div className="flex flex-col gap-1 rounded-lg border border-border/50 bg-muted/40 p-4">
          <span className="text-sm font-medium text-muted-foreground">
            Total Paid
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight">
              {formatter.number(amount, {
                style: "currency",
                currency: currency,
              })}
            </span>
          </div>
          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
            ID: {charge?.id || metaData?.id}
          </p>
        </div>

        <div className="space-y-4 text-sm">
          {/* Date */}
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Date</span>
            </div>
            <span className="font-medium">
              {formatter.dateTime(created, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
          </div>
          <Separator className="bg-border/60" />
          {/* Payment Method */}
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>Payment Method</span>
            </div>
            <div className="flex items-center gap-2 font-medium capitalize">
              {metaData.payment_method_types}
              {/* {paymentMethodDetails ? (
                <>
                  <span className="capitalize">
                    {paymentMethodDetails.brand}
                  </span>
                  <span className="text-muted-foreground">
                    •••• {paymentMethodDetails.last4}
                  </span>
                </>
              ) : (
                <span>-</span>
              )} */}
            </div>
          </div>
          <Separator className="bg-border/60" />
          {/* Description */}
          <div className="flex items-center justify-between py-1">
            <span className="text-muted-foreground">Description</span>
            <span className="max-w-[200px] truncate text-right font-medium">
              {description}
            </span>
          </div>
        </div>
        {/* Receipt Action */}
        {receiptUrl && (
          <Button
            variant="outline"
            className="mt-2 h-10 w-full gap-2 border-primary/20 transition-colors hover:bg-primary/5 hover:text-primary"
            asChild
          >
            <Link href={receiptUrl} target="_blank" rel="noopener noreferrer">
              View Receipt
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
