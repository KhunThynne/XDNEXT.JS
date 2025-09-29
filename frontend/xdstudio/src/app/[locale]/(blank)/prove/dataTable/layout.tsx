import { auth } from "@/auth";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { CartOrderForm } from "@/app/[locale]/(main)/(auth)/account/cart/[id]/components/forms/CartOrder.form";

export default async function LayoutCart({ children }: WithChildren) {
  const session = await auth();
  if (!session?.user) return notFound();

  const cartIdSession = session.user.carts?.[0]?.id;
  const userId = session.user.id;
  const point = session?.user?.point;
  const cartId = cartIdSession;
  if (cartId !== cartIdSession) return notFound();

  if (!cartId || !userId || point === undefined || point === null) {
    throw new Error(
      clsx(
        "Missing required:",
        !cartId && " cartId",
        !userId && " userId",
        point === null && " point",
        point === undefined && " point"
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
      <div className="flex flex-wrap gap-6 lg:grow">
        {/* Cart Items */}
        <section className="min-w-lg aspect-video max-w-full grow max-sm:min-w-full">
          {children}
        </section>

        {/* Summary */}
        {/* <section className="sm:w-sm min-h-60 max-lg:grow">{children}</section> */}
      </div>
    </CartOrderForm>
  );
}
