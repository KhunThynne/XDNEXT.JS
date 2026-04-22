import { Checkbox } from "@/shared/libs/shadcn/custom/checkbox";
import { Button } from "@/shared/libs/shadcn/ui/button";
import type { CartItem, Price, Product } from "@/payload-types";
import CreditIcon from "@/shared/components/CreditIcon";
import { ImageProduct } from "@/shared/components/images/ImageProduct";
import type { ColumnDef, Table } from "@tanstack/react-table";
import { Minus, Trash } from "lucide-react";
import type { CartDataTableMeta } from "../../_shared/hooks/useCartItemsContext";

export const columns: ColumnDef<CartItem>[] = [
  {
    id: "select",
    size: 40,
    header: ({ table }) => {
      const isAllSelected = table.getIsAllPageRowsSelected();
      const meta = table?.options?.meta as CartDataTableMeta;
      const isSomeSelected = table.getIsSomePageRowsSelected();
      const isAllSelectedByMeta =
        table.getSelectedRowModel().rows.length === meta.total;
      return (
        <div className="mx-auto flex items-center justify-center">
          <Checkbox
            checked={isAllSelected || (isSomeSelected && "indeterminate")}
            {...(isAllSelectedByMeta
              ? {}
              : { indicator: <Minus className="size-3.5" /> })}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className=""
          />

          {(isAllSelected || isSomeSelected) && (
            <Button
              size="sm"
              variant={"ghost"}
              className="text-destructive absolute translate-x-15 gap-1"
              onClick={async () => {
                const selectedData = table
                  .getSelectedRowModel()
                  .rows.map((row) => row.original);

                await meta?.handleDeleteMore(selectedData, table);
              }}
            >
              <Trash />
              Delete
            </Button>
          )}
        </div>
      );
    },
    cell: ({ row }) => {
      const isSelected = row.getIsSelected();
      return (
        <div className="mx-auto flex justify-center">
          <Checkbox
            checked={isSelected}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorFn: (row) => (row.product as Product).previewImage,
    id: "product",
    header: "",
    minSize: 400,
    cell: ({ row }) => {
      const cell = row.original;
      const product = cell.product;
      if (typeof product === "string") return null;
      const image = product.previewImage;
      return (
        <section className="flex gap-4">
          <div className="relative aspect-square w-25 overflow-hidden rounded-lg border">
            {typeof image !== "string" && (
              <ImageProduct image={image!} className="size-full" />
            )}
          </div>
          {typeof product.price !== "string" && (
            <aside className="place-content-center space-y-1">
              <h3 className="font-bold">{product.name} </h3>
              <h4 className="text-destructive flex font-medium">
                <CreditIcon />
                {product?.price?.price ?? 0}
              </h4>
            </aside>
          )}
        </section>
      );
    },
  },
  {
    enableColumnFilter: true,
    accessorFn: (row) => (row.product as Product).name,
    id: "name",
    cell: (info) => (
      <div className="whitespace-normal">
        {(info.row.original.product as Product).name}
      </div>
    ),
    size: 250,
    header: () => "Name",
  },
  {
    size: 0,
    enableColumnFilter: true,
    enableHiding: true,
    meta: { hidden: true },
    cell: "",
    id: "price",
    header: "",
    accessorFn: (row) => (row.product as Product).price,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (info) => (
      <p className="text-xs whitespace-normal">
        {new Date(info.getValue<Date>()).toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </p>
    ),
    size: 120,
  },
  {
    accessorFn: (row) => ((row.product as Product).price as Price)?.price,
    id: "aciton",
    size: 50,
    header: () => <div className="place-self-center">Aciton</div>,
    cell: ({ row, table }) => {
      const meta = table?.options?.meta as CartDataTableMeta;
      const cell = row.original;
      return (
        <>
          <Button
            variant={"outline"}
            size={"icon"}
            aria-label="button-trash"
            onClick={() => meta?.handleDelete(cell.id, table)}
          >
            <Trash />
          </Button>
        </>
      );
    },
  },
];
