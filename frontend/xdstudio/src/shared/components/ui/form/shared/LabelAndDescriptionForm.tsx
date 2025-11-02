import Translations from "@/libs/i18n/Translations";
import { FormControl, FormDescription, FormLabel } from "@/libs/shadcn/ui/form";
import { Input } from "@/libs/shadcn/ui/input";
import clsx from "clsx";
import _ from "lodash";
import { Fragment } from "react";
import type { LabelDescription } from "./index.type";

export default function LabelAndDescriptionForm({
  classNames,
  children,
  label,
  description,
}: WithClassNames<"label" | "description"> & LabelDescription) {
  return (
    <Fragment>
      {label && (
        <FormLabel
          className={clsx(
            "inline-block max-w-full truncate pb-0.5 break-all",
            classNames?.label
          )}
        >
          {_.isString(label) ? <Translations text={label} /> : label}
        </FormLabel>
      )}
      {children}
      {description && (
        <FormDescription
          className={clsx(
            "line-clamp-3 max-w-full break-all",
            classNames?.description
          )}
        >
          {_.isString(description) ? (
            <Translations text={description} />
          ) : (
            description
          )}
        </FormDescription>
      )}
    </Fragment>
  );
}
