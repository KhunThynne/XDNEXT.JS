import clsx from "clsx";
import { Plus } from "lucide-react";
import { AddItemButton } from "./AddItem.button";
import type { Session } from "next-auth";
import type { Product } from "@/payload-types";
import type { CheckUserProductStatusQuery } from "../../products/shared/types";
import { useRouter } from "@navigation";

export default function ProductActions({
  product,
  session,
  status,
}: {
  product: Product;
  session: Session | null | undefined;
  status: CheckUserProductStatusQuery;
}) {
  const router = useRouter();
  return (
    <>
      <AddItemButton product={product} session={session} status={status}>
        <Plus className="size-5" />
      </AddItemButton>
      <AddItemButton
        status={status}
        product={product}
        session={session}
        variant={"secondary"}
        className={clsx(status?.inUserItem ? `hidden` : "w-20")}
        disableText
        addTo
        onClick={() =>
          router.push(
            `/account/${session?.user?.id}/cart/${session?.user?.carts?.docs?.[0]}`
          )
        }
      >
        {status?.inCart ? `go to cart` : "quick buy"}
      </AddItemButton>
    </>
  );
}
