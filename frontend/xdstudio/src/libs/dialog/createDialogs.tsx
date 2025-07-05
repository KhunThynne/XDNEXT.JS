import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/shadcn/dialog";
import { useState } from "react";

type DialogOptions = {
  title?: string;
  content?: React.ReactNode;
  description?: string;
  footer?: React.ReactNode;
};

export function createDialog(config: { initial: DialogOptions }) {
  return function useDialogInstance() {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogOptions, setDialogOptions] = useState<DialogOptions>(
      config.initial
    );

    const open = (options?: DialogOptions) => {
      setDialogOptions({ ...config.initial, ...options });
      setIsOpen(true);
    };

    const close = () => setIsOpen(false);

    const DialogComponent = () => (
      <Dialog>
        <DialogContent>
          <DialogHeader>
            {dialogOptions.title && (
              <DialogTitle>{dialogOptions.title}</DialogTitle>
            )}
            {dialogOptions.description && (
              <DialogDescription>{dialogOptions.description}</DialogDescription>
            )}
          </DialogHeader>
          {dialogOptions.content}
          {dialogOptions.footer && (
            <DialogFooter>{dialogOptions.footer}</DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );

    return {
      open,
      close,
      Dialog: DialogComponent,
    };
  };
}

export const useDialogConfirm = createDialog({
  initial: {
    content: "test",
    title: "test",
    footer: <></>,
  },
});
