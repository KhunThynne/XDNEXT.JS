"use client";

import _ from "lodash";

import { Link, usePathname } from "@navigation";
import Translations from "@/libs/i18n/Translations";
import type { TypeNavbarItem } from "@type/config.type";
import clsx from "clsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/libs/shadcn/ui/navigation-menu";

const ListItem = ({
  title,
  children,
  href,
  nested,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  className?: string;
  nested?: TypeNavbarItem[];
}) => {
  const pathname = usePathname();
  return (
    <li {...props}>
      <NavigationMenuLink asChild data-active={pathname.includes(href)}>
        <Link href={href} aria-disabled={pathname.includes(href)}>
          <div className="text-sm leading-none font-medium">
            <Translations text={title} namespace="navbar" />
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>

      {/* 👇 Nested children */}
      {nested && nested.length > 0 && (
        <div className="mt-2 ml-4">
          <RenderChildren nested={nested} />
        </div>
      )}
    </li>
  );
};

const RenderChildren = ({
  nested,
  className,
}: {
  nested?: TypeNavbarItem[];
} & WithClassName) => {
  if (!_.isArray(nested)) return;
  return (
    <ul className={clsx(className)}>
      {nested.map((item) => (
        <ListItem
          className="w-full"
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
export const RenderLink = ({ render }: { render: TypeNavbarItem[] }) => {
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {render.map((item, index) => {
          const translateCondition = index > 3;
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <NavigationMenuItem key={`${item.title}-${index}`}>
              {item.children && !_.isEmpty(item.children) ? (
                <>
                  <NavigationMenuTrigger
                    className={clsx(
                      "font-semibold capitalize",
                      pathname.includes(item.href) && "bg-accent/50 underline"
                    )}
                  >
                    <Translations text={item.title} namespace="navbar" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={clsx({ "-translate-x-2/3": translateCondition })}
                    data-motion={clsx(translateCondition && "from-start")}
                  >
                    <RenderChildren
                      className="flex max-w-xs min-w-xs flex-wrap"
                      nested={item.children}
                    />
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  data-active={isActive}
                  className={clsx(
                    navigationMenuTriggerStyle(),
                    "font-semibold data-[active=true]:underline"
                  )}
                >
                  <Link
                    href={item.href}
                    className="capitalize"
                    aria-disabled={isActive}
                  >
                    <Translations text={item.title} namespace="navbar" />
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
