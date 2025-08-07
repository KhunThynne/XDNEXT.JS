import { auth } from "@/auth";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function AuthenticationLayout({ children }: WithChildren) {
  // const session = await auth();
  // const token = await getToken({ req: { cookies: cookies() } });
  // if (!session?.jwt_token) return notFound();
  return (
    <>
      {/* {session?.jwt_token} */}
      {children}
    </>
  );
}
