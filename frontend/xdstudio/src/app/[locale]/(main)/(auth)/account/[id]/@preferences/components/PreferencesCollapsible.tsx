"use client";
import _ from "lodash";
import { CardCollapsible } from "../../components/CardCollapsible";
import { useAccountUserMenuStore } from "../../stores/useAccountUserMenuStore";

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
