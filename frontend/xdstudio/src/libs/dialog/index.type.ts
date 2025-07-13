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
  overlay?: DialogOverlayProps;
  content?: DialogContentProps;
  trigger?: DialogTriggerProps;
  dialog?: DialogProps;
  title?: DialogTitleProps;
  description?: DialogDescriptionProps;
  footer?: NextPropClassName;
  header?: NextPropClassName;
};
export type DialogInstanceProps = {
  options?: DialogOptions;
  title: string;
  description: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  trigger?: React.ReactNode | string;
  mode?: "static" | "dismissable";
};
