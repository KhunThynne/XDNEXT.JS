import { auth } from "@/auth";
import { redirect } from "@navigation";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";

export default async function AuthenticationLayout({ children }: WithChildren) {
  const headersList = await headers();
  const fullUrl = headersList.get("x-url") || "";
  const session = await auth();
  const locale = await getLocale();
  if (!session) redirect({ href: `/login/?callbackUrl=${fullUrl}`, locale });
  return children;
}
