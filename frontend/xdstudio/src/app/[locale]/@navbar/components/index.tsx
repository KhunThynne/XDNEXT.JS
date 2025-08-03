"use client";
import { Link } from "@navigation";
import clsx from "clsx";
import { useState } from "react";
import { RenderLink } from "./RenderLink.components";
import conf from "@/utils/loadConfig";
import { MenuButton } from "./Menu.button";
import { RenderMenu } from "./RenderMenu.components";
import { useSession } from "next-auth/react";
import { Loader, LoaderCircle, LogInIcon, ShoppingBag } from "lucide-react";
import { useSignDialog } from "@/shared/components/forms/auth/SignForm";
import { Button } from "@/libs/shadcn/ui/button";
import { Skeleton } from "@/libs/shadcn/ui/skeleton";
import { SwitchTheme } from "@/shared/components/ui/SwitchTheme";
import { AccountPopover } from "./AccountPopover";
import { Session } from "next-auth";
import { ShoppingPopover } from "./ShoppingPopover";

const NavbarActionSection = ({
  className,
  status,
  session,
}: {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
} & GlobalDefaultProps) => {
  const { openDialog } = useSignDialog();
  return (
    <section className={clsx(className)}>
      <SwitchTheme />

      <span className="inline-flex">
        <ShoppingPopover />
        {status === "loading" && (
          <Button variant="ghost" size="icon" disabled>
            <LoaderCircle className="animate-spin" />
          </Button>
        )}
        {status === "unauthenticated" ? (
          <Button variant="ghost" size="icon" onClick={openDialog}>
            <LogInIcon />
          </Button>
        ) : (
          <AccountPopover {...session?.user} />
        )}
      </span>
    </section>
  );
};
export default function Navbar({ className }: GlobalDefaultProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { status, data } = useSession();

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
          <NavbarActionSection
            className="flex gap-2"
            status={status}
            session={data}
          />
        </nav>
        <MenuButton
          className="md:hidden"
          state={isOpen}
          onClick={() => setIsOpen((pre) => !pre)}
        />
      </div>

      <div className={clsx("relative md:hidden")}>
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
              <NavbarActionSection
                className="spcae-x-2"
                status={status}
                session={data}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
