import { Button } from "@/libs/shadcn/ui/button";
import { CardHeader, CardContent, Card } from "@/libs/shadcn/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/libs/shadcn/ui/collapsible";
import {
  MotionTransition,
  MotionTransitionWrapperProps,
} from "@/shared/components/MotionTransition";
import { ChevronDownIcon } from "lucide-react";
import { CollapsibleProps } from "@radix-ui/react-collapsible";
import clsx from "clsx";
import { Separator } from "@/libs/shadcn/ui/separator";

export const CardCollapsible = ({
  children,
  className,
  title,
  motion,
  ...collapsible
}: WithChildren & {
  title?: string;
  motion?: MotionTransitionWrapperProps;
} & CollapsibleProps) => {
  return (
    <Collapsible
      className={clsx("group transition-all data-[state=open]:pb-5", className)}
      {...collapsible}
    >
      <Card className="group-data-[state=closed]:py-0">
        <CollapsibleTrigger className="group" asChild>
          <CardHeader className="flex w-full cursor-pointer select-none items-center justify-between group-data-[state=closed]:py-3">
            <h4 className="font-semibold">{title}</h4>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="group-hover:bg-accent size-6 rounded-full transition-colors duration-300"
            >
              <ChevronDownIcon
                data-state
                className="transition-transform group-hover:rotate-45 group-data-[state=open]:rotate-180"
              />
            </Button>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent className="group space-y-5">
          <Separator />
          <MotionTransition animationKey={title ?? `unkown`} {...motion}>
            <CardContent>{children}</CardContent>
          </MotionTransition>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
