import { Link } from "@navigation";
import clsx from "clsx";
import { useState } from "react";

import { RenderLink } from "./RenderLink.components";
import conf from "@/utils/loadConfig";
import { SwitchTheme } from "../../shared/SwitchTheme";
import { MenuButton } from "./Menu.button";
import { RenderMenu } from "./RenderMenu.components";

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
        <Link href="/" className="text-xl font-bold">
          {conf.branner}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <RenderLink render={conf.navbar} />

          <SwitchTheme />
        </nav>
        <MenuButton
          className="md:hidden"
          state={isOpen}
          onClick={() => setIsOpen((pre) => !pre)}
        />
      </div>

      <section className={clsx("relative -z-0 h-full md:hidden")}>
        <nav
          aria-label="Mobile navigation"
          className={clsx(
            "absolute right-0 size-fit shadow-md transition-all",
            "inset-shadow-sm rounded-b-lg",
            "bg-background",
            "w-full max-w-lg",

            isOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden"
          )}
        >
          <ul className="divide-accent flex flex-col divide-y">
            <RenderMenu render={conf.navbar} />
            <li className="bg-secondary sticky bottom-0 flex justify-end p-2">
              <SwitchTheme />
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
