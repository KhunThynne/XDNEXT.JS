"use client";
import { Separator } from "@/shared/libs/shadcn/ui/separator";
import clsx from "clsx";
import { useRef } from "react";
import { ContainerLog } from "./fallback/ContainerLog";

interface ContainerSectionProps extends WithClassNames<
  | "section"
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
  ...props
}: ContainerSectionProps & React.ComponentProps<"section">) => {
  const ref = useRef<HTMLElement>(null);
  return (
    <section
      id="container-content-section"
      className={clsx("flex flex-col gap-8", className, classNames?.section)}
      {...props}
    >
      {(description || title) && (
        <section className="flex flex-col">
          {title && (
            <span className={clsx(`text-2xl font-semibold`, classNames?.title)}>
              {title}
            </span>
          )}
          {description && (
            <span
              className={clsx(
                "text-muted-foreground wrap-break-word break-all",
                classNames?.description
              )}
            >
              {description}
            </span>
          )}

          <Separator
            className={clsx(
              `bg-secondary-foreground/15 mt-4`,
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
