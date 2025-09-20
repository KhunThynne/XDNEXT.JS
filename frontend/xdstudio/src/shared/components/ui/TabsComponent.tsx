import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/libs/shadcn/ui/tabs";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import clsx from "clsx";
import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";

interface TabInterface<T extends string> {
  tabsList?: React.ComponentProps<typeof TabsList>;
  card?: boolean;
  tabs: ({
    value: T;
    label: string | React.ReactNode;
  } & React.ComponentProps<typeof TabsTrigger>)[];
  defaultValue?: T;
}

const TabsComponentBase = <T extends string>({
  tabs,
  children,
  tabsList,
  defaultValue,
  classNames,
  className,
  card = true,
  ...props
}: TabInterface<T> &
  GlobalPropsClassNames<"card" | "cardContent" | "cardHeader" | "cardTitle"> &
  Omit<React.ComponentProps<typeof Tabs>, "defaultValue">) => {
  return (
    <Tabs
      {...props}
      defaultValue={defaultValue ?? tabs[0].value}
      className={className}
    >
      <TabsList
        {...tabsList}
        className={clsx("bg-transparent! w-full p-0", tabsList?.className)}
      >
        <EmblaCarousel
          className="w-full"
          classNames={{
            container: "bg-primary-foreground gap-1 rounded-lg p-[3px]",
          }}
        >
          {tabs.map((tab) => {
            const {
              className: classNameTab,
              label,
              children,
              ...tabProps
            } = tab;
            return (
              <TabsTrigger
                key={tab.value}
                {...tabProps}
                className={clsx(
                  `data-[state=active]:-z-0`,
                  "z-0 min-h-[29px] cursor-pointer transition-all",
                  `data-[state=inactive]:text-primary/50 hover:text-primary!`,
                  classNameTab
                )}
              >
                {label}
                {children}
              </TabsTrigger>
            );
          })}
        </EmblaCarousel>
      </TabsList>
      {card ? (
        <Card className={clsx(classNames?.card)}>
          <CardContent className={clsx(classNames?.cardContent)}>
            {children}
          </CardContent>
        </Card>
      ) : (
        children
      )}
    </Tabs>
  );
};

// export as const with subcomponent
export const TabsComponent = Object.assign(TabsComponentBase, {
  Content: TabsContent,
});
