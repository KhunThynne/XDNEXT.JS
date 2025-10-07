import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import { ShoppingBag } from "lucide-react";
import { Link } from "@navigation";
import type { Cart, Maybe, User } from "@/libs/graphql/generates/graphql";

import { useCartDocument } from "@/shared/hooks/useCartDocument";

import _ from "lodash";
import { ShoppingBagMotion, ShoppingCount } from "./Motions";
import { CartShoppingForm } from "./CartShopping.form";
import CartStoreProvider from "./CartStoreProvider";
import { Separator } from "@/libs/shadcn/ui/separator";
import React, { useEffect, useMemo } from "react";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";

export const ShoppingPopover = ({
  cartId,
  userId,
}: {
  userId: User["id"];
  cartId: Cart["id"];
  carts?: Maybe<Cart[]> | undefined;
}) => {
  const { query, invalidate } = useCartInfinite({
    cartId,
    userId,
  });
  const { data } = query;

  const CartData = data?.pages?.flatMap((page) => page?.data?.cart);
  const flatData = useMemo(
    () => data?.pages.flatMap((page) => page?.data?.cart?.items ?? []) ?? [],
    [data?.pages]
  );
  const cartItems = flatData;
  const navigation = `/account/cart/${cartId}`;
  const itemsCount = data?.pages?.[0]?.data.cart?.itemsCount ?? 0;

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
          <ShoppingBagMotion triggerKey={JSON.stringify(cartItems)} />
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
        <h4 className="px-4 pb-3 pt-4 font-semibold">Your items cart</h4>
        <CartShoppingForm
          cartItems={cartItems}
          query={query}
          invalidateCartAction={invalidate}
          navigation={navigation}
        />
      </PopoverContent>
    </Popover>
  );
};
