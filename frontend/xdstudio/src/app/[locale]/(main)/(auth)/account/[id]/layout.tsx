import { auth } from "@/auth";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { notFound } from "next/navigation";
import { PreferencesTabs } from "./@preferences/components/PreferencesTabs";

export default async function AuthenticationLayout({
  children,
  userProducts,
  payment,
  preferences,
}: NextJSReactNodes<"userProducts" | "payment" | "preferences">) {
  const session = await auth();
  if (!session?.user) return notFound();
  return (
    <div className="grid grid-cols-1 gap-8 max-md:px-5 lg:grid-cols-9">
      <ContainerSection
        className="@container relative lg:col-span-5"
        title="Purchased Products"
        description="These are the products you have successfully purchased and activated."
      >
        {children}
        {userProducts}
      </ContainerSection>
      <ContainerSection
        className="lg:col-span-4"
        title="User"
        classNames={{ description: "truncate", content: "space-y-5" }}
        description="Customize settings and preferences for each product you are currently using."
      >
        <PreferencesTabs>
          {preferences}
          {payment}
        </PreferencesTabs>
      </ContainerSection>
    </div>
  );
}
