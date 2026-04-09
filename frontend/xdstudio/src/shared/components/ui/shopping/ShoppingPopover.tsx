import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import { ShoppingBag } from "lucide-react";
import { Link } from "@navigation";

import { ShoppingBagMotion, ShoppingCount } from "./Motions";
import { CartShoppingForm, CartSummary } from "./CartShopping.form";
import CartStoreProvider from "./CartStoreProvider";
import { Separator } from "@/libs/shadcn/ui/separator";
import { useLayoutEffect, useMemo, useState } from "react";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import Point from "../Point";

import type { Cart, CartItem, User } from "@/payload-types";
import type { Maybe } from "graphql/jsutils/Maybe";
import { useCartItemsInfinite } from "@/shared/hooks/useCartItemsInfinite";
import { LoadingDots } from "../Loading";

export const ShoppingPopover = ({
  cartId,
  userId,
  credit,
}: {
  userId: User["id"];
  cartId: Cart["id"];
  credit: User["credit"];
  carts?: Cart[] | undefined;
}) => {
  const { query, invalidate } = useCartItemsInfinite({
    cartId,
    userId,
  });
  const { data, status } = query;
  const flatData = useMemo(() => {
    return data?.pages?.flatMap((cartItems) => cartItems?.docs ?? []) ?? [];
  }, [data]);

  const cartItems = flatData as CartItem[];
  const navigation = `/account/${userId}/cart/${cartId}`;
  // const itemsCount = data?.pages?.[0]?.data.cart?.itemsCount ?? 0;

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
          <ShoppingBagMotion triggerKey={credit?.toString() ?? "0"} />
          <ShoppingCount count={0} />
        </Button>
      </PopoverTrigger>
      <Button className="md:hidden" variant="ghost" size="icon" asChild>
        <Link href={navigation} aria-labelledby="shopping-bag-button">
          <ShoppingBag />
          {/* <ShoppingCount count={itemsCount} /> */}
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
              query={query}
              invalidateCartAction={invalidate}
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
