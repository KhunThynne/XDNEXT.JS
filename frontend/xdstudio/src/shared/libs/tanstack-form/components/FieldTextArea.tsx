import { Field } from "@/shared/libs/shadcn/ui/field";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";
import FieldErrorI18nMessage from "./shared/FieldErrorMessage";

import { Textarea } from "@/shared/libs/shadcn/ui/textarea";
import type { LabelDescription, ValidateProps, WithClassNames } from "./type";
import { cn } from "@/shared/libs/shadcn/utils";

type FieldTextAreaProps = LabelDescription & {
  validate?: ValidateProps;
} & React.ComponentProps<typeof Textarea> &
  WithClassNames<"label" | "description" | "textarea" | "field" | "validate">;

export default function FieldTextArea({
  label,
  description,
  classNames,
  className,
  validate,
  ...textarea
}: FieldTextAreaProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);
  const isInvalid = errors.length > 0;
  return (
    <Field data-invalid={isInvalid} className={cn(`flex flex-col gap-1.5`, className, classNames?.field)}>
      <LabelAndDescriptionFieldForm
        required={textarea.required}
        label={label}
        description={description}
        classNames={{
          label: cn(`order-1`, classNames?.label),
          description: cn(`order-3`, classNames?.description),
        }}
        htmlFor={field.name}
      >
        <Textarea
          {...textarea}
          id={field.name}
          value={field.state.value}
          className={cn(`order-2`, classNames?.textarea)}
          onChange={e => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
        />
      </LabelAndDescriptionFieldForm>
      <FieldErrorI18nMessage className={cn(`order-4`, classNames?.validate)} {...validate} />
    </Field>
  );
}
