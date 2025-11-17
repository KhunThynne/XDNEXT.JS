import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import clsx from "clsx";
import CartOrderFormProvider from "./_components/CartOrderFormProvider";

export default async function LayoutCart({
  children,
  cartItems,
  params,
}: NextJSReactNodes<"cartItems"> & {
  params: Promise<{ cartId: string }>;
}) {
  const session = await auth();
  if (!session?.user) return notFound();
  const { cartId } = await params;
  const cartIdSession = session.user.carts?.[0]?.id;
  const userId = session.user.id;
  const point = session?.user?.point;

  if (cartId !== cartIdSession) return notFound();

  if (!cartId || !userId || point === undefined || point === null) {
    throw new Error(
      clsx(
        "Missing required:",
        !cartId && "cartId",
        !userId && "userId",
        point === null && "point",
        point === undefined && "point"
      )
    );
  }

  return (
    <CartOrderFormProvider
      cartId={cartId}
      userId={userId}
      session={session}
      point={point}
      grandTotal={0}
      availablePoint={0}
      remainingpointPayment={0}
    >
      <div className="mx-4 grid grow grid-cols-1 gap-8 xl:grid-cols-6">
        <ContainerSection
          className="h-screen grow max-md:gap-4 xl:col-span-4 xl:h-full"
          title="Your Shopping Cart"
          classNames={{
            contentContainer: "h-full relative",
            content: "absolute inset-0",
            separator: "max-sm:hidden",
          }}
        >
          {cartItems}
        </ContainerSection>
        <section className="flex h-full flex-col gap-4 xl:col-span-2">
          {children}
        </section>
      </div>
    </CartOrderFormProvider>
  );
}
