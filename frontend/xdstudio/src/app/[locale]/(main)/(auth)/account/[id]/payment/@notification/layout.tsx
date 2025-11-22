import { Card, CardHeader, CardTitle } from "@/libs/shadcn/ui/card";
import { Item, ItemHeader, ItemTitle } from "@/libs/shadcn/ui/item";
import clsx from "clsx";
import { Bell } from "lucide-react";

export default async function NotificationPaymentLayout(
  props: LayoutProps<"/[locale]/account/[id]/payment">
) {
  return (
    <Item className={clsx("flex-5 gap-3", `max-w-sm border-none p-0`)}>
      <ItemHeader>
        <ItemTitle className="flex items-center gap-3">
          <Bell className="size-5" /> Last transaction
        </ItemTitle>
      </ItemHeader>
      {props.children}
    </Item>
  );
}
