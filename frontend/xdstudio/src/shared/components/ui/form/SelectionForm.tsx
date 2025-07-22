"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/components/shadcn/form";
import { Input } from "@/shared/components/shadcn/input";
import { Control, FieldValues, Path } from "react-hook-form";
import clsx from "clsx";
import Translations from "@/libs/i18n/Translations";
import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/select";
type Option = {
  label: string;
  value: string;
};

type OptionGroup = {
  label?: string;
  items: Option[];
};

type SelectionOptions = Option[] | OptionGroup[];

interface SelectionFormProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control?: Control<TFieldValues>;
  label?: string;
  description?: string;
  className?: string;
  classNames?: {
    label?: string;
    description?: string;
    container?: string;
  };
  options: SelectionOptions;
  placeholder?: string;
  children?: React.ReactNode;
  selectProps?: any;
}

export function SelectionForm<T extends FieldValues>({
  name,
  control,
  label,
  description,
  className,
  classNames,
  options,
  placeholder = "Select an option",
  children,
}: SelectionFormProps<T>) {
  const isGrouped = Array.isArray(options) && "items" in options[0];

  return (
    <FormField
      control={control}
      name={name}
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
            <div className={clsx("flex border", classNames?.container)}>
              <Select value={field.value} onValueChange={field.onChange}>
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
