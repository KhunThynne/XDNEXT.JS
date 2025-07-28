import { Label } from "@radix-ui/react-label";
import clsx from "clsx";
import { Separator } from "../shadcn/separator";

interface ContentSectionProps
  extends GlobalPropsClassNames<
    "container" | "description" | "title" | "content" | "contentContainer"
  > {
  title?: string;
  description?: string | React.JSX.Element;
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
        <span
          className={clsx("text-muted-foreground", classNames?.description)}
        >
          {description}
        </span>
      )}
      <Separator className={clsx(`bg-primary/50 mb-5 mt-2`)} />
      <section className={clsx("@container", classNames?.contentContainer)}>
        <div className={clsx(classNames?.content)}>{children}</div>
      </section>
    </section>
  );
};
