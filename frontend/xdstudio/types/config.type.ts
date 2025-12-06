import type { JSX } from "react";

interface BaseTypeNavbarItem {
  title: string;
  href: string;
  description?: string;
}

export interface TopLevelTypeNavbarItem extends BaseTypeNavbarItem {
  children?: NestedTypeNavbarItem[];
}

export interface NestedTypeNavbarItem extends BaseTypeNavbarItem {
  component?: React.ReactNode | React.ReactElement | JSX.Element;
  children?: NestedTypeNavbarItem[];
}

export interface TypeConfigDefault {
  branner: string;
  navbar: TopLevelTypeNavbarItem[];
}
export type TypeNavbarItem = NestedTypeNavbarItem;
