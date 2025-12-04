"use client";

import type { CountdownProps } from "@/shared/hooks/useCountDown";
import useCountdown from "@/shared/hooks/useCountDown";
import type { Dispatch, SetStateAction } from "react";
import { memo, useLayoutEffect } from "react";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";
import { usePointTransactionMutations } from "../../../_hooks/usePointTransactionMutations";
type BasePropsWithoutDuration = Omit<CountdownProps, "duration">;
interface PatmentExpriedProps extends BasePropsWithoutDuration {
  duration?: number;
}
const THIRTY_MINUTES_MS = 30 * 60 * 1000;
const PaymentExpriedCountDown = ({
  onTimeOut,
  ...props
}: PatmentExpriedProps &
  Partial<FromTypePointTransactionStripe> & {
    onTimeOut?: Dispatch<SetStateAction<boolean>>;
  }) => {
  const { countdownTime, timeout } = useCountdown({
    ...props,
    duration: THIRTY_MINUTES_MS,
  });
  const { rejectPayment } = usePointTransactionMutations();
  useLayoutEffect(() => {
    if (!onTimeOut || typeof window === "undefined") return;
    if (timeout) {
      if (!props?.expiredAt && props.metaData?.id && props.id) {
        rejectPayment({
          id: props.id,
          paymentIntentId: props.metaData?.id,
        });
      }
      onTimeOut(timeout);
    }
  }, [
    timeout,
    onTimeOut,
    props?.expiredAt,
    props.id,
    props.metaData?.id,
    rejectPayment,
  ]);
  return countdownTime;
};

export default memo(PaymentExpriedCountDown);
