"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/libs/shadcn/ui/form";

import { FieldValues } from "react-hook-form";

import clsx from "clsx";
import Translations from "@/libs/i18n/Translations";
import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";
import { Checkbox } from "@/libs/shadcn/custtom/checkbox";
import { FormXdProps } from "./shared/index.type";
import _ from "lodash";

export function CheckboxForm<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  description,
  control,
  classNames,
  children,
  onCheckedChange,
  ...props
}: FormXdProps<TFieldValues> &
  React.ComponentProps<typeof Checkbox> &
  GlobalPropsClassNames<"container" | "label" | "description" | "outside">) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="contents">
          <FormControl>
            <div
              className={clsx(
                "flex gap-3",
                description ? "items-start" : "items-center",
                classNames?.container
              )}
            >
              <Checkbox
                checked={field.value}
                aria-label={`checkbox-${name}`}
                onCheckedChange={(val) => {
                  onCheckedChange && onCheckedChange(val);
                  field.onChange(val);
                }}
                {...props}
                className={clsx(`peer cursor-pointer`)}
              />
              <section className={clsx(`grid gap-2`)}>
                {label && (
                  <FormLabel
                    className={clsx(`inline-block`, classNames?.label)}
                  >
                    {_.isString(label) ? <Translations text={label} /> : label}
                  </FormLabel>
                )}
                {description && (
                  <FormDescription
                    className={clsx(``, classNames?.description)}
                  >
                    <Translations text={description} />
                  </FormDescription>
                )}
                {children}
                <FormI18nMessage />
              </section>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
