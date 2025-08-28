"use client";

import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import clsx from "clsx";

export const PreferencesCard = ({
  children,
  className,
}: WithChildren & WithClassName) => {
  return (
    <Card className={clsx("@container relative", className)}>{children}</Card>
  );
};
