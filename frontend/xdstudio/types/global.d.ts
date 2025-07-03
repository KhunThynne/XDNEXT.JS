declare global {
  type WithChildren<T = unknown> = T & {
    children?: React.ReactNode;
  };
  type NextDefaultProps = {
    children?: React.ReactNode;
    className?: string;
  };

  type NextPropClassName<T = unknown> = T & {
    className?: string;
  };

  type NextPropsClassNames<T extends string = string, Base = object> = Base &
    NextDefaultProps & {
      classNames?: Partial<Record<T, string>>;
    };
  type NextImage = React.ComponentProps<"img">;

  type DivProps = React.HTMLAttributes<HTMLDivElement>;
}

export {};
