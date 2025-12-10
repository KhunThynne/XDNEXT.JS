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

import { Fragment, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { updateTagClient } from "../shared/updateTagClient";
import { useRouter } from "@navigation";
import { signIn } from "@/shared/components/forms/auth/actions/Login.action";

type AddItemButtonProps = React.ComponentProps<typeof Button> & {
  product?: Product;
  session?: Session | null;
  disableText?: boolean;
  addTo?: boolean;
  status: CheckUserProductStatusQuery;
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
    const statusLog = status.checkUserProductStatus;
    if (statusLog?.__typename !== "CheckProductSuccess") return null;
    return statusLog;
  }, [status]);

  const [preAdded, setPreAdded] = useState(
    addedItem?.inCart || addedItem?.inUserItem
  );
  const router = useRouter();
  useEffect(() => {
    setPreAdded(false);
  }, [status]);
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isPending) {
      return;
    }
    setPreAdded(false);
    if (addedItem?.inUserItem) {
      return router.replace({ pathname: `/account/${userId}` });
    }
    if (!cartId) {
      signIn();
      return;
    }
    onClick?.(event);
    if (!addedItem?.inCart) {
      mutate(undefined, {
        onSuccess: () => {
          setPreAdded(true);
          updateTagClient(`${session?.user?.id}-${product?.id}-checkProduct`);
        },
      });
      return;
    }
  };

  return (
    <Button
      {...buttonProps}
      className={clsx(`flex cursor-pointer`, className)}
      disabled={
        isPending ||
        (addTo ? false : !!addedItem?.inCart) ||
        !productId ||
        preAdded
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
                : addedItem?.inCart || preAdded
                  ? "In cart"
                  : addedItem?.inUserItem
                    ? `See you item`
                    : "Add to cart"}
            </span>
          )}
        </Fragment>
      )}
    </Button>
  );
};
