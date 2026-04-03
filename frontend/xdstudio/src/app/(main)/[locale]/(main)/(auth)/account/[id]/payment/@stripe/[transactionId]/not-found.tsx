"use client";
import { Search, ArrowLeft } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";
import { useParams } from "next/navigation";
import { Link } from "@navigation"; // Assuming this is a custom Link component
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@/libs/shadcn/ui/item"; // Assuming Item is your general container

export default function NotFoundTransaction() {
  // 1. ดึง parameters จาก URL
  const params = useParams();
  const userId = params.id; // ดึง 'id' จาก /account/[id]/payment/...

  // 2. สร้างลิงก์กลับไปยังหน้ารายการ Payment หลัก
  // Note: Link Component ควรจัดการ locale โดยอัตโนมัติ
  const backLink = `/account/${userId}/payment`;

  return (
    // 🎯 ใช้ Item เป็น Container หลัก (แทนที่ Card/div ภายนอก)
    <Item className="h-full place-items-center border border-dashed border-primary/10 p-10">
      <ItemContent className="items-center space-y-4">
        <Search className="mx-auto size-40 text-muted-foreground/50" />
        <ItemTitle className="text-2xl font-bold tracking-tight text-foreground/80">
          Transaction Not Found
        </ItemTitle>
        <ItemDescription className="text-sm text-muted-foreground">
          We {`couldn't`} find any transaction matching your query or this
          record may not exist. Please check the transaction ID or try again
          later.
        </ItemDescription>
      </ItemContent>

      {/* Action (CTA) */}
      <ItemFooter className="">
        <Link href={backLink} passHref>
          <Button variant="outline" className="w-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back to Payment History
          </Button>
        </Link>
      </ItemFooter>
    </Item>
  );
}
