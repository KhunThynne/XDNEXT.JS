"use client";

import _ from "lodash";
import type { TypeNavbarItem } from "@type/config.type";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/libs/shadcn/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import clsx from "clsx";
import { Link, usePathname } from "@navigation";
import Translations from "@/libs/i18n/Translations";
import { Separator } from "@/libs/shadcn/ui/separator";

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
  useLayoutEffect(() => {
    active && setIsOpen(active);
  }, [active, setIsOpen]);

  if (_.isEmpty(children)) {
    return (
      <div className={clsx(active ? "bg-accent/50" : "", "grow px-5 py-3")}>
        <Link href={href} className="font-medium capitalize">
          <h4 className="grow font-medium capitalize">
            <Translations text={title} namespace="navbar" />
          </h4>
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
          <h4 className="grow font-medium capitalize">
            <Translations text={title} namespace="navbar" />
          </h4>

          <ChevronDown
            className={clsx(
              isOpen && "rotate-180",
              "size-5 transition-transform"
            )}
          />
          <span className="sr-only">Toggle</span>

          <p className="w-full text-muted-foreground">{description}</p>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent
        forceMount
        className={clsx(
          "flex h-full flex-col overflow-hidden transition-all!",
          isOpen ? "max-h-full opacity-100" : "h-0! opacity-0"
        )}
      >
        <Separator />
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
