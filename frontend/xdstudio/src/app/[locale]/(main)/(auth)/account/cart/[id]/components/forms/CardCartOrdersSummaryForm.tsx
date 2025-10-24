"use client";

import { Separator } from "@radix-ui/react-separator";
import { useFormContext } from "react-hook-form";
import { useMemo, useState } from "react";
import { useFormatter } from "next-intl";
import PointDiamon from "@/shared/components/PointDiamod";
import type { CartFormProps } from "../cartOrder.type";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import clsx from "clsx";
import type {
  CartItem,
  Image as ImageType,
} from "@/libs/graphql/generates/graphql";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import Image from "next/image";
import { Car, ImageOff, ShoppingCart } from "lucide-react";
import { CartSummary } from "@/shared/components/ui/shopping/CartShopping.form";
import Point from "@/shared/components/ui/Point";

export const ImageProduct = ({
  image,
  ...prop
}: Partial<React.ComponentProps<typeof Image>> & {
  image: ImageType | undefined;
}) => {
  const src = image?.src?.url ?? "";
  if (!image) return <ImageOff className={clsx(prop.className)} />;
  return (
    <Image
      {...prop}
      src={src}
      className={clsx(`border bg-accent object-contain`, prop.className)}
      alt={image.altText ?? `product-image-unkhown`}
      height={image.src?.height}
      width={image.src?.width}
    />
  );
};
// item.product?.images?.[0].src
const CartItemComponent = ({ item }: { item: CartItem }) => {
  return (
    <div className="flex h-full place-items-center gap-5 p-4">
      <ImageProduct
        image={item.product?.images?.[0]}
        className="aspect-square size-14 flex-shrink-0 rounded-md"
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
  const { watch } = method;
  const { cartItems, point } = watch();
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
  return JSON.stringify(cartItems);
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
