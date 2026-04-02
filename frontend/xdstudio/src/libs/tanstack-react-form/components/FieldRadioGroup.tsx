import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/libs/shadcn/ui/field";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "../hooks";
import LabelAndDescriptionFieldForm from "./shared/LabelAndDescriptionFieldForm";
import FieldErrorI18nMessage from "./shared/FieldErrorI18nMessage";
import { cn } from "@/libs/shadcn/utils";
import type { LabelDescription } from "../typed";
import { RadioGroupItem } from "@/libs/shadcn/ui/radio-group";
import { RadioGroup } from "@/libs/shadcn/ui/radio-group";

type CommonClassNames = WithClassNames<
  "container" | "title" | "description" | "section"
>;
export type RadioFieldItemProps = LabelDescription &
  React.ComponentProps<typeof RadioGroupItem> &
  CommonClassNames;

export type RadioFieldItemsType = {
  items: RadioFieldItemProps[];
};
type FieldRadioGroupProps = LabelDescription &
  React.ComponentProps<typeof RadioGroup> &
  WithClassNames<"label" | "description" | "group" | "validate" | "field"> &
  RadioFieldItemsType;

export default function FieldRadioGroup({
  label,
  description,
  classNames,
  className,
  items,
  ...radioGrupeProp
}: FieldRadioGroupProps) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);
  const isInvalid = errors.length > 0;
  // const isGrouped = Array.isArray(options) && "items" in options[0];
  return (
    <FieldSet
      data-invalid={isInvalid}
      className={cn(``, className, classNames?.field)}
    >
      <LabelAndDescriptionFieldForm
        label={label}
        description={description}
        classNames={{
          label: cn(classNames?.label),
          description: cn(classNames?.description),
        }}
      >
        <RadioGroup
          {...radioGrupeProp}
          onValueChange={field.handleChange}
          value={field.state.value}
          className={cn("group border-t pt-3", className, classNames?.group)}
        >
          {items.map((item, index) => {
            const id = `${field.name}-${item.value}-${index}`;
            const { title, description, classNames, ...propItem } = item;
            return (
              <FieldLabel
                className={cn(
                  "flex space-x-2",
                  //   items.classNames?.container,
                  classNames?.container
                )}
                key={id}
              >
                <Field
                  orientation="horizontal"
                  className={cn(classNames?.section)}
                >
                  <FieldContent>
                    {title &&
                      (typeof title === "string" ? (
                        <FieldTitle
                          className={cn(
                            classNames?.title,
                            //   items.classNames?.label,
                            "cursor-pointer"
                          )}
                        >
                          {item.title}
                        </FieldTitle>
                      ) : (
                        title
                      ))}
                    {description &&
                      (typeof description === "string" ? (
                        <FieldDescription
                          className={cn(
                            classNames?.description,
                            //   items.classNames?.description,
                            "mt-1 text-sm text-muted-foreground"
                          )}
                        >
                          {item.description}
                        </FieldDescription>
                      ) : (
                        description
                      ))}
                  </FieldContent>

                  <RadioGroupItem
                    {...propItem}
                    id={id}
                    value={item.value ?? id}
                    aria-invalid={isInvalid}
                  />
                </Field>
              </FieldLabel>
            );
          })}
        </RadioGroup>
      </LabelAndDescriptionFieldForm>
      <FieldErrorI18nMessage className={cn(`order-4`, classNames?.validate)} />
    </FieldSet>
  );
}
