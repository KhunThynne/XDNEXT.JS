import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { PreferencesTabs } from "./components/PreferencesTabs";
import { TabsContent } from "@/libs/shadcn/ui/tabs";

export default async function Layout({
  children,
  payment,
}: NextJSReactNodes<"payment">) {
  return (
    <ContainerSection
      className="max-w-full lg:w-xl lg:max-w-md xl:static xl:max-w-xl"
      title="User"
      classNames={{ content: "space-y-5" }}
      description="Customize settings and preferences for each product you are currently using."
    >
      <PreferencesTabs>
        {children}
        {payment}
      </PreferencesTabs>
    </ContainerSection>
  );
}
