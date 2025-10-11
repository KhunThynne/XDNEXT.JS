"use client";
import { useDialogDispatcher } from "./DialogProvider";
import React, { useId } from "react";

import { DialogInstance } from "./DialogInstance";
import type { DialogInstanceProps, DialogOptions } from "./index.type";
const DialogState = {
  OPEN: "open",
  CLOSE: "close",
} as const;
type DialogStateType = (typeof DialogState)[keyof typeof DialogState];

/**
 * Creates a custom React hook for managing a dynamic Dialog instance.
 *
 * This factory function returns a hook that can be used to open and close
 * a Dialog component programmatically. You can specify default dialog
 * properties (like title and description) when creating the hook, and override
 * them at runtime if needed.
 *
 * @param initialProps - Default dialog props such as title, description, content, etc.
 * @param variant - modal || fullscreen
 *
 * @returns A hook that provides:
 * - `openDialog`: Function to open the dialog with optional runtime overrides.
 * - `closeDialog`: Function to close the dialog and perform cleanup.
 *
 * @example
 * ```tsx
 * const useDialogTest = createHookDialog({
 *   title: "Hello",
 *   description: "This is a dialog",
 * });
 *
 * function MyComponent() {
 *   const { openDialog } = useDialogTest();
 *
 *   return <button onClick={openDialog}>Open Dialog</button>;
 * }
 * ```
 */

export const createHookDialog = (initialProps: DialogInstanceProps) => {
  return function useDialog(hookProps?: Partial<DialogInstanceProps>) {
    const id = useId();
    const strictModeHandledRef = React.useRef(false);
    const refDialog = React.useRef<{
      closeDialogRef: () => void;
      state: boolean;
    }>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const { add, remove } = useDialogDispatcher();
    const props: Partial<DialogInstanceProps> = React.useMemo(
      () => ({ ...{ variant: "modal", ...initialProps }, ...hookProps }),
      [hookProps]
    );
    const closeDialog = React.useCallback(() => {
      const node = contentRef.current;
      refDialog.current?.closeDialogRef();
      if (!node) return;
      const handle = () => {
        remove(id);
      };
      node.addEventListener("animationend", handle);
      node.addEventListener("transitionend", handle);
      return () => {
        node.removeEventListener("animationend", handle);
        node.removeEventListener("transitionend", handle);
      };
    }, [remove, id]);
    const Dialog = React.useCallback(
      ({ options, ...props }: Partial<DialogInstanceProps> = {}) => {
        const finalOptions: DialogOptions = {
          ...options,
          dialog: {
            defaultOpen: true,
            onOpenChange: closeDialog,
            ...options?.dialog,
          },
        };

        return (
          <DialogInstance
            options={finalOptions}
            refDialog={refDialog}
            refContent={contentRef}
            {...props}
          />
        );
      },
      [closeDialog]
    );
    const openDialog = React.useCallback(
      (
        arg?: React.MouseEvent<HTMLButtonElement> | Partial<DialogInstanceProps>
      ) => {
        arg && "currentTarget" in arg
          ? add(id, Dialog({ ...props }))
          : add(id, Dialog({ ...props, ...(arg as DialogInstanceProps) }));
      },
      [Dialog, add, id, props]
    );

    React.useLayoutEffect(() => {
      if (strictModeHandledRef.current) return;
      const shouldOpen =
        props?.options?.dialog?.open || props?.options?.dialog?.defaultOpen;
      if (shouldOpen) {
        strictModeHandledRef.current = true;
        add(id, Dialog({ ...props }));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
      state: refDialog.current?.state ? DialogState.OPEN : DialogState.CLOSE,
      openDialog,
      closeDialog,
    };
  };
};
