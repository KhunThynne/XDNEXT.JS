import Translations from "@/libs/i18n/Translations";
import _ from "lodash";
import { Fragment } from "react";
import type { LabelDescription } from "../../typed";
import { FieldDescription, FieldLabel } from "@/libs/shadcn/ui/field";
import { cn } from "@/libs/shadcn/utils";

export default function LabelAndDescriptionFieldForm({
  classNames,
  children,
  label,
  description,
}: WithClassNames<"label" | "description"> & LabelDescription) {
  return (
    <Fragment>
      {label && (
        <FieldLabel
          className={cn(
            "inline-block max-w-full truncate pb-0.5 break-all",
            classNames?.label
          )}
        >
          {_.isString(label) ? <Translations text={label} /> : label}
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
