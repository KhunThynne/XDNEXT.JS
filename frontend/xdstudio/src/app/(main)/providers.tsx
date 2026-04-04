"use client";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DialogProvider } from "@/libs/dialog/DialogProvider";
import type { Session } from "next-auth";
import { useCartsStore } from "@/shared/stores/useCartsStore";
import { Toaster } from "@/libs/shadcn/ui/sonner";
// import { SocketProvider } from "@/libs/socket-io/socket";

export const Providers = ({
  children,
  session,
}: {
  children: ReactNode;
  locale: string;
  session: Session | null;
}) => {
  const { setCart } = useCartsStore();
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    const cart = session?.user?.carts?.[0];
    if (!cart) {
      return;
    }
    setCart(cart);
  }, [session?.user.carts, setCart]);
  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>
        <Toaster position="top-center" />
        {children}
      </DialogProvider>
    </QueryClientProvider>
  );
};
