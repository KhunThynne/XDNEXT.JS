import { createAppForm } from "@/shared/libs/tanstack-form/hooks";

export const { useAppForm, useTypedAppFormContext, withFieldGroup, withForm } =
  createAppForm();
