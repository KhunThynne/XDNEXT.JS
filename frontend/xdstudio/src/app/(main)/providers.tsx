"use client";
import type { ReactNode } from "react";
import {  QueryClientProvider } from "@tanstack/react-query";
import { DialogProvider } from "@/shared/libs/dialog/DialogProvider";
import type { Session } from "next-auth";
import { Toaster } from "@/shared/libs/shadcn/ui/sonner";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";

export const Providers = ({
  children,
}: {
  children: ReactNode;
  locale: string;
  session: Session | null;
}) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>
        <Toaster position="top-center" />
        {children}
      </DialogProvider>
    </QueryClientProvider>
  );
};
