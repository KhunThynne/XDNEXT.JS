import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { PreferencesTabs } from "./_components/PreferencesTabs";

export default async function Layout({
  children,
  params,
}: WithChildren & {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  return (
    <ContainerSection
      className="max-w-full lg:w-xl lg:max-w-md xl:static xl:max-w-xl"
      title="User"
      classNames={{ content: "space-y-5" }}
      description="Customize settings and preferences for each product you are currently using."
    >
      <PreferencesTabs userId={id}>{children}</PreferencesTabs>
    </ContainerSection>
  );
}
