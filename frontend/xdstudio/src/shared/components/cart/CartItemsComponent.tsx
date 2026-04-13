import { Link } from "@navigation";
import { ImageOff, Trash } from "lucide-react";
import Image from "next/image";
import CreditIcon from "../CreditIcon";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { useFormatter } from "next-intl";
import { useMemo, useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import type { CartItem, Price, Product } from "@/payload-types";
export function CartImageDisplay({
  product,
}: {
  product: Product | undefined;
}) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageUrl =
    typeof product?.previewImage === "string"
      ? product?.previewImage
      : (product?.previewImage?.url ?? "");
  if (!imageUrl || hasImageError) {
    return <ImageOff className="size-full self-center rounded border" />;
  }
  return (
    <Image
      src={imageUrl}
      alt={product?.description || product?.name || ""}
      fill
      className="object-cover"
      onError={() => {
        setHasImageError(true);
      }}
      key={product?.id}
    />
  );
}
export const CartItemComponent = ({
  product: ProductInstance,
  quantity,
  onDelete,
}: CartItem & { onDelete: () => void }) => {
  const product = ProductInstance as Product;
  const price = product?.price as Price;
  const { number } = useFormatter();
  const summaryResult = useMemo(
    () => number((quantity ?? 1) * Number(price?.price ?? 0)),
    [number, price?.price, quantity]
  );
  return (
    <div className="flex grow items-center gap-3 p-3">
      <div className="relative size-12 overflow-hidden rounded">
        <CartImageDisplay product={product} />
      </div>
      <div className="flex-1">
        <Link href={`/product/${product?.id}`} className="hover:underline">
          <p className="text-sm font-medium">{product?.name}</p>
        </Link>
        <p className="text-muted-foreground flex place-items-center gap-1 text-xs">
          {quantity && number(quantity)} ×{price && number(price?.price ?? 0)}
          <CreditIcon className="size-2! translate-y-[1.5px]" />
        </p>
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold">
        <CreditIcon className="size-2.5!" />
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
        // disabled={isDirty}
        onClick={onDelete}
        className="text-destructive cursor-pointer"
      >
        <Trash className="size-3.5" />
      </Button>
    </div>
  );
};
