"use client";

import { RefObject, useEffect, useState } from "react";

export const ContainerLog = ({
  ref,
}: {
  ref: RefObject<HTMLElement | null>;
}) => {
  const [widthRem, setWidthRem] = useState<number>(0);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const px = entry.contentRect.width;
      setWidthRem(px / 16); // 👈 base 16px
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <span className="text-xs">{widthRem}rem</span>;
};
