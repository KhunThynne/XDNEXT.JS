"use client";

import { FormControl, FormField, FormItem } from "@/libs/shadcn/ui/form";
import { Input } from "@/libs/shadcn/ui/input";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import type { ReactNode } from "react";
import clsx from "clsx";
import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";
import type { FormXdProps } from "./shared/index.type";
import _ from "lodash";
import LabelAndDescriptionForm from "./shared/LabelAndDescriptionForm";

export function InputForm<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  description,
  control,
  renderInput,
  children,
  className,
  classNames,
  ...inputProps
}: FormXdProps<TFieldValues> & {
  renderInput?: (field: ControllerRenderProps<any, any>) => ReactNode;
} & React.ComponentProps<typeof Input> &
  WithClassNames<"container" | "label" | "description" | "input">) {
  return (
    <FormField
      {...(control ? { control } : {})}
      name={name as Path<TFieldValues>}
      render={({ field }) => (
        <FormItem className={clsx(className)}>
          <LabelAndDescriptionForm label={label} description={description}>
            <FormControl>
              <div className={clsx("flex items-end", classNames?.container)}>
                {renderInput ? (
                  renderInput(field)
                ) : (
                  <Input
                    className={clsx(`w-full`, classNames?.input)}
                    {...field}
                    {...inputProps}
                  />
                )}
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

