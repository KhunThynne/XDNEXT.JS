"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/shared/components/providers";
import { DialogProvider } from "@/libs/dialog/DialogProvider";

const queryClient = new QueryClient();
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </DialogProvider>
    </QueryClientProvider>
  );
};
