"use client";
import { Alert, AlertDescription, AlertTitle } from "@/libs/shadcn/ui/alert";
import { MousePointerClick } from "lucide-react";
import { BadgePaymentStatus } from "../../_components/BadgePaymentStatus";
import type { FromTypePointTransactionStripe } from "../../_shared/types/FromTypePointTransactionStripe";
import { useFormatter, useNow } from "next-intl";
import { useRouter } from "@navigation";
import { useParams } from "next/navigation";
import clsx from "clsx";
import { useEffect, useEffectEvent, useState } from "react";
import { useSocket } from "@/libs/socket-io/socket";
import type { RealtimeEvent } from "@/libs/redis/publisher";
import { revalidateTagClient } from "@/app/[locale]/(main)/(contents)/(product_content)/products/shared/updateTagClient";

const AlertPointTransaction = ({
  pointTransaction: defaultPointTransaction,
}: {
  pointTransaction: FromTypePointTransactionStripe;
}) => {
  const { number, relativeTime, dateTime } = useFormatter();
  const [pointTransaction, setPointTransaction] = useState(
    defaultPointTransaction
  );

  const now = useNow({
    updateInterval: 1000 * 10,
  });
  const { id, transactionId } = useParams() as {
    id: string;
    transactionId: string;
  };

  const router = useRouter();
  const { socket } = useSocket();
  if (defaultPointTransaction.id !== pointTransaction.id) {
    setPointTransaction(defaultPointTransaction);
  }
  const onServerUpdate = useEffectEvent((arg: string) => {
    const data = (JSON.parse(arg) as RealtimeEvent)
      .data as FromTypePointTransactionStripe;
    if (data.id === defaultPointTransaction.id) {
      setPointTransaction(data);
      revalidateTagClient(`last-transaction-${id}`);
    }
  });
  useEffect(() => {
    if (!socket) return;
    socket.on("keystone-socket-payment", onServerUpdate);
    return () => {
      socket.off("keystone-socket-payment", onServerUpdate);
    };
  }, [socket]);

  const active = transactionId === pointTransaction.id;
  return (
    <Alert
      className={clsx(
        `relative space-y-3 p-5 transition-opacity`,
        !active
          ? `group hover:cursor-pointer hover:brightness-105`
          : `brightness-105`
      )}
      onClick={() => {
        router.push(`/account/${id}/payment/${pointTransaction.id}`);
      }}
    >
      
      <AlertTitle className="flex justify-between">
        <h2> {number(pointTransaction.amount ?? 0)}</h2>
      </AlertTitle>
      <div
        className={clsx(
          "absolute inset-0 flex max-w-full place-content-center",
          `transition-all`,
          active ? `opacity-100` : `opacity-30 group-hover:opacity-90`
        )}
      >
        <MousePointerClick
          className={clsx("size-10 self-center group-hover:animate-bounce")}
        />
      </div>
      <AlertDescription className="flex justify-between">
        <article className="grid">
          <span>
            {dateTime(new Date(pointTransaction.updateAt), {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </span>
          <span className="text-xs font-medium">
            {relativeTime(pointTransaction.createdAt, now)}
          </span>
        </article>
        {pointTransaction?.status && (
          <BadgePaymentStatus status={pointTransaction?.status} />
        )}
      </AlertDescription>
    </Alert>
  );
};

export default AlertPointTransaction;
