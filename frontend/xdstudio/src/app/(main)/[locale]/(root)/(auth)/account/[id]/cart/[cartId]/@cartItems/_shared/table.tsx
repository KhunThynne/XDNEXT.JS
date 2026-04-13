import { Checkbox } from "@/shared/libs/shadcn/custom/checkbox";
import { Button } from "@/shared/libs/shadcn/ui/button";
import type { CartItem } from "@/payload-types";
import CreditIcon from "@/shared/components/CreditIcon";
import { ImageProduct } from "@/shared/components/ui/images/ImageProduct";
import type { ColumnDef } from "@tanstack/react-table";
import { Minus, Trash } from "lucide-react";

export const columns: ColumnDef<CartItem>[] = [
  {
    id: "select",
    size: 40,
    header: ({ table, column, header }) => {
      const isAllSelected = table.getIsAllPageRowsSelected();
      const isSomeSelected = table.getIsSomePageRowsSelected();
      return (
        <>
          <Checkbox
            checked={isAllSelected || (isSomeSelected && "indeterminate")}
            {...(isAllSelected
              ? {}
              : { indicator: <Minus className="size-3.5" /> })}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="mx-2 xl:mx-5"
          />
          {(isAllSelected || isSomeSelected) && (
            <Button
              size="sm"
              variant={"ghost"}
              className="text-destructive"
              onClick={async () => {
                const selectedData = table
                  .getSelectedRowModel()
                  .rows.map((row) => row.original);

                // await handleDeleteMore(selectedData, table);
              }}
            >
              Delete
            </Button>
          )}
        </>
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
    // accessorFn: (row) => row.product?.previewImage,
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
            {image && typeof image !== "string" && (
              <ImageProduct image={image} className="size-full" />
            )}
          </div>
          {typeof product.price !== "string" && (
            <aside className="place-content-center space-y-1">
              <h3 className="font-bold">{product.name} </h3>
              <h4 className="text-destructive font-medium">
                <CreditIcon /> {product?.price?.price}
              </h4>
            </aside>
          )}
        </section>
      );
    },
  },
  {
    enableColumnFilter: true,
    // accessorFn: (row) => row.product?.name,
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
    // accessorFn: (row) => row.product?.price,
  },
  {
    // accessorFn: (row) => row.product?.price?.price,
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
            // onClick={() => handleDelete(cell.id, table)}
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
];
