"use client";
import { Button } from "@/shared/libs/shadcn/ui/button";
import clsx from "clsx";

import { LoaderCircle } from "lucide-react";
import { Fragment } from "react";
import { AccountPopover } from "./AccountPopover";

import { SignButton } from "./SignButton";
import type { Session } from "next-auth";
import { CartPopover } from "@/app/(main)/[locale]/(root)/@navbar/components/CartPopover";
import { ThemeMenu } from "@/shared/components/ui/ThemeMenu";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";

export const NavbarActionSection = ({
  className,
  session,
}: {
  session: Session | null;
} & WithlDefaultProps) => {
  const { status } = useSession();
  if (!session?.user) return null;
  const cartId = session.user.carts?.docs?.[0];
  return (
    <section className={clsx(className)}>
      <ThemeMenu />
      <span className="inline-flex space-x-3">
        {status === "loading" ? (
          <Fragment>
            <Button
              variant="ghost"
              size="icon"
              aria-label="loader-button"
              disabled
            >
              <LoaderCircle className="animate-spin opacity-50" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="loader-button"
              disabled
            >
              <Skeleton className="size-full rounded-full" />
            </Button>
          </Fragment>
        ) : !session ? (
          <SignButton />
        ) : (
          <Fragment>
            <CartPopover
              cartId={cartId as string}
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
