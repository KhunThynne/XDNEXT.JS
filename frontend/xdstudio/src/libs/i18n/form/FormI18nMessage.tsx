import { cn } from "@/libs/utils";
import { useFormField } from "@/shared/components/shadcn/form";
import { useI18n } from "../hooks/useI18n";

export function FormI18nMessage({
  className,
  ...props
}: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const t = useI18n();
  const body = error ? t(String(error?.message ?? "")) : props.children;
  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}
