"use client";

import _ from "lodash";
import { TypeNavbarItem } from "@type/config.type";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/shadcn/collapsible";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import clsx from "clsx";
import { Link, usePathname } from "@navigation";
import Translations from "@/libs/i18n/Translations";

const NavigationItem = ({
  href,
  title,
  description,
  isOpen,
  children,
  setIsOpen,
}: TypeNavbarItem & {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  const test = "";
  useLayoutEffect(() => {
    active && setIsOpen(active);
  }, [active, setIsOpen]);

  if (_.isEmpty(children)) {
    return (
      <div className={clsx(active ? "bg-accent/50" : "", "grow px-5 py-3")}>
        <Link href={href} className="font-medium capitalize">
          <Translations text={title} namespace="navbar" />
        </Link>
        <p className="text-muted-foreground">{description}</p>
      </div>
    );
  }
  return (
    <>
      <CollapsibleTrigger
        asChild
        className={clsx(active ? "bg-accent/50" : "", "py-3")}
      >
        <div className="flex flex-wrap items-center px-5">
          <h1 className="grow font-medium capitalize">
            <Translations text={title} namespace="navbar" />
          </h1>

          <ChevronDown
            className={clsx(
              isOpen && "rotate-180",
              "size-5 transition-transform"
            )}
          />
          <span className="sr-only">Toggle</span>

          <p className="text-muted-foreground w-full">{description}</p>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent
        forceMount
        className={clsx(
          "transition-all! flex h-full flex-col overflow-hidden",
          isOpen ? "max-h-full opacity-100" : "h-0! opacity-0"
        )}
      >
        <hr className="w-8/9" />
        {children?.map((subItem, index) => {
          return (
            <div key={`${subItem.title}-sub-${index}`}>
              <RenderItem {...subItem} />
            </div>
          );
        })}
      </CollapsibleContent>
    </>
  );
};

const RenderItem = ({ ...props }: TypeNavbarItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const stateAndProps = { isOpen, setIsOpen, ...props };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="group flex flex-col"
    >
      <NavigationItem {...stateAndProps} />
    </Collapsible>
  );
};
export const RenderMenu = ({ render }: { render: TypeNavbarItem[] }) => {
  return render.map((item, index) => {
    return (
      <li key={`${item.title}-menu-${index}`} className="text-sm">
        <RenderItem {...item} />
      </li>
    );
  });
};
