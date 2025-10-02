import { execute } from "@/libs/graphql/execute";
import {
  CartItem,
  DeleteCartItemDocument,
  GetCartQuery,
} from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Form } from "@/libs/shadcn/ui/form";
import { Link } from "@navigation";
import {
  InfiniteData,
  UseInfiniteQueryResult,
  useMutation,
} from "@tanstack/react-query";
import { Loader2, ShoppingCart } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { CartItemComponent } from "./CartItemsComponent";
import PointDiamon from "../../PointDiamod";
import _ from "lodash";
import { Separator } from "@/libs/shadcn/ui/separator";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import clsx from "clsx";
import { Badge } from "@/libs/shadcn/ui/badge";
import { revalidateClient } from "@/app/[locale]/(main)/(contents)/products/shared/revalidateClient";
export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
      <div className="bg-muted rounded-4xl p-6">
        <ShoppingCart className="text-muted-foreground h-12 w-12" />
      </div>
      <h2 className="text-lg font-semibold">ตะกร้าว่างเปล่า</h2>
      <p className="text-muted-foreground mx-6">
        ดูเหมือนคุณยังไม่ได้เลือกสินค้านะ ลองเลือกสินค้าที่คุณชอบดูสิ
      </p>
      <Button asChild className="">
        <Link href="/products">เริ่มช้อปปิ้ง</Link>
      </Button>
    </div>
  );
};

export const CartSummery = ({ navigation }: { navigation: string }) => {
  const { watch } = useFormContext<{
    cartItems: CartItem[];
  }>();
  const cartItemsForm = watch("cartItems");
  const summary = useMemo(() => {
    if (!cartItemsForm.length) {
      return {
        totalQuantity: 0,
        totalPrice: 0,
      };
    }
    return cartItemsForm.reduce(
      (acc, item) => {
        const quantity = item.quantity || 1;
        const price = Number(item?.product?.price?.price) || 0;
        acc.totalQuantity += quantity;
        acc.totalPrice += quantity * price;
        return acc;
      },
      { totalQuantity: 0, totalPrice: 0 }
    );
  }, [cartItemsForm]);
  return (
    <aside className="sticky bottom-0 space-y-3 rounded-b p-4 backdrop-blur">
      <div className="flex justify-between text-sm font-semibold">
        <span>รวม</span>
        <span className="flex gap-1">
          <PointDiamon className="size-1" /> {summary.totalPrice}
        </span>
      </div>
      <Separator />
      <Button className="w-full" size="sm" variant="secondary" asChild>
        <Link href={navigation}> Go to cart. </Link>
      </Button>
    </aside>
  );
};

export const CartShoppingForm = ({
  cartItems,
  invalidateCartAction,
  navigation,
  query,
}: {
  query: UseInfiniteQueryResult<
    InfiniteData<
      {
        data: GetCartQuery;
      },
      unknown
    >,
    Error
  >;
  cartItems: CartItem[];
  invalidateCartAction: () => void;
  navigation: string;
}) => {
  const method = useForm<{
    cartItems: CartItem[];
  }>({
    defaultValues: {
      cartItems,
    },
  });
  useLayoutEffect(() => {
    if (cartItems) {
      method.reset({ cartItems });
    }
  }, [cartItems, method]);
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      await execute(DeleteCartItemDocument, { where: { id } });
    },
    onSuccess: () => {
      invalidateCartAction();
    },
  });
  const handleDelete = async (id: string, item: CartItem) => {
    const updated = method
      .getValues("cartItems")
      .filter((item) => item.id !== id);
    method.setValue("cartItems", updated, { shouldDirty: true });
    mutation.mutateAsync(id).then(() => {
      // revalidateClient(`${item.cart?.id}-${item?.product?.id}-checkProductr`);
    });
  };
  const { formState } = method;
  const cartItemsForm = method.watch("cartItems");
  const parentRef = React.useRef<HTMLDivElement>(null);
  const { hasNextPage, isFetchingNextPage, fetchNextPage } = query;
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? cartItemsForm?.length + 1 : cartItemsForm?.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 75,
    overscan: 10,
    paddingEnd: 0,
  });
  const virtualItems = rowVirtualizer.getVirtualItems();
  React.useEffect(() => {
    const items = virtualItems;
    const lastItem = items[items.length - 1];
    if (!lastItem) return;
    if (
      lastItem.index >= cartItemsForm.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    cartItemsForm.length,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    rowVirtualizer,
    virtualItems,
  ]);
  const itemHeight = rowVirtualizer.options.estimateSize(0);
  const totalSize = rowVirtualizer.getTotalSize();

  if (_.isEmpty(cartItems)) return <EmptyCart />;
  return (
    <Form {...method}>
      <section
        className="inset-shadow-sm h-60 w-full overflow-auto"
        ref={parentRef}
      >
        <ul
          className="divide-y"
          style={{
            height: `${!formState.isDirty ? totalSize : totalSize - itemHeight}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const isLoaderRow = virtualRow.index > cartItemsForm.length - 1;
            const item = cartItemsForm[virtualRow.index];

            return (
              <li
                key={`${item?.id ?? `loader-row`}-${virtualRow.index}`}
                className={clsx(
                  virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven",
                  "absolute left-0 top-0 flex w-full"
                )}
                style={{
                  height: clsx(`${virtualRow.size}px`),
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {isLoaderRow ? (
                  <aside className="bg-accent flex h-full grow items-center justify-center">
                    {hasNextPage ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <Badge variant={"outline"} className="text-sm">
                        No more
                      </Badge>
                    )}
                  </aside>
                ) : (
                  <CartItemComponent
                    {...item}
                    onDelete={() => handleDelete(item.id, item)}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <CartSummery navigation={navigation} />
    </Form>
  );
};
