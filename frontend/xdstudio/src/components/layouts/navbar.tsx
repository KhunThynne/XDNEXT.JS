"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SwitchTheme } from "../shared/switchTheme";
import clsx from "clsx";
import conf from "@/utils/loadConfig";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import _ from "lodash";

import { NavbarItem } from "#/types/config.type";
import { Link } from "@navigation";
import Translations from "@/libs/i18n/translations";

const navbar = conf.navbar;
const ListItem = ({
  title,
  children,
  href,
  nested,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  nested?: NavbarItem[];
}) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">
            <Translations text={title} namespace="navbar" />
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>

      {/* 👇 Nested children */}
      {nested && nested.length > 0 && (
        <div className="ml-4 mt-2">
          <RenderChildren nested={nested} />
        </div>
      )}
    </li>
  );
};

const RenderChildren = ({ nested }: { nested?: NavbarItem[] }) => {
  if (!_.isArray(nested)) return;
  return (
    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2">
      {nested.map((item) => (
        <ListItem
          key={item.title}
          title={item.title}
          href={item.href}
          nested={item.children}
        >
          {item.description}
        </ListItem>
      ))}
    </ul>
  );
};
export const RenderLink = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex">
        {navbar.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.children && !_.isEmpty(item.children) ? (
              <>
                <NavigationMenuTrigger>
                  <Translations text={item.title} namespace="navbar" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <RenderChildren nested={item.children} />
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.href} className="capitalize">
                  <Translations text={item.title} namespace="navbar" />
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default function Navbar({ className }: NextDefaultProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx(
        "bg-background sticky top-0 z-50 w-full border-b",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          {conf.branner}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          <RenderLink />

          <SwitchTheme />
        </nav>

        {/* Mobile Menu Button */}

        <Button
          variant="ghost"
          size="icon"
          className="border-secondary border md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X
            className={clsx(
              "absolute transition-opacity",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          />

          <Menu
            className={clsx(
              "absolute transition-opacity",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      <section className={clsx("relative -z-0 md:hidden")}>
        <div
          className={clsx(
            "absolute h-48 w-full overflow-hidden backdrop-blur transition-all",
            isOpen ? "max-h-48" : "max-h-0"
          )}
        >
          <nav
            className={clsx(
              "bg-background/35 flex h-full flex-col gap-3 rounded-b-lg",
              "inset-shadow-sm inset-shadow-primary/50 dark:inset-shadow-primary/20 border-b",
              "px-4 py-2"
            )}
          >
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <SwitchTheme />
          </nav>
        </div>
      </section>
    </div>
  );
}
