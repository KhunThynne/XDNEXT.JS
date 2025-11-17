"use client";

import { Button } from "@/libs/shadcn/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/libs/shadcn/ui/button-group";
import clsx from "clsx";
import { useSelectedLayoutSegment, useRouter } from "next/navigation";
import { Fragment, useMemo } from "react";
import { User, CreditCard, ShoppingBag } from "lucide-react"; // ✨ import icon ที่ต้องใช้
import type { Cart } from "@/libs/graphql/generates/graphql";

type SegmentItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  active: string;
};

export const SegmentAccount = ({
  segmentText,
  cartId,
}: {
  segmentText: string;
  cartId: Cart["id"];
}) => {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const segmentItems: SegmentItem[] = useMemo(() => {
    return [
      { label: "User", href: "", icon: User, active: "main" },
      {
        label: "Cart",
        href: `cart/${cartId}`,
        icon: ShoppingBag,
        active: "cart",
      },
      {
        label: "Payment",
        href: "payment",
        icon: CreditCard,
        active: "payment",
      },
    ];
  }, [cartId]);
  return (
    <ButtonGroup className="mx-4">
      {segmentItems.map((item, i) => {
        const active =
          segment === item.active || (!segment && item.href === "");
        const Icon = item.icon;

        return (
          <Fragment key={item.label}>
            <Button
              onClick={() => {
                if (!active) {
                  router.push(`${segmentText}/${item.href}`);
                }
              }}
              variant={active ? "default" : "outline"}
              size="sm"
              className={clsx(
                "gap-2",
                !active && "cursor-pointer hover:bg-muted/70"
              )}
              disabled={active}
            >
              <Icon className="size-4" />
              {item.label}
            </Button>

            {i < segmentItems.length - 1 && <ButtonGroupSeparator />}
          </Fragment>
        );
      })}
    </ButtonGroup>
  );
};
