import { Button } from "@/libs/shadcn/ui/button";
import { Link } from "@navigation";
import clsx from "clsx";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { Fragment } from "react";

type DetailsButtonProps = React.ComponentProps<typeof Button> & {
  productId: string;
  session?: Session | null;
  disableText?: boolean;
};

export const DetailsButton = ({ ...props }: DetailsButtonProps) => {
  const {
    productId,
    disableText,
    className,
    session,
    onClick,
    children,
    ...buttonProps
  } = props;
  const userId = session?.user?.id;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!userId) {
      signIn();
      return;
    }
    onClick?.(event);
    console.log("Go to product detail:", productId);
  };
  return (
    <Link
      className={clsx(`flex cursor-pointer`, className)}
      href={`/products/${productId}`}
      passHref
    >
      <Button
        {...buttonProps}
        className={clsx(`flex cursor-pointer`, className)}
        onClick={handleClick}
      >
        <Fragment>
          {children}
          {!disableText && (
            <span>{!userId ? "Go to sign-in" : "Product Details"}</span>
          )}
        </Fragment>
      </Button>
    </Link>
  );
};
