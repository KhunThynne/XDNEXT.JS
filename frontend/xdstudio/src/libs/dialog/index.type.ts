import {
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@radix-ui/react-dialog";

export type DialogOptions = {
  disableBackdropClose?: boolean;
  portal?: DialogPortalProps;
  overlay?: DialogOverlayProps | true;
  content?: DialogContentProps;
  trigger?: DialogTriggerProps;
  dialog?: DialogProps;
  title?: DialogTitleProps;
  description?: DialogDescriptionProps;
  footer?: WithClassName;
  header?: WithClassName;
};
export type DialogInstanceProps = {
  options?: DialogOptions;
  title?: string;
  description?: string;
  content?: React.ReactNode | React.JSX.Element;
  footer?: React.ReactNode | React.JSX.Element;
  trigger?: React.ReactNode | string;
  variant?: "fullscreen" | "modal";
  mode?: "static" | "dismissable";
};
