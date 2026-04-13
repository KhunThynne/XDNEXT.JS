import { useField, useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";

import type { WithClassNames, LabelDescription, ValidateProps } from "./type";

import { Field, FieldContent, FieldDescription, FieldLabel } from "@/shared/libs/shadcn/ui/field";
import { cn } from "@/shared/libs/shadcn/utils";
import { Checkbox } from "@/shared/libs/shadcn/custom/checkbox";
import FieldErrorMessage from "./shared/FieldErrorMessage";

type FieldSelectProps = LabelDescription &
  React.ComponentProps<typeof Checkbox> & {
    validate?: ValidateProps;
    field?: React.ComponentProps<typeof Field>;
    description?: React.ReactNode | string;
  } & WithClassNames<"label" | "description" | "selectTriger" | "field" | "validate">;

export default function FieldCheckBox({
  label,
  classNames,
  field: fieldProps,
  validate,
  description,
  className,
  ...checkbox
}: FieldSelectProps) {
  const { form, name } = useFieldContext<string[]>();
  const field = useField({ mode: "array", name, form });
  const value = useStore(field.store, state => state.value);
  const errors = useStore(field.store, state => state.meta.errors);
  // const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const isInvalid = errors.length > 0;

  return (
    <Field
      data-invalid={isInvalid}
      className={cn(``, className, classNames?.field)}
      orientation={"horizontal"}
      {...fieldProps}
    >
      <Checkbox
        {...checkbox}
        id={field.name}
        className={cn(`peer cursor-pointer`)}
        defaultChecked={value}
        onCheckedChange={checked => {
          field.handleChange(checked as boolean);
        }}
      />
      <FieldContent>
        {label && (
          <FieldLabel htmlFor={field.name} className={cn(`font-normal`, classNames?.label)}>
            {label}
          </FieldLabel>
        )}
        {description && <FieldDescription className={cn(classNames?.description)}>{description}</FieldDescription>}
        <FieldErrorMessage className={cn(classNames?.validate)} {...validate} />
      </FieldContent>
    </Field>
  );
}
