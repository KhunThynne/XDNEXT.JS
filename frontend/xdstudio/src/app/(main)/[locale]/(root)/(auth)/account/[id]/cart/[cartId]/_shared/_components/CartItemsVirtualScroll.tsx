import type { CartItem } from "@/payload-types";
import { ImageProduct } from "@/shared/components/images/ImageProduct";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";

const CartItemComponent = ({ item }: { item: CartItem }) => {
  if (typeof item?.product === "string") return null;
  if (typeof item?.product.previewImage === "string") return null;
  if (typeof item?.product.price === "string") return null;
  return (
    <div className="flex h-full place-items-center gap-5 p-4">
      {item?.product?.previewImage && (
        <ImageProduct
          image={item?.product?.previewImage}
          className="aspect-square size-14 rounded-md"
        />
      )}
      <aside>
        <h3 className="text-foreground text-base font-semibold">
          {item.product?.name}
        </h3>

        <p className="text-muted-foreground text-sm">
          Price: {item.product?.price?.price} ฿
        </p>
      </aside>
    </div>
  );
};

export const CartItemsVirtualScroll = ({
  cartItems,
}: {
  cartItems: CartItem[];
}) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: cartItems?.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className="max-h-60 grow overscroll-contain lg:h-0 lg:max-h-full"
      style={{
        width: `100%`,
        overflow: "auto",
      }}
    >
      <ul
        className="divide-y"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          const item = cartItems[virtualItem.index];
          return (
            <li
              key={virtualItem.key}
              className="absolute top-0 left-0 w-full"
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <CartItemComponent item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
