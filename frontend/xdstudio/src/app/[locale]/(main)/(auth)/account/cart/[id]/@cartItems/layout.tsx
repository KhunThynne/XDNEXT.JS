import { Card } from "@/libs/shadcn/ui/card";

export default function LayoutProducts({ children }: WithChildren) {
  return <Card className="h-full gap-3">{children}</Card>;
}
