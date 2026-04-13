import { Button } from "@/libs/shadcn/ui/button";

import { Link } from "@navigation";
import type {
  InfiniteData,
  UseInfiniteQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";

import { Loader2, ShoppingCart } from "lucide-react";
import { useLayoutEffect, useMemo } from "react";

import { CartItemComponent } from "./CartItemsComponent";
import CreditIcon from "../../CreditIcon";
import _ from "lodash";
import { Separator } from "@/libs/shadcn/ui/separator";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import clsx from "clsx";
import { Badge } from "@/libs/shadcn/ui/badge";
import type { Cart, CartItem, Price, Product } from "@/payload-types";

import { useAppForm } from "@/shared/hooks/useAppForm";
import { useStore } from "@tanstack/react-form";
import type { PaginatedDocs } from "payload";
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
  userTotalCredit = 0, // กำหนดค่าเริ่มต้นเป็น 0 กันพัง
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
  React.useEffect(() => {
    const items = virtualItems;
    const lastItem = items[items.length - 1];
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
    rowVirtualizer,
    virtualItems,
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
        className="divide-y"
        style={{
          // height: `${!state.meta.isDirty ? totalSize : totalSize - itemHeight}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
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
                height: clsx(`${virtualRow.size}px`),
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {isLoaderRow ? (
                <aside className="bg-accent flex h-full grow items-center justify-center">
                  {hasNextPage ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Badge variant={"outline"} className="text-sm">
                      No more
                    </Badge>
                  )}
                </aside>
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
