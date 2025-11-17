import { execute } from "@/libs/graphql/execute";

import type {
  User,
  UserWhereUniqueInput,
} from "@/libs/graphql/generates/graphql";
import { GetUserDocument } from "@/libs/graphql/generates/graphql";
import { notFound } from "next/navigation";
import _ from "lodash";
import { TabsContent } from "@radix-ui/react-tabs";

import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { cacheLife } from "next/cache";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { Skeleton } from "@/libs/shadcn/ui/skeleton";
import AccountPreferenceForm from "../_components/AccountPreference.form";

const getUserCache = async (where: UserWhereUniqueInput) => {
  "use cache";
  cacheLife("hours");
  return await execute(GetUserDocument, { where });
};

export default async function PreferencesPage({
  params,
  searchParams,
}: {
  searchParams: Promise<{ item: string }>;
  params: Promise<{ locale: string; id: string; itemId: string }>;
}) {
  const { id, itemId } = await params;
  const { item } = await searchParams;
  const res = await getUserCache({ id });

  return (
    res.data.user && (
      <TabsContent value="general">
        <AccountPreferenceForm {...(res.data.user as User)} />
      </TabsContent>
    )
  );
}
