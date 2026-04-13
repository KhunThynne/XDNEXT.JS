import { useMemo } from "react";
import CreditIcon from "../../CreditIcon";
import { useFormatter } from "next-intl";
import clsx from "clsx";
import { Separator } from "@/shared/libs/shadcn/ui/separator";
import _ from "lodash";
import Translations from "@/shared/libs/i18n/Translations";
import { useI18n } from "@/shared/libs/i18n/hooks/useI18n";

type SummaryCartDisplayProps = {
  totalCredit?: number;
  userAvailableCredit?: number;
  remainingCredit?: number;
  style?: "short" | "full";
} & WithlDefaultProps;

export const SummaryCartDisplay = ({
  totalCredit,
  userAvailableCredit,
  style = "full",
  className,
  remainingCredit: remainingCreditProp,
}: SummaryCartDisplayProps) => {
  const t = useI18n();
  const remainingCredit = useMemo(() => {
    if (remainingCreditProp != null) return remainingCreditProp;
    return (userAvailableCredit ?? 0) - (totalCredit ?? 0);
  }, [remainingCreditProp, totalCredit, userAvailableCredit]);
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
            <CreditIcon className="text-success size-1" />{" "}
            {formaterNumber(userAvailableCredit!)} -{" "}
            <span className="">{formaterNumber(totalCredit!)}</span>
          </span>
          <span className="flex gap-1 border-s ps-2 text-balance">
            <CreditIcon className="size-1" /> {formaterNumber(remainingCredit)}
          </span>
        </section>
      </div>
    );
  }
  return (
    <>
      {userAvailableCredit !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span className="capitalize">{t("cart.text01")}</span>
          <span className="text-success flex gap-1">
            <CreditIcon className="size-1" />{" "}
            {formaterNumber(userAvailableCredit)}
          </span>
        </div>
      )}
      {totalCredit !== undefined && (
        <div className="flex justify-between text-sm font-semibold">
          <span className="capitalize">{t("cart.text02")}</span>
          <span className="flex gap-1">
            <CreditIcon className="size-1" />- {formaterNumber(totalCredit)}
          </span>
        </div>
      )}

      {remainingCredit !== undefined && (
        <>
          <Separator className="mx-auto max-w-11/12" />
          <div className="flex justify-between text-sm font-semibold">
            <span className="capitalize">{t("cart.text03")}</span>
            <span className="flex gap-1">
              <CreditIcon className="size-1" />
              <p
                className={clsx({
                  "text-destructive": _.lt(remainingCredit, 0),
                })}
              >
                {formaterNumber(remainingCredit)}
              </p>
            </span>
          </div>
        </>
      )}
    </>
  );
};
