"use client";

import { useDialogConfirm } from "@/libs/dialog/createDialogs";
import { Button } from "@/shared/components/shadcn/button";
import { useStore } from "@/shared/stores/useNameStore";

export default function Page() {
  const { dataStore, setData } = useStore();
  return (
    <>
      {/* <Button onClick={() => open()}>Dialog</Button> */}
      <Button onClick={() => setData({ test: dataStore.test + 1 })}>
        TEst
      </Button>
      {dataStore.test}
    </>
  );
}
