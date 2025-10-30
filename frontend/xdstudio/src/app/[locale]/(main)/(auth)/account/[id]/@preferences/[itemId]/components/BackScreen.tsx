"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { LoadingDots } from "@/shared/components/ui/Loading";
import { useRouter } from "@navigation";
import clsx from "clsx";
import { ArrowLeft } from "lucide-react";
import type { Session } from "next-auth";
import React from "react";

export const BackScreen = ({
  session,
  className,
  classNames,
  ...button
}: { session: Session | null } & GlobalPropsClassNames<"icon"> &
  React.ComponentProps<typeof Button>) => {
  const router = useRouter();
  if (!session) return <LoadingDots />;
  return (
    <Button
      onClick={() => router.push(`/account/${session.user.id}`)}
      className={clsx(className)}
      variant={"ghost"}
      {...button}
    >
      <ArrowLeft className={clsx("size-6", classNames?.icon)} />
    </Button>
  );
};
