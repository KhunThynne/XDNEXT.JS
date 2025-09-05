"use client";

import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import { TabsComponent } from "@/shared/components/ui/TabsComponent";
import clsx from "clsx";

export const PreferencesTabs = ({
  children,
  className,
}: WithChildren & WithClassName) => {
  return (
    <TabsComponent
      className={clsx(className)}
      tabs={[
        { label: "General", value: "general" },
        { label: "Change Password", value: "change" },
        { label: "Payment", value: "payment" },
      ]}
    >
      {children}
    </TabsComponent>
  );
};
