import { Field } from "@/libs/shadcn/ui/field";
import { Input } from "@/libs/shadcn/ui/input";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";
import FieldFieldErrorI18nMessage from "./shared/FieldErrorI18nMessage";
import { cn } from "@/libs/shadcn/utils";
import type { LabelDescription } from "../typed";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/libs/shadcn/ui/input-group";

import { X } from "lucide-react";

type FieldInputProps = LabelDescription &
  React.ComponentProps<typeof Input> & {
    clear?: boolean;
    groupe?: React.ComponentProps<typeof InputGroup> | true;
  } & WithClassNames<"label" | "description" | "input" | "field" | "validate">;

export default function FieldInput({
  label,
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
  const errors = useStore(field.store, (state) => state.meta.errors);
  const isInvalid = errors.length > 0;
  const grupeProp = typeof groupe !== "boolean" ? groupe : {};
  return (
    <Field
      data-invalid={isInvalid}
      className={cn(`flex flex-col gap-1.5`, className, classNames?.field)}
    >
      <LabelAndDescriptionFieldForm
        label={label}
        required={input.required}
        description={description}
        classNames={{
          label: cn(`order-1`, classNames?.label),
          description: cn(`order-3`, classNames?.description),
        }}
      >
        {groupe || type === "search" || clear ? (
          <InputGroup
            className={cn(`order-2`, grupeProp?.className)}
            {...grupeProp}
          >
            <InputGroupInput
              {...input}
              value={field.state.value}
              className={cn(classNames?.input)}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              type={type === "search" ? "text" : type}
            />
            {(type === "search" || clear) && field.state.value && (
              <InputGroupAddon
                className="cursor-default"
                align={"inline-end"}
                onClick={() => field.setValue("")}
              >
                <X className="size-4 stroke-3 opacity-80" />
              </InputGroupAddon>
            )}
            {children}
          </InputGroup>
        ) : (
          <>
            <Input
              {...input}
              value={field.state.value}
              className={cn(`order-2`, classNames?.input)}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              type={type}
            />
            {children}
          </>
        )}
      </LabelAndDescriptionFieldForm>

      <FieldFieldErrorI18nMessage
        className={cn(`order-4`, classNames?.validate)}
      />
    </Field>
  );
}
