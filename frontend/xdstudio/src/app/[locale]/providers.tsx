"use client";
import React, { ReactNode, useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/shared/components/providers";
import { DialogProvider } from "@/libs/dialog/DialogProvider";
import { SessionProvider } from "next-auth/react";
import { useLocaleStore } from "@/shared/stores/useLocaleStore";
const queryClient = new QueryClient();
export const Providers = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) => {
  const { setData } = useLocaleStore();
  useLayoutEffect(() => {
    setData({ locale });
  }, [locale, setData]);
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <DialogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <Toaster position="top-center" />
            {children}
          </ThemeProvider>
        </DialogProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};
