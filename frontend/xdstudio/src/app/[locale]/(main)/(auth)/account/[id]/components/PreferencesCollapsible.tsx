"use client";
import _ from "lodash";
import { useAccountUserMenuStore } from "../stores/useAccountUserMenuStore";
import { CardCollapsible } from "./CardCollapsible";

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
