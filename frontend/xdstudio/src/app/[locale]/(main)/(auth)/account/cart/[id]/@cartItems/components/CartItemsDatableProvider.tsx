"use client";

import { useForm, useFormContext } from "react-hook-form";
import { DataTableCartInfiniteScroll } from "./DataTableInfiniteScroll";
import React, { useEffect, useLayoutEffect } from "react";
import type {
  CartFormProps,
  CartItemsDatableFormProps,
} from "../../components/cartOrder.type";
import type { Cart, CartItem } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import PointDiamon from "@/shared/components/PointDiamod";
import type { ColumnDef, Table } from "@tanstack/react-table";
import { ImageOff, Minus, Trash } from "lucide-react";

import Image from "next/image";
import { useCartItemDocument } from "@/shared/hooks/useCartItemDocument";
import { DialogFooterAction, useDialogGlobal } from "@/shared/components/ui";
import { Form } from "@/libs/shadcn/ui/form";
import { Checkbox } from "@/libs/shadcn/custtom/checkbox";

export const CartItemsDatableProvider = ({
  children,
  cartItems,
  itemsCount,
  invalidateCartAction,
}: WithChildren & {
  cartItems: CartItem[];
  itemsCount: Cart["itemsCount"];
  invalidateCartAction: () => void;
}) => {
  const { openDialog, closeDialog } = useDialogGlobal();
  const { watch, setValue, getValues, reset } = useFormContext<CartFormProps>();
  const { cartItems: OrderCartItem } = watch();
  const { mutationDeleteItems, mutationDeleteItem } = useCartItemDocument({
    handleSuccess() {
      invalidateCartAction();
    },
  });
  const handleDelete = async (
    idToDelete: CartItem["id"],
    coreTable: Table<CartItem>
  ) => {
    const confirmDelete = () => {
      const current = method.getValues("cartItems");
      const updated = current.filter((item) => item.id !== idToDelete);
      // setValue("cartItems", updated, { shouldDirty: true });
      method.setValue("cartItems", updated, { shouldDirty: true });
      coreTable.setRowSelection((prev) => {
        const newSelection = { ...prev };
        delete newSelection[idToDelete];
        return newSelection;
      });
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
  const handleDeleteMore = async (cart: CartItem[]) => {
    const ids = cart.map((item) => item.id);
    const current = method.getValues("cartItems");
    const updated = current.filter((item) => !ids.includes(item.id));

    const confirmDelete = () => {
      // setValue("cartItems", updated, { shouldDirty: true });
      method.setValue("cartItems", updated, { shouldDirty: true });
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

  //flatten the array of arrays from the useInfiniteQuery hook
  const columns = React.useMemo<ColumnDef<CartItem>[]>(
    () => [
      {
        id: "select",
        size: 10,
        header: ({ table }) => (
          <>
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              {...(table.getIsAllPageRowsSelected()
                ? {}
                : { indicator: <Minus className="size-3.5" /> })}
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
            {(table.getIsAllPageRowsSelected() ||
              table.getIsSomePageRowsSelected()) && (
              <Button
                size="sm"
                variant={"ghost"}
                className="text-destructive mx-5"
                onClick={async () => {
                  const selectedData = table
                    .getSelectedRowModel()
                    .rows.map((row) => row.original);

                  await handleDeleteMore(selectedData);
                }}
              >
                Delete
              </Button>
            )}
          </>
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorFn: (row) => row.product?.images?.[0],
        id: "product",
        header: "",
        cell: ({ row }) => {
          const cell = row.original;
          const image = cell.product?.images?.[0]?.src;

          return (
            <section className="flex gap-4">
              <div className="bg-accent w-35 relative aspect-square overflow-hidden rounded-lg border">
                {image ? (
                  <Image
                    src={image.url}
                    alt={image.id}
                    fill
                    draggable={false}
                    className="select-none object-contain"
                  />
                ) : (
                  <ImageOff className="size-full self-center rounded border" />
                )}
              </div>
              <aside className="place-content-center space-y-1">
                <h3 className="font-bold">{cell.product?.name} </h3>
                <h4 className="text-xd font-medium">
                  <PointDiamon /> {cell.product?.price?.price}
                </h4>
              </aside>
            </section>
          );
        },
      },
      {
        enableColumnFilter: true,
        accessorFn: (row) => row.product?.name,
        id: "name",
        cell: (info) => info.getValue(),
        header: () => <span>Name</span>,
      },
      {
        size: 0,
        enableColumnFilter: true,
        enableHiding: true,
        meta: { hidden: true },
        cell: "",
        id: "price",
        header: "",
        accessorFn: (row) => row.product?.price,
      },
      {
        accessorFn: (row) => row.product?.price?.price,
        id: "aciton",
        size: 50,
        header: () => <div className="place-self-center">Aciton</div>,
        cell: ({ row, table }) => {
          const cell = row.original;
          return (
            <>
              <Button
                variant={"outline"}
                size={"icon"}
                aria-label="button-trash"
                onClick={() => handleDelete(cell.id, table)}
              >
                <Trash />
              </Button>
            </>
          );
        },
      },

      // {
      //   accessorKey: "createdAt",
      //   header: "Created At",
      //   cell: (info) => info.getValue<Date>().toLocaleString(),
      //   size: 200,
      // },
    ],
    []
  );
  const method = useForm<CartItemsDatableFormProps>({
    defaultValues: {
      cartItems,
      columns,
      filter: "",
      total: itemsCount,
      invalidateCartAction,
      selected: cartItems.length,
    },
  });
  const { setValue: setDatatableValue } = method;
  useLayoutEffect(() => {
    if (cartItems) {
      setDatatableValue("cartItems", cartItems);
    }
  }, [cartItems, setDatatableValue]);
  useLayoutEffect(() => {
    if (OrderCartItem) {
      setDatatableValue("selected", OrderCartItem.length);
    }
  }, [OrderCartItem, setDatatableValue]);
  useLayoutEffect(() => {
    if (itemsCount) {
      setDatatableValue("total", itemsCount);
    }
  }, [itemsCount, setDatatableValue]);
  return <Form {...method}>{children}</Form>;
};
