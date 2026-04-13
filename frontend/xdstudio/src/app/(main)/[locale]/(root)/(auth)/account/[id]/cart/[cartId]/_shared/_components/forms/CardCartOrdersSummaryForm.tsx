"use client";

import { CardContent } from "@/shared/libs/shadcn/ui/card";

import React, { useEffect, useMemo } from "react";
import { ShoppingCart } from "lucide-react";

import { useCartItemsContext } from "../../hooks/useCartItemsContext";

import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { useFormatter } from "next-intl";
import { CartSummary } from "@/shared/components/cart/CartShopping.form";
import { formCartsOptions } from "../../formOptions";
import { CartItemsVirtualScroll } from "../CartItemsVirtualScroll";

export const CartOrdersSummaryForm = () => {
  const { selectedCartItems, userCredit } = useCartItemsContext();
  const formatter = useFormatter();
  const availableCredit = userCredit ?? 0;
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
  const tax = itemsPriceTotal * 0.07;
  const beforeCreditTotal = itemsPriceTotal + tax;
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
