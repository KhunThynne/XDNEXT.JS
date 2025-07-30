"use client";

import clsx from "clsx";

export default function ProvePage() {
  return (
    <section
      id="content-section"
      className={clsx("flex h-full flex-col gap-2 border")}
    >
      <div className={clsx("@container size-1/2 border")}>
        <div className="@xl:size-80 @md:size-20 @sm:size-10 aspect-square size-8 border" />
      </div>
    </section>
  );
}
