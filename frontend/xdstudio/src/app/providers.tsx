import { HeroUIProvider } from "@heroui/react";
import React, { Fragment, ReactNode } from "react";
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <Fragment>{children}</Fragment>
    </HeroUIProvider>
  );
};
