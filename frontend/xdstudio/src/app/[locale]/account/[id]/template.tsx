"use client";

import { useLayoutEffect } from "react";
import { useBreadBrumbStore } from "../../@breadcrumb/useBreadBrumb.store";

export default function Template({ children }: WithChildren) {
  const { setBreadcrumbe } = useBreadBrumbStore();
  useLayoutEffect(() => {
    setBreadcrumbe({ disable: true });
    return () => {
      setBreadcrumbe({ disable: false });
    };
  }, [setBreadcrumbe]);
  return <>{children}</>;
}
