import type { CartItem } from "@/libs/graphql/generates/graphql";
import { Link } from "@navigation";
import { ImageOff, Trash } from "lucide-react";
import Image from "next/image";
import PointDiamon from "../../PointDiamod";
import { Button } from "@/libs/shadcn/ui/button";
import { useFormContext, useFormState } from "react-hook-form";
import { useFormatter } from "next-intl";
import { useMemo } from "react";
import clsx from "clsx";
import _ from "lodash";

export const CartItemComponent = ({
  product,
  quantity,
  onDelete,
}: CartItem & { onDelete: () => void }) => {
  const { control } = useFormContext<{
    cartItems: CartItem[];
  }>();
  const { isDirty } = useFormState({ control });
  const price = product?.price?.price;
  const { number } = useFormatter();
  const summaryResult = useMemo(
    () => number((quantity ?? 1) * Number(price)),
    [number, price, quantity]
  );
  return (
    <div className="flex grow items-center gap-3 p-3">
      <div className="relative size-12 overflow-hidden rounded">
        {product?.images?.[0]?.src?.url ? (
          <Image
            src={product?.images?.[0]?.src?.url ?? ""}
            alt={product?.description || product?.name || ""}
            fill
            className="object-cover"
          />
        ) : (
          <ImageOff className="size-full self-center rounded border" />
        )}
      </div>
      <div className="flex-1">
        <Link href={`/product/${product?.id}`} className="hover:underline">
          <p className="text-sm font-medium">{product?.name}</p>
        </Link>

        <p className="flex place-items-center gap-1 text-xs text-muted-foreground">
          {quantity && number(quantity)} ×{price && number(price)}
          <PointDiamon className="size-2! translate-y-[1.5px]" />
        </p>
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold">
        <PointDiamon className="size-2.5!" />
        <p
          className={clsx({
            "text-destructive": _.lt(summaryResult, 0),
          })}
        >
          {summaryResult}
        </p>
      </div>
      <Button
        type="button"
        size={"icon"}
        variant={"ghost"}
        disabled={isDirty}
        onClick={onDelete}
        className="cursor-pointer text-destructive"
      >
        <Trash className="size-3.5" />
      </Button>
    </div>
  );
};
