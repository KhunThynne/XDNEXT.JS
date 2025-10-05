import { Button } from "@/libs/shadcn/ui/button";
import { SwitchTheme } from "@/shared/components/ui/SwitchTheme";
import clsx from "clsx";

import { LoaderCircle } from "lucide-react";
import { Fragment, useMemo } from "react";
import { AccountPopover } from "./AccountPopover";

import { SignButton } from "./SignButton";
import { Session } from "next-auth";
import { ShoppingPopover } from "@/shared/components/ui/shopping/ShoppingPopover";
import { ThemeMenu } from "@/shared/components/ui/ThemeMenu";

export const NavbarActionSection = ({
  className,
  status,
  session,
}: {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
} & WithlDefaultProps) => {
  const cartId = useMemo(() => {
    return session?.user?.carts?.[0]?.id;
  }, [session?.user.carts]);

  return (
    <section className={clsx(className)}>
      <ThemeMenu />
      <span className="inline-flex">
        {status === "loading" ? (
          <Button
            variant="ghost"
            size="icon"
            disabled
            aria-label="loader-button"
          >
            <LoaderCircle className="animate-spin" />
          </Button>
        ) : !session ? (
          <SignButton />
        ) : (
          <Fragment>
            <ShoppingPopover userId={session.user.id} cartId={cartId!} />
            <AccountPopover {...session?.user} />
          </Fragment>
        )}
      </span>
    </section>
  );
};
