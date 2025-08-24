import Image from "next/image";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import {
  Delete,
  ImageOff,
  ShoppingBag,
  ShoppingCart,
  Trash,
} from "lucide-react";
import { Link } from "@navigation";
import { Cart, Maybe, User } from "@/libs/graphql/generates/graphql";

import { useCartDocument } from "@/shared/hooks/useCartDocument";

import _ from "lodash";
import { ShoppingBagMotion, ShoppingCount } from "./Motions";
import { CartShoppingForm } from "./CartShopping.form";
import CartStoreProvider from "./CartStoreProvider";

export const ShoppingPopover = ({
  cartId,
  userId,
}: {
  userId: User["id"];
  cartId: Cart["id"];
  carts?: Maybe<Cart[]> | undefined;
}) => {
  const { query, invalidate } = useCartDocument({
    cartId,
    userId,
  });
  const { data } = query;
  const cartItems = data?.data?.cart?.items || [];
  const navigation = `/account/cart/${cartId}`;
  const count = Number(data?.data?.cart?.items?.length);
  return (
    <Popover>
      <CartStoreProvider cart={data?.data?.cart} />
      <PopoverTrigger asChild className="max-md:hidden">
        <Button variant="ghost" size="icon" className="group relative">
          <ShoppingBagMotion triggerKey={JSON.stringify(cartItems)} />
          <ShoppingCount count={count} />
        </Button>
      </PopoverTrigger>
      <Button className="md:hidden" variant="ghost" size="icon" asChild>
        <Link href={navigation}>
          <ShoppingBag />
          <ShoppingCount count={Number(data?.data?.cart?.items?.length)} />
        </Link>
      </Button>
      <PopoverContent align="end" className="w-sm p-0">
        <h4 className="px-4 pb-3 pt-4 font-semibold">รายการของคุณ</h4>
        <section className="flex max-h-[70vh] w-full flex-col space-y-4 overflow-auto">
          <CartShoppingForm
            cartItems={cartItems}
            invalidateCart={invalidate}
            navigation={navigation}
          />
        </section>
      </PopoverContent>
    </Popover>
  );
};
