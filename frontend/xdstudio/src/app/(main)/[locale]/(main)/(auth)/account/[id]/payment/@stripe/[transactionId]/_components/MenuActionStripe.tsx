"use client";

import { Button } from "@/libs/shadcn/ui/button";
import {
  ButtonGroup,
  DialogFooterAction,
  useDialogGlobal,
} from "@/shared/components/ui";
import { useRouter } from "@navigation";
import clsx from "clsx";
import { OctagonXIcon, SquareChartGantt, Star, Trash2 } from "lucide-react";
import type { Session } from "next-auth";
import type { StatusValueStripePayment } from "../../_shared/types/statusValue";
import { useParams } from "next/navigation";
import type Stripe from "stripe";
import { usePointTransactionMutations } from "../../../_hooks/usePointTransactionMutations";
import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";

const MenuActionStripe = ({
  session,
  id,
  status,
  paymentIntentId,
  data,
  className,
  articleBt = true,
  deleteBt = true,
  favoriteBt = true,
  rejectBt = false,
}: {
  data: PointTransactionFieldFragment;
  session: Session;
  id: string;
  paymentIntentId: Stripe.PaymentIntent["id"];
  status: StatusValueStripePayment;
  deleteBt?: boolean;
  rejectBt?: boolean;
  favoriteBt?: boolean;
  articleBt?: boolean;
} & WithClassName) => {
  const dialog = useDialogGlobal();
  const router = useRouter();
  const params = useParams();
  const {
    switchFavorite,
    rejectPayment,
    rejectAndDeletePayment,
    deletePayment,
  } = usePointTransactionMutations();
  const active = params.transactionId === id;
  const actionParams = {
    id,
    paymentIntentId,
  };
  return (
    <ButtonGroup className={clsx("flex place-content-end", className)}>
      {articleBt && (
        <Button
          size={"icon-sm"}
          variant={"ghost"}
          className={clsx("cursor-pointer", !(status !== "succeeded") && ``)}
          disabled={active}
          onClick={() => {
            router.push(`/account/${session.user.id}/payment/${id}`);
          }}
        >
          <SquareChartGantt
            className={clsx("transition-opacity", active && `opacity-70`)}
          />
        </Button>
      )}
      {favoriteBt && (
        <Button
          size={"icon-sm"}
          variant={"ghost"}
          className="cursor-pointer"
          onClick={async () => {
            await switchFavorite({
              id,
              data: { isFavorite: !data.isFavorite },
            });
          }}
        >
          <Star
            className={clsx(
              data.isFavorite && "fill-yellow-500 text-yellow-500"
            )}
          />
        </Button>
      )}
      {rejectBt && (
        <Button
          size={"icon-sm"}
          variant={"ghost"}
          className="cursor-pointer"
          onClick={() => {
            dialog.openDialog({
              title: "Confirm Payment Rejection",
              description:
                "This action will permanently cancel the Payment Intent and change its status to 'Canceled'. Are you sure you want to proceed?",
              content: (
                <p>
                  This payment intent will be moved to the **Canceled** status.
                </p>
              ),
              footer: (
                <DialogFooterAction
                  onCancel={() => dialog.closeDialog()}
                  onConfirm={async () => {
                    await rejectPayment(actionParams);
                    dialog.closeDialog();
                  }}
                  buttonConfirm={{
                    children: "Reject Payment",
                    variant: "outline",
                    className: "border-destructive cursor-pointer",
                  }}
                >
                  <Button
                    className="order-first cursor-pointer capitalize"
                    variant={"destructive"}
                    onClick={async () => {
                      await rejectAndDeletePayment(
                        {
                          id: id,
                          paymentIntentId: (
                            data.metaData as Stripe.PaymentIntent
                          ).id,
                        },
                        {
                          onSuccess: async () => {},
                        }
                      ).then(() => {
                        dialog.closeDialog();
                      });
                    }}
                  >
                    reject and delete
                  </Button>
                </DialogFooterAction>
              ),
            });
          }}
        >
          <OctagonXIcon className={clsx("text-chart-1 transition-opacity")} />
        </Button>
      )}
      {deleteBt && (
        <Button
          size={"icon-sm"}
          variant={"ghost"}
          className="order-last cursor-pointer text-destructive"
          onClick={() => {
            dialog.openDialog({
              title: "Delete dialog",
              description: `Are you sure you want to delete this **Point
                          Transaction**? This action cannot be undone.`,
              content: `Transaction ID: **${id}**`,
              footer: (
                <DialogFooterAction
                  onConfirm={async () => {
                    await deletePayment(actionParams).then(() => {
                      dialog.closeDialog();
                    });
                  }}
                  onCancel={() => dialog.closeDialog()}
                />
              ),
            });
          }}
        >
          <Trash2 />
        </Button>
      )}
    </ButtonGroup>
  );
};

export default MenuActionStripe;
