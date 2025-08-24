import { Button } from "@/libs/shadcn/ui/button";
import Content from "@/shared/components/ui/Content";
import { Code, Download } from "lucide-react";

export default function LayoutProducts({ children }: WithChildren) {
  return (
    <Content
      classNames={{
        outsite: "grow min-h-screen  grid  bg-secondary-foreground/5 ",
        content: "container mx-auto md:py-5 flex flex-col gap-4",
      }}
    >
      <div className="flex grow flex-col gap-y-4 pb-10">{children}</div>
    </Content>
  );
}
