import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import { ShoppingBag } from "lucide-react";
import { Link } from "@navigation";
import type {
  Cart,
  CartItem,
  Maybe,
  User,
  UserPoint,
} from "@/libs/graphql/generates/graphql";

import _ from "lodash";
import { ShoppingBagMotion, ShoppingCount } from "./Motions";
import { CartShoppingForm, CartSummary } from "./CartShopping.form";
import CartStoreProvider from "./CartStoreProvider";
import { Separator } from "@/libs/shadcn/ui/separator";
import React, { useMemo, useState } from "react";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import Point from "../Point";

export const ShoppingPopover = ({
  cartId,
  userId,
  pointId,
}: {
  userId: User["id"];
  cartId: Cart["id"];
  pointId: UserPoint["id"];
  carts?: Maybe<Cart[]> | undefined;
}) => {
  const { query, invalidate } = useCartInfinite({
    cartId,
    userId,
  });
  const { data } = query;

  const flatData = useMemo(
    () => data?.pages.flatMap((page) => page?.data?.cart?.items ?? []) ?? [],
    [data?.pages]
  );
  const [totalPoint, setTotalPoint] = useState(0);
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
          cartItems={cartItems as CartItem[]}
          query={query}
          invalidateCartAction={invalidate}
          navigation={navigation}
        >
          <Separator />
          <CartSummary
            className="p-4"
            style="short"
            navigation={navigation}
            userTotalPoint={totalPoint}
          />
        </CartShoppingForm>
        <Point hidden setTotalPoint={setTotalPoint} pointId={pointId} />
      </PopoverContent>
    </Popover>
  );
};
