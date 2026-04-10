import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import clsx from "clsx";
import CartOrderFormProvider from "./_shared/_components/CartOrderFormProvider";
import { Separator } from "@/libs/shadcn/ui/separator";

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
  const userId = session.user.id;
  const credit = session?.user?.credit;

  if (!cartId) return notFound();

  if (!cartId || !userId || credit === undefined || credit === null) {
    throw new Error(
      clsx(
        "Missing required:",
        !cartId && "cartId",
        !userId && "userId",
        credit === null && "point",
        credit === undefined && "point"
      )
    );
  }

  return (
    <CartOrderFormProvider
      cartId={cartId}
      userId={userId}
      session={session}
      credit={credit}
      grandTotal={0}
      availablePoint={0}
      remainingpointPayment={0}
    >
      <div className="mx-4 grid grow grid-cols-1 gap-8 xl:grid-cols-6 xl:divide-x">
        <ContainerSection
          className="h-screen grow max-md:gap-4 xl:col-span-4 xl:h-full xl:pe-8"
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
