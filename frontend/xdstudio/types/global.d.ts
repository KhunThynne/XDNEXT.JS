declare global {
  type WithChildren<T = unknown> = T & {
    children?: React.ReactNode;
  };
  type GlobalDefaultProps = {
    children?: React.ReactNode;
    className?: string;
  };

  type GlobalPropClassName<T = unknown> = T & {
    className?: string;
  };

  type GlobalPropsClassNames<T extends string = string, Base = object> = Base &
    GlobalDefaultProps & {
      classNames?: Partial<Record<T, string>>;
    };
  type NextImage = React.ComponentProps<"img">;

  type DivProps = React.HTMLAttributes<HTMLDivElement>;
}

export {};
