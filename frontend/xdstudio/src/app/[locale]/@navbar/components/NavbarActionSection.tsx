import { Button } from "@/libs/shadcn/ui/button";
import { SwitchTheme } from "@/shared/components/ui/SwitchTheme";
import clsx from "clsx";

import { LoaderCircle } from "lucide-react";
import { Fragment } from "react";
import { AccountPopover } from "./AccountPopover";
import { ShoppingPopover } from "./ShoppingPopover";
import { SignButton } from "./SignButton";
import { Session } from "next-auth";

export const NavbarActionSection = ({
  className,
  status,
  session,
}: {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
} & GlobalDefaultProps) => {
  return (
    <section className={clsx(className)}>
      <SwitchTheme />

      <span className="inline-flex">
        {status === "loading" ? (
          <Button variant="ghost" size="icon" disabled>
            <LoaderCircle className="animate-spin" />
          </Button>
        ) : !session ? (
          <SignButton />
        ) : (
          <Fragment>
            <ShoppingPopover />
            <AccountPopover {...session?.user} />
          </Fragment>
        )}
      </span>
    </section>
  );
};
