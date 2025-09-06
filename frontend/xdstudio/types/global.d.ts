export {};
declare global {
  type WithChildren<T = unknown> = T & {
    children: React.ReactNode;
  };

  type NonEmptyString<T extends string> = T extends "" ? never : T;

  type WithlDefaultProps = Partial<WithChildren> & {
    className?: string;
  };

  type NextJSReactNodes<K extends string> = WithChildren & {
    [P in NonEmptyString<K>]: React.ReactNode;
  };

  type WithClassName<T = unknown> = T & {
    className?: string;
  };

  type GlobalPropsClassNames<T extends string = string, Base = object> = Base &
    WithlDefaultProps & {
      classNames?: Partial<Record<T, string>>;
    };
  type NextImage = React.ComponentProps<"img">;

  type DivProps = React.HTMLAttributes<HTMLDivElement>;
}

export {};

// searchParams: Promise<{ [key: string]: string | string[] | undefined }>
