import { TabsContent } from "@radix-ui/react-tabs";
import { cacheLife } from "next/cache";
import AccountPreferenceForm from "../_components/AccountPreference.form";
import { getUser } from "@/core/user";

const getUserCache = async (arg: Parameters<typeof getUser>[0]) => {
  "use cache";
  cacheLife("max");
  return await getUser(arg);
};

export default async function PreferencesPage({
  params,
}: PageProps<"/[locale]/account/[id]">) {
  const { id } = await params;
  const user = await getUserCache({ id });
  return (
    user && (
      <TabsContent value="general">
        <AccountPreferenceForm {...user} />
      </TabsContent>
    )
  );
}
