"use client";
import React, { Fragment, useEffect, useLayoutEffect } from "react";

import type { OnChangeFn, SortingState, Table } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { Cart, CartItem } from "@/payload-types";
import type { PaginatedDocs } from "payload";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/libs/shadcn/ui/table";

import { FileText } from "lucide-react";

import {
  useTypedAppFormContext,
} from "@/shared/hooks/useAppForm";

import { columns } from "../table";
import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";

import { CardAction, CardContent } from "@/shared/libs/shadcn/ui/card";
import { EmptyCart } from "@/shared/components/cart/CartShopping.form";
import { Empty, EmptyHeader } from "@/shared/libs/shadcn/ui/empty";
import clsx from "clsx";
import { formCartsOptions } from "../../../_shared/formOptions";
import { useCartItemsDatable } from "../../../_shared/hooks/useCartItemsDatable";
import { DataTableFieldsGroup } from "./DataTableFieldsGroup";

export function DataTableCartInfiniteScroll({
  cartQuery,
  cartItems,
  itemsCount,
}: {
  itemsCount: number;
  cartItems: CartItem[];
  cartQuery: UseInfiniteQueryResult<
    InfiniteData<PaginatedDocs<CartItem>, unknown>,
    Error
  >;
}) {
  const form = useTypedAppFormContext({ ...formCartsOptions });
  const {
    filter,
    selected,
    total,
    rowSelection,
    sorting,
    tableMeta,
    handleRowSelectionChange,
  } = useCartItemsDatable({
    cartItems,
    itemsCount,
  });
  const table = useReactTable({
    data: cartItems ?? [],
    columns,
    meta: { ...tableMeta },
    state: {
      sorting,
      globalFilter: filter,
      rowSelection,
    },
    getRowId: (row) => row.id,
    onRowSelectionChange: handleRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const original = row.original as CartItem;
      const product = original.product;
      const productName =
        typeof product === "object" ? product?.name?.toLowerCase() : "";
      const price =
        typeof product === "object" && typeof product?.price === "object"
          ? product?.price?.price
          : "";
      const search = String(filterValue).toLowerCase();
      return (
        (productName?.includes(search) || price?.toString().includes(search)) ??
        false
      );
    },
    manualSorting: true,
  });
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading, status } =
    cartQuery;

  const totalDBRowCount = total ?? 0;
  const totalFetched = cartItems?.length ?? 0;

  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement && hasNextPage) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 300px of the bottom of the table, fetch more data if we can

        if (
          scrollHeight - scrollTop - clientHeight < 300 &&
          !isFetchingNextPage &&
          totalFetched < totalDBRowCount
        ) {
          // console.log(scrollHeight, scrollTop, clientHeight);
          fetchNextPage();
        }
      }
    },
    [hasNextPage, isFetchingNextPage, totalFetched, totalDBRowCount, fetchNextPage]
  );

  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached, filter]);

  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    // setSorting(updater);
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
    const selectedData = cartItems.filter(
      (item: CartItem) => selectedIds[item.id]
    );
    // console.log(selectedData);
  }, [cartItems, table]);
  const rowLength = table.getRowModel().rows?.length;

  const noData = rowLength < 1;
  if (isLoading) {
    return <>Loading...</>;
  }
  if (totalFetched > 0)
    return (
      <>
        <CardAction className="w-full px-3">
          <DataTableFieldsGroup
            form={form}
            fields={{ filter: "filter" }}
            table={table}
          />
        </CardAction>
        <CardContent
          className="relative container h-[65vh] overflow-auto overscroll-contain p-0"
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
                        <FileText className="text-foreground/60 mx-auto mb-2 size-15" />

                        <span className="text-foreground/80">Not Found</span>
                      </EmptyHeader>

                      <p className="text-foreground/50 text-sm">
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
            <span className="text-destructive font-semibold">{selected}</span>
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
