"use client";
import { Link } from "@navigation";
import clsx from "clsx";
import { memo, useDeferredValue, useMemo, useState } from "react";
import { RenderLink } from "./RenderLink.components";
import conf from "@/utils/loadConfig";
import { MenuButton } from "./Menu.button";
import { RenderMenu } from "./RenderMenu.components";
import { useSession } from "next-auth/react";

import { NavbarActionSection } from "./NavbarActionSection";
import type { Session } from "next-auth";

function Navbar({
  className,
  session,
}: WithlDefaultProps & { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();
  const BranderMemo = useMemo(() => conf.branner, []);
  const NavbarMemo = useMemo(() => conf.navbar, []);
  const statusDefer = useDeferredValue(status);
  return (
    <div
      className={clsx(
        "min-h-16.5 w-full place-content-center border-b bg-background",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" key={BranderMemo} className="text-xl font-bold">
          {BranderMemo}
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
            "rounded-b-lg inset-shadow-sm",
            "bg-background",
            "w-full max-w-lg",
            isOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden"
          )}
        >
          <ul className="flex flex-col divide-y divide-accent">
            <RenderMenu render={NavbarMemo} />
            <li className="sticky bottom-0 flex justify-end bg-secondary p-2">
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

export default memo(Navbar);
