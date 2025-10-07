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
        "from-primary/10 min-h-125 to-accent/10 shadow-xs place-content-center bg-gradient-to-br px-4 max-sm:-mx-5 max-sm:rounded-b-none max-sm:rounded-t-none sm:my-5",
        className
      )}
    >
      <CardContent className="px-0">
        <div className="mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-foreground mb-6 text-5xl font-bold leading-tight md:text-6xl">
              {title}
            </h2>

            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              {description}
            </p>
          </div>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
