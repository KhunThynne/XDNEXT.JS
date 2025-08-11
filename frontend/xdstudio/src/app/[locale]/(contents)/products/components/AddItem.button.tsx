import { execute } from "@/libs/graphql/execute";
import { CreateCartItemDocument } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { useCartDocument } from "@/shared/hooks/useCartDocument";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

type AddItemButtonProps = React.ComponentProps<typeof Button> & {
  productId: string;
  session?: Session | null;
};

export const AddItemButton = ({ ...props }: AddItemButtonProps) => {
  const { productId, session, ...buttonProps } = props;
  const cartId = session?.user?.carts?.[0]?.id;
  const userId = session?.user?.id;
  const { mutation } = useCartDocument({
    cartId: cartId ?? "",
    productId,
    userId: userId ?? "",
  });
  const { mutate, isPending } = mutation;
  const handleClick = () => {
    if (isPending) {
      return;
    }
    if (!cartId) {
      signIn();
      return;
    }
    mutate();
  };
  return (
    <Button {...buttonProps} disabled={isPending} onClick={handleClick}>
      {isPending ? "Adding..." : cartId ? "Add to cart" : `Go to sign-in`}
    </Button>
  );
};
