import { auth } from "@/auth";
import Content from "@/shared/components/ui/Content";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthenticationLayout({ children }: WithChildren) {
  return (
    <Content
      classNames={{
        outsite: "grow min-h-screen relative grid  bg-accent-foreground/5",
        content: "container mx-auto py-5 flex flex-col gap-4",
      }}
    >
      {children}
    </Content>
  );
}
