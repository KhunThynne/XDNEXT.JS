"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/libs/shadcn/ui/form";
import { Button } from "@/libs/shadcn/ui/button";
import { CheckboxForm } from "@/shared/components/ui/form/CheckBoxForm";
import clsx from "clsx";
import { ImageOff, Minus, Trash } from "lucide-react";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import PointDiamon from "@/shared/components/PointDiamod";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useCartItemDocument } from "@/shared/hooks/useCartItemDocument";
import Image from "next/image";
import { OrderFormProps } from "../../components/cartOrder.type";
import { CartItem } from "@/libs/graphql/generates/graphql";
import { Link } from "@navigation";
import {
  DialogFooterAction,
  useDialogGlobal,
} from "../../components/useDialogGlobal";
import SafeHtml from "@/libs/sanitize-html/SafeHtml";

export const OrdersForm = ({
  cartItems: defaultCartItems,
  invalidateCart,
  setValueCart,
}: OrderFormProps) => {
  const method = useForm<OrderFormProps>({
    defaultValues: {
      cartItems: defaultCartItems,
    },
  });
  useEffect(() => {
    method.setValue("cartItems", defaultCartItems);
  }, [defaultCartItems, method]);
  const { watch } = method;

  const cartItems = watch("cartItems");
  const { openDialog, closeDialog } = useDialogGlobal();
  // init from defaultCartItems (so initial mount selects all)
  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    defaultCartItems.map((i) => i.id)
  );

  // keep selectedIds in sync when cartItems change:
  //  - remove any selected id that no longer exists in cartItems
  useLayoutEffect(() => {
    setSelectedIds((prev) => {
      const ids = new Set(cartItems.map((i) => i.id));
      return prev.filter((id) => ids.has(id));
    });
  }, [cartItems]);
  useLayoutEffect(() => {
    const selectedCartItems = cartItems.filter((item) =>
      selectedIds.includes(item.id)
    );
    setValueCart("cartsOrderItem", selectedCartItems);
  }, [cartItems, selectedIds, setValueCart]);

  const allChecked = useMemo(
    () => cartItems.length > 0 && selectedIds.length === cartItems.length,
    [cartItems, selectedIds]
  );
  const someChecked = useMemo(
    () =>
      selectedIds.length > 0 &&
      selectedIds.length < cartItems.length &&
      cartItems.length > 0,
    [cartItems, selectedIds]
  );

  const handleToggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(cartItems.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const { mutationDeleteItems, mutationDeleteItem } = useCartItemDocument({
    handleSuccess() {
      invalidateCart();
    },
  });

  const handleDeleteMore = async (ids: CartItem["id"][]) => {
    const current = method.getValues("cartItems");
    const updated = current.filter((item) => !ids.includes(item.id));

    const confirmDelete = () => {
      method.reset({ cartItems: updated });
      setSelectedIds((prev) => prev.filter((id) => !ids.includes(id)));
      mutationDeleteItems.mutate(ids);
      closeDialog();
    };

    openDialog({
      title: "Confirm Deletion",
      description: `You are about to delete ${ids.length} item${ids.length > 1 ? "s" : ""}. This action cannot be undone.`,
      content: (
        <p>
          Please confirm that you want to permanently delete the selected item
          {ids.length > 1 ? "s" : ""}. This action cannot be undone.
        </p>
      ),
      footer: (
        <DialogFooterAction onCancel={closeDialog} onConfirm={confirmDelete} />
      ),
    });
  };

  const handleDelete = async (idToDelete: CartItem["id"]) => {
    const confirmDelete = () => {
      const current = method.getValues("cartItems");
      const updated = current.filter((item) => item.id !== idToDelete);
      method.setValue("cartItems", updated, { shouldDirty: true });
      setSelectedIds((prev) => prev.filter((id) => id !== idToDelete));
      mutationDeleteItem.mutate(idToDelete);
      closeDialog();
    };

    const itemName = method
      .getValues("cartItems")
      .find((item) => item.id === idToDelete)?.product?.name;

    openDialog({
      title: "Confirm Deletion",
      description: `You are about to delete "${itemName || "this item"}". This action cannot be undone.`,
      content: (
        <p>
          Please confirm that you want to permanently delete{" "}
          <strong>{itemName || "this item"}</strong>. This action cannot be
          undone.
        </p>
      ),
      footer: (
        <DialogFooterAction onCancel={closeDialog} onConfirm={confirmDelete} />
      ),
    });
  };

  const toggleOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <Form {...method}>
      <ContainerSection
        className="gap-3!"
        title="Orders"
        classNames={{ separator: "hidden" }}
        description={
          <section className="flex items-center gap-2 px-4 py-2">
            <CheckboxForm
              name={""}
              disabled={cartItems.length < 1}
              checked={allChecked || someChecked}
              onCheckedChange={(val) => handleToggleAll(!!val)}
              {...(allChecked
                ? {}
                : { indicator: <Minus className="size-3.5" /> })}
              data-state={clsx({
                checked: allChecked,
                indeterminate: someChecked,
                unchecked:
                  (!allChecked && !someChecked) || cartItems.length < 1,
              })}
            />
            <Button
              size="sm"
              variant={"ghost"}
              className="text-destructive"
              disabled={selectedIds.length < 1}
              onClick={() => handleDeleteMore(selectedIds)}
            >
              Delete
            </Button>
          </section>
        }
      >
        <ul className="divide-y border-t">
          {cartItems.map((item) => (
            <li key={item.id} className={clsx("flex items-center gap-5 p-4")}>
              <CheckboxForm
                checked={selectedIds.includes(item.id)}
                name={""}
                onCheckedChange={() => toggleOne(item.id)}
              />
              <div className="relative size-12 overflow-hidden rounded">
                {item?.product?.images?.[0]?.src?.url ? (
                  <Image
                    src={item?.product?.images?.[0]?.src?.url ?? ""}
                    alt={
                      item?.product?.description || item?.product?.name || ""
                    }
                    fill
                    draggable={false}
                    className="select-none object-cover"
                  />
                ) : (
                  <ImageOff className="size-full self-center rounded border" />
                )}
              </div>
              <div className="flex grow flex-col px-3">
                <Link
                  href={`/products/${item?.product?.id}`}
                  className="w-fit hover:underline"
                >
                  <p className="font-medium">{item.product?.name}</p>
                </Link>
                {/* <SafeHtml
                  html={item.product?.description}
                  as="aside"
                  className="line-clamp-1 "
                /> */}
              </div>
              <div className="px-3 text-right">
                {item?.product?.price?.price && (
                  <>
                    <p className="flex font-medium">
                      <PointDiamon />
                      {(
                        item?.product?.price?.price * (item?.quantity ?? 0)
                      ).toLocaleString()}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      (฿{item?.product?.price?.price.toLocaleString()} each)
                    </p>
                  </>
                )}
              </div>
              <Button
                variant={"ghost"}
                size={"icon"}
                aria-label="button-trash"
                onClick={() => handleDelete(item.id)}
              >
                <Trash />
              </Button>
            </li>
          ))}
        </ul>
      </ContainerSection>
    </Form>
  );
};
