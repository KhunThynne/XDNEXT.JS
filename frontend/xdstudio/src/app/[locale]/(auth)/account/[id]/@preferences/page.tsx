import { execute } from "@/libs/graphql/execute";
import AccountPreferenceForm from "../components/AccountPreference.form";
import { GetUserDocument, User } from "@/libs/graphql/generates/graphql";
import { notFound } from "next/navigation";
import _ from "lodash";

export default async function ProductConfig({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const res = await execute(GetUserDocument, { where: { id } });
  if (!res.data.user) {
    return notFound();
  }
  return <AccountPreferenceForm {...(res.data.user as User)} />;
}
