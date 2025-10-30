import { useMemo } from "react";
import PointDiamon from "../../PointDiamod";
import { useFormatter } from "next-intl";
import clsx from "clsx";
import { Separator } from "@/libs/shadcn/ui/separator";
import _ from "lodash";
import Translations from "@/libs/i18n/Translations";
import { useI18n } from "@/libs/i18n/hooks/useI18n";

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
  const t = useI18n();
  const remainingPoint = useMemo(() => {
    if (remainingPointProp != null) return remainingPointProp;
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
        <p className="capitalize">
          <Translations text="price" key={"common"} />
        </p>

        <section className="flex gap-2">
          <span className="flex gap-1">
            <PointDiamon className="size-1 text-success" />{" "}
            {formaterNumber(userTotalPoint!)} -{" "}
            <span className="">{formaterNumber(totalPrice!)}</span>
          </span>
          <span className="flex gap-1 border-s ps-2 text-balance">
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
          <span className="capitalize">{t("cart.text01")}</span>
          <span className="flex gap-1 text-success">
            <PointDiamon className="size-1" /> {formaterNumber(userTotalPoint)}
          </span>
        </div>
      )}
      {totalPrice !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span className="capitalize">{t("cart.text02")}</span>
          <span className="flex gap-1">
            <PointDiamon className="size-1" /> {formaterNumber(totalPrice)}
          </span>
        </div>
      )}

      {remainingPoint !== undefined && (
        <>
          <Separator className="mx-auto max-w-11/12" />
          <div className="flex justify-between text-sm font-semibold">
            <span className="capitalize">{t("cart.text03")}</span>
            <span className="flex gap-1">
              <PointDiamon className="size-1" />
              <p
                className={clsx({
                  "text-destructive": _.lt(remainingPoint, 0),
                })}
              >
                {formaterNumber(remainingPoint)}
              </p>
            </span>
          </div>
        </>
      )}
    </>
  );
};
