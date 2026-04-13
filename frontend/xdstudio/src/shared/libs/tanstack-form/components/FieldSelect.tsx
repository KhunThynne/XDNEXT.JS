import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
import FieldErrorMessage from "./shared/FieldErrorMessage";

import type { LabelDescription, ValidateProps, WithClassNames } from "./type";
import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";

import { cn } from "@/shared/libs/shadcn/utils";
import { Field } from "@/shared/libs/shadcn/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/libs/shadcn/ui/select";

type Option = {
  label: string;
  value: any;
};

type OptionGroup = {
  label?: string;
  items: Option[];
};

export type SelectionFieldOptionsType = Option[] | OptionGroup[];

export interface SelectFieldProps {
  options: SelectionFieldOptionsType;
  placeholder?: string;
  selectProps?: any;
}

type FieldSelectProps = LabelDescription &
  React.ComponentProps<typeof Select> & {
    validate?: ValidateProps;
  } & WithClassNames<"label" | "description" | "selectTriger" | "field" | "validate"> &
  SelectFieldProps;

export default function FieldSelect({
  label,
  validate,
  description,
  classNames,
  className,
  placeholder,
  options,
  ...select
}: FieldSelectProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);
  const isInvalid = errors.length > 0;
  const isGrouped = Array.isArray(options) && "items" in options[0];
  return (
    <Field data-invalid={isInvalid} className={cn(`flex flex-col gap-1.5`, className, classNames?.field)}>
      <LabelAndDescriptionFieldForm
        htmlFor={field.name}
        required={select.required}
        label={label}
        description={description}
        classNames={{
          label: cn(`order-1`, classNames?.label),
          description: cn(`order-3`, classNames?.description),
        }}
      >
        <Select
          name={field.name}
          value={field.state.value}
          onValueChange={field.handleChange}
          // disabled={isSubmitting}

          {...select}
        >
          <SelectTrigger
            id={field.name}
            data-invalid={isInvalid}
            className={cn(`order-2 grow cursor-pointer`, classNames?.selectTriger)}
          >
            <SelectValue placeholder={placeholder ?? "Select..."} />
          </SelectTrigger>
          <SelectContent align="start">
            {isGrouped
              ? (options as OptionGroup[]).map((group, idx) => (
                  <SelectGroup key={idx}>
                    {group.label && <SelectLabel>{group.label}</SelectLabel>}
                    {group.items.map(item => (
                      <SelectItem key={item.value} value={item.value} className="cursor-pointer">
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))
              : (options as Option[]).map(item => (
                  <SelectItem key={item.value} value={item.value} className="cursor-pointer">
                    {item.label}
                  </SelectItem>
                ))}
          </SelectContent>
        </Select>
      </LabelAndDescriptionFieldForm>
      <FieldErrorMessage className={cn(`order-4`, classNames?.validate)} {...validate} />
    </Field>
  );
}
