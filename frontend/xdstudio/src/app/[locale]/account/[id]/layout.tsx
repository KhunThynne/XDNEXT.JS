import { auth } from "@/auth";
import { Card, CardContent } from "@/shared/components/shadcn/card";
import { ContentSection } from "@/shared/components/ui/ContentSection";
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
      <ContentSection
        className="lg:col-span-7"
        title="Purchased Products"
        description="These are the products you have successfully purchased and activated."
      >
        {children}
        {userProducts}
      </ContentSection>
      <ContentSection
        className="lg:col-span-5"
        title="Product Preferences"
        classNames={{ description: "truncate" }}
        description="Customize settings and preferences for each product you are currently using."
      >
        <Card>
          <CardContent>{preferences}</CardContent>
        </Card>
      </ContentSection>
    </div>
  );
}
