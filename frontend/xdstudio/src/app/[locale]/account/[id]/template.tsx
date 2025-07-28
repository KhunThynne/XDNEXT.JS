"use client";

import { useBreadBrumbStore } from "@/shared/components/ui/breadcrumb/useBreadBrumb.store";
import { useLayoutEffect } from "react";

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
