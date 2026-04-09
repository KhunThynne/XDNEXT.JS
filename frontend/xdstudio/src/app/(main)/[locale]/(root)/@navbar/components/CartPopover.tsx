import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import { ShoppingBag } from "lucide-react";
import { Link } from "@navigation";

import { ShoppingBagMotion, ShoppingCount } from "../../../../../../shared/components/ui/shopping/Motions";
import { CartShoppingForm, CartSummary } from "../../../../../../shared/components/ui/shopping/CartShopping.form";
import CartStoreProvider from "../../../../../../shared/components/ui/shopping/CartStoreProvider";
import { Separator } from "@/libs/shadcn/ui/separator";
import { useLayoutEffect, useMemo } from "react";

import type { Cart, CartItem, User } from "@/payload-types";

import { useCartItems } from "@/shared/hooks/useCartItems";
import { LoadingDots } from "../../../../../../shared/components/LoadingComponent";

export const CartPopover = ({
  cartId,
  userId,
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
      <CartStoreProvider />
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
      <PopoverContent align="end" className="w-sm p-0">
        {status === "pending" ? (
          <LoadingDots />
        ) : (
          <HandleCartItems invalidate={invalidate}>
            <h4 className="px-4 pt-4 pb-3 font-semibold">Your items cart</h4>
            <CartShoppingForm
              key={cartItems.length}
              cartItems={cartItems}
              query={iInfiniteQuery}
              removeItem={removeItem}
              navigation={navigation}
            />
            <Separator />
            <CartSummary
              className="p-4"
              style="short"
              navigation={navigation}
              userTotalPoint={1000}
              cartItems={cartItems}
            />
            {/* <Point hidden setTotalPoint={setTotalPoint} pointId={pointId} /> */}{" "}
          </HandleCartItems>
        )}
      </PopoverContent>
    </Popover>
  );
};

const HandleCartItems = ({
  children,
  invalidate,
}: {
  children: React.ReactNode;
  invalidate: () => void;
}) => {
  useLayoutEffect(() => {
    invalidate();
  }, [invalidate]);

  return children;
};
