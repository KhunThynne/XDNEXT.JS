import { execute } from "@/libs/graphql/execute";
import {
  CartItem,
  DeleteCartItemDocument,
} from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Form } from "@/libs/shadcn/ui/form";
import { Link } from "@navigation";
import { useMutation } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import { useMemo } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { CartItemComponent } from "./CartItemsComponent";
import PointDiamon from "../../PointDiamod";
import _ from "lodash";
import { Separator } from "@/libs/shadcn/ui/separator";
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
  const handleDelete = async (id: string) => {
    const updated = method
      .getValues("cartItems")
      .filter((item) => item.id !== id);
    method.reset({ cartItems: updated });
    mutation.mutate(id);
  };
  const cartItemsForm = method.watch("cartItems");

  if (_.isEmpty(cartItems)) return <EmptyCart />;
  return (
    <Form {...method}>
      <ul className="space-y-2 divide-y p-4">
        {cartItemsForm?.map((item) => {
          return (
            <li key={item.id}>
              <CartItemComponent
                {...item}
                onDelete={() => {
                  handleDelete(item.id);
                }}
              />
            </li>
          );
        })}
      </ul>

      <CartSummery navigation={navigation} />
    </Form>
  );
};
