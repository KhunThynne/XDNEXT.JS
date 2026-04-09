"use client";
import { Button } from "@/libs/shadcn/ui/button";

import { Fragment } from "react/jsx-runtime";
import { BreadcrumbComponent } from "./ui/breadcrumb";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/libs/shadcn/ui/empty";
import { BookDashed } from "lucide-react";
import { usePathname } from "next/navigation";
import { revalidatePathAction } from "../actions/cache";

export function EmptyComponent({
  title,
  description,
  icon,
  onClickAction,
  children,
  button,
  breadcrumb,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  button?: React.ComponentPropsWithoutRef<typeof Button>;
  onClickAction?: () => void;
  breadcrumb?: React.ComponentPropsWithoutRef<typeof BreadcrumbComponent> & {
    hidden?: boolean;
  };
  children?: React.ReactNode;
}) {
  const realPathname = usePathname();

  return (
    <Fragment>
      {!breadcrumb?.hidden && <BreadcrumbComponent {...breadcrumb} />}
      <div className="flex h-full min-h-[50vh] flex-col items-center justify-center p-4">
        <Empty className="max-w-md border-none p-0">
          <EmptyHeader>
            <EmptyMedia variant="icon">{icon ?? <BookDashed />}</EmptyMedia>
            <EmptyTitle>{title}</EmptyTitle>
            <EmptyDescription>{description}</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              onClick={async () => {
                onClickAction?.();
                await revalidatePathAction(realPathname);
              }}
              {...button}
            >
              {button?.title ?? "Try again"}
            </Button>

            {children}
          </EmptyContent>
        </Empty>
      </div>
    </Fragment>
  );
}
