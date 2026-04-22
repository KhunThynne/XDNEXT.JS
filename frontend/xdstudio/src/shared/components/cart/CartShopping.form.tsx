import { Button } from "@/shared/libs/shadcn/ui/button";

import { Link } from "@navigation";
import type {
  InfiniteData,
  UseInfiniteQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";

import { Loader2, ShoppingCart } from "lucide-react";
import { useLayoutEffect, useMemo } from "react";

import { CartItemComponent } from "./CartItemsComponent";
import CreditIcon from "../CreditIcon";
import _ from "lodash";
import { Separator } from "@/shared/libs/shadcn/ui/separator";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import clsx from "clsx";
import { Badge } from "@/shared/libs/shadcn/ui/badge";
import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";
import type {
  Cart,
  CartItem,
  CartItemsSelect,
  Price,
  Product,
} from "@/payload-types";

import { useAppForm } from "@/shared/hooks/useAppForm";
import { useStore } from "@tanstack/react-form";
import type { BulkOperationResult, PaginatedDocs, SelectType } from "payload";
import { SummaryCartDisplay } from "./SummaryCartDisplay";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
      <div className="bg-muted rounded-4xl p-6">
        <ShoppingCart className="text-muted-foreground h-12 w-12" />
      </div>
      <h2 className="text-lg font-semibold">ตะกร้าว่างเปล่า</h2>
      <p className="text-muted-foreground mx-6">
        ดูเหมือนคุณยังไม่ได้เลือกสินค้านะ ลองเลือกสินค้าที่คุณชอบดูสิ
      </p>
      <Button asChild className="">
        <Link href="/products">เริ่มช้อปปิ้ง</Link>
      </Button>
    </div>
  );
};
export const CartSummary = ({
  navigation,
  userTotalCredit = 0,
  className,
  style,
  cartItems,
}: {
  navigation?: string;
  userTotalCredit?: number;
  cartItems: CartItem[];
  style?: "short" | "full";
} & WithClassName) => {
  const summary = useMemo(() => {
    if (!cartItems || cartItems.length === 0) {
      return { totalQuantity: 0, totalPrice: 0 };
    }

    return cartItems.reduce(
      (acc, item) => {
        const product = item?.product as Product;
        const quantity = item.quantity || 1;
        const price = Number((product?.price as Price)?.price) || 0;

        acc.totalQuantity += quantity;
        acc.totalPrice += quantity * price;
        return acc;
      },
      { totalQuantity: 0, totalPrice: 0 }
    );
  }, [cartItems]);

  const remainingCredit = useMemo(() => {
    return userTotalCredit - summary.totalPrice;
  }, [summary.totalPrice, userTotalCredit]);

  return (
    <aside
      className={clsx(
        "sticky bottom-0 space-y-3 rounded-b p-4 backdrop-blur", // เพิ่ม p-4 เพื่อความสวยงาม
        className
      )}
    >
      <SummaryCartDisplay
        style={style}
        userAvailableCredit={userTotalCredit}
        remainingCredit={remainingCredit}
        totalCredit={summary.totalPrice}
      />

      {navigation && (
        <Button className="w-full" size="sm" variant="secondary" asChild>
          <Link href={navigation}>Go to cart.</Link>
        </Button>
      )}
    </aside>
  );
};
export const CartShoppingForm = ({
  cartItems,
  removeItem,
  navigation,
  query,
}: {
  query: UseInfiniteQueryResult<
    InfiniteData<PaginatedDocs<CartItem>, unknown>,
    Error
  >;
  cartItems: CartItem[];
  removeItem: UseMutationResult<void, Error, string, unknown>;
  navigation: string;
}) => {
  const handleDelete = async (id: string, item: CartItem) => {
    // const updated = method
    //   .getValues("cartItems")
    //   .filter((item) => item.id !== id);
    await removeItem.mutateAsync(id);
    // method.setValue("cartItems", updated, { shouldDirty: true });
  };

  // const cartItemsForm = useStore(form.store, (field) => field.values.cartItems);

  const parentRef = React.useRef<HTMLDivElement>(null);
  const { hasNextPage, isFetchingNextPage, fetchNextPage } = query;
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? cartItems?.length + 1 : cartItems?.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 75,
    overscan: 10,
    paddingEnd: 0,
  });
  const virtualItems = rowVirtualizer.getVirtualItems();
  const lastItem = virtualItems[virtualItems.length - 1];

  React.useEffect(() => {
    if (!lastItem) return;
    if (
      lastItem.index >= cartItems.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    cartItems.length,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    lastItem?.index,
  ]);

  const itemHeight = rowVirtualizer.options.estimateSize(0);
  const totalSize = rowVirtualizer.getTotalSize();
  if (_.isEmpty(cartItems)) return <EmptyCart />;

  return (
    <section
      className="h-60 w-full overflow-auto overscroll-contain inset-shadow-sm"
      ref={parentRef}
    >
      <ul
        className="relative w-full divide-y"
        style={{ height: `${totalSize}px` }}
      >
        {virtualItems.map((virtualRow) => {
          const isLoaderRow = virtualRow.index > cartItems.length - 1;
          const item = cartItems[virtualRow.index];

          return (
            <li
              key={`${item?.id ?? `loader-row`}-${virtualRow.index}`}
              className={clsx(
                virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven",
                "absolute top-0 left-0 flex w-full"
              )}
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            > 
              {isLoaderRow ? (
                hasNextPage ? (
                  <CartItemSkeleton />
                ) : (
                  <aside className="flex h-full grow items-center justify-center">
                    <Badge variant={"outline"} className="text-sm">
                      No more
                    </Badge>
                  </aside>
                )
              ) : (
                <CartItemComponent
                  {...item}
                  onDelete={() => handleDelete(item.id, item)}
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export const CartItemSkeleton = () => {
  return (
    <div className="flex h-full w-full grow items-center gap-3 p-3">
      <Skeleton className="size-12 shrink-0 rounded" />
      <div className="flex-1 space-y-1.5 py-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <div className="flex items-center gap-1">
        <Skeleton className="size-2.5 shrink-0 rounded-full" />
        <Skeleton className="h-4 w-8" />
      </div>
      <Skeleton className="size-9 shrink-0 rounded-md" />
    </div>
  );
};

export const CartShoppingFormSkeleton = () => {
  return (
    <section className="h-60 w-full overflow-hidden inset-shadow-sm">
      <ul className="relative w-full divide-y">
        {[...Array(4)].map((_, i) => (
          <li
            key={`loader-row-skeleton-${i}`}
            className={clsx(
              i % 2 ? "ListItemOdd" : "ListItemEven",
              "flex h-[75px] w-full"
            )}
          >
            <CartItemSkeleton />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const CartSummarySkeleton = ({
  style = "full",
  navigation,
}: {
  style?: "short" | "full";
  navigation?: boolean;
}) => {
  return (
    <aside className="sticky bottom-0 space-y-3 rounded-b p-4 backdrop-blur">
      {style === "short" ? (
        <div className="flex h-[20px] items-center justify-between gap-2">
          <Skeleton className="h-4 w-12" />
          <section className="flex gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </section>
        </div>
      ) : (
        <>
          <div className="flex h-[20px] items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex h-[20px] items-center justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Separator className="mx-auto max-w-11/12" />
          <div className="flex h-[20px] items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </>
      )}

      {navigation && <Skeleton className="mt-3 h-9 w-full rounded-md" />}
    </aside>
  );
};
