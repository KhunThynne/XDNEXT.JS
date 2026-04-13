import { Button } from "@/shared/libs/shadcn/ui/button";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import type { Session } from "next-auth";

import { Fragment, useMemo, useState } from "react";
import { updateTagClient } from "@/shared/utils/m";
import { useRouter } from "@navigation";
import { signIn } from "@/shared/components/forms/auth/actions/Login.action";
import type { Product } from "@/payload-types";
import type { Cart } from "@/shared/libs/graphql/generates/graphql";
import type { CheckUserProductStatusQuery } from "../shared/types";
import { useCartItems } from "@/shared/core/cart";
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
  const cart = session?.user?.carts?.docs?.[0] as Cart;
  const cartId = cart?.id;
  const userId = session?.user?.id;
  const { addItem } = useCartItems({
    cartId: cartId ?? "",
    userId: userId ?? "",
  });

  const { mutate, isPending, status: StatusMutation } = addItem;
  const addedItem = useMemo(() => {
    const statusLog = status;
    return statusLog;
  }, [status]);

  const [preAdded, setPreAdded] = useState(
    addedItem?.inCart || addedItem?.inUserItem
  );
  const router = useRouter();
  // useEffect(() => {
  //   setPreAdded(false);
  // }, [status]);
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
      mutate(productSlug as string, {
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
