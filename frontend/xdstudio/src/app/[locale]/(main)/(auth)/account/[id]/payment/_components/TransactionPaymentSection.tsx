"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { CardPointTransactionPayment } from "./CardPointTransactionPayment";
import type { Session } from "next-auth";
import clsx from "clsx";
import { Button } from "@/libs/shadcn/ui/button";
import { Coins, Plus, RefreshCcw, Wallet } from "lucide-react";
import { Separator } from "@/libs/shadcn/ui/separator";
import { useFormatter } from "next-intl";
import { usePointDocument } from "@/shared/components/ui/Point";
import type { User } from "@/libs/graphql/generates/graphql";
import { Link, usePathname, useRouter } from "@navigation";
import { ButtonGroup } from "@/libs/shadcn/ui/button-group";

const AvilableAndRewardDetails = ({ user }: { user: User }) => {
  const formater = useFormatter();
  const { query, invalidate } = usePointDocument({ id: user?.point?.id });
  const data = query.data?.data;
  const router = useRouter();
  const pathname = usePathname();
  const total_point = data?.userPoint?.total_point ?? 0;
  const total_spent = data?.userPoint?.total_spent ?? 0;
  return (
    <div className="flex h-full flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="font-medium">Your Point</CardTitle>
        <ButtonGroup>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => invalidate()}
            className="cursor-pointer"
          >
            <RefreshCcw className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => router.push(`/account/${user.id}/payment`)}
            disabled={pathname === `/account/${user.id}/payment`}
            className="cursor-pointer"
          >
            <Plus className="size-4" />
          </Button>
        </ButtonGroup>
      </CardHeader>
      <CardContent>
        <div className="flex h-full items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wallet className="h-4 w-4" />
              <span>Point Balance</span>
            </div>
            <div className="text-2xl font-bold tracking-tight">
              {formater.number(total_point)}
            </div>
          </div>

          <Separator orientation="vertical" className="h-1/2!" />

          <div className="space-y-1 text-right">
            <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
              <span>Total spent </span>
              <Coins className="size-4 text-yellow-500" />
            </div>
            <div className="text-xl font-semibold text-yellow-500">
              {formater.number(Number(total_spent / 100))}
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export const TransactionPaymentSection = ({
  session,
  children,
}: {
  session: Session;
} & WithChildren) => {
  // const params = useParams() as { transactionId: string };
  const { user } = session;
  return (
    <ContainerSection
      className={clsx(`flex-3`)}
      classNames={{ content: "flex flex-col gap-6 max-h-full" }}
    >
      <section className="flex gap-6 @max-xl:contents">
        <Card className="order-first flex-6">
          {user.point?.id && <AvilableAndRewardDetails user={user} />}
        </Card>
        {children}
      </section>
      <CardPointTransactionPayment session={session!} className="order-2" />
    </ContainerSection>
  );
};
