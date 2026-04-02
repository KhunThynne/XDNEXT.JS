import _ from "lodash";
import { useFieldContext } from "../../hooks";
import { useStore } from "@tanstack/react-form";
import { useI18n } from "@/libs/i18n/hooks/useI18n";
import { cn } from "@/libs/shadcn/utils";
import { FieldError } from "@/libs/shadcn/ui/field";

export default function FieldFieldErrorI18nMessage({
  className,
  ...props
}: React.ComponentProps<"p">) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);
  const t = useI18n();

  if (errors.length === 0) {
    return null;
  }

  return (
    <FieldError
      {...props}
      className={cn("flex flex-col text-sm text-destructive", className)}
    >
      {errors.map((errorKey, index) => (
        <span
          key={`field-message-${field.name}-${index}`}
          data-slot="form-message"
          id={field.name}
        >
          {t(errorKey.message)}
        </span>
      ))}
    </FieldError>
  );
}
