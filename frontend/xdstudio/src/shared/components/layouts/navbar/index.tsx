import { Link } from "@navigation";
import clsx from "clsx";
import { useState } from "react";
import { RenderLink } from "./RenderLink.components";
import conf from "@/utils/loadConfig";
import { MenuButton } from "./Menu.button";
import { RenderMenu } from "./RenderMenu.components";
import { SwitchTheme } from "../../ui/SwitchTheme";
import { useSignDialog } from "../../forms/auth/SignForm";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../../shadcn/button";
import { LogInIcon, User } from "lucide-react";
import { Skeleton } from "../../shadcn/skeleton";
const NavbarActionSection = ({
  className,
  status,
}: {
  status: "loading" | "authenticated" | "unauthenticated";
} & NextDefaultProps) => {
  const { openDialog } = useSignDialog();
  return (
    <section className={clsx(className)}>
      <SwitchTheme />
      {status === "loading" ? (
        <Skeleton className="size-8 rounded-sm" />
      ) : status === "unauthenticated" ? (
        <Button variant="ghost" size="icon" onClick={openDialog}>
          <LogInIcon />
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => signOut({ redirect: false })}>
          <User />
        </Button>
      )}
    </section>
  );
};
export default function Navbar({ className }: NextDefaultProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();

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

          <NavbarActionSection className="flex gap-2" status={status} />
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
              <NavbarActionSection className="spcae-x-2" status={status} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
