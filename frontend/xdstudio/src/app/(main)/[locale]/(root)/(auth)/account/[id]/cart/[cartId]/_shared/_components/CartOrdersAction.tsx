"use client";
import { Button } from "@/shared/libs/shadcn/ui/button";

import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { Link } from "@navigation";
import { formCartsOptions } from "../formOptions";
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
          <div className="mt-auto flex flex-col gap-4">
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
          </div>
        );
      }}
    </form.Subscribe>
  );
}
