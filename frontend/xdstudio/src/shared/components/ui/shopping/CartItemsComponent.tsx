import { CartItem } from "@/libs/graphql/generates/graphql";
import { Link } from "@navigation";
import { ImageOff, Trash } from "lucide-react";
import Image from "next/image";
import PointDiamon from "../../PointDiamod";
import { Button } from "@/libs/shadcn/ui/button";

export const CartItemComponent = ({
  product,
  quantity,
  onDelete,
}: CartItem & { onDelete: () => void }) => {
  const price = product?.price?.price;
  return (
    <div className="flex items-center gap-3 border-b py-2 last:border-b-0">
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
        <Link href={`/products/${product?.id}`} className="hover:underline">
          <p className="text-sm font-medium">{product?.name}</p>
        </Link>

        <p className="text-muted-foreground flex place-items-center gap-1 text-xs">
          {quantity} ×{price}
          <PointDiamon className="size-2! translate-y-[1.5px]" />
        </p>
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold">
        <PointDiamon className="size-2.5!" /> {(quantity ?? 1) * Number(price)}
      </div>
      <Button
        type="button"
        size={"icon"}
        variant={"ghost"}
        onClick={onDelete}
        className="cursor-pointer text-red-500"
      >
        <Trash className="size-3.5" />
      </Button>
    </div>
  );
};
