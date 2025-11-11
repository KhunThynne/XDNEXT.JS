import { Button } from "@/libs/shadcn/ui/button";
import {
  CardHeader,
  CardContent,
  Card,
  CardDescription,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/libs/shadcn/ui/collapsible";
import type { MotionTransitionWrapperProps } from "@/shared/components/MotionTransition";
import { MotionTransition } from "@/shared/components/MotionTransition";
import { ChevronDownIcon } from "lucide-react";
import type { CollapsibleProps } from "@radix-ui/react-collapsible";
import clsx from "clsx";
import { Separator } from "@/libs/shadcn/ui/separator";

export const CardCollapsible = ({
  children,
  className,
  title,
  motion,
  description,
  cardContent,
  ...collapsible
}: WithChildren & {
  title?: string;
  cardContent?: React.ComponentPropsWithoutRef<typeof CardContent>;
  description?: string;
  motion?: MotionTransitionWrapperProps;
} & CollapsibleProps) => {
  return (
    <Collapsible
      className={clsx("group transition-all data-[state=open]:pb-5", className)}
      {...collapsible}
    >
      <Card className="group-data-[state=closed]:py-0">
        <CardHeader className="group-data-[state=closed]:py-3">
          <CollapsibleTrigger className="group" asChild>
            <CardTitle className="flex w-full cursor-pointer items-center justify-between select-none">
              <h4 className="font-semibold">{title}</h4>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="size-6 cursor-pointer rounded-full transition-colors duration-300 group-hover:bg-accent"
              >
                <ChevronDownIcon
                  data-state
                  className="transition-transform group-hover:rotate-45 group-data-[state=open]:rotate-180"
                />
              </Button>
            </CardTitle>
          </CollapsibleTrigger>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CollapsibleContent className="group space-y-5">
          <Separator />
          <MotionTransition animationKey={title ?? `unkown`} {...motion}>
            <CardContent {...cardContent}>{children}</CardContent>
          </MotionTransition>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
