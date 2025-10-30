import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
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
        <div className="absolute inset-0 z-0 contents w-full grow border lg:hidden">
          <div className="absolute inset-0 backdrop-blur" />
        </div>

        <div className="relative h-full grow lg:hidden">
          <BackScreen
            session={session}
            className="mx-auto size-full opacity-80"
          />
        </div>

        <Card
          className={clsx(
            `overflow-auto max-md:w-10/12 md:min-w-xl lg:max-w-md xl:static xl:max-w-xl`,
            "z-1 ms-0 divide-y max-lg:m-5"
          )}
        >
          <CardHeader>
            <span>
              <BackScreen
                session={session}
                variant={"outline"}
                classNames={{ icon: "size-4!" }}
              />
            </span>
          </CardHeader>

          <ConfigForm />
        </Card>
      </MotionTransition>
    </>
  );
}
