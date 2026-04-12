import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { MainSection } from "./_components/MainSection";
import { SegmentAccount } from "./segments";
export default async function AuthenticationLayout(
  props: LayoutProps<"/[locale]/account/[id]">
) {
  const session = await auth();
  const { children, params, preferences } = props;
  const { id: userIdParam } = await params;
  // const userId = userIdParam || session?.user?.id;
  const firstCart = session?.user?.carts?.docs?.[0];
  const cartId = typeof firstCart === "object" ? firstCart?.id : firstCart;
  if (!session?.user && !cartId) return notFound();
  const segmentText = `/account/${session?.user?.id}`;
  if (cartId)
    return (
      <MainSection session={session} preferences={preferences}>
        <SegmentAccount segmentText={segmentText} cartId={cartId} />
        {children}
      </MainSection>
    );
}
