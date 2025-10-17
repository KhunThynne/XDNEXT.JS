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

import { useVirtualizer } from "@tanstack/react-virtual";

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

import { ChevronDown, ImageOff, Trash } from "lucide-react";

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
} from "../../components/cartOrder.type";
import { CardAction, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import { EmptyCart } from "@/shared/components/ui/shopping/CartShopping.form";

const DataTableMenu = ({ table }: { table: Table<CartItem> }) => {
  return (
    <div className="flex items-center gap-5">
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
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
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
    setValue("cartItems", selectedData ?? []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getState().rowSelection, setValue, cartItems]);
  // const rowVirtualizer = useVirtualizer({
  //   count: rows?.length,
  //   estimateSize: () => 150, //estimate row height for accurate scrollbar dragging
  //   getScrollElement: () => tableContainerRef.current,
  //   measureElement:
  //     typeof window !== "undefined" &&
  //     navigator.userAgent.indexOf("Firefox") === -1
  //       ? (element) => element?.getBoundingClientRect().height
  //       : undefined,
  //   overscan: 5,
  // });

  if (isLoading) {
    return <>Loading...</>;
  }
  if (cartItems.length > 0)
    return (
      <>
        <CardAction className="w-full px-3">
          <DataTableMenu table={table} />
        </CardAction>

        <CardContent
          className="container relative h-full overflow-auto overscroll-contain p-0"
          onScroll={(e) => fetchMoreOnBottomReached(e.currentTarget)}
          ref={tableContainerRef}
        >
          <table className="w-full table-fixed border-collapse">
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

            <TableBody className="">
              {table.getRowModel().rows?.length ? (
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
                <TableRow className="">
                  <TableCell
                    colSpan={columns.length}
                    className="h-[60vh] text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </table>

          {isFetching && <div className="text-center">Fetching More...</div>}
        </CardContent>
        <CardAction className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm">
          <span className="text-gray-800">
            Selected: <span className="text-xd font-semibold">{selected}</span>
          </span>

          <span className="text-gray-600">
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
