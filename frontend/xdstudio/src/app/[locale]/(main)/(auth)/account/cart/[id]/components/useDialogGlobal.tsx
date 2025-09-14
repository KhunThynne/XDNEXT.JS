import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

type DialogFooterActionProps = {
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  buttonConfirm?: React.ComponentProps<typeof Button>;
  buttonCancel?: React.ComponentProps<typeof Button>;
  loading?: boolean;
};

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
        className="cursor-pointer"
        {...buttonConfirm}
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin" />
            Loading...
          </span>
        ) : (
          "Confirm"
        )}
      </Button>
      <Button
        variant={"secondary"}
        {...buttonCancel}
        className="cursor-pointer"
        onClick={onCancel}
      >
        Close
      </Button>
    </section>
  );
};

export const useDialogGlobal = createHookDialog({
  title: "unkhonw",
  description: "This is dialog global for use any whare .",
  options: { overlay: true },
});
