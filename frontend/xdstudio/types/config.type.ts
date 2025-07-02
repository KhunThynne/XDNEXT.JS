export interface NavbarItem {
  title: string;
  href: string;
  description?: string;
  children?: NavbarItem[];
}
export interface TypeConfigDefault {
  branner: string;
  navbar: NavbarItem[];
}
