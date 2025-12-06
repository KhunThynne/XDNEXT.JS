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

export default function MenuNavbar({
  session,
  navbar,
}: {
  session: Session;
  navbar: TypeNavbarItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const target = document.getElementById("nav-menu");
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
              <ul className="flex flex-col divide-y divide-accent">
                <RenderMenu render={navbar} />
                <li className="sticky bottom-0 flex justify-end bg-secondary p-2">
                  <NavbarActionSection
                    className="spcae-x-2"
                    session={session}
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
