import Image from "next/image";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import {
  Delete,
  ImageOff,
  ShoppingBag,
  ShoppingCart,
  Trash,
} from "lucide-react";
import { Link } from "@navigation";
import {
  Cart,
  CartItem,
  DeleteCartItemDocument,
  Maybe,
  User,
} from "@/libs/graphql/generates/graphql";
import { useMutation } from "@tanstack/react-query";
import { execute } from "@/libs/graphql/execute";
import { motion, AnimatePresence } from "framer-motion";

import { useCartDocument } from "@/shared/hooks/useCartDocument";
import { useForm } from "react-hook-form";
import { Form } from "@/libs/shadcn/ui/form";
import PointDiamon from "@/shared/components/PointDiamod";
import { useMemo } from "react";
import _ from "lodash";

const ShoppingCount = ({ count = 0 }: { count?: number }) => {
  if (!count) return null;
  return (
    <div className="bg-primary text-secondary absolute flex size-3 -translate-y-2 translate-x-2 items-center justify-center rounded-full">
      <AnimatePresence mode="wait">
        <motion.small
          key={count}
          className="text-[0.5rem]"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
        >
          {count}
        </motion.small>
      </AnimatePresence>
    </div>
  );
};

const OrderItem = ({
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

        <p className="text-muted-foreground text-xs">
          {quantity} × ฿{price}
        </p>
      </div>
      <div className="text-sm font-semibold">
        ฿ {(quantity ?? 1) * Number(price)}
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

const CartShoppingForm = ({
  cartItems,
  invalidateCart,
  navigation,
}: {
  cartItems: CartItem[];
  invalidateCart: () => void;
  navigation: string;
}) => {
  const method = useForm<{
    cartItems: CartItem[];
  }>({
    defaultValues: {
      cartItems,
    },
  });
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      await execute(DeleteCartItemDocument, { where: { id } });
    },
    onSuccess: () => {
      invalidateCart();
    },
  });
  const cartItemsForm = method.watch("cartItems");
  const handleDelete = async (id: string) => {
    const updated = method
      .getValues("cartItems")
      .filter((item) => item.id !== id);
    method.reset({ cartItems: updated });
    mutation.mutate(id);
  };
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
  if (_.isEmpty(cartItems)) return <EmptyCart />;
  return (
    <Form {...method}>
      <ul className="space-y-2 divide-y p-4">
        {cartItemsForm?.map((item) => {
          return (
            <li key={item.id}>
              <OrderItem
                {...item}
                onDelete={() => {
                  handleDelete(item.id);
                }}
              />
            </li>
          );
        })}
      </ul>
      <aside className="sticky bottom-0 space-y-3 rounded-b p-4 backdrop-blur">
        <div className="flex justify-between text-sm font-semibold">
          <span>รวม</span>
          <span className="flex gap-1">
            <PointDiamon className="size-1" /> {summary.totalPrice}
          </span>
        </div>
        <Button className="w-full" size="sm" variant="secondary" asChild>
          <Link href={navigation}> Go to cart. </Link>
        </Button>
      </aside>
    </Form>
  );
};
const ShoppingBagMotion = ({ triggerKey }: { triggerKey: string }) => {
  return (
    <motion.div
      key={triggerKey}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.3, 0.95, 1.1, 1] }}
      transition={{
        duration: 0.6,
        times: [0, 0.2, 0.4, 0.7, 1],
        ease: "easeOut",
      }}
    >
      <ShoppingBag />
    </motion.div>
  );
};

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
export const ShoppingPopover = ({
  cartId,
  userId,
}: {
  userId: User["id"];
  cartId: Cart["id"];
  carts?: Maybe<Cart[]> | undefined;
}) => {
  const { query, invalidate } = useCartDocument({
    cartId,
    userId,
  });
  const { data } = query;
  const cartItems = data?.data?.cart?.items || [];
  const navigation = `/account/cart/${cartId}`;
  const count = Number(data?.data?.cart?.items?.length);

  return (
    <Popover>
      <PopoverTrigger asChild className="max-md:hidden">
        <Button variant="ghost" size="icon" className="group relative">
          <ShoppingBagMotion triggerKey={JSON.stringify(cartItems)} />
          <ShoppingCount count={count} />
        </Button>
      </PopoverTrigger>
      <Button className="md:hidden" variant="ghost" size="icon" asChild>
        <Link href={navigation}>
          <ShoppingBag />
          <ShoppingCount count={Number(data?.data?.cart?.items?.length)} />
        </Link>
      </Button>
      <PopoverContent align="end" className="w-sm p-0">
        <h4 className="px-4 pb-3 pt-4 font-semibold">รายการของคุณ</h4>
        <section className="flex max-h-[70vh] w-full flex-col space-y-4 overflow-auto">
          <CartShoppingForm
            cartItems={cartItems}
            invalidateCart={invalidate}
            navigation={navigation}
          />
        </section>
      </PopoverContent>
    </Popover>
  );
};
