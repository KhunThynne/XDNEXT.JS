import { Field } from "@/libs/shadcn/ui/field";
import { Input } from "@/libs/shadcn/ui/input";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";
import FieldErrorI18nMessage from "./shared/FieldErrorI18nMessage";
import { cn } from "@/libs/shadcn/utils";
import { Textarea } from "@/libs/shadcn/ui/textarea";
import type { LabelDescription } from "../typed";

type FieldTextAreaProps = LabelDescription &
  React.ComponentProps<typeof Textarea> &
  WithClassNames<
    "label" | "description" | "textarea" | "field" | "validate"
  >;

export default function FieldTextArea({
  label,
  description,
  classNames,
  className,
  ...textarea
}: FieldTextAreaProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);
  const isInvalid = errors.length > 0;
  return (
    <Field
      data-invalid={isInvalid}
      className={cn(`flex flex-col`, className, classNames?.field)}
    >
      <LabelAndDescriptionFieldForm
        label={label}
        description={description}
        classNames={{
          label: cn(`order-1`, classNames?.label),
          description: cn(`order-3`, classNames?.description),
        }}
      >
        <Textarea
          {...textarea}
          value={field.state.value}
          className={cn(`order-2`, classNames?.textarea)}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
        />
      </LabelAndDescriptionFieldForm>
      <FieldErrorI18nMessage className={cn(`order-4`, classNames?.validate)} />
    </Field>
  );
}
