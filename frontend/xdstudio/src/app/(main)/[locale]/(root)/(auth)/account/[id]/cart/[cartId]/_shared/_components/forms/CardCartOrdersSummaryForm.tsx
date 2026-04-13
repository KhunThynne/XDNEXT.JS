"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import clsx from "clsx";

import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useEffect, useMemo } from "react";
import { ShoppingCart } from "lucide-react";
import { ImageProduct } from "@/shared/components/ui/images/ImageProduct";
import { useCartItemsContext } from "../../hooks/useCartItemsContext";
import type { CartItem } from "@/payload-types";
import { useAppForm, useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { useFormatter } from "next-intl";
import { CartSummary } from "@/shared/components/ui/cart/CartShopping.form";
import { formCartsOptions } from "./formOptions";

const CartItemComponent = ({ item }: { item: CartItem }) => {
  if (typeof item?.product === "string") return null;
  if (typeof item?.product.previewImage === "string") return null;
  if (typeof item?.product.price === "string") return null;
  return (
    <div className="flex h-full place-items-center gap-5 p-4">
      {item?.product?.previewImage && (
        <ImageProduct
          image={item?.product?.previewImage}
          className="aspect-square size-14 rounded-md"
        />
      )}
      <aside>
        <h3 className="text-foreground text-base font-semibold">
          {item.product?.name}
        </h3>

        <p className="text-muted-foreground text-sm">
          Price: {item.product?.price?.price} ฿
        </p>
      </aside>
    </div>
  );
};

export const CartItemsVirtualScroll = ({
  cartItems,
}: {
  cartItems: CartItem[];
}) => {
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
  const { selectedCartItems, userCredit } = useCartItemsContext();
  const formatter = useFormatter();
  const availableCredit = userCredit ?? 0;
  // 1. คำนวณราคาสินค้าทั้งหมด (Raw Price)
  const itemsPriceTotal = useMemo(() => {
    return (
      selectedCartItems?.reduce((total, item) => {
        if (typeof item?.product === "string") return total;
        if (typeof item?.product?.price === "string") return total;
        const price = item?.product?.price?.price ?? 0;
        const qty = item?.quantity ?? 1;
        return total + price * qty;
      }, 0) ?? 0
    );
  }, [selectedCartItems]);

  // 2. คำนวณภาษีและยอดรวมก่อนใช้เครดิต
  const tax = itemsPriceTotal * 0.07;
  const beforeCreditTotal = itemsPriceTotal + tax;

  // 3. คำนวณเครดิตที่จะนำมาใช้ (ไม่เกินราคาสินค้า และ ไม่เกินเครดิตที่มี)
  const appliedCreditAmount = useMemo(() => {
    return Math.min(beforeCreditTotal, availableCredit);
  }, [beforeCreditTotal, availableCredit]);

  // 4. ยอดสุทธิที่ต้องจ่ายจริง (Grand Total)
  const finalPayableAmount = beforeCreditTotal - appliedCreditAmount;

  // 5. เครดิตที่จะเหลือติดบัญชีจริงๆ
  const creditLeftInWallet = availableCredit - beforeCreditTotal;

  const form = useTypedAppFormContext({
    ...formCartsOptions,
    defaultValues: {
      ...formCartsOptions.defaultValues,
      availableCredit: userCredit, // เครดิตที่มีทั้งหมด
      grandTotal: finalPayableAmount, // ยอดชำระสุทธิ
      remainingCredit: creditLeftInWallet, // เครดิตคงเหลือหลังจ่าย
    },
  });

  // Sync ค่าเข้า Form เมื่อมีการเปลี่ยนการเลือกสินค้า
  useEffect(() => {
    form.setFieldValue("availableCredit", userCredit);
    form.setFieldValue("grandTotal", finalPayableAmount);
    form.setFieldValue("remainingCredit", creditLeftInWallet);
  }, [finalPayableAmount, creditLeftInWallet, userCredit, form]);

  if (selectedCartItems && selectedCartItems.length > 0) {
    return (
      <>
        {/* รายการสินค้าในตะกร้า */}
        <form.AppField
          name="selectedCartItemsId"
          children={() => (
            <CartItemsVirtualScroll cartItems={selectedCartItems} />
          )}
        />
        {/* {String(beforeCreditTotal)}-{String(appliedCreditAmount)} */}
        <CardContent className="flex flex-col gap-4 pt-5">
          {/* แสดงสรุปยอดด้วย Component ที่เราทำไว้ */}
          <form.Subscribe selector={(state) => [state.values]}>
            {([values]) => (
              <CartSummary
                userTotalCredit={values.availableCredit ?? 0}
                // remainingCredit={values.remainingCredit ?? 0}
                cartItems={selectedCartItems}
                // ยอดที่ต้องจ่ายจริง
                // totalCredit={values.grandTotal ?? 0}
              />
            )}
          </form.Subscribe>
        </CardContent>
      </>
    );
  }

  return (
    <CardContent className="text-muted-foreground flex min-h-50 grow flex-col items-center justify-center">
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
