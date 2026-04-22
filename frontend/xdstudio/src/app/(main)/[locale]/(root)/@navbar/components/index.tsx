"use client";
import clsx from "clsx";
import type { Session } from "next-auth";

function Navbar({
  className,
  children,
}: WithlDefaultProps & { session: Session | null; brander?: string }) {
  return (
    <nav
      className={clsx(
        "bg-background sticky top-0 z-20 w-full place-content-center backdrop-blur-lg md:bg-inherit",
        className
      )}
    >
      <div className="container mx-auto flex h-16.5 items-center justify-between px-4">
        {children}
      </div>
      <menu id={"nav-menu"} />
    </nav>
  );
}

export default Navbar;
