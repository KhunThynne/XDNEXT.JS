import { TabsContent } from "@radix-ui/react-tabs";
import AccountPreferenceForm from "../_components/AccountPreference.form";
import { userQueries } from "@/core/user";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";

export default async function PreferencesPage({
  params,
}: PageProps<"/[locale]/account/[id]">) {
  const queryClient = getQueryClient();
  const { id } = await params;
  const user = await queryClient.fetchQuery(userQueries.user(id));
  if(!user) return notFound()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {user && (
        <TabsContent value="general">
          <AccountPreferenceForm {...user} />
        </TabsContent>
      )}
    </HydrationBoundary>
  );
}
