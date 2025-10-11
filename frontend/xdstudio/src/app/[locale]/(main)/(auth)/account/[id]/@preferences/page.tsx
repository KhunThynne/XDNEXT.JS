import { execute } from "@/libs/graphql/execute";
import AccountPreferenceForm from "../components/AccountPreference.form";
import type { User } from "@/libs/graphql/generates/graphql";
import { GetUserDocument } from "@/libs/graphql/generates/graphql";
import { notFound } from "next/navigation";
import _ from "lodash";
import { PreferencesTabs } from "./components/PreferencesTabs";
import { TabsContent } from "@radix-ui/react-tabs";

export default async function PreferencesPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const res = await execute(GetUserDocument, { where: { id } });
  if (!res.data.user) {
    return notFound();
  }
  return (
    <TabsContent value="general">
      <AccountPreferenceForm {...(res.data.user as User)} />
    </TabsContent>
  );
}
