"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { useMemo, useState } from "react";
import { useFormatter } from "next-intl";
import type { CartFormProps } from "../cartOrder.type";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import clsx from "clsx";
import type { CartItem } from "@/libs/graphql/generates/graphql";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { CartSummary } from "@/shared/components/ui/shopping/CartShopping.form";
import Point from "@/shared/components/ui/Point";
import { ImageProduct } from "@/shared/components/ui/images/ImageProduct";

const CartItemComponent = ({ item }: { item: CartItem }) => {
  return (
    <div className="flex h-full place-items-center gap-5 p-4">
      <ImageProduct
        image={item?.product?.previewImage}
        className="aspect-square size-14 rounded-md"
      />

      <aside>
        <h3 className="text-base font-semibold text-foreground">
          {item.product?.name}
        </h3>

        <p className="text-sm text-muted-foreground">
          Price: {item.product?.price?.price} ฿
        </p>
      </aside>
    </div>
  );
};

interface CartItemsVirtualScrollProps {
  cartItems: CartItem[];
}

export const CartItemsVirtualScroll = ({
  cartItems,
}: CartItemsVirtualScrollProps) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: cartItems?.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className="max-h-60 grow overscroll-contain lg:h-0 lg:max-h-full"
      style={{
        width: `100%`,
        overflow: "auto",
      }}
    >
      <ul
        className="divide-y"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const item = cartItems[virtualItem.index];
          return (
            <li
              key={virtualItem.key}
              className="absolute top-0 left-0 w-full"
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <CartItemComponent item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CartOrdersSummaryForm = () => {
  const method = useFormContext<CartFormProps>();
  const formatter = useFormatter();
  const { control } = method;
  const cartItems = useWatch({ control, name: "cartItems" });
  const point = useWatch({ control, name: "point" });
  const subtotal = useMemo(
    () =>
      cartItems?.reduce(
        (total, item) =>
          total + (item?.product?.price?.price ?? 0) * (item?.quantity ?? 0),
        0
      ),
    [cartItems]
  );
  const tax = subtotal * 0.07;
  const pointId = point?.id;
  const total = subtotal + tax;
  const cartItemsData = useMemo(() => cartItems, [cartItems]);
  const [totalPoint, setTotalPoint] = useState(0);

  if (cartItemsData?.length ?? 0 > 0)
    return (
      <>
        <CartItemsVirtualScroll cartItems={cartItemsData} />
        <CardContent className="flex flex-col gap-4 pt-5">
          <Point hidden setTotalPoint={setTotalPoint} pointId={pointId} />
          <CartSummary userTotalPoint={totalPoint} />
        </CardContent>
      </>
    );

  return (
    <CardContent className="flex min-h-50 grow flex-col items-center justify-center text-muted-foreground">
      <ShoppingCart className="mb-2 size-8 opacity-70" />
      <p className="text-sm font-medium">ไม่มีสินค้าใน order</p>
    </CardContent>
  );
};

export function CardCartOrdersSummaryForm({
  className,
  children,
}: WithlDefaultProps) {
  return (
    <Card className={clsx(className, `gap-0 divide-y`)}>
      <CardHeader className="pb-3">
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CartOrdersSummaryForm />
      {children}
    </Card>
  );
}
