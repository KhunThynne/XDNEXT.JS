import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { Button } from "@/libs/shadcn/ui/button";

type DialogFooterActionProps = {
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
};

export const DialogFooterAction = ({
  onConfirm,
  onCancel,
}: DialogFooterActionProps) => {
  return (
    <section key={"dialog-footer-action"} className="space-x-3 place-self-end">
      <Button onClick={onConfirm} className="cursor-pointer">
        Confirm
      </Button>
      <Button
        variant={"destructive"}
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
