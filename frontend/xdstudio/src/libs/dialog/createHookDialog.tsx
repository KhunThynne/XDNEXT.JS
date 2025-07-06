import { useDialogDispatcher } from "./DialogProvider";
import React from "react";
import { DialogInstanceProps, DialogOptions } from "./dialog.type";
import { DialogInstance } from "./DialogInstance";
/**
 * Factory function to create a custom hook that manages a dynamic Dialog instance.
 *
 * @param {DialogInstanceProps} initialProps - The initial props for the Dialog instance such as title, content, description, etc.
 *
 * @returns {() => { openDialog: Function; closeDialog: Function }}
 *   Returns a hook providing:
 *   - `openDialog`: function to open the Dialog, optionally overriding initial props.
 *   - `closeDialog`: function to close the Dialog and perform cleanup.
 *
 * @example
 * ```tsx
 * const useDialogTest = createDialog({
 *   title: "Hello",
 *   description: "This is a dialog",
 * });
 *
 * function MyComponent() {
 *   const { openDialog } = useDialogTest();
 *
 *   return <button onClick={() => openDialog()}>Open Dialog</button>;
 * }
 * ```
 */
export const createHookDialog = (initialProps: DialogInstanceProps) => {
  return function useDialog(hookProps?: DialogInstanceProps) {
    const id = React.useMemo(() => crypto.randomUUID(), []);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const { add, remove } = useDialogDispatcher();
    const props: DialogInstanceProps = React.useMemo(
      () => hookProps ?? initialProps,
      [hookProps]
    );
    const closeDialog = React.useCallback(() => {
      const node = contentRef.current;
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
            modal: true,
            ...options?.dialog,
          },
        };

        return (
          <DialogInstance options={finalOptions} ref={contentRef} {...props} />
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
    return {
      openDialog,
      closeDialog,
    };
  };
};
