import {
  Item,
  ItemContent,
  ItemHeader,
  ItemTitle,
} from "@/libs/shadcn/ui/item";
import clsx from "clsx";
import { Bell } from "lucide-react";
import PointTransactionProvider from "./_components/PointTransactionProvider";

export default async function NotificationPaymentLayout(
  props: LayoutProps<"/[locale]/account/[id]/payment">
) {
  const { id } = await props.params;
  return (
    <Item className={clsx("flex-5 gap-3", `max-w-sm border-none p-0`)} key={id}>
      <input />
      <ItemHeader>
        <ItemTitle className="flex items-center gap-3">
          <Bell className="size-5" /> Last transaction
        </ItemTitle>
      </ItemHeader>
      <ItemContent className="mt-auto flex h-full grow flex-col gap-1">
        <PointTransactionProvider {...props} />
        {props.children}
      </ItemContent>
    </Item>
  );
}
