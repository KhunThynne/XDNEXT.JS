"use client";

import { RefObject, useEffect, useRef, useState } from "react";

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

export const ContainerLogDemo = ({
  children,
  className,
}: WithChildren & WithClassName) => {
  const [widthRem, setWidthRem] = useState<number>(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const px = entry.contentRect.width;
      setWidthRem(px / 16); // 👈 base 16px
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <span className="self-start text-start text-xs">{widthRem}rem</span>
      <div ref={ref} className={className}>
        {children}
      </div>
    </>
  );
};
