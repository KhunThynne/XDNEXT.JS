import { useMemo } from "react";
import PointDiamon from "../../PointDiamod";

type SummaryCartDisplayProps = {
  totalPrice?: number;
  userTotalPoint?: number;
  remainingPoint?: number;
} & WithlDefaultProps;

export const SummaryCartDisplay = ({
  totalPrice,
  userTotalPoint,
  remainingPoint: remainingPointProp,
}: SummaryCartDisplayProps) => {
  const remainingPoint = useMemo(() => {
    if (remainingPointProp) return remainingPointProp;
    return (userTotalPoint ?? 0) - (totalPrice ?? 0);
  }, [remainingPointProp, totalPrice, userTotalPoint]);
  return (
    <>
      {totalPrice !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span>ยอดรวมทั้งหมด</span>
          <span className="flex gap-1">
            <PointDiamon className="size-1" /> {totalPrice}
          </span>
        </div>
      )}

      {userTotalPoint !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span>แต้มที่มีอยู่</span>
          <span className="flex gap-1 text-blue-500">
            <PointDiamon className="size-1" /> {userTotalPoint}
          </span>
        </div>
      )}

      {remainingPoint !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span>แต้มคงเหลือหลังชำระ</span>
          <span className="flex gap-1 text-green-600">
            <PointDiamon className="size-1" /> {remainingPoint}
          </span>
        </div>
      )}
    </>
  );
};
