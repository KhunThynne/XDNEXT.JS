"use client";

import { MotionTransition } from "@/shared/components/MotionTransition";
import { Button } from "@/libs/shadcn/ui/button";
import { useRouter } from "@navigation";

export const ConfigForm = () => {
  const route = useRouter();
  return (
    <div className="flex flex-col">
      <div>
        <Button onClick={route.back} variant={"ghost"}>
          back
        </Button>
      </div>
      <MotionTransition preset="slide-up">test</MotionTransition>
    </div>
  );
};
