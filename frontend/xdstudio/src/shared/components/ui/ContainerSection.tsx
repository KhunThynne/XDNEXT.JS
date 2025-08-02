import { Separator } from "@/libs/shadcn/ui/separator";
import { Label } from "@radix-ui/react-label";
import clsx from "clsx";

interface ContainerSectionProps
  extends GlobalPropsClassNames<
    "container" | "description" | "title" | "content" | "contentContainer"
  > {
  title?: string;
  description?: string | React.JSX.Element;
}

export const ContainerSection = ({
  className,
  classNames,
  children,
  title,
  description,
}: ContainerSectionProps) => {
  return (
    <section
      id="container-content-section"
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
