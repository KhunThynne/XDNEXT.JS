"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { ReactNode } from "react";

interface FormComponentProps {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  control: UseFormReturn["control"];
  renderInput?: (field: ControllerRenderProps<any, any>) => ReactNode;
}

export function FormComponent({
  name,
  label,
  description,
  placeholder,
  control,
  renderInput,
}: FormComponentProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {renderInput ? (
              renderInput(field)
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
