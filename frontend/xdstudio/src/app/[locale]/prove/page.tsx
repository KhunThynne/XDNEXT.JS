"use client";

import { Button } from "@/shared/components/shadcn/button";
import { useMainStore, useStore } from "@/shared/stores/useNameStore";

export default function Page() {
  const { dataStore, setData } = useStore();
  const { mainStore, setMain } = useMainStore();
  return (
    <>
      <Button onClick={() => setData({ test: 6 })}>TEst</Button>
      {dataStore.test}
    </>
  );
}
