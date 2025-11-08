import { MotionTransition } from "@/shared/components/MotionTransition";
import { BackScreen } from "../_components/BackScreen";
import { ConfigForm } from "../_components/ConfigForm";
import { auth } from "@/auth";
import { cacheLife, cacheTag } from "next/cache";
import { execute } from "@/libs/graphql/execute";
import type {
  GetUserAItemConfigQueryVariables,
  GetUserItemQueryVariables,
  User,
} from "@/libs/graphql/generates/graphql";
import {
  GetUserAItemConfigDocument,
  GetUserItemDocument,
} from "@/libs/graphql/generates/graphql";
import { forbidden, notFound } from "next/navigation";
import clsx from "clsx";

const getUserAItemConfigCache = async (
  arg: GetUserAItemConfigQueryVariables
) => {
  "use cache";
  cacheLife("days");
  cacheTag(`${arg.where.id}`);
  return await execute(GetUserAItemConfigDocument, arg);
};

export default async function ItemPage({
  params,
}: {
  params: Promise<{ locale: string; itemId: string; id: string }>;
}) {
  const { itemId, id } = await params;
  const session = await auth();
  if (!itemId) {
    return notFound();
  }
  const { data } = await getUserAItemConfigCache({ where: { id: itemId } });

  if (!data.userItem) {
    return notFound();
  }
  if (data?.userItem?.user?.id !== id) {
    return forbidden();
  }
  return (
    <>
      <MotionTransition preset="zoom" key={itemId} show={!!itemId}>
        {/* <div className="absolute inset-0 z-0 contents w-full grow border lg:hidden">
          <div className="absolute inset-0 backdrop-blur" />
        </div>

        <div className="relative h-full grow lg:hidden">
          <BackScreen
            session={session}
            className="mx-auto size-full opacity-80"
          />
        </div> */}

        {/* <Card
          className={clsx(
            `overflow-auto max-md:w-10/12 md:min-w-xl lg:max-w-md xl:static xl:max-w-xl`,
            "z-1 ms-0 divide-y max-lg:m-5"
          )}
        >
          <CardHeader>
            {itemId}
            <span>
              <BackScreen
                session={session}
                variant={"outline"}
                classNames={{ icon: "size-4!" }}
              />
            </span>
          </CardHeader>

      
        </Card> */}

        <ConfigForm />
      </MotionTransition>
    </>
  );
}
