"use client";
import _ from "lodash";
import { useAccountUserMenuStore } from "../../_stores/useAccountUserMenuStore";
import { CardCollapsible } from "@/shared/components/ui/CardCollapsible";

export default function PreferencesCollapsible({ children }: WithChildren) {
  const { accountusermenuStore: store, setAccountUserMenu: setStore } =
    useAccountUserMenuStore();
  return (
    <CardCollapsible
      title="Preferences"
      defaultOpen={store.preference}
      onClick={() => {
        setStore({ preference: !store.preference });
      }}
    >
      {children}
    </CardCollapsible>
  );
}
