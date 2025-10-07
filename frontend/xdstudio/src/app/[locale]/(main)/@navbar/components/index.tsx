"use client";
import { Link } from "@navigation";
import clsx from "clsx";
import { useDeferredValue, useState } from "react";
import { RenderLink } from "./RenderLink.components";
import conf from "@/utils/loadConfig";
import { MenuButton } from "./Menu.button";
import { RenderMenu } from "./RenderMenu.components";
import { useSession } from "next-auth/react";

import { NavbarActionSection } from "./NavbarActionSection";
import type { Session } from "next-auth";

export default function Navbar({
  className,
  session,
}: WithlDefaultProps & { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();

  const statusDefer = useDeferredValue(status);
  return (
    <div
      className={clsx(
        "bg-background min-h-16.5 sticky top-0 z-20 w-full place-content-center border-b",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">
          {conf.branner}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <RenderLink render={conf.navbar} />
          <NavbarActionSection
            className="flex gap-2"
            status={statusDefer}
            session={session}
          />
        </nav>
        <MenuButton
          aria-label="menu-navbar"
          className="md:hidden"
          state={isOpen}
          onClick={() => setIsOpen((pre) => !pre)}
        />
      </div>

      <div className={clsx("relative md:hidden")}>
        <nav
          aria-label="Mobile navigation"
          className={clsx(
            "absolute right-0 size-fit shadow-md transition-all ease-linear",
            "inset-shadow-sm rounded-b-lg",
            "bg-background",
            "w-full max-w-lg",
            isOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden"
          )}
        >
          <ul className="divide-accent flex flex-col divide-y">
            <RenderMenu render={conf.navbar} />
            <li className="bg-secondary sticky bottom-0 flex justify-end p-2">
              <NavbarActionSection
                className="spcae-x-2"
                status={statusDefer}
                session={session}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
