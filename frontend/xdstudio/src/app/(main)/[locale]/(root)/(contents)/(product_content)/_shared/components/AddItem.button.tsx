import { Button } from "@/shared/libs/shadcn/ui/button";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import type { Session } from "next-auth";

import { Fragment, useMemo } from "react";
import { updateTagClient } from "@/shared/utils/m";
import { useRouter } from "@navigation";
import { signIn } from "@/shared/components/forms/auth/actions/Login.action";
import type { Product } from "@/payload-types";

import type { CheckUserProductStatusQuery } from "../../products/shared/types";
import { useCartItemsManager } from "@/core/cart";
import { useParams } from "next/navigation";

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
  const { id: productSlug } = useParams();
  const cartId = session?.user?.carts?.docs?.[0];
  const userId = session?.user?.id;
  const { addItem } = useCartItemsManager({
    cartId: cartId as string,
    userId: userId ?? "",
  });

  const { mutate, isPending, isIdle } = addItem;
  const addedItem = useMemo(() => {
    const statusLog = status;
    return statusLog;
  }, [status]);

  const router = useRouter();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isPending) {
      return;
    }
    if (addedItem?.inUserItem) {
      return router.replace({ pathname: `/account/${userId}` });
    }
    if (!cartId) {
      signIn();
      return;
    }
    onClick?.(event);
    if (!addedItem?.inCart) {
      mutate(productSlug as string, {
        onSuccess: () => {
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
        isPending || (addTo ? false : !!status?.inCart) || !productId || !isIdle
      }
      onClick={handleClick}
    >
      {isPending || !isIdle || !productId ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Fragment>
          {children}
          {!disableText && (
            <span>
              {!cartId
                ? "Go to sign-in"
                : status?.inCart
                  ? "In cart"
                  : status?.inUserItem
                    ? `See you item`
                    : "Add to cart"}
            </span>
          )}
        </Fragment>
      )}
    </Button>
  );
};
