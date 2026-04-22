"use client";

import { Button } from "@/shared/libs/shadcn/ui/button";

export const MobileNab = () => {
  return (
    <section className="mt-2 xl:hidden">
      {/* <Separator className="grow" /> */}
      <Button
        className=""
        variant={"secondary"}
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("checkout");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Checkout
      </Button>
    </section>
  );
};
