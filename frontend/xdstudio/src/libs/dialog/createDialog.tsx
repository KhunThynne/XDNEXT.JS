import React from "react";

import { DialogInstance, DialogInstanceProvider } from "./DialogInstance";
import type { DialogInstanceProps } from "./index.type";
/**
 * `createDialog` is a factory function that generates a custom `Dialog` component
 * with preset default properties (`initialProps`) and allows runtime overrides.
 *
 * This is especially useful for creating reusable dialog components across the application
 * that share common layout, behavior, or configuration while still allowing dynamic content
 * and runtime configuration.
 *
 * Example:
 *
 * ```tsx
 * const ConfirmDialog = createDialog({
 *   title: "Are you sure?",
 *   description: "This action is irreversible.",
 * });
 *
 * // Usage
 * <ConfirmDialog
 *   content={<CustomContent />}
 *   options={{
 *     dialog: { defaultOpen: true }
 *   }}
 * />
 * ```
 *
 * @param initialProps - Default dialog configuration and content.
 * @returns A functional Dialog component that accepts `DialogInstanceProps` as runtime props.
 */
export function createDialog(initialProps: DialogInstanceProps) {
  function Dialog(
    runtimeProps: Partial<DialogInstanceProps> & {
      ref?: React.Ref<HTMLDivElement>;
    }
  ) {
    const setting: Partial<DialogInstanceProps> = {
      ...initialProps,
      options: {
        ...initialProps.options,
        trigger: { asChild: true },
      },
    };

    const mergedProps: Partial<DialogInstanceProps> = {
      ...setting,
      ...runtimeProps,
      options: {
        ...setting.options,
        ...runtimeProps?.options,
        dialog: {
          ...setting.options?.dialog,
          ...runtimeProps?.options?.dialog,
        },
      },
    };

    return (
      <DialogInstanceProvider>
        <DialogInstance {...mergedProps} />
      </DialogInstanceProvider>
    );
  }

  Dialog.displayName = "DialogWrapper";
  return Object.assign(Dialog, { displayName: "DialogComponent" }) as React.FC<
    Partial<DialogInstanceProps> & { ref?: React.Ref<HTMLDivElement> }
  >;
}
