import React from "react";
import { parseJsxString } from "./utils/fixJsxHtml";

type SafeHtmlProps<T extends React.ElementType = "div"> = {
  html: string | undefined | null;
  className?: string;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export default function SafeHtml<T extends React.ElementType = "div">({
  html,
  className,
  as,
  ...rest
}: SafeHtmlProps<T>) {
  if (!html) return null;

  const Component = as || "div";

  return (
    <Component
      className={className}
      dangerouslySetInnerHTML={{ __html: parseJsxString(html) }}
      {...rest}
    />
  );
}
