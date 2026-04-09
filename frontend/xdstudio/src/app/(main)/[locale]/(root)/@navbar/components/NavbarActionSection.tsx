"use client";
import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";

import { LoaderCircle } from "lucide-react";
import { Fragment, useMemo } from "react";
import { AccountPopover } from "./AccountPopover";

import { SignButton } from "./SignButton";
import type { Session } from "next-auth";
import { CartPopover } from "@/shared/components/ui/shopping/CartPopover";
import { ThemeMenu } from "@/shared/components/ui/ThemeMenu";
import { useSession } from "next-auth/react";

export const NavbarActionSection = ({
  className,

  session,
}: {
  session: Session | null;
} & WithlDefaultProps) => {
  const { status } = useSession();
  return (
    <section className={clsx(className)}>
      <ThemeMenu />
      <span className="inline-flex space-x-3">
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
            <CartPopover
              cartId={
                typeof session?.user?.carts?.docs?.[0] !== "string"
                  ? (session?.user?.carts?.docs?.[0]?.id ?? "")
                  : ""
              }
              credit={session?.user?.credit}
              userId={session?.user?.id ?? ""}
            />
            <AccountPopover {...session?.user} />
          </Fragment>
        )}
      </span>
    </section>
  );
};
