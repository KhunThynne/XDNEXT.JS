import { createHookStore } from "@/shared/libs/zustand/createHookStore";

export const useBreadBrumbStore = createHookStore<
  { current?: string; disable?: boolean },
  "breadcrumbe"
>({
  key: "breadcrumbe",
  initial: { current: "", disable: false },
});
