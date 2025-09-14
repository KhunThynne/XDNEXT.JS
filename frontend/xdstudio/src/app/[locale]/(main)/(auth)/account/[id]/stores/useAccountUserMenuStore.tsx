import { createHookStore } from "@/libs/zustand/createHookStore";
interface AccountSettingMenu {
  payment: boolean;
  preference: boolean;
}
export const useAccountUserMenuStore = createHookStore<
  AccountSettingMenu,
  "accountUserMenu"
>({
  initial: {
    payment: true,
    preference: true,
  },
  key: "accountUserMenu",
  persistant: { name: "account-user-menu" },
});
