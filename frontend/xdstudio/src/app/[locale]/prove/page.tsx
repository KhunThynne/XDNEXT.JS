"use client";
import { useDialogExample } from "@/libs/dialog/example/clientHook";
import { useUsers } from "@/libs/graphql/operations/user/getUser.query";

import { SignForm, useSignDialog } from "@/shared/components/forms/SignForm";
import { Button } from "@/shared/components/shadcn/button";
export default function Page() {
  const { openDialog, closeDialog } = useSignDialog({
    // mode: "static",
    options: { dialog: { defaultOpen: true } },
  });

  const { openDialog: openTest } = useDialogExample({ mode: "static" });

  const { data, status, error } = useUsers();
  return (
    <div className="">
      <SignForm />
    </div>
  );
}
