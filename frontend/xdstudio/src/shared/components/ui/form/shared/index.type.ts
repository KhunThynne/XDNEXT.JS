import { FieldValues, Path, Control } from "react-hook-form";

export interface FormXdProps<TFieldValues extends FieldValues = FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  description?: string;
  control?: Control<TFieldValues>;
}
