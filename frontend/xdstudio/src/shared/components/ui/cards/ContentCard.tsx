import { Button } from "@/libs/shadcn/ui/button";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import clsx from "clsx";
import { Code, Download } from "lucide-react";

interface ContentCardProps extends WithlDefaultProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export default function ContentCard({
  className,
  title,
  description,
  children,
}: ContentCardProps) {
  return (
    <Card
      className={clsx(
        "min-h-125 place-content-center overflow-auto bg-gradient-to-br from-primary/10 to-accent/10 px-4 shadow-xs max-sm:-mx-5 max-sm:rounded-t-none max-sm:rounded-b-none sm:my-5",
        className
      )}
    >
      <CardContent className="px-0">
        <div className="mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-5xl leading-tight font-bold text-foreground md:text-6xl">
              {title}
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
