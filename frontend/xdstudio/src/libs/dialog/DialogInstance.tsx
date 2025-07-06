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
// import { DialogInstanceProps } from "./dialog.type";

import { DialogInstanceProps } from "./dialog.type";

const DialogContentInstance = ({
  title,
  description,
  ref,
  content,
  footer,
  options,
}: Partial<DialogInstanceProps> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <DialogContent ref={ref} {...options?.content}>
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
    ref?: React.RefObject<HTMLDivElement | null>;
  }
) {
  const options = props.options;
  const { ref, ...propsDialog } = props;
  return (
    <Dialog {...propsDialog.options?.dialog}>
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
          <DialogContentInstance {...propsDialog} ref={ref} />
        </DialogPortal>
      ) : (
        <DialogContentInstance {...propsDialog} ref={ref} />
      )}
    </Dialog>
  );
}
