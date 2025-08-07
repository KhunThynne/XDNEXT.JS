import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { notFound } from "next/navigation";

export default async function AuthenticationLayout({
  children,
  userProducts,
  preferences,
}: NextJSReactNodes<"userProducts" | "preferences">) {
  const session = await auth();
  if (!session?.user) return notFound();
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <ContainerSection
        className="@container relative lg:col-span-7"
        title="Purchased Products"
        description="These are the products you have successfully purchased and activated."
      >
        {children}
        {userProducts}
      </ContainerSection>
      <ContainerSection
        className="lg:col-span-5"
        title="User Preferences"
        classNames={{ description: "truncate" }}
        description="Customize settings and preferences for each product you are currently using."
      >
        <Card className="@container relative min-h-[50vh] divide-y">
          <CardHeader>
            <h1 className="font-semibold">Preferences</h1>
          </CardHeader>
          <CardContent>{preferences}</CardContent>
        </Card>
      </ContainerSection>
    </div>
  );
}
