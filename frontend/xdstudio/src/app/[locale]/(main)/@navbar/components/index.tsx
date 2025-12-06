"use client";
import { Link } from "@navigation";
import clsx from "clsx";
import type { Session } from "next-auth";

function Navbar({
  className,
  session,
  children,
  brander,
}: WithlDefaultProps & { session: Session | null; brander?: string }) {
  return (
    <nav
      className={clsx(
        "min-h-16.5 w-full place-content-center border-b bg-background",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
       

        {children}
      </div>
      <menu id={"nav-menu"} />
    </nav>
  );
}

export default Navbar;
