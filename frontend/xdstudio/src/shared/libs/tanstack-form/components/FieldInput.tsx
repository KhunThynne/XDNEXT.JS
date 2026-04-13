import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";
import FieldErrorMessage from "./shared/FieldErrorMessage";

import type { LabelDescription, ValidateProps, WithClassNames } from "./type";

import { Eye, EyeClosed, X } from "lucide-react";

import { useMemo, useState } from "react";
import { Input } from "@/shared/libs/shadcn/ui/input";
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/shared/libs/shadcn/ui/input-group";
import { cn } from "@/shared/libs/shadcn/utils";
import { Field } from "@/shared/libs/shadcn/ui/field";

type FieldInputProps = LabelDescription &
  React.ComponentProps<typeof Input> & {
    validate?: ValidateProps;
    clear?: boolean;
    groupe?: React.ComponentProps<typeof InputGroup> | true;
  } & WithClassNames<"label" | "description" | "input" | "field" | "validate">;

export default function FieldInput({
  label,
  validate,
  description,
  classNames,
  className,
  children,
  groupe,
  clear,
  type,
  ...input
}: FieldInputProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, state => state.meta.errors);
  const [showPassword, setShowPassword] = useState(type);
  const showPasswordIcon = useMemo(() => (showPassword === "password" ? true : false), [showPassword]);
  const isInvalid = errors.length > 0;
  const grupeProp = typeof groupe !== "boolean" ? groupe : {};
  return (
    <Field data-invalid={isInvalid} className={cn(`flex flex-col gap-1.5`, className, classNames?.field)}>
      <LabelAndDescriptionFieldForm
        label={label}
        required={input.required}
        description={description}
        htmlFor={field.name}
        classNames={{
          label: cn(`order-1`, classNames?.label),
          description: cn(`order-3`, classNames?.description),
        }}
      >
        {groupe || type === "search" || type === "password" || clear ? (
          <InputGroup className={cn(`order-2`, grupeProp?.className)} {...grupeProp}>
            <InputGroupInput
              {...input}
              name={field.name}
              id={field.name}
              required={false}
              value={field.state.value}
              className={cn(classNames?.input)}
              onChange={e => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              type={type === "search" ? "text" : type === "password" ? showPassword : type}
            />
            {(type === "search" || clear) && field.state.value && (
              <InputGroupAddon className="cursor-default" align={"inline-end"} onClick={() => field.setValue("")}>
                <X className="size-4 stroke-3 opacity-80" />
              </InputGroupAddon>
            )}
            {type === "password" && (
              <InputGroupAddon
                className="cursor-pointer"
                align={"inline-end"}
                onClick={() => setShowPassword(showPassword === "password" ? "text" : "password")}
              >
                {showPasswordIcon ? <EyeClosed className="size-4" /> : <Eye className="size-4" />}
              </InputGroupAddon>
            )}
            {children}
          </InputGroup>
        ) : (
          <>
            <Input
              {...input}
              name={field.name}
              id={field.name}
              required={false}
              value={field.state.value}
              className={cn(`order-2`, classNames?.input)}
              onChange={e => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              type={type}
            />
            {children}
          </>
        )}
      </LabelAndDescriptionFieldForm>

      <FieldErrorMessage {...validate} className={cn(`order-4`, classNames?.validate)} />
    </Field>
  );
}
