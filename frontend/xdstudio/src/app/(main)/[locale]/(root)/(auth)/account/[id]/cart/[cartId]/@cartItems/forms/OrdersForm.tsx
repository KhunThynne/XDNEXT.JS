"use client";

import { useAppForm } from "@/shared/hooks/useAppForm";
import { useStore } from "@tanstack/react-form";
import { Button } from "@/libs/shadcn/ui/button";
import { CheckboxForm } from "@/shared/components/ui/form/CheckBoxForm";
import clsx from "clsx";
import { ImageOff, Minus, Trash } from "lucide-react";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import CreditIcon from "@/shared/components/CreditIcon";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useRemoveCartItem } from "@/shared/core/cart";
import Image from "next/image";
import type { CartItemsFormProps } from "../../_shared/_components/cartOrder.type";
import type { CartItem } from "@/payload-types";
import { Link } from "@navigation";

import { DialogFooterAction, useDialogGlobal } from "@/shared/components/ui";

export const OrdersForm = ({
  cartItems: defaultCartItems,
  invalidateCartAction,
  setValueCart,
}: CartItemsFormProps) => {
  const method = useAppForm({
    defaultValues: {
      cartItems: defaultCartItems,
    },
  });
  useEffect(() => {
    method.setFieldValue("cartItems", defaultCartItems);
  }, [defaultCartItems, method]);
  const cartItems = useStore(method.store, (state: CartFormProps) => state.values.cartItems);
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

    setValueCart("cartItems", selectedCartItems ?? []);
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

  const { mutationDeleteItems, mutationDeleteItem } = useRemoveCartItem({
    handleSuccess() {
      invalidateCartAction();
    },
  });

  const handleDeleteMore = async (ids: CartItem["id"][]) => {
    const confirmDelete = () => {
      const current = method.getFieldValue("cartItems");
      const updated = current.filter((item) => !ids.includes(item.id));
      console.log(`cart mores delete`, updated);
      method.setFieldValue("cartItems", updated);
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
      const current = method.getFieldValue("cartItems");
      const updated = current.filter((item) => item.id !== idToDelete);
      method.setFieldValue("cartItems", updated);
      setSelectedIds((prev) => prev.filter((id) => id !== idToDelete));
      mutationDeleteItem.mutate(idToDelete);
      closeDialog();
    };

    const itemName = method
      .getFieldValue("cartItems")
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
    <method.AppForm>
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
                {item?.product?.previewImage?.src?.url ? (
                  <Image
                    src={item?.product?.previewImage?.src?.url ?? ""}
                    alt={
                      item?.product?.description || item?.product?.name || ""
                    }
                    fill
                    draggable={false}
                    className="object-cover select-none"
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
                      <CreditIcon />
                      {(
                        item?.product?.price?.price * (item?.quantity ?? 0)
                      ).toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
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
    </method.AppForm>
  );
};
