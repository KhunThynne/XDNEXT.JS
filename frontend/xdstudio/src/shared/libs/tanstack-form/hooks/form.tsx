import { createFormHook as rootCreateFormHook } from "@tanstack/react-form";
import { lazy } from "react";
import { fieldContext, formContext } from "./form-context";

const FieldInput = lazy(() => import("../components/FieldInput"));
const FieldTextArea = lazy(() => import("../components/FieldTextArea"));
const FieldSelect = lazy(() => import("../components/FieldSelect"));
const FieldCheckBox = lazy(() => import("../components/FieldCheckBox"));
const FieldSwitch = lazy(() => import("../components/FieldSwitch"));
const FieldRadioGroup = lazy(() => import("../components/FieldRadioGroup"));
const SubscribeButton = lazy(() => import("../components/ButtonSubscribe"));
const FieldErrorMessage = lazy(() => import("../components/shared/FieldErrorMessage"));

type BaseCreateFormOptions = Parameters<typeof rootCreateFormHook>[0];

const defaultFields = {
  Input: FieldInput,
  Select: FieldSelect,
  TextArea: FieldTextArea,
  CheckBox: FieldCheckBox,
  Switch: FieldSwitch,
  RadioGroup: FieldRadioGroup,
  ErrorMessage: FieldErrorMessage,
};

export const createAppForm = <
  TFieldComponents extends Record<string, any> = object,
  TFormComponents extends Record<string, any> = object,
>(
  config?: Omit<Partial<BaseCreateFormOptions>, "fieldComponents" | "formComponents"> & {
    fieldComponents?: TFieldComponents;
    formComponents?: TFormComponents;
  },
) => {
  return rootCreateFormHook({
    ...config,
    fieldContext,
    formContext,
    fieldComponents: {
      ...defaultFields,
      ...config?.fieldComponents,
    } as typeof defaultFields & TFieldComponents,
    formComponents: {
      SubscribeButton,
      ErrorMessage: FieldErrorMessage,
      ...config?.formComponents,
    } as {
      SubscribeButton: typeof SubscribeButton;
      ErrorMessage: typeof FieldErrorMessage;
    } & TFormComponents,
  });
};
