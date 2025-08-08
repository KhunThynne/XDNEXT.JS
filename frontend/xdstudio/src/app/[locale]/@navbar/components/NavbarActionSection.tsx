import { Button } from "@/libs/shadcn/ui/button";
import { SwitchTheme } from "@/shared/components/ui/SwitchTheme";
import clsx from "clsx";

import { LoaderCircle } from "lucide-react";
import { Fragment, useMemo } from "react";
import { AccountPopover } from "./AccountPopover";
import { ShoppingPopover } from "./ShoppingPopover";
import { SignButton } from "./SignButton";
import { Session } from "next-auth";
import Error from "next/error";

export const NavbarActionSection = ({
  className,
  status,
  session,
}: {
  session: Session | null;
  status: "loading" | "authenticated" | "unauthenticated";
} & GlobalDefaultProps) => {
  const cartId = useMemo(() => {
    return session?.user?.carts?.[0]?.id;
  }, [session?.user.carts]);
  if (!cartId) {
    return new Error({ statusCode: 500, title: "Unkhown cart name" });
  }
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
            <ShoppingPopover userId={session.user.id} cartId={cartId} />
            <AccountPopover {...session?.user} />
          </Fragment>
        )}
      </span>
    </section>
  );
};
