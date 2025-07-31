import { auth } from "@/auth";
import { Card, CardContent } from "@/shared/components/shadcn/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";

import { Loader, Loader2 } from "lucide-react";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function AuthenticationLayout({
  children,
  userProducts,
  preferences,
}: NextJSReactNodes<"userProducts" | "preferences">) {
  // const session = await auth();
  // const token = await getToken({ req: { cookies: cookies() } });
  // if (!session?.jwt_token) return notFound();
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
        title="Product Preferences"
        classNames={{ description: "truncate" }}
        description="Customize settings and preferences for each product you are currently using."
      >
        <Card className="@container relative min-h-[50vh]">
          <CardContent>{preferences}</CardContent>
        </Card>
      </ContainerSection>
    </div>
  );
}
