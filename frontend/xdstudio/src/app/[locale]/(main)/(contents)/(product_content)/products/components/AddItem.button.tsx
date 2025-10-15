import type {
  CheckUserProductStatusQuery,
  Product,
} from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { useCartItemStore } from "@/shared/components/ui/shopping/CartStoreProvider";
import { useCartDocument } from "@/shared/hooks/useCartDocument";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import type { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { Fragment, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { revalidateClient } from "../shared/revalidateClient";

type AddItemButtonProps = React.ComponentProps<typeof Button> & {
  product?: Product;
  session?: Session | null;
  disableText?: boolean;
  addTo?: boolean;
  status?: CheckUserProductStatusQuery;
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
    status,
    ...buttonProps
  } = props;
  const productId = product?.id;
  const cartId = session?.user?.carts?.[0]?.id;
  const userId = session?.user?.id;
  const { mutation } = useCartInfinite({
    cartId: cartId ?? "",
    productId,
    userId: userId ?? "",
  });

  const { mutate, isPending, status: StatusMutation } = mutation;

  const addedItem = useMemo(() => {
    if (status?.checkUserProductStatus?.__typename === "CheckProductSuccess") {
      return (
        status?.checkUserProductStatus.inCart ||
        status?.checkUserProductStatus.inUserItem
      );
    }
    return false;
  }, [status]);
  const [preAdded, setPreAdded] = useState(addedItem);
  useEffect(() => {
    setPreAdded(false);
  }, [status]);
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isPending) {
      return;
    }
    if (!cartId) {
      signIn();
      return;
    }
    onClick?.(event);
    mutate(undefined, {
      onSuccess: () => {
        setPreAdded(true);
        revalidateClient(`${session?.user?.id}-${product?.id}-checkProduct`);
      },
    });
  };

  return (
    <Button
      {...buttonProps}
      className={clsx(`flex cursor-pointer`, className)}
      disabled={
        isPending || (addTo ? false : !!addedItem) || !productId || preAdded
      }
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
                : addedItem || preAdded
                  ? "In cart"
                  : "Add to cart"}
            </span>
          )}
        </Fragment>
      )}
    </Button>
  );
};
