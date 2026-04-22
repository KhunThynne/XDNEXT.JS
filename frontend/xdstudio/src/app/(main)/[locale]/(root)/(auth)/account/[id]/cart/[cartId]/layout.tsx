import { ContainerSection } from "@/shared/components/ContainerSection";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cartQueries } from "@/core/cart";

import CartOrderFormProvider from "./_shared/_components/CartOrderForm.provider";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";
import { Link } from "@navigation";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { MobileNab } from "./_shared/_components/MobileNav";

export default async function LayoutCart({
  children,
  tablecartItems,
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
            className="h-[80vh] grow max-md:gap-4 xl:col-span-4 xl:h-full xl:pe-8"
            title="Your Shopping Cart"
            description={<MobileNab />}
            classNames={{
              contentContainer: "h-full relative",
              content: "absolute inset-0",
              separator: "max-sm:hidden",
            }}
            id="table"
          >
            {tablecartItems}
          </ContainerSection>
          <section
            className="flex h-full flex-col gap-4 xl:col-span-2"
            id="checkout"
          >
            {children}
          </section>
        </div>
      </CartOrderFormProvider>
    </HydrationBoundary>
  );
}
