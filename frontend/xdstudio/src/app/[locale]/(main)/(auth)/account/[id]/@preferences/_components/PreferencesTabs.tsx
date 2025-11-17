"use client";

import type { User } from "@/libs/graphql/generates/graphql";
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import type { TabsArray } from "@/shared/components/ui/TabsComponent";
import { TabsComponent } from "@/shared/components/ui/TabsComponent";
import { usePathname, useRouter } from "@navigation";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";

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
