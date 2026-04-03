"use client";
import _ from "lodash";
import { useAccountUserMenuStore } from "../_stores/useAccountUserMenuStore";
import { CardCollapsible } from "@/shared/components/ui/CardCollapsible";

export default function PaymentCollapsible({ children }: WithChildren) {
  const { accountusermenuStore: store, setAccountUserMenu: setStore } =
    useAccountUserMenuStore();
  return (
    <CardCollapsible
      title="Payment"
      defaultOpen={store.payment}
      onClick={() => {
        setStore({ payment: !store.payment });
      }}
    >
      {children}
    </CardCollapsible>
  );
}
