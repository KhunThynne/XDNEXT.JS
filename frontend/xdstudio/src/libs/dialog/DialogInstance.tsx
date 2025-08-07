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
import { DialogInstanceProps } from "./index.type";
import {
  createContext,
  useCallback,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import clsx from "clsx";
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
      className={clsx(
        "max-h-screen overflow-y-auto",
        `max-sm:h-screen max-sm:max-w-none max-sm:rounded-none`,
        options?.content?.className
      )}
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

type DialogContextInstanceType = {
  dailogState: boolean;
  setDialogState: React.Dispatch<React.SetStateAction<boolean>>;
  closeDialog: () => void;
};
const DialogContextInstance = createContext<
  DialogContextInstanceType | undefined
>(undefined);

export const DialogInstanceProvider = ({ children }: GlobalDefaultProps) => {
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
export const useDialoguseContext = () => {
  const context = useContext(DialogContextInstance);
  if (!context) {
    throw new Error(
      "useDialogInstance must be used within a DialogInstanceProvider"
    );
  }
  return context;
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

  const { dailogState, setDialogState } = useDialoguseContext();

  // const [open, setOpen] = useState(props.options?.dialog?.open);

  useLayoutEffect(() => {
    props.options?.dialog?.open && setDialogState(props.options?.dialog?.open);
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
