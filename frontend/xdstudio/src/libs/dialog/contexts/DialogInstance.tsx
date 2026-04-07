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
} from "@/libs/shadcn/ui/dialog";
import type {
  DialogContextInstanceType,
  DialogInstanceProps,
} from "../index.type";
import {
  createContext,
  useCallback,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import clsx from "clsx";
import type { DialogOverlayProps } from "@radix-ui/react-dialog";
import { useDialogContext } from "../hooks/useDialogContext";
// import { DialogInstanceProps } from "./dialog.type";

export const DialogContentInstance = ({
  title,
  description,
  ref,
  content,
  footer,
  mode = "dismissable",
  options,
  variant,
}: Partial<DialogInstanceProps> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const id = useId();
  return (
    <DialogContent
      ref={ref}
      aria-describedby={description ? id : undefined}
      {...options?.content}
      {...(mode === "static" && {
        onInteractOutside: (e: Event) => e.preventDefault(),
      })}
      className={clsx(
        "flex flex-col",
        {
          "max-h-screen overflow-y-auto max-sm:h-screen max-sm:max-w-none max-sm:rounded-none":
            variant === "fullscreen",
        },
        options?.content?.className
      )}
    >
      <DialogHeader {...options?.header}>
        {title && (
          <DialogTitle className="text-left" {...options?.title}>
            {title}
          </DialogTitle>
        )}
        {description && (
          <DialogDescription
            id={id}
            className="text-left"
            {...options?.description}
          >
            {description}
          </DialogDescription>
        )}
      </DialogHeader>
      {content}
      {footer && <DialogFooter {...options?.footer}>{footer}</DialogFooter>}
    </DialogContent>
  );
};

export const DialogContextInstance = createContext<
  DialogContextInstanceType | undefined
>(undefined);

export const DialogInstanceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dailogState, setDialogState] = useState(true);
  const closeDialog = useCallback(() => {
    setDialogState(false);
  }, []);
  return (
    <DialogContextInstance value={{ closeDialog, dailogState, setDialogState }}>
      {children}
    </DialogContextInstance>
  );
};

export function DialogInstance(
  props: Partial<DialogInstanceProps> & {
    refDialog?: React.RefObject<{
      closeDialogRef: () => void;
      state: boolean;
    } | null>;
    refContent?: React.RefObject<HTMLDivElement | null>;
  }
) {
  const options = props.options;
  const { refContent, refDialog, ...propsDialog } = props;

  const { dailogState, setDialogState } = useDialogContext();

  // const [open, setOpen] = useState(props.options?.dialog?.open);

  useLayoutEffect(() => {
    if (props.options?.dialog?.open) {
      setDialogState(props.options?.dialog?.open);
    }
  }, [props.options?.dialog?.open, setDialogState]);
  useImperativeHandle(refDialog, () => {
    return {
      closeDialogRef() {
        setDialogState(false);
      },
      state: dailogState,
    };
  }, [dailogState, setDialogState]);

  return (
    <Dialog {...propsDialog.options?.dialog} open={dailogState}>
      {props?.trigger && (
        <DialogTrigger {...propsDialog?.options?.trigger}>
          {props.trigger}
        </DialogTrigger>
      )}
      {props?.options?.overlay && (
        <DialogOverlay
          className="backdrop-blur"
          {...(props?.options?.overlay as DialogOverlayProps)}
        />
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
