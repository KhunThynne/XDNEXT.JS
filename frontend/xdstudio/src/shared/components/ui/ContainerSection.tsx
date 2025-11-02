"use client";
import { Separator } from "@/libs/shadcn/ui/separator";
import { Label } from "@radix-ui/react-label";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { ContainerLog } from "./fallback/ContainerLog";

interface ContainerSectionProps
  extends WithClassNames<
    | "container"
    | "description"
    | "title"
    | "content"
    | "contentContainer"
    | "separator"
  > {
  title?: string;
  description?: string | React.JSX.Element;
  log?: boolean;
}

export const ContainerSection = ({
  className,
  classNames,
  children,
  title,
  description,
  log,
}: ContainerSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  return (
    <section
      id="container-content-section"
      className={clsx(
        "flex max-w-full flex-col gap-8",
        className,
        classNames?.container
      )}
    >
      {(description || title) && (
        <section className="flex flex-col">
          {title && (
            <Label
              className={clsx(`text-2xl font-semibold`, classNames?.title)}
            >
              {title}
            </Label>
          )}
          {description && (
            <span
              className={clsx(
                "wrap-break-word break-all text-muted-foreground",
                classNames?.description
              )}
            >
              {description}
            </span>
          )}

          <Separator
            className={clsx(
              `mt-4 bg-secondary-foreground/15`,
              classNames?.separator
            )}
          />
        </section>
      )}

      {log && <ContainerLog ref={ref} />}
      <section
        className={clsx("@container grow", classNames?.contentContainer)}
        ref={ref}
      >
        <div className={clsx(`content h-full`, classNames?.content)}>
          {children}
        </div>
      </section>
    </section>
  );
};
