"use client";
import type { ReactNode } from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DialogProvider } from "@/shared/libs/dialog/DialogProvider";
import type { Session } from "next-auth";
// import { useCartsStore } from "@/shared/stores/useCartsStore";
import { Toaster } from "@/shared/libs/shadcn/ui/sonner";
// import { SocketProvider } from "@/shared/libs/socket-io/socket";

export const Providers = ({
  children,
}: {
  children: ReactNode;
  locale: string;
  session: Session | null;
}) => {
  const [queryClient] = useState(() => new QueryClient());
  // const { setCart } = useCartsStore();
  // useEffect(() => {
  //   const cart = session?.user?.carts?.[0];
  //   if (!cart) {
  //     return;
  //   }
  //   setCart(cart);
  // }, [session?.user.carts, setCart]);
  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>
        <Toaster position="top-center" />
        {children}
      </DialogProvider>
    </QueryClientProvider>
  );
};
