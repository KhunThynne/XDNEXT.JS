import React, { Fragment, ReactNode } from "react";
import { Toaster } from "sonner";
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Toaster />
      {children}
    </Fragment>
  );
};
