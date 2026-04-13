import { createHookStore } from "@/shared/libs/zustand/createHookStore";

export const useLocaleStore = createHookStore({ initial: { locale: "" } });
