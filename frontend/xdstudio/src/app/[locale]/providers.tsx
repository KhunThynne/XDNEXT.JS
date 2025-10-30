"use client";
import type { ReactNode } from "react";
import React, { useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/shared/components/providers";
import { DialogProvider } from "@/libs/dialog/DialogProvider";
import type { Session } from "next-auth";
import { useCartsStore } from "@/shared/stores/useCartsStore";
import { Toaster } from "@/libs/shadcn/ui/sonner";
const queryClient = new QueryClient();
export const Providers = ({
  children,
  session,
}: {
  children: ReactNode;
  locale: string;
  session: Session | null;
}) => {
  const { setCart } = useCartsStore();
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </DialogProvider>
    </QueryClientProvider>
  );
};
