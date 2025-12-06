"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/libs/shadcn/ui/form";

import type { FieldValues } from "react-hook-form";
import { useFormState } from "react-hook-form";

import clsx from "clsx";
import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";

import type { FormXdProps } from "./shared/index.type";
import { LabelDescription } from "./shared/index.type";
import _ from "lodash";
import { RadioGroup, RadioGroupItem } from "@/libs/shadcn/ui/radio-group";
import { Label } from "@/libs/shadcn/ui/label";
import LabelAndDescriptionForm from "./shared/LabelAndDescriptionForm";

type CommonClassNames = WithClassNames<
  "container" | "label" | "description" | "section"
>;

type RadioFormItem = {
  label: string;
  description?: string;
} & React.ComponentProps<typeof RadioGroupItem> &
  CommonClassNames;

export type RadioFormItemsType = {
  items: RadioFormItem[];
};
export function RadioForm<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  description,
  control,
  classNames,
  className,
  items,
  ...props
}: FormXdProps<TFieldValues> &
  RadioFormItemsType &
  React.ComponentProps<typeof RadioGroup> &
  WithClassNames<"container" | "label" | "description" | "group">) {
  const { isSubmitting } = useFormState();
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className={clsx(classNames?.container)}>
              <LabelAndDescriptionForm
                label={label}
                description={description}
                classNames={classNames}
              >
                <RadioGroup
                  disabled={isSubmitting}
                  onValueChange={field.onChange}
                  value={field.value}
                  className={clsx(
                    "group border-t pt-3",
                    className,
                    classNames?.group
                  )}
                  {...props}
                >
                  {items.map((item, index) => {
                    const id = `${name}-${item.value}-${index}`;
                    const { label, description, classNames, ...propItem } =
                      item;
                    return (
                      <div
                        className={clsx(
                          "flex space-x-2",
                          //   items.classNames?.container,
                          classNames?.container
                        )}
                        key={id}
                      >
                        <RadioGroupItem id={id} {...propItem} />
                        <section
                          className={clsx(
                            "flex flex-col",
                            // items.classNames?.section,
                            classNames?.section
                          )}
                        >
                          {label &&
                            (typeof label === "string" ? (
                              <Label
                                htmlFor={id}
                                className={clsx(
                                  classNames?.label,
                                  //   items.classNames?.label,
                                  "cursor-pointer"
                                )}
                              >
                                {item.label}
                              </Label>
                            ) : (
                              label
                            ))}
                          {description &&
                            (typeof description === "string" ? (
                              <p
                                className={clsx(
                                  classNames?.description,
                                  //   items.classNames?.description,
                                  "mt-1 text-sm text-muted-foreground"
                                )}
                              >
                                {item.description}
                              </p>
                            ) : (
                              description
                            ))}
                        </section>
                      </div>
                    );
                  })}
                </RadioGroup>
              </LabelAndDescriptionForm>
            </div>
          </FormControl>
          <FormI18nMessage />
        </FormItem>
      )}
    />
  );
}
