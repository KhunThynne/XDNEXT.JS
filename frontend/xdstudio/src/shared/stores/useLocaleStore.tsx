import { createHookStore } from "@/libs/zustand/createHookStore";

export const useLocaleStore = createHookStore({ initial: { locale: "" } });
