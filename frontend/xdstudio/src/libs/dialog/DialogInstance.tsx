import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/shadcn/dialog";
import { DialogInstanceProps } from "./index.type";
import { useImperativeHandle, useRef, useState } from "react";
// import { DialogInstanceProps } from "./dialog.type";

const DialogContentInstance = ({
  title,
  description,
  ref,
  content,
  footer,
  mode = "dismissable",
  options,
}: Partial<DialogInstanceProps> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <DialogContent
      ref={ref}
      {...options?.content}
      {...(mode === "static" && {
        onInteractOutside: (e: Event) => e.preventDefault(),
      })}
    >
      <DialogHeader {...options?.header}>
        {<DialogTitle {...options?.title}>{title}</DialogTitle>}
        {
          <DialogDescription {...options?.description}>
            {description}
          </DialogDescription>
        }
      </DialogHeader>
      {content}
      {footer && <DialogFooter {...options?.footer}>{footer}</DialogFooter>}
    </DialogContent>
  );
};

export function DialogInstance(
  props: Partial<DialogInstanceProps> & {
    refDialog?: React.RefObject<{ closeDialogRef: () => void } | null>;
    refContent?: React.RefObject<HTMLDivElement | null>;
  }
) {
  const options = props.options;
  const { refContent, refDialog, ...propsDialog } = props;
  const [open, setOpen] = useState(true);
  useImperativeHandle(refDialog, () => {
    return {
      closeDialogRef() {
        setOpen(false);
      },
    };
  }, []);

  return (
    <Dialog {...propsDialog.options?.dialog} open={open}>
      {props?.trigger && (
        <DialogTrigger {...propsDialog?.options?.trigger}>
          {props.trigger}
        </DialogTrigger>
      )}
      {props?.options?.overlay && (
        <DialogOverlay {...props?.options?.overlay} />
      )}
      {options?.portal ? (
        <DialogPortal {...options.portal}>
          <DialogContentInstance {...propsDialog} ref={refContent} />
        </DialogPortal>
      ) : (
        <DialogContentInstance {...propsDialog} ref={refContent} />
      )}
    </Dialog>
  );
}
