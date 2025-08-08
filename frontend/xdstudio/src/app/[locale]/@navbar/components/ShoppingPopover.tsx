import Image from "next/image";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import { ShoppingBag } from "lucide-react";
import { Link } from "@navigation";
import {
  Cart,
  CartItem,
  GetCartDocument,
  Maybe,
  User,
} from "@/libs/graphql/generates/graphql";
import { useQuery } from "@tanstack/react-query";
import { execute } from "@/libs/graphql/execute";
import { useMemo } from "react";
import { useCartDocument } from "@/shared/hooks/useCartDocument";

const ShoppingCount = ({ count = 0 }: { count?: number }) => {
  if (!count) return null;
  return (
    <div className="bg-primary text-secondary absolute flex size-3 -translate-y-2 translate-x-2 items-center justify-center rounded-full">
      <small className="text-[0.5rem]">{count}</small>
    </div>
  );
};

const OrderItem = ({ product, quantity }: CartItem) => {
  const price = product?.price?.price;

  return (
    <div className="flex items-center gap-3 border-b py-2 last:border-b-0">
      <div className="relative size-12 overflow-hidden rounded">
        <Image
          src={product?.images?.[0]?.src?.url ?? ""}
          alt={product?.description || product?.name || ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{product?.name}</p>
        <p className="text-muted-foreground text-xs">
          {quantity} × ฿{price}
        </p>
      </div>
      <div className="text-sm font-semibold">
        ฿ {(quantity ?? 1) * Number(price)}
      </div>
    </div>
  );
};

export const ShoppingPopover = ({
  cartId,
  userId,
}: {
  userId: User["id"];
  cartId: Cart["id"];
  carts?: Maybe<Cart[]> | undefined;
}) => {
  const { query } = useCartDocument({
    cartId,
    userId,
  });
  const { data } = query;
  const cartItems = data?.data?.cart?.items || [];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="group relative">
          <ShoppingBag />
          <ShoppingCount count={Number(data?.data?.cart?.items?.length)} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="max-h-[400px] w-[300px] space-y-4 overflow-auto p-4"
      >
        <h4 className="text-sm font-semibold">รายการของคุณ</h4>
        <ul className="space-y-2">
          {cartItems?.map((item) => {
            return (
              <li key={item.id}>
                <OrderItem {...item} />
              </li>
            );
          })}
        </ul>

        <div className="flex justify-between border-t pt-2 text-sm font-semibold">
          <span>รวม</span>
          <span>฿697.00</span>
        </div>

        <Button className="w-full" size="sm" variant="default" asChild>
          <Link href={`/account/cart/${`teets`}`}> Go to cart. </Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
