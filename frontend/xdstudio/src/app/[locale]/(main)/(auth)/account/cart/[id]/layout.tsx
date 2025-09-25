import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { CartOrderForm } from "./components/forms/CartOrder.form";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { Separator } from "@/libs/shadcn/ui/separator";

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
          {orderList}
        </section>

        {/* Summary */}
        <section className="sm:w-sm min-h-60 max-lg:grow">{children}</section>
      </div>
    </CartOrderForm>
  );
}
