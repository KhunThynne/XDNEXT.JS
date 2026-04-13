export interface FormXdPropsField {
  name: string;
  label?: string | React.ReactNode;
  description?: string;
}

export type LabelDescription = {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  htmlFor?: string;
};
export type ValidateProps = {
  validate?: string | React.ReactNode;
  hidden?: boolean;
};

type WithChildren<T = unknown> = T & {
  children: React.ReactNode;
};

export type NonEmptyString<T extends string> = T extends "" ? never : T;

export type WithlDefaultProps = Partial<WithChildren> & {
  className?: string;
};

export type WithClassName<T = unknown> = T & {
  className?: string;
};

export type WithClassNames<T extends string = string, Base = object> = Base &
  WithlDefaultProps & {
    classNames?: Partial<Record<T, string>>;
  };

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
