"use client";
import React, { useEffect, useMemo, useRef } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { Separator } from "@/libs/shadcn/ui/separator";

type PropType = {
  options?: EmblaOptionsType & { mode?: "auto" | "manual" };
  selectedIndex?: number;
  edgeGlow?: boolean;
} & WithClassNames<"container" | "view"> &
  WithChildren;
export function EdgeGlow({ className = "" }: WithClassName) {
  const shadowClassName = clsx(
    "h-full w-10! animate-pulse shadow-2xl backdrop-blur-3xl dark:shadow-white/30"
  );
  return (
    <span className={clsx("pointer-events-none -z-0 flex", className)}>
      <Separator
        orientation="vertical"
        className={clsx("absolute left-0 -translate-x-10", shadowClassName)}
      />
      <Separator
        orientation="vertical"
        className={clsx("absolute right-0 translate-x-10", shadowClassName)}
      />
    </span>
  );
}

const EmblaCarousel = (props: PropType) => {
  const {
    children,
    options,
    className,
    classNames,
    selectedIndex,
    edgeGlow = true,
  } = props;

  const { mode = "auto", ...emblaOptions } = options ?? {};
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...emblaOptions });
  useEffect(() => {
    if (emblaApi && selectedIndex !== undefined) {
      emblaApi.scrollTo(selectedIndex);
    }
  }, [emblaApi, selectedIndex]);
  useEffect(() => {
    if (mode === "manual") return;
    if (!emblaApi) return;

    const checkOverflow = () => {
      const el = emblaApi.containerNode();
      const isOverflowing = el.scrollWidth > el.clientWidth;

      emblaApi.reInit({
        ...options,
        active: isOverflowing,
      });
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [emblaApi, mode, options]);
  return (
    <section className={clsx(`@container relative overflow-hidden`, className)}>
      {edgeGlow && <EdgeGlow />}
      <span
        className={clsx("embla__viewport", classNames?.view)}
        ref={emblaRef}
      >
        <div
          className={clsx(
            "embla__container flex h-full max-w-fit",
            classNames?.container
          )}
        >
          {children}
        </div>
      </span>
    </section>
  );
};

export default EmblaCarousel;
