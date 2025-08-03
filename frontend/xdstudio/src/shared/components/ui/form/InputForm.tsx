"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/libs/shadcn/ui/form";
import { Input } from "@/libs/shadcn/ui/input";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";
import { ReactNode } from "react";
import clsx from "clsx";
import Translations from "@/libs/i18n/Translations";
import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";
import { FormXdProps } from "./shared/index.type";

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
  GlobalPropsClassNames<"container" | "label" | "description" | "input">) {
  return (
    <FormField
      {...(control ? { control } : {})}
      name={name as Path<TFieldValues>}
      render={({ field }) => (
        <FormItem className={clsx(className)}>
          {label && (
            <FormLabel
              className={clsx(
                "inline-block max-w-full truncate break-all",
                classNames?.label
              )}
            >
              <Translations text={label} />
            </FormLabel>
          )}
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
          {description && (
            <FormDescription
              className={clsx(
                "line-clamp-3 max-w-full break-all",
                classNames?.description
              )}
            >
              <Translations text={description} />
            </FormDescription>
          )}
          <FormI18nMessage />
        </FormItem>
      )}
    />
  );
}
