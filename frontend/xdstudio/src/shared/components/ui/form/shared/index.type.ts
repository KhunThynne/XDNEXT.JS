import { FieldValues, Path, Control } from "react-hook-form";

export interface FormXdProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string | React.ReactNode;
  description?: string;
  control?: Control<TFieldValues>;
}

export type LabelDescription = {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
};
