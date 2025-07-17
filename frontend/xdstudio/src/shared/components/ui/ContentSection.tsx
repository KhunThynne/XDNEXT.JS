import { Label } from "@radix-ui/react-label";
import clsx from "clsx";

interface ContentSectionProps
  extends GlobalPropsClassNames<
    "container" | "description" | "title" | "content"
  > {
  title?: string;
  description?: string;
}

export const ContentSection = ({
  className,
  classNames,
  children,
  title,
  description,
}: ContentSectionProps) => {
  return (
    <section
      id="content-section"
      className={clsx(
        "flex h-full flex-col gap-2",
        className,
        classNames?.container
      )}
    >
      <Label className={clsx(`text-2xl font-semibold`, classNames?.title)}>
        {title}
      </Label>
      {description && (
        <p className={clsx("text-muted-foreground", classNames?.description)}>
          {description}
        </p>
      )}

      <div
        className={clsx(
          `border-primary border-t pt-5`,

          classNames?.content
        )}
      >
        {children}
      </div>
    </section>
  );
};
