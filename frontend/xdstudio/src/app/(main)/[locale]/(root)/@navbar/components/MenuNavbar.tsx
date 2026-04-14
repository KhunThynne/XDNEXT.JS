"use client";
import { Fragment } from "react/jsx-runtime";
import { ButtonMenu } from "./ButtonMenu";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { useState } from "react";
import { RenderMenu } from "./RenderMenu.components";
import { NavbarActionSection } from "./NavbarActionSection";
import type { Session } from "next-auth";
import type { TypeNavbarItem } from "@type/config.type";
import { useIsMounted } from "@/shared/hooks/useIsMounted";
import type { User } from "@/payload-types";

export default function MenuNavbar({
  session,
  navbar,
  credit,
}: {
  session: Session;
  navbar: TypeNavbarItem[];
  credit: User["credit"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useIsMounted();

  const target = isMounted ? document.getElementById("nav-menu") : null;
  return (
    <Fragment>
      <ButtonMenu
        aria-label="menu-navbar"
        className="md:hidden"
        state={isOpen}
        onClick={() => setIsOpen((pre) => !pre)}
      />
      {target &&
        createPortal(
          <div className={clsx("relative md:hidden")}>
            <nav
              aria-label="Mobile navigation"
              className={clsx(
                "absolute right-0 size-fit shadow-md transition-all ease-linear",
                "rounded-b-lg inset-shadow-sm",
                "bg-background",
                "w-full max-w-lg",
                isOpen
                  ? "max-h-[80vh] overflow-y-auto"
                  : "max-h-0 overflow-hidden"
              )}
            >
              <ul className="divide-accent flex flex-col divide-y">
                <RenderMenu render={navbar} />
                <li className="bg-secondary sticky bottom-0 flex justify-end p-2">
                  <NavbarActionSection
                    className="spcae-x-2"
                    session={session}
                    credit={credit}
                  />
                </li>
              </ul>
            </nav>
          </div>,
          target
        )}
    </Fragment>
  );
}
