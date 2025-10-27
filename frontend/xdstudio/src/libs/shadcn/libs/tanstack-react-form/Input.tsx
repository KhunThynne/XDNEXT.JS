import type { AnyFieldApi } from "@tanstack/react-form";
import { useField } from "@tanstack/react-form";

export const InputForm = ({ ...fieldProp }: AnyFieldApi) => {
  const field = useField({ ...fieldProp });

  return <></>;
};
