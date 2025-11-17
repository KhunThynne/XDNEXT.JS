import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { MainSection } from "./_components/MainSection";
import { SegmentAccount } from "./segments";
import { SocketProvider } from "@/libs/socket-io/socket";
import { Separator } from "@/libs/shadcn/ui/separator";

export default async function AuthenticationLayout({
  children,
  preferences,
}: NextJSReactNodes<"preferences">) {
  const session = await auth();
  if (!session?.user && !session?.user?.carts?.[0]?.id) return notFound();
  const segmentText = `/account/${session.user.id}`;
  if (session?.user?.carts?.[0]?.id)
    return (
      <MainSection session={session} preferences={preferences}>
        <SegmentAccount
          segmentText={segmentText}
          key={session.user.id}
          cartId={session?.user?.carts?.[0]?.id}
        />

        {children}
      </MainSection>
    );
}
