import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { ConfigForm } from "./components/ConfigForm";
import { MotionTransition } from "@/shared/components/MotionTransition";
import clsx from "clsx";
import { BackScreen } from "./components/BackScreen";
import { auth } from "@/auth";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ locale: string; itemId: string }>;
}) {
  const { itemId } = await params;
  const session = await auth();
  return (
    <>
      <MotionTransition
        preset="slide-left"
        key={itemId}
        show={!!itemId}
        className="absolute inset-0 flex lg:static"
      >
        <div className="relative h-full grow backdrop-blur lg:hidden">
          <BackScreen session={session} />
        </div>

        <Card
          className={clsx(
            `min-w-xl overflow-auto lg:max-w-md xl:static xl:max-w-xl`,
            "z-1 max-lg:rounded-none"
          )}
        >
          <ConfigForm />
        </Card>
      </MotionTransition>
    </>
  );
}
