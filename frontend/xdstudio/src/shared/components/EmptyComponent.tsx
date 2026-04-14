"use client";
import { Button } from "@/shared/libs/shadcn/ui/button";

import { Fragment } from "react/jsx-runtime";
import { BreadcrumbComponent } from "./breadcrumb";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/shared/libs/shadcn/ui/empty";
import { BookDashed } from "lucide-react";
import { usePathname } from "next/navigation";
import { revalidatePathAction } from "@/shared/actions/cache";
import clsx from "clsx";
import React from "react";

export function EmptyComponent({
  title,
  description,
  icon,
  onClickAction,
  children,
  button,
  breadcrumb,
  className,
  media,
  content,
  emptyContainer,
  header,
}: {
  title: string | React.ComponentPropsWithoutRef<typeof EmptyTitle>;
  description?: string | React.ComponentPropsWithoutRef<typeof EmptyDescription>;
  icon?: React.ReactNode;
  media?: React.ComponentPropsWithoutRef<typeof EmptyMedia>;
  button?:
    | React.ReactElement
    | React.ComponentPropsWithoutRef<typeof Button>
    | string;
  emptyContainer?: React.ComponentPropsWithoutRef<typeof Empty>;
  header?: React.ComponentPropsWithoutRef<typeof EmptyHeader>;
  content?: React.ComponentPropsWithoutRef<typeof EmptyContent>;
  onClickAction?: () => void;
  breadcrumb?: React.ComponentPropsWithoutRef<typeof BreadcrumbComponent>;
  children?: React.ReactNode;
  className?: string;
}) {
  const realPathname = usePathname();

  return (
    <Fragment>
      {breadcrumb && <BreadcrumbComponent {...breadcrumb} />}
      <div
        className={clsx(
          "flex h-full flex-col items-center justify-center p-4",
          className
        )}
      >
        <Empty className="max-w-md border-none p-0" {...emptyContainer}>
          <EmptyHeader {...header}>
            <EmptyMedia variant="icon" {...media}>
              {icon ?? <BookDashed />}
            </EmptyMedia>
            <EmptyTitle {...(typeof title !== "string" ? title : {})}>
              {typeof title === "string" ? title : title.title}
            </EmptyTitle>
            <EmptyDescription
              {...(typeof description !== "string" ? description : {})}
            >
              {typeof description === "string" ? description : ""}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent {...content}>
            {React.isValidElement(button) ? (
              button
            ) : (
              <Button
                variant="outline"
                {...(typeof button !== "string" ? button : {})}
                onClick={async (e) => {
                  if (
                    typeof button !== "string" &&
                    "onClick" in button! &&
                    typeof button.onClick === "function"
                  ) {
                    button.onClick(e);
                  }

                  onClickAction?.();
                  await revalidatePathAction(realPathname);
                }}
              >
                {typeof button !== "string"
                  ? (button?.title ?? "Try again")
                  : button}
              </Button>
            )}
            {children}
          </EmptyContent>
        </Empty>
      </div>
    </Fragment>
  );
}
