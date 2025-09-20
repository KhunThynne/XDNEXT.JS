"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/libs/shadcn/ui/form";

import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { ReactNode } from "react";
import clsx from "clsx";
import Translations from "@/libs/i18n/Translations";
import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";
import { FormXdProps } from "./shared/index.type";
import _ from "lodash";
import { Textarea } from "@/libs/shadcn/ui/textarea";

export function TextareaForm<TFieldValues extends FieldValues = FieldValues>({
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
} & React.ComponentProps<typeof Textarea> &
  GlobalPropsClassNames<"container" | "label" | "description" | "item">) {
  return (
    <FormField
      {...(control ? { control } : {})}
      name={name as Path<TFieldValues>}
      render={({ field }) => (
        <FormItem className={clsx(classNames?.item)}>
          {label && (
            <FormLabel
              className={clsx(
                "inline-block max-w-full truncate break-all pb-0.5",
                classNames?.label
              )}
            >
              {_.isString(label) ? <Translations text={label} /> : label}
            </FormLabel>
          )}
          <FormControl>
            <div className={clsx("flex items-end", classNames?.container)}>
              {renderInput ? (
                renderInput(field)
              ) : (
                <Textarea
                  className={clsx(`w-full`, className)}
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
