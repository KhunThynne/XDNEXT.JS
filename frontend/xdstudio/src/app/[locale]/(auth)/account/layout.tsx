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
        outsite: "grow  relative grid  bg-secondary-foreground/5 ",
        content: "container mx-auto py-5 flex flex-col gap-4",
      }}
    >
      {children}
    </Content>
  );
}
