"use client";
import React, { Fragment } from "react";

//3 TanStack Libraries!!!
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  OnChangeFn,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { useVirtualizer } from "@tanstack/react-virtual";
import {
  useCartDocument,
  useCartInfinite,
} from "@/shared/hooks/useCartDocument";
import {
  Cart,
  CartItem,
  GetCartQuery,
  User,
} from "@/libs/graphql/generates/graphql";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/libs/shadcn/ui/table";
import { Button } from "@/libs/shadcn/ui/button";
import { InputForm } from "@/shared/components/ui/form/InputForm";

import { ChevronDown, ImageOff, Trash } from "lucide-react";
import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/libs/shadcn/ui/dropdown-menu";
import Image from "next/image";
import SafeHtml from "@/libs/sanitize-html/SafeHtml";
import PointDiamon from "@/shared/components/PointDiamod";
import {
  DialogFooterAction,
  useDialogGlobal,
} from "@/app/[locale]/(main)/(auth)/account/cart/[id]/components/useDialogGlobal";
import { Card, CardAction } from "@/libs/shadcn/ui/card";
import { OrderFormProps } from "@/app/[locale]/(main)/(auth)/account/cart/[id]/components/cartOrder.type";
import { useCartItemDocument } from "@/shared/hooks/useCartItemDocument";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import { Checkbox } from "@/libs/shadcn/ui/checkbox";

const fetchSize = 50;
type DataTableDemoProps<T> = {
  columns: ColumnDef<T, any>[];
};

export function DataTableCartInfiniteScroll({
  cartItems: defaultCartItems,
  invalidateCart,
  setValueCart,
  total,
  query,
}: OrderFormProps & {
  total: number;
  query: UseInfiniteQueryResult<
    InfiniteData<
      {
        data: GetCartQuery;
      },
      unknown
    >,
    Error
  >;
}) {
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const { isFetching, fetchNextPage, isLoading } = query;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const { openDialog, closeDialog } = useDialogGlobal();

  // const handleDeleteMore = async (ids: CartItem["id"][]) => {
  //   const current = method.getValues("cartItems");
  //   const updated = current.filter((item) => !ids.includes(item.id));

  //   const confirmDelete = () => {
  //     method.reset({ cartItems: updated });
  //     setSelectedIds((prev) => prev.filter((id) => !ids.includes(id)));
  //     mutationDeleteItems.mutate(ids);
  //     closeDialog();
  //   };

  //   openDialog({
  //     title: "Confirm Deletion",
  //     description: `You are about to delete ${ids.length} item${ids.length > 1 ? "s" : ""}. This action cannot be undone.`,
  //     content: (
  //       <p>
  //         Please confirm that you want to permanently delete the selected item
  //         {ids.length > 1 ? "s" : ""}. This action cannot be undone.
  //       </p>
  //     ),
  //     footer: (
  //       <DialogFooterAction onCancel={closeDialog} onConfirm={confirmDelete} />
  //     ),
  //   });
  // };

  const columns = React.useMemo<ColumnDef<CartItem>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
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
          const image = cell.product?.images?.[0].src;

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
        size: 5,
        header: () => <div className="place-self-center">Aciton</div>,
        cell: ({ row }) => {
          const cell = row.original;
          return (
            <>
              <Button
                variant={"outline"}
                size={"icon"}
                aria-label="button-trash"
                onClick={() => handleDelete(cell.id)}
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
  //flatten the array of arrays from the useInfiniteQuery hook

  const totalDBRowCount = total ?? 0;
  const totalFetched = defaultCartItems.length;

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );

  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  const method = useForm<OrderFormProps>({
    defaultValues: {
      cartItems: defaultCartItems,
      filter: "",
    },
  });

  const { cartItems } = method.watch();
  const { watch } = method;
  const filter = watch("filter");
  const table = useReactTable({
    data: cartItems,
    columns,
    state: {
      sorting,
      globalFilter: filter,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const name = row?.original?.product?.name?.toLowerCase();
      const price = row?.original?.product?.price?.price;
      const search = String(filterValue).toLowerCase();
      return (
        (name?.includes(search) || price?.toString().includes(search)) ?? false
      );
    },
    manualSorting: true,
  });

  const { mutationDeleteItems, mutationDeleteItem } = useCartItemDocument({
    handleSuccess() {
      invalidateCart();
    },
  });
  const handleDelete = async (idToDelete: CartItem["id"]) => {
    const confirmDelete = () => {
      const current = method.getValues("cartItems");
      const updated = current.filter((item) => item.id !== idToDelete);
      method.setValue("cartItems", updated, { shouldDirty: true });
      // setSelectedIds((prev) => prev.filter((id) => id !== idToDelete));
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

  //scroll to top of table when sorting changes
  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    setSorting(updater);
    if (!!table.getRowModel().rows.length) {
      rowVirtualizer.scrollToIndex?.(0);
    }
  };

  //since this table option is derived from table row model state, we're using the table.setOptions utility
  table.setOptions((prev) => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }));

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="app">
      ({defaultCartItems.length} of {totalDBRowCount} rows fetched)
      <div
        className="container"
        onScroll={(e) => fetchMoreOnBottomReached(e.currentTarget)}
        ref={tableContainerRef}
        style={{
          overflow: "auto", //our scrollable table container
          position: "relative", //needed for sticky header
          height: "600px", //should be a fixed height
        }}
      >
        <Form {...method}>
          <div className="w-full">
            <div className="flex items-center gap-5 py-4">
              <InputForm
                name="filter"
                placeholder="Filter emails..."
                className="max-w-lg grow"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="max-w-full overflow-hidden rounded-md border">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => {
                      return (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && "selected"}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="text-muted-foreground flex-1 text-sm">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Form>
        {/* Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights */}
        {/* <table style={{ display: "grid" }}>
          <thead
            style={{
              display: "grid",
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                style={{ display: "flex", width: "100%" }}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      style={{
                        display: "flex",
                        width: header.getSize(),
                      }}
                    >
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody
            style={{
              display: "grid",
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
              position: "relative", //needed for absolute positioning of rows
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index] as Row<CartItem>;
              return (
                <tr
                  data-index={virtualRow.index} //needed for dynamic row height measurement
                  ref={(node) => rowVirtualizer.measureElement(node)} //measure dynamic row height
                  key={row.id}
                  style={{
                    display: "flex",
                    position: "absolute",
                    transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
                    width: "100%",
                  }}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        style={{
                          display: "flex",
                          width: cell.column.getSize(),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>
      {isFetching && <div>Fetching More...</div>}
    </div>
  );
}
