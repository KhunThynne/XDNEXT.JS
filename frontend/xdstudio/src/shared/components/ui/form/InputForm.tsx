"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/shadcn/form";
import { Input } from "@/shared/components/shadcn/input";
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

interface InputFormProps<TFieldValues extends FieldValues = FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<TFieldValues>;
  label?: string;
  description?: string;
  control?: Control<TFieldValues>;
  renderInput?: (field: ControllerRenderProps<any, any>) => ReactNode;
}

export function InputForm<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  description,
  placeholder,
  control,
  type,
  renderInput,
  children,
  classNames,
  ...inputProps
}: InputFormProps<TFieldValues> &
  GlobalPropsClassNames<"container" | "label" | "description">) {
  return (
    <FormField
      {...(control ? { control } : {})}
      name={name as Path<TFieldValues>}
      render={({ field }) => (
        <FormItem>
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
            <div className={clsx("flex", classNames?.container)}>
              {renderInput ? (
                renderInput(field)
              ) : (
                <Input
                  className="w-full"
                  placeholder={placeholder}
                  {...field}
                  {...inputProps}
                  type={type}
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
