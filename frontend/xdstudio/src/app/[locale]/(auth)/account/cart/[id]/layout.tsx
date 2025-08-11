import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { CartOrderForm } from "./components/forms/CartOrder.form";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import clsx from "clsx";

export default async function LayoutCart({
  children,
  orderList,
  params,
}: NextJSReactNodes<"orderList"> & {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user) return notFound();
  const { id: cartId } = await params;
  const cartIdSession = session.user.carts?.[0]?.id;
  const userId = session.user.id;
  const point = session?.user?.point;
  if (cartId !== cartIdSession) return notFound();

  if (!cartId || !userId || !point) {
    throw new Error(
      clsx(
        "Missing required:",
        !cartId && " cartId",
        !userId && " userId",
        !point && " point"
      )
    );
  }

  return (
    <CartOrderForm
      cartId={cartId}
      userId={userId}
      session={session}
      point={point}
    >
      <ContainerSection title="Your Shopping Cart" className="px-3">
        <div className="flex flex-wrap gap-6">
          {/* Cart Items */}
          <section className="min-w-lg max-w-full grow max-sm:min-w-full">
            {orderList}
          </section>

          {/* Summary */}
          <section className="grow xl:max-w-sm">{children}</section>
        </div>
      </ContainerSection>
    </CartOrderForm>
  );
}
