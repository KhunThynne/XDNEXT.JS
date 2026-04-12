"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { ButtonGroup } from "@/shared/components/ui";
import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { Link } from "@navigation";
import { formCartsOptions } from "./forms/formOptions";
import { useEffect } from "react";

export default function CartOrdersAction() {
  const form = useTypedAppFormContext(formCartsOptions);

  useEffect(() => {
    console.log("error", form.state.errors);
  }, [form.state.errors]);
  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting, state.errors]}
    >
      {([canSubmit, isSubmitting]) => {
        return (
          <ButtonGroup className="mt-auto w-full flex-col gap-4">
            <Button
              size="lg"
              type="submit"
              className="cursor-pointer"
              disabled={!canSubmit || !!isSubmitting}
            >
              {isSubmitting
                ? "Processing..."
                : canSubmit
                  ? "Proceed to Checkout"
                  : "Please select at least one item"}
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
      }}
    </form.Subscribe>
  );
}
