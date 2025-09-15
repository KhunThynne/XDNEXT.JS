import { TabsContent } from "@/libs/shadcn/ui/tabs";
import { TabsComponent } from "@/shared/components/ui/TabsComponent";
import { TestComponent } from "./tst.component";

export default function TabsPage() {
  return (
    <TabsComponent
      defaultValue="password"
      tabs={[
        { value: "account", label: `Account` },
        { value: "password", label: "Password" },
        { value: "extra", label: "Extra" },
      ]}
    >
      <TabsContent value="password">
        <TestComponent />
        <div>Password Content</div>
      </TabsContent>
      <TabsComponent.Content value="extra">Test</TabsComponent.Content>
    </TabsComponent>
  );
}
