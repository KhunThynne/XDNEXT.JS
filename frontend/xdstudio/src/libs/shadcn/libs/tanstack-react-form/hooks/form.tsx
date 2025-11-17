import { createFormHook } from "@tanstack/react-form";
import { lazy } from "react";
import { fieldContext, formContext, useFormContext } from "./form-context";
import { Button } from "@/libs/shadcn/ui/button";

const FieldInput = lazy(() => import("../components/FieldInput"));
const FieldTextArea = lazy(() => import("../components/FieldTextArea"));
const FieldSelect = lazy(() => import("../components/FieldSelect"));
const FieldCheckBox = lazy(() => import("../components/FieldCheckBox"));
const FieldSwitch = lazy(() => import("../components/FieldSwitch"));
const FieldRadioGroup = lazy(() => import("../components/FieldRadioGroup"));
function SubscribeButton({ label }: { label: string }) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => <Button disabled={isSubmitting}>{label}</Button>}
    </form.Subscribe>
  );
}

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldComponents: {
    Input: FieldInput,
    Select: FieldSelect,
    TextArea: FieldTextArea,
    CheckBox: FieldCheckBox,
    Switch: FieldSwitch,
    RadioGroup: FieldRadioGroup,
  },
  formComponents: {
    SubscribeButton,
  },
  fieldContext,
  formContext,
});
