"use client";
import React, { Fragment, useEffect, useLayoutEffect } from "react";

import type { OnChangeFn, SortingState, Table } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";

import type { CartItem, GetCartQuery } from "@/libs/graphql/generates/graphql";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/libs/shadcn/ui/table";
import { Button } from "@/libs/shadcn/ui/button";
import { InputForm } from "@/shared/components/ui/form/InputForm";

import { ChevronDown, FileText, ImageOff, Trash } from "lucide-react";

import type { UseFormSetValue } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/libs/shadcn/ui/dropdown-menu";

import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import type {
  CartFormProps,
  CartItemsDatableFormProps,
} from "../../_components/cartOrder.type";
import { CardAction, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import { EmptyCart } from "@/shared/components/ui/shopping/CartShopping.form";
import { Empty, EmptyHeader } from "@/libs/shadcn/ui/empty";
import clsx from "clsx";

const DataTableMenu = ({ table }: { table: Table<CartItem> }) => {
  return (
    <div className="flex items-center gap-5">
      <InputForm
        name="filter"
        placeholder="Filter emails..."
        className="max-w-lg grow"
      />
      {/* <DropdownMenu>
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
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};

export function DataTableCartInfiniteScroll({
  cartQuery,
  setValue,
}: {
  setValue: UseFormSetValue<CartFormProps>;
  cartQuery: UseInfiniteQueryResult<
    InfiniteData<
      {
        data: GetCartQuery;
      },
      unknown
    >,
    Error
  >;
}) {
  const cartItemsForm = useFormContext<CartItemsDatableFormProps>();

  const { columns, total, filter, cartItems, selected } = cartItemsForm.watch();
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const { isFetching, fetchNextPage, hasNextPage, isLoading, status } =
    cartQuery;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState<
    Record<string, boolean>
  >(() =>
    cartItems.reduce(
      (acc, item) => {
        acc[item.id] = true;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );
  const table = useReactTable({
    data: cartItems ?? [],
    columns,
    state: {
      sorting,
      globalFilter: filter,
      rowSelection,
    },
    getRowId: (row) => row.id,
    onRowSelectionChange: setRowSelection,
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
  const totalDBRowCount = total!;
  const totalFetched = cartItems.length;

  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement && hasNextPage) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can

        if (
          scrollHeight - scrollTop - clientHeight < 50 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          // console.log(scrollHeight, scrollTop, clientHeight);
          fetchNextPage();
        }
      }
    },
    [hasNextPage, isFetching, totalFetched, totalDBRowCount, fetchNextPage]
  );

  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached, filter]);

  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    setSorting(updater);
    if (table.getRowModel()?.rows?.length) {
      // rowVirtualizer.scrollToIndex?.(0);
    }
  };

  table.setOptions((prev) => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }));

  useLayoutEffect(() => {
    const selectedIds = table.getState().rowSelection;
    const selectedData = cartItems.filter((item) => selectedIds[item.id]);
    console.log(selectedData);
    setValue("cartItems", selectedData ?? []);
  }, [table.getState().rowSelection, setValue, cartItems]);
  const rowLength = table.getRowModel().rows?.length;
  const noData = rowLength < 1;
  if (isLoading) {
    return <>Loading...</>;
  }
  if (totalFetched > 0)
    return (
      <>
        <CardAction className="w-full px-3">
          <DataTableMenu table={table} />
        </CardAction>

        <CardContent
          className="relative container h-full overflow-auto overscroll-contain p-0"
          onScroll={(e) => fetchMoreOnBottomReached(e.currentTarget)}
          ref={tableContainerRef}
        >
          <table
            className={clsx(
              "w-full table-fixed border-collapse",
              noData && "h-full"
            )}
          >
            <TableHeader className="sticky top-0 z-10 backdrop-blur-lg">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody className={clsx("relative")}>
              {rowLength ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={{ width: cell.column.getSize() }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className="place-content-center place-items-center">
                  <TableCell
                    className="h-full text-center"
                    colSpan={columns.length}
                  >
                    <Empty>
                      <EmptyHeader className="text-xl font-semibold">
                        <FileText className="mx-auto mb-2 size-15 text-foreground/60" />

                        <span className="text-foreground/80">Not Found</span>
                      </EmptyHeader>

                      <p className="text-sm text-foreground/50">
                        There are no payment activities recorded yet.
                      </p>
                    </Empty>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </table>
          {isFetching && <div className="text-center">Fetching More...</div>}
        </CardContent>
        <CardAction className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm">
          <span>
            Selected:{" "}
            <span className="font-semibold text-destructive">{selected}</span>
          </span>
          <span className="flex gap-1">
            Showing <span className="font-medium">{totalFetched}</span> of
            <span className="font-medium">{total}</span>
          </span>
        </CardAction>
      </>
    );
  return (
    <aside className="h-full place-content-center">
      <EmptyCart />
    </aside>
  );
}
