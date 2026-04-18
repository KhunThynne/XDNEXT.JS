"use client";

import clsx from "clsx";

import { Fragment, useLayoutEffect, useRef } from "react";
import { AccountPopover } from "./AccountPopover";

import { SignButton } from "./SignButton";
import type { Session } from "next-auth";
import { CartPopover } from "@/app/(main)/[locale]/(root)/@navbar/components/CartPopover";
import { ThemeMenu } from "@/shared/components/ThemeMenu";

import type { User } from "@/payload-types";
import { toast } from "sonner";
import { Users } from "lucide-react";

export const NavbarActionSection = ({
  className,
  session,
  credit,
}: {
  session: Session | null;
  credit: User["credit"];
} & WithlDefaultProps) => {
  const cartId = session?.user?.carts?.docs?.[0];
  const prevSessionRef = useRef(session);
  useLayoutEffect(() => {
    const prevSession = prevSessionRef.current;

    if (prevSession && !session) {
      toast.info("You are logged out");
      localStorage.removeItem("was_logged_in");
    }

    if (!prevSession && session) {
      const wasLoggedIn = localStorage.getItem("was_logged_in");
      if (!wasLoggedIn) {
        toast.success("Welcome back!");
        localStorage.setItem("was_logged_in", "true");
      }
    }

    prevSessionRef.current = session;
  }, [session]);
  return (
    <section className={clsx(className)}>
      <ThemeMenu />
      <span className="inline-flex space-x-3">
        {!session ? (
          <SignButton>
            <Users />
          </SignButton>
        ) : (
          session?.user && (
            <Fragment>
              <CartPopover
                cartId={cartId as string}
                credit={credit}
                userId={session?.user?.id ?? ""}
              />
              <AccountPopover {...session?.user} credit={credit} />
            </Fragment>
          )
        )}
      </span>
    </section>
  );
};

// <Fragment>
//       <Button
//         variant="ghost"
//         size="icon"
//         aria-label="loader-button"
//         disabled
//       >
//         <LoaderCircle className="animate-spin opacity-50" />
//       </Button>
//       <Button
//         variant="ghost"
//         size="icon"
//         aria-label="loader-button"
//         disabled
//       >
//         <Skeleton className="size-full rounded-full" />
//       </Button>
//     </Fragment>
