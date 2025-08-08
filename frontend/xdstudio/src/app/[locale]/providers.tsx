"use client";
import React, { ReactNode, useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/shared/components/providers";
import { DialogProvider } from "@/libs/dialog/DialogProvider";
import { useLocaleStore } from "@/shared/stores/useLocaleStore";
import { Session } from "next-auth";
import { useCartsStore } from "@/shared/stores/useCartsStore";
const queryClient = new QueryClient();
export const Providers = ({
  children,
  locale,
  session,
}: {
  children: ReactNode;
  locale: string;
  session: Session | null;
}) => {
  const { setData } = useLocaleStore();
  const { setCart } = useCartsStore();
  useLayoutEffect(() => {
    setData({ locale });
  }, [locale, setData]);
  useLayoutEffect(() => {
    const cart = session?.user?.carts?.[0];
    if (!cart) {
      return;
    }
    setCart(cart);
  }, [session?.user.carts, setCart]);
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
