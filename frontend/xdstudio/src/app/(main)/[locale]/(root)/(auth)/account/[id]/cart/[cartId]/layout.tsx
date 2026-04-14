import { ContainerSection } from "@/shared/components/ContainerSection";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cartQueries } from "@/shared/core/cart";

import CartOrderFormProvider from "./_shared/_components/CartOrderForm.provider";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";

export default async function LayoutCart({
  children,
  cartItems,
  params,
}: LayoutProps<"/[locale]/account/[id]/cart/[cartId]">) {
  const queryClient = getQueryClient();
  const { cartId, id: userId } = await params;
  queryClient.prefetchInfiniteQuery(cartQueries.list(cartId));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CartOrderFormProvider cartId={cartId} userId={userId}>
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
    </HydrationBoundary>
  );
}
