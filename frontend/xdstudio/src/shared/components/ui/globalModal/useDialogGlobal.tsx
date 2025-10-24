import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

export const useDialogGlobal = createHookDialog({
  title: "unkhonw",
  // description: "This is dialog global for use any whare .",
  options: { overlay: true },
});
