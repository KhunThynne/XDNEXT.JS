"use client";
import { useAppForm, useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import React, { useCallback, useMemo } from "react";
import type { CartItem, Product } from "@/payload-types";

import {
  type RowSelectionState,
  type SortingState,
  type Table,
  type TableMeta,
  type Updater,
} from "@tanstack/react-table";

import { formCartsOptions } from "../formOptions";
import { useCartItemsContext } from "./useCartItemsContext";
import { useCartItems } from "@/shared/core/cart";
import { useStore } from "@tanstack/react-form";
import {
  DialogFooterAction,
  useDialogGlobal,
} from "@/shared/components/globalModal";

export const useCartItemsDatable = ({
  cartItems,
  itemsCount,
}: {
  cartItems: CartItem[];
  itemsCount: number;
}) => {
  const { openDialog, closeDialog } = useDialogGlobal();
  const form = useTypedAppFormContext({
    ...formCartsOptions,
  });
  const { cartId, userId } = useStore(form.store, (state) => {
    return {
      cartId: state.values.cartId,
      userId: state.values.userId,
    };
  });
  const { removeItem, removeItems } = useCartItems({ cartId, userId });
  const handleDelete = useCallback(
    async (idToDelete: CartItem["id"], coreTable: Table<CartItem>) => {
      const confirmDelete = () => {
        const current = cartItems;
        const updated = current.filter((item) => item.id !== idToDelete);
        coreTable.setRowSelection((prev) => {
          const newSelection = { ...prev };
          delete newSelection[idToDelete];
          return newSelection;
        });
        removeItem.mutate(idToDelete);
        closeDialog();
      };

      const itemName = (
        cartItems.find((item) => item.id === idToDelete)?.product as Product
      ).name;

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
          <DialogFooterAction
            onCancel={closeDialog}
            onConfirm={confirmDelete}
          />
        ),
      });
    },
    [cartItems, closeDialog, openDialog, removeItem]
  );

  const handleDeleteMore = useCallback(
    async (cart: CartItem[], coreTable: Table<CartItem>) => {
      const ids = cart.map((item) => item.id);
      const confirmDelete = () => {
        const current = cartItems;
        const updated = current.filter((item) => !ids.includes(item.id));
        coreTable.setRowSelection((prev) => {
          const newSelection = { ...prev };
          ids.forEach((id) => delete newSelection[id]);
          return newSelection;
        });
        removeItems.mutate(ids);
        closeDialog();
      };
      const itemNames = cart
        .map((item) => (item.product as Product).name)
        .filter(Boolean);
      const descriptionText =
        itemNames.length === 1
          ? `You are about to delete "${itemNames[0]}".`
          : `You are about to delete ${itemNames.length} items.`;
      openDialog({
        title: "Confirm Bulk Deletion",
        description: `${descriptionText} This action cannot be undone.`,
        content: (
          <div className="space-y-2">
            {itemNames.length > 0 && (
              <ul className="text-muted-foreground list-inside list-disc text-sm">
                {itemNames.slice(0, 5).map((name, index) => (
                  <li key={name ?? "unkhown" + index}>{name}</li>
                ))}
                {itemNames.length > 5 && (
                  <li>...and {itemNames.length - 5} more</li>
                )}
              </ul>
            )}
          </div>
        ),
        footer: (
          <DialogFooterAction
            onCancel={closeDialog}
            onConfirm={confirmDelete}
          />
        ),
      });
    },
    [cartItems, closeDialog, openDialog, removeItems]
  );
  const { filter, sorting, rowSelection, setRowSelection } =
    useCartItemsContext();
  const tableMeta: TableMeta<CartItem> = useMemo(() => {
    return {
      sorting,
      globalFilter: filter,
      rowSelection,
      handleDeleteMore,
      handleDelete,
    };
  }, [filter, handleDelete, handleDeleteMore, rowSelection, sorting]);

  const handleRowSelectionChange = (updater: Updater<RowSelectionState>) => {
    const nextValue =
      typeof updater === "function" ? updater(rowSelection) : updater;
    setRowSelection(nextValue);
    form.setFieldValue("selectedCartItemsId", nextValue);
  };

  // const setDatatableValue = method.setFieldValue;
  // useLayoutEffect(() => {
  //   if (cartItems) {
  //     setDatatableValue("cartItems", cartItems);
  //   }
  // }, [cartItems, setDatatableValue]);
  // useLayoutEffect(() => {
  //   setDatatableValue("selected", OrderCartItem?.length ?? 0);
  // }, [OrderCartItem, setDatatableValue]);
  // useLayoutEffect(() => {
  //   if (itemsCount) {
  //     setDatatableValue("total", itemsCount);
  //   }
  // }, [itemsCount, setDatatableValue]);
  return {
    filter,
    total: itemsCount,
    selected: cartItems.length,
    rowSelection,
    sorting,
    handleRowSelectionChange,
    tableMeta,
  };
};
