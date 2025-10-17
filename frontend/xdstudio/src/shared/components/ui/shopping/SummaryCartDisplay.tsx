import { useMemo } from "react";
import PointDiamon from "../../PointDiamod";
import { useFormatter } from "next-intl";
import clsx from "clsx";
import { Separator } from "@/libs/shadcn/ui/separator";

type SummaryCartDisplayProps = {
  totalPrice?: number;
  userTotalPoint?: number;
  remainingPoint?: number;
  style?: "short" | "full";
} & WithlDefaultProps;

export const SummaryCartDisplay = ({
  totalPrice,
  userTotalPoint,
  style = "full",
  className,
  remainingPoint: remainingPointProp,
}: SummaryCartDisplayProps) => {
  const remainingPoint = useMemo(() => {
    if (remainingPointProp) return remainingPointProp;
    return (userTotalPoint ?? 0) - (totalPrice ?? 0);
  }, [remainingPointProp, totalPrice, userTotalPoint]);
  const { number: formaterNumber } = useFormatter();
  if (style === "short") {
    return (
      <div
        className={clsx(
          "flex justify-between gap-2 text-sm font-semibold",
          className
        )}
      >
        ราคา
        <section className="flex gap-2">
          <span className="flex gap-1">
            <PointDiamon className="text-success size-1" />{" "}
            {formaterNumber(userTotalPoint!)} -{" "}
            <span className="">{formaterNumber(totalPrice!)}</span>
          </span>
          <span className="flex gap-1 text-balance border-s ps-2">
            <PointDiamon className="size-1" /> {formaterNumber(remainingPoint)}
          </span>
        </section>
      </div>
    );
  }
  return (
    <>
      {userTotalPoint !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span>แต้มที่มีอยู่</span>
          <span className="text-success flex gap-1">
            <PointDiamon className="size-1" /> {formaterNumber(userTotalPoint)}
          </span>
        </div>
      )}
      {totalPrice !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span>ยอดรวมทั้งหมด</span>
          <span className="flex gap-1">
            <PointDiamon className="size-1" /> {formaterNumber(totalPrice)}
          </span>
        </div>
      )}

      {remainingPoint !== undefined && (
        <>
          <Separator className="max-w-11/12 mx-auto" />
          <div className="flex justify-between text-sm font-semibold">
            <span>แต้มคงเหลือหลังชำระ</span>
            <span className="flex gap-1">
              <PointDiamon className="size-1" />{" "}
              {formaterNumber(remainingPoint)}
            </span>
          </div>
        </>
      )}
    </>
  );
};
