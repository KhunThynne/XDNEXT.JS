import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthenticationLayout({ children }: WithChildren) {
  const headersList = await headers();
  const fullUrl = headersList.get("x-url") || "";
  const session = await auth();
  if (!session) redirect(`/login/?callbackUrl=${fullUrl}`);
  return children;
}
