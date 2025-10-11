"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { ButtonGroup } from "@/shared/components/ui";

import { useFormContext } from "react-hook-form";
import type { CartFormProps } from "./cartOrder.type";

import { Link } from "@navigation";

export default function CartOrdersAction() {
  const method = useFormContext<CartFormProps>();
  const { cartItems } = method.watch();
  return (
    <ButtonGroup className="mt-auto w-full flex-col gap-4">
      <Button
        size="lg"
        className="cursor-pointer"
        disabled={cartItems?.length < 1}
      >
        Proceed to Checkout
      </Button>
      <Button
        variant="secondary"
        className="cursor-pointer"
        asChild
        size="lg"
        type="button"
      >
        <Link href={"/products"}>Continue Shopping</Link>
      </Button>
    </ButtonGroup>
  );
}
