import { Button } from "@/libs/shadcn/ui/button";

export type DialogFooterActionProps = {
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  buttonConfirm?: React.ComponentProps<typeof Button>;
  buttonCancel?: React.ComponentProps<typeof Button>;
  loading?: boolean;
};

export * from "./DialogFooterAction";
export * from "./useDialogGlobal";
