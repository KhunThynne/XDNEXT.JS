"use client";
import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";

import { LoaderCircle } from "lucide-react";
import { Fragment, useMemo } from "react";
import { AccountPopover } from "./AccountPopover";

import { SignButton } from "./SignButton";
import type { Session } from "next-auth";
import { ShoppingPopover } from "@/shared/components/ui/shopping/ShoppingPopover";
import { ThemeMenu } from "@/shared/components/ui/ThemeMenu";
import { useSession } from "next-auth/react";

export const NavbarActionSection = ({
  className,

  session,
}: {
  session: Session | null;
} & WithlDefaultProps) => {
  const cartId = useMemo(() => {
    return session?.user?.carts?.[0]?.id;
  }, [session?.user.carts]);
  const { status } = useSession();
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
            <ShoppingPopover
              pointId={session.user.point?.id ?? ""}
              userId={session.user.id}
              cartId={cartId!}
            />
            <AccountPopover {...session?.user} />
          </Fragment>
        )}
      </span>
    </section>
  );
};
