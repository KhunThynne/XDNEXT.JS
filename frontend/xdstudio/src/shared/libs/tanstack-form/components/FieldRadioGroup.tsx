import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
// import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";
import FieldErrorMessage from "./shared/FieldErrorMessage";

import type { ValidateProps, WithClassNames } from "./type";

import {
  Field,
  FieldSet,
  FieldLabel,
  FieldContent,
  FieldTitle,
  FieldDescription,
  FieldLegend,
} from "@/shared/libs/shadcn/ui/field";
import { cn } from "@/shared/libs/shadcn/utils";
import { RadioGroup, RadioGroupItem } from "@/shared/libs/shadcn/ui/radio-group";
import React from "react";

type CommonClassNames = WithClassNames<"container" | "title" | "description" | "section">;
export type RadioFieldItemProps = {
  label?: string | React.ReactNode | React.ComponentPropsWithoutRef<typeof FieldLabel>;
  description?: string | React.ReactNode | React.ComponentPropsWithoutRef<typeof FieldDescription>;
  title?: string | React.ReactNode | React.ComponentPropsWithoutRef<typeof FieldTitle>;
  field?: React.ComponentProps<typeof Field>;
  fieldContent?: React.ComponentProps<typeof FieldContent>;
  render?: (props: {
    id: string;
    label: React.ReactNode | string;
    description: React.ReactNode | string;
    RadioItemControl: React.ReactElement;
  }) => React.ReactNode;
} & React.ComponentProps<typeof RadioGroupItem> &
  CommonClassNames;

export type RadioFieldItemsType = {
  items: RadioFieldItemProps[];
  legend?: string | React.ReactNode | React.ComponentPropsWithoutRef<typeof FieldLegend>;
  description?: string | React.ReactNode | React.ComponentPropsWithoutRef<typeof FieldDescription>;
};
type FieldRadioGroupProps = React.ComponentProps<typeof RadioGroup> & {
  validate?: ValidateProps;
} & WithClassNames<"label" | "description" | "group" | "validate" | "field"> &
  RadioFieldItemsType;

export default function FieldRadioGroup<T extends string>({
  legend,
  description,
  classNames,
  className,
  items,
  validate,
  ...radioGrupeProp
}: FieldRadioGroupProps) {
  const field = useFieldContext<T>();
  const errors = useStore(field.store, state => state.meta.errors);
  const isInvalid = errors.length > 0;
  // const isGrouped = Array.isArray(options) && "items" in options[0];
  return (
    <FieldSet data-invalid={isInvalid} className={cn(``, className, classNames?.field)}>
      {legend && (
        <FieldLegend {...(typeof legend === "object" && !React.isValidElement(legend) ? (legend as object) : {})}>
          {typeof legend === "object" && !React.isValidElement(legend) ? (legend as any)?.children : legend}
        </FieldLegend>
      )}

      {description && (
        <FieldDescription
          {...(typeof description === "object" && !React.isValidElement(description) ? (description as object) : {})}
        >
          {typeof description === "object" && !React.isValidElement(description)
            ? (description as React.ComponentProps<typeof FieldDescription>)?.children
            : description}
        </FieldDescription>
      )}
      <RadioGroup
        id={field.name}
        onValueChange={(value: T) => field.handleChange(value)}
        defaultValue={radioGrupeProp.defaultValue || field.state.value}
        {...radioGrupeProp}
        className={cn("group", className, classNames?.group)}
      >
        {items.map((item, index) => {
          const id = `${field.name}-${item.value}-${index}`;

          const { title, field: FieldProps, fieldContent, label, description, classNames, render, ...propItem } = item;
          const RadioItemControl = <RadioGroupItem {...propItem} id={id} value={item.value} aria-invalid={isInvalid} />;
          if (typeof render === "function") {
            return (
              <React.Fragment key={id}>
                {render({
                  id,
                  label: item.label as string,
                  description: item.description as string,
                  RadioItemControl: RadioItemControl,
                })}
              </React.Fragment>
            );
          }
          return (
            <Field orientation="horizontal" className={cn(classNames?.section)} key={id} {...FieldProps}>
              {RadioItemControl}
              <FieldContent {...fieldContent}>
                {title && (
                  <FieldTitle {...(typeof title === "object" && !React.isValidElement(title) ? (title as object) : {})}>
                    {typeof title === "object" && !React.isValidElement(title)
                      ? (title as React.ComponentProps<typeof FieldTitle>)?.children
                      : title}
                  </FieldTitle>
                )}
                {label && (
                  <FieldLabel
                    htmlFor={id}
                    {...(typeof label === "object" && !React.isValidElement(label) ? (label as object) : {})}
                  >
                    {typeof label === "object" && !React.isValidElement(label)
                      ? (label as React.ComponentProps<typeof FieldLabel>)?.children
                      : label}
                  </FieldLabel>
                )}
                {description && (
                  <FieldDescription
                    {...(typeof description === "object" && !React.isValidElement(description)
                      ? (description as object)
                      : {})}
                  >
                    {typeof description === "object" && !React.isValidElement(description)
                      ? (description as React.ComponentProps<typeof FieldDescription>)?.children
                      : description}
                  </FieldDescription>
                )}
              </FieldContent>
            </Field>
          );
        })}
      </RadioGroup>
      <FieldErrorMessage className={cn(`order-4`, classNames?.validate)} {...validate} />
    </FieldSet>
  );
}
