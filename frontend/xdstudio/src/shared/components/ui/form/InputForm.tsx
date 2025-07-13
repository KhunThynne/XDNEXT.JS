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
}: InputFormProps<TFieldValues> & NextPropsClassNames<"container">) {
  return (
    <FormField
      {...(control ? { control } : {})}
      name={name as Path<TFieldValues>}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className={clsx("flex", classNames?.container)}>
              {renderInput ? (
                renderInput(field)
              ) : (
                <Input
                  placeholder={placeholder}
                  {...field}
                  {...inputProps}
                  type={type}
                />
              )}
              {children}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
