import type { FieldLabel } from "../../ui/field";

export interface FormXdPropsField {
  name: string;
  label?: string | React.ReactNode;
  description?: string;
}

export type LabelDescription = {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
};
//  | React.ComponentProps<typeof FieldLabel>
