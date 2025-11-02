"use client";

import { FormControl, FormField, FormItem } from "@/libs/shadcn/ui/form";
import type { FieldValues } from "react-hook-form";
import { useFormState } from "react-hook-form";
import clsx from "clsx";

import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/libs/shadcn/ui/select";
import type { FormXdProps } from "./shared/index.type";
import LabelAndDescriptionForm from "./shared/LabelAndDescriptionForm";

type Option = {
  label: string;
  value: string;
};

type OptionGroup = {
  label?: string;
  items: Option[];
};

export type SelectionFormOptionsType = Option[] | OptionGroup[];

export interface SelectFormProps {
  options: SelectionFormOptionsType;
  placeholder?: string;
  selectProps?: any;
}

export function SelectForm<TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  label,
  description,
  className,
  classNames,
  options,
  placeholder = "Select an option",
  children,
  ...props
}: FormXdProps<TFieldValues> &
  SelectFormProps &
  React.ComponentProps<typeof Select> &
  WithClassNames<"label" | "description" | "container">) {
  const isGrouped = Array.isArray(options) && "items" in options[0];
  const { isSubmitting } = useFormState();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={clsx(className)}>
          <LabelAndDescriptionForm
            label={label}
            description={description}
            classNames={classNames}
          >
            <FormControl>
              <div className={clsx("flex", classNames?.container)}>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isSubmitting}
                  {...props}
                >
                  <SelectTrigger className="grow">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent className="grow" align="start">
                    {isGrouped
                      ? (options as OptionGroup[]).map((group, idx) => (
                          <SelectGroup key={idx}>
                            {group.label && (
                              <SelectLabel>{group.label}</SelectLabel>
                            )}
                            {group.items.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        ))
                      : (options as Option[]).map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>
                {children}
              </div>
            </FormControl>
          </LabelAndDescriptionForm>
          <FormI18nMessage />
        </FormItem>
      )}
    />
  );
}
