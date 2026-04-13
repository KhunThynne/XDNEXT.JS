import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { auth } from "@/auth";

import CartOrderFormProvider from "./_shared/_components/CartOrderFormProvider";
import { QueryClient } from "@tanstack/react-query";

import { cartQueries } from "@/shared/core/cart";

export default async function LayoutCart({
  children,
  cartItems,
  params,
}: LayoutProps<"/[locale]/account/[id]/cart/[cartId]">) {
  const session = await auth();
  const queryClient = new QueryClient();
  const { cartId, id: userId } = await params;
  const cartQuery = cartQueries.list(cartId);
  await queryClient.prefetchInfiniteQuery(cartQuery);
  const credit = session?.user?.credit;

  // session?.user?.credit;
  // if (!session?.user) return notFound();

  // const credit = session?.user?.credit;

  // if (!cartId) return notFound();

  // if (!cartId || !userId || credit === undefined || credit === null) {
  //   throw new Error(
  //     clsx(
  //       "Missing required:",
  //       !cartId && "cartId",
  //       !userId && "userId",
  //       credit === null && "point",
  //       credit === undefined && "point"
  //     )
  //   );
  // }

  return (
    <CartOrderFormProvider
      cartId={cartId}
      userId={userId}
      availableCredit={credit ?? 0}
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
