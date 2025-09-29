import { Product } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { useCartItemStore } from "@/shared/components/ui/shopping/CartStoreProvider";
import { useCartDocument } from "@/shared/hooks/useCartDocument";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { Fragment, useMemo } from "react";

type AddItemButtonProps = React.ComponentProps<typeof Button> & {
  product?: Product;
  session?: Session | null;
  disableText?: boolean;
  addTo?: boolean;
};

export const AddItemButton = ({ ...props }: AddItemButtonProps) => {
  const {
    product,
    disableText,
    addTo,
    className,
    session,
    onClick,
    children,
    ...buttonProps
  } = props;
  const productId = product?.id;
  const cartId = session?.user?.carts?.[0]?.id;
  const userId = session?.user?.id;
  const { mutation, query } = useCartInfinite({
    cartId: cartId ?? "",
    productId,
    userId: userId ?? "",
  });
  const { data } = query;
  const { mutate, isPending } = mutation;
  const { cartitemStore } = useCartItemStore();
  const addedItem = useMemo(() => {
    return (
      cartitemStore?.find((item) => item.product?.id === productId) || false
    );
  }, [cartitemStore, productId]);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isPending) {
      return;
    }
    if (!cartId) {
      signIn();
      return;
    }
    onClick?.(event);
    mutate();
  };
  return (
    <Button
      {...buttonProps}
      className={clsx(`flex cursor-pointer`, className)}
      disabled={isPending || (addTo ? false : !!addedItem) || !productId}
      onClick={handleClick}
    >
      {isPending || !productId ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Fragment>
          {children}
          {!disableText && (
            <span>
              {!cartId
                ? "Go to sign-in"
                : !!addedItem
                  ? "In cart"
                  : "Add to cart"}
            </span>
          )}
        </Fragment>
      )}
    </Button>
  );
};
