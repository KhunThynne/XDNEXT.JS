import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/libs/shadcn/ui/card";
import { Separator } from "@radix-ui/react-separator";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";
import { useFormatter } from "next-intl";

export const CardTransactionSummary = ({
  metaData,
}: FromTypePointTransactionStripe) => {
  const formatter = useFormatter();
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-lg">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Enterprise Plan (Annual)
            </span>
            <span className="font-medium">{formatter.number(120000)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Additional Seats (2)</span>
            <span className="font-medium">{formatter.number(5000)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Discount (Welcome)</span>
            <span className="font-medium text-emerald-600">
              {/* 🎯 Inline Logic: Hardcoded amount (5000) และลบสัญลักษณ์สกุลเงินตัวแรกออกเพื่อแสดงค่าติดลบ */}
              -{formatter.number(5000).slice(1)}
            </span>
          </div>
        </div>
        <Separator />
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>

            <span className="font-medium">{formatter.number(120000)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax (VAT 20%)</span>
            <span className="font-medium">{formatter.number(5000)}</span>
          </div>

          <div className="flex justify-between pt-2 text-base font-bold">
            <span>Total Paid</span>
            <span>
              {/* 🎯 Inline Logic: ดึง amount และ currency จาก charge โดยตรง */}
              {/* {chargeCurrency(
                    charge?.amount || 0,
                    charge?.currency || "usd"
                  )} */}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
