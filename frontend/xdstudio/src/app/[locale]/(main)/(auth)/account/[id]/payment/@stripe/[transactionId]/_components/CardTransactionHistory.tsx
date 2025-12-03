import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";

export const CardTransactionHistory = ({
  metaData,
}: FromTypePointTransactionStripe) => {
  return (
    <Card className="flex-4">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Transaction History
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* 💡 ถ้าคุณมี array ของ Transaction Log ที่ดึงมาจาก DB/Stripe Event */}
        {/* ❌ ตัวอย่างนี้คือ Hardcoded Log 3 บรรทัดเดิม */}
        <div className="relative space-y-6 border-l border-muted pl-4">
          <div className="relative">
            <div className="absolute top-1 -left-[21px] h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-background" />

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">
                {/* 🎯 Inline: เช็คสถานะการชำระเงิน */}
                {/* {charge?.status === "succeeded"
                  ? "Payment Completed"
                  : "Payment Initiated"} */}
              </span>

              <span className="text-xs text-muted-foreground">
                {/* 🎯 Inline: แปลงเวลาจาก Stripe (สมมติว่าคุณมีฟังก์ชัน formatTimestamp) */}

                {/* {charge?.created
                  ? new Date(charge.created * 1000).toLocaleString()
                  : "N/A"} */}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      {/* ... CardFooter ... */}
    </Card>
  );
};
