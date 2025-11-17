import { auth } from "@/auth";

import Content from "@/shared/components/ui/Content";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthenticationLayout({ children }: WithChildren) {
  const headersList = await headers();
  const fullUrl = headersList.get("x-url") || "";
  const session = await auth();
  if (!session) redirect(`/login/?callbackUrl=${fullUrl}`);

  return (
    <Content
      classNames={{
        outsite: "grow relative bg-accent/40 flex",
        content: "container mx-auto my-5 flex flex-col gap-4 ",
      }}
    >
      {children}
    </Content>
  );
}
