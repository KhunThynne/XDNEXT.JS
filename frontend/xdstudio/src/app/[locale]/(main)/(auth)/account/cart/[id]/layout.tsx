import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { CartOrderForm } from "./components/forms/CartOrder.form";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { Separator } from "@/libs/shadcn/ui/separator";

export default async function LayoutCart({
  children,
  cartItems,
  params,
}: NextJSReactNodes<"cartItems"> & {
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
      <div className="grid grow grid-cols-1 gap-6 lg:grid-cols-6">
        <ContainerSection
          className="grow max-md:gap-4 lg:col-span-4"
          title="Your Shopping Cart"
          classNames={{
            container: "",
            contentContainer: "h-[81vh]",
            separator: "max-sm:hidden",
          }}
        >
          {cartItems}
        </ContainerSection>
        <section className="h-full lg:col-span-2">{children}</section>
      </div>
    </CartOrderForm>
  );
}
