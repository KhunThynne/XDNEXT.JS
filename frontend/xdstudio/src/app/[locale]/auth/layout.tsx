import { auth } from "@/auth";

export default async function AuthenticationLayout({ children }: WithChildren) {
  const session = await auth();
  if (session) {
    return children;
  }
}
