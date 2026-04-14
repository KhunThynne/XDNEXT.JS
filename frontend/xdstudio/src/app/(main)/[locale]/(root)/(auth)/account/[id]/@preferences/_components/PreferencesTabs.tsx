"use client";

import type { TabsArray } from "@/shared/components/TabsComponent";
import { TabsComponent } from "@/shared/components/TabsComponent";
import { usePathname, useRouter } from "@navigation";
import clsx from "clsx";
import type { User } from "payload";

export const PreferencesTabs = ({
  children,
  className,
  userId,
}: WithChildren & WithClassName & { userId: User["id"] }) => {
  const pathname = usePathname();
  const tabs = pathname.includes("/item") ? "item" : "general";
  const router = useRouter();
  const tabItems = [
    {
      label: "General",
      value: "general",
      onClick: () => router.push(`/account/${userId}`),
    },
  ] as TabsArray;

  if (tabs === "item")
    tabItems.push({
      label: "Item",
      value: "item",
    });
  return (
    <TabsComponent
      value={tabs || "general"}
      className={clsx(className)}
      tabs={tabItems}
    >
      {children}
    </TabsComponent>
  );
};
