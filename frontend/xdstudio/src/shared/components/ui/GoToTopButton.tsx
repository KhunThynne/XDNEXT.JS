"use client";
import { Button } from "@/libs/shadcn/ui/button";
import {
  ArrowBigUpDash,
  ArrowBigUpDashIcon,
  ArrowDownUp,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import { MotionTransition } from "../MotionTransition";
import clsx from "clsx";

export const GoToTopButton = (props: React.ComponentProps<typeof Button>) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // const windowHeight = window.innerHeight;
      // const docHeight = document.documentElement.scrollHeight;
      // && scrollTop + windowHeight < docHeight - 5
      setShow(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (show)
    return (
      <MotionTransition animationKey="arrow-up-button">
        <Button
          {...props}
          variant="ghost"
          className={clsx(
            "fixed right-5 bottom-5 aspect-square size-10 cursor-pointer rounded-2xl hover:animate-bounce lg:size-12",
            `max-md:bottom-0 max-md:left-1/2 max-md:-translate-x-1/2`,
            `md:border`
          )}
          aria-label="Go to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="size-full">
            <ArrowBigUpDash className="size-full max-md:hidden" />
            <span className="hidden text-xs/loose text-primary/70 max-md:block">
              Go to top
            </span>
          </div>
        </Button>
      </MotionTransition>
    );
};
