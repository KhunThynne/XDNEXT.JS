// types/global.d.ts

import type { ReactNode, ComponentProps, HTMLAttributes } from "react";

declare global {
  type WithChildren<T = unknown> = T & {
    children?: ReactNode;
  };

  type WithClassName<T = unknown> = T & {
    className?: string;
  };

  type NextDefaultProps = {
    children?: ReactNode;
    className?: string;
  };

  type NextPropsClassNames<T extends string = string, Base = object> = Base &
    NextDefaultProps & {
      classNames?: Partial<Record<T, string>>;
    };
  type NextImage = ComponentProps<"img">;

  type DivProps = HTMLAttributes<HTMLDivElement>;
}

export {};
