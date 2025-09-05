import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";

type DialogFooterActionProps = {
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  buttonConfirm?: React.ComponentProps<typeof Button>;
  buttonCancel?: React.ComponentProps<typeof Button>;
};

export const DialogFooterAction = ({
  onConfirm,
  onCancel,
  buttonConfirm,
  buttonCancel,
  className,
}: DialogFooterActionProps & WithClassName) => {
  return (
    <section
      key={"dialog-footer-action"}
      className={clsx("space-x-3 place-self-end", className)}
    >
      <Button onClick={onConfirm} className="cursor-pointer" {...buttonConfirm}>
        Confirm
      </Button>
      <Button
        variant={"destructive"}
        {...buttonCancel}
        className="cursor-pointer"
        onClick={onCancel}
      >
        Cancel
      </Button>
    </section>
  );
};

export const useDialogGlobal = createHookDialog({
  title: "unkhonw",
  description: "This is dialog global for use any whare .",
  options: { overlay: true },
});
