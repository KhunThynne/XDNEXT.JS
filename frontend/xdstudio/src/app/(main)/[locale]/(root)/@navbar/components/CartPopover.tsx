import { Button } from "@/shared/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/libs/shadcn/ui/popover";
import { GlobeX, ShoppingBag } from "lucide-react";
import { Link } from "@navigation";

import {
  ShoppingBagMotion,
  ShoppingCount,
} from "@/shared/components/cart/Motions";
import {
  CartShoppingForm,
  CartSummary,
} from "@/shared/components/cart/CartShopping.form";

import { Separator } from "@/shared/libs/shadcn/ui/separator";
import { useLayoutEffect, useMemo } from "react";

import type { Cart, User } from "@/payload-types";

import { useCartItems } from "@/shared/core/cart";
import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";
import { EmptyComponent } from "@/shared/components/EmptyComponent";

export const CartPopover = ({
  cartId,
  userId,
  credit,
}: {
  userId: User["id"];
  cartId: Cart["id"];
  credit: User["credit"];
  carts?: Cart[] | undefined;
}) => {
  const { iInfiniteQuery, invalidate, removeItem } = useCartItems({
    cartId,
    userId,
  });
  const { data, status } = iInfiniteQuery;
  const metaData = data?.pages[0];
  const flatData = useMemo(() => {
    return data?.pages?.flatMap((cartItems) => cartItems.docs ?? []) ?? [];
  }, [data]);

  const cartItems = flatData;
  const navigation = `/account/${userId}/cart/${cartId}`;
  const itemsCount = metaData?.totalDocs ?? 0;

  return (
    <Popover>
      <span id="shopping-bag-button" className="sr-only">
        Shopping bag button
      </span>
      <PopoverTrigger asChild className="max-md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="group relative"
          aria-labelledby="shopping-bag-button"
        >
          <ShoppingBagMotion triggerKey={itemsCount.toString()} />
          <ShoppingCount count={itemsCount} />
        </Button>
      </PopoverTrigger>
      <Button className="md:hidden" variant="ghost" size="icon" asChild>
        <Link href={navigation} aria-labelledby="shopping-bag-button">
          <ShoppingBag />
          <ShoppingCount count={itemsCount} />
        </Link>
      </Button>
      <PopoverContent align="end" className="min-h-60 w-sm p-0">
        <HandleCartItems invalidate={invalidate} status={status}>
          <h4 className="px-4 pt-4 pb-3 font-semibold">Your items cart</h4>
          <CartShoppingForm
            key={cartItems.length}
            cartItems={cartItems}
            query={iInfiniteQuery}
            removeItem={removeItem}
            navigation={navigation}
          />
          <Separator />
          {itemsCount > 0 && (
            <CartSummary
              className="p-4"
              style="short"
              navigation={navigation}
              userTotalCredit={credit ?? 0}
              cartItems={cartItems}
            />
          )}
        </HandleCartItems>
      </PopoverContent>
    </Popover>
  );
};

const HandleCartItems = ({
  children,
  invalidate,
  status,
}: {
  children: React.ReactNode;
  status: "success" | "pending" | "error";
  invalidate: () => void;
}) => {
  useLayoutEffect(() => {
    if (status === "success") {
      invalidate();
    }
  }, [invalidate, status]);

  if (status === "pending") {
    return (
      <div className="space-y-6 p-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-md" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
        <Separator />
        <Skeleton className="h-12 w-full" />
      </div>
    );
  }
  if (status === "success") {
    return children;
  }
  return (
    <EmptyComponent
      button={{ hidden: true }}
      icon={<GlobeX className="text-muted-foreground" />}
      title="Something went wrong"
      description="We couldn't load your cart items. Please try closing and reopening your cart."
    />
  );
};
{
  /* <Point hidden setTotalPoint={setTotalPoint} pointId={pointId} />{" "} */
}
