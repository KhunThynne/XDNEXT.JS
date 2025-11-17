import Translations from "@/libs/i18n/Translations";
import _ from "lodash";
import { Fragment } from "react";
import type { LabelDescription } from "../../typed";
import { FieldDescription, FieldLabel } from "@/libs/shadcn/ui/field";
import { cn } from "@/libs/shadcn/utils";
import { Asterisk } from "lucide-react";

export default function LabelAndDescriptionFieldForm({
  classNames,
  children,
  label,
  description,
  required,
}: WithClassNames<"label" | "description"> &
  LabelDescription & { required?: boolean }) {
  return (
    <Fragment>
      {label && (
        <FieldLabel
          className={cn(
            "flex max-w-full gap-x-1.5 truncate break-all",
            classNames?.label
          )}
        >
          <span>
            {_.isString(label) ? <Translations text={label} /> : label}
          </span>

          {required && (
            <Asterisk className="size-3 self-start text-destructive" />
          )}
        </FieldLabel>
      )}
      {children}
      {description && (
        <FieldDescription
          className={cn(
            "line-clamp-3 max-w-full break-all",
            classNames?.description
          )}
        >
          {_.isString(description) ? (
            <Translations text={description} />
          ) : (
            description
          )}
        </FieldDescription>
      )}
    </Fragment>
  );
}
