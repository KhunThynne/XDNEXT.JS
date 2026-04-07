import type {
  DialogPortalProps,
  DialogOverlayProps,
  DialogContentProps,
  DialogTriggerProps,
  DialogProps,
  DialogTitleProps,
  DialogDescriptionProps,
} from "@radix-ui/react-dialog";
import type { ReactNode, RefObject } from "react";

export type DialogOptions = {
  disableBackdropClose?: boolean;
  portal?: DialogPortalProps;
  overlay?: DialogOverlayProps | true;
  content?: DialogContentProps;
  trigger?: DialogTriggerProps;
  dialog?: DialogProps;
  title?: DialogTitleProps;
  description?: DialogDescriptionProps;
  footer?: {
    className?: string;
  };
  header?: {
    className?: string;
  };
};
export type DialogInstanceProps = {
  options?: DialogOptions;
  title?: string | React.ReactNode | React.JSX.Element;
  description?: string | React.ReactNode | React.JSX.Element;
  portal?: RefObject<HTMLElement>;
  content?: React.ReactNode | React.JSX.Element;
  footer?: string | React.ReactNode | React.JSX.Element;
  trigger?: React.ReactNode | string;
  variant?: "fullscreen" | "modal";
  mode?: "static" | "dismissable";
};
export type DialogEntry = { id: string; node: React.ReactNode };

export type DialogContextType = {
  add: (id: string, dialog: ReactNode) => string;
  remove: (id: string) => void;
  dialogs: DialogEntry[];
};
export type DialogContextInstanceType = {
  dailogState: boolean;
  setDialogState: React.Dispatch<React.SetStateAction<boolean>>;
  closeDialog: () => void;
};
