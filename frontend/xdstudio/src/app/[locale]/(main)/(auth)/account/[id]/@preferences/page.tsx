import { execute } from "@/libs/graphql/execute";
import AccountPreferenceForm from "../components/AccountPreference.form";
import type {
  User,
  UserWhereUniqueInput,
} from "@/libs/graphql/generates/graphql";
import { GetUserDocument } from "@/libs/graphql/generates/graphql";
import { notFound } from "next/navigation";
import _ from "lodash";
import { TabsContent } from "@radix-ui/react-tabs";
import { PreferencesTabs } from "./components/PreferencesTabs";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { cacheLife } from "next/cache";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { Skeleton } from "@/libs/shadcn/ui/skeleton";

const getUserCache = async (where: UserWhereUniqueInput) => {
  "use cache";
  cacheLife("hours");
  return await execute(GetUserDocument, { where });
};

export default async function PreferencesPage({
  params,
}: {
  params: Promise<{ locale: string; id: string; itemId: string }>;
}) {
  const { id, itemId } = await params;
  const res = await getUserCache({ id });

  return (
    <ContainerSection
      className="max-w-full lg:w-xl lg:max-w-md xl:static xl:max-w-xl"
      title="User"
      classNames={{ content: "space-y-5" }}
      description="Customize settings and preferences for each product you are currently using."
    >
      {res.data.user && (
        <PreferencesTabs>
          <TabsContent value="general">
            <AccountPreferenceForm {...(res.data.user as User)} />
          </TabsContent>
        </PreferencesTabs>
      )}
    </ContainerSection>
  );
}
