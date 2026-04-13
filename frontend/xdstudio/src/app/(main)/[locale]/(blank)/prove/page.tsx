"use client";
import { Form } from "@/shared/libs/shadcn/ui/form";
import { TextForm } from "./test/TESTForm";

import { Button } from "@/shared/libs/shadcn/ui/button";
import { useDialogGlobal } from "@/shared/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/libs/shadcn/ui/dialog";

export default function PageCart() {
  const dialog = useDialogGlobal();
  return (
    <>
      <Button onClick={dialog.openDialog}>xxx</Button>
    </>
  );
}
