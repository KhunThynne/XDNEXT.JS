import { auth } from "@/auth";
import { redirect } from "@navigation";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";
async function getHeadersList() {
  const headersList = await headers();
  const fullUrl = headersList.get("x-url") || "";
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(fullUrl);
    }, 1000)
  );
}
export default async function AuthenticationLayout({ children }: WithChildren) {
  const fullUrl = await getHeadersList();
  const session = await auth();
  const locale = await getLocale();
  if (!session) redirect({ href: `/login/?callbackUrl=${fullUrl}`, locale });
  return children;
}
