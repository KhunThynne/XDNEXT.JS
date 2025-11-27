import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import type { DialogFooterActionProps } from ".";

export const DialogFooterAction = ({
  onConfirm,
  onCancel,
  buttonConfirm,
  buttonCancel,
  className,
  loading,
}: DialogFooterActionProps & WithClassName) => {
  return (
    <section
      key={"dialog-footer-action"}
      className={clsx("flex justify-end gap-3", className)}
    >
      <Button
        onClick={onConfirm}
        className={clsx("cursor-pointer", buttonConfirm?.className)}
        {...buttonConfirm}
        disabled={loading || buttonConfirm?.disabled}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin" />
            Loading...
          </span>
        ) : (
          (buttonConfirm?.children ?? "Confirm")
        )}
      </Button>
      <Button
        variant={"secondary"}
        {...buttonCancel}
        className={clsx("cursor-pointer", buttonCancel?.className)}
        onClick={onCancel}
      >
        Close
      </Button>
    </section>
  );
};
