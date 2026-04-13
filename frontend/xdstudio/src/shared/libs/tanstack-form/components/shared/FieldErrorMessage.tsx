import { useStore } from "@tanstack/react-form";
import { FieldError } from "@/shared/libs/shadcn/ui/field";
import { cn } from "@/shared/libs/shadcn/utils";
import { useFieldContext } from "../../hooks";
import type { ValidateProps } from "../type";
interface FieldErrorMessageProps extends Omit<React.ComponentProps<"p">, "children"> {
  children?: React.ReactNode | ((messages: string[]) => React.ReactNode);
  className?: string;
}
export default function FieldValidateMessage({ className, ...props }: FieldErrorMessageProps & ValidateProps) {
  const field = useFieldContext<string>();

  const errors = useStore(field.store, state =>
    state.meta.errors.map(err => (typeof err === "string" ? err : err?.message)),
  );
  if (errors.length === 0) {
    return null;
  }
  if (typeof props.children === "function") {
    return (
      <FieldError {...props} className={className}>
        {props.children(errors)}
      </FieldError>
    );
  }
  return (
    <FieldError {...props} className={cn("flex flex-col text-sm text-destructive", className)}>
      {props.children ||
        errors.map((msg, index) => (
          <span key={`field-message-${field.name}-${index}`} data-slot="form-message">
            {msg}
          </span>
        ))}
    </FieldError>
  );
}
