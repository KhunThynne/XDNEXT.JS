import { Field, FieldGroup, FieldLabel } from "@/libs/shadcn/ui/field";

import { useField, useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";
import FieldErrorI18nMessage from "./shared/FieldErrorI18nMessage";
import { cn } from "@/libs/shadcn/utils";

import type { LabelDescription } from "../typed";
import { Checkbox } from "@/libs/shadcn/custom/checkbox";

type FieldSelectProps = LabelDescription &
  React.ComponentProps<typeof Checkbox> &
  WithClassNames<
    "label" | "description" | "selectTriger" | "field" | "validate"
  >;

export default function FieldCheckBox({
  label,
  description,
  classNames,
  className,
  ...checkbox
}: FieldSelectProps) {
  const { form, name } = useFieldContext<string[]>();
  const field = useField({ mode: "array", name, form });
  const errors = useStore(field.store, (state) => state.meta.errors);
  // const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const isInvalid = errors.length > 0;

  return (
    <FieldGroup data-slot="checkbox-group">
      <Field
        data-invalid={isInvalid}
        className={cn(`flex flex-col gap-1.5`, className, classNames?.field)}
      >
        <span className="flex gap-2">
          <Checkbox {...checkbox} className={cn(`peer cursor-pointer`)} />
          <FieldLabel htmlFor={"test"}>{label}</FieldLabel>
        </span>
      </Field>
      <FieldErrorI18nMessage className={cn(classNames?.validate)} />
    </FieldGroup>
  );
}
