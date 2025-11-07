import { TabsContent } from "@/libs/shadcn/ui/tabs";
import Content from "@/shared/components/ui/Content";

export default async function PlusPaymentLayout({ children }: WithChildren) {
  return (
    <TabsContent value="payment">
      <Content
        classNames={{
          outsite: "grow relative bg-accent/40 flex max-w-lg",
          content: "container mx-auto my-5 flex flex-col gap-4 ",
        }}
      >
        {children}
      </Content>
    </TabsContent>
  );
}
