import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/libs/shadcn/ui/tabs";
import { Card, CardContent } from "@/libs/shadcn/ui/card";

interface TabInterface<T extends string> {
  property?: {
    tabsList?: React.ComponentProps<typeof TabsList>;
  };
  tabs: { value: T; label: string }[];
  children?: React.ReactNode;
  defaultValue?: T;
}

const TabsComponentBase = <T extends string>({
  property,
  tabs,
  children,
  defaultValue,
  ...props
}: TabInterface<T> &
  Omit<React.ComponentProps<typeof Tabs>, "defaultValue">) => {
  return (
    <Tabs {...props} defaultValue={defaultValue} className="gap-0">
      <TabsList {...property?.tabsList} className="translate-x-4 gap-1 p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="bg-background z-0 shadow transition-all data-[state=active]:-z-0 data-[state=active]:translate-y-1 data-[state=active]:rounded-b-none"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <Card className="z-0 border-t-0">
        <CardContent>{children}</CardContent>
      </Card>
    </Tabs>
  );
};

// export as const with subcomponent
export const TabsComponent = Object.assign(TabsComponentBase, {
  Content: TabsContent,
});
