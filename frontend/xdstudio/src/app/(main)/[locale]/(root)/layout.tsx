import { auth } from "@/auth";
import { keys } from "@/core";
import { userQueries } from "@/core/user";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import clsx from "clsx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XD Shop",
  description: "This is a static description for all locales",
};
export default async function LocaleLayout({
  children,
  footer,
  navbar,
}: WithlDefaultProps & NextJSReactNodes<"footer" | "navbar">) {
  const queryClient = getQueryClient();
  const session = await auth();
  if (session?.user?.id) {
    const userId = session.user.id;
    queryClient.prefetchQuery(userQueries.credit(userId));
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={clsx("flex min-h-screen flex-col")}>
        <header className="sticky top-0 z-20">{navbar}</header>
        <main className="contents">{children}</main>
      </div>
      <footer>{footer}</footer>
    </HydrationBoundary>
  );
}
