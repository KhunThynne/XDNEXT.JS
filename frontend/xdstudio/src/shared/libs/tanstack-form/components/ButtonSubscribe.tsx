import { Button } from "@/shared/libs/shadcn/ui/button";
import { useFormContext } from "../hooks/form-context";
import type { AnyFormState } from "@tanstack/react-form";

interface SubscribeButtonProps extends Omit<React.ComponentProps<typeof Button>, "children"> {
  children?: (
    state: Pick<AnyFormState, "canSubmit" | "isSubmitting" | "isDefaultValue" | "isDirty" | "isValid">,
  ) => React.ReactNode;
}
export default function SubscribeButton({ children, ...buttonProps }: SubscribeButtonProps) {
  const form = useFormContext();
  return (
    <form.Subscribe
      selector={state => [state.canSubmit, state.isSubmitting, state.isDirty, state.isValid, state.isDefaultValue]}
    >
      {([canSubmit, isSubmitting, isDirty, isValid, isDefaultValue]) => (
        <Button disabled={isDefaultValue || !canSubmit || isSubmitting} {...buttonProps}>
          {typeof children === "function"
            ? children({
                canSubmit,
                isSubmitting,
                isDefaultValue,
                isDirty,
                isValid,
              })
            : children}
        </Button>
      )}
    </form.Subscribe>
  );
}
