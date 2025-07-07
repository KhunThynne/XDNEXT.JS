"use client";
import { useDialogExample } from "@/libs/dialog/example/clientHook";
import { useSignDialog } from "@/shared/components/forms/SignForm";
import { Button } from "@/shared/components/shadcn/button";
export default function Page() {
  const { openDialog, closeDialog } = useSignDialog({
    // mode: "static",
    // options: { dialog: { defaultOpen: true } },
  });

  const { openDialog: openTest } = useDialogExample({ mode: "static" });
  return (
    <div className="">
      <Button onClick={openDialog}>Open Login</Button>
      <Button onClick={openTest}>Open Test</Button>
    </div>
  );
}
