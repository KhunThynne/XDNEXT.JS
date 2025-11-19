"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import * as React from "react";

import type {
  ColumnDef,
  OnChangeFn,
  Row,
  SortingState,
} from "@tanstack/react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/libs/shadcn/ui/table";
import { usePointTransactionsInfiniteQuery } from "../_hooks/usePointTransactionsInfiniteQuery";
import { useEffect, useMemo, useState } from "react";
import type { Session } from "next-auth";
import type {
  GetPointTransactionQuery,
  PointTransaction,
  PointTransactionFieldFragment,
} from "@/libs/graphql/generates/graphql";
import { useVirtualizer } from "@tanstack/react-virtual";
import clsx from "clsx";

import { useFormatter } from "next-intl";
import { Button } from "@/libs/shadcn/ui/button";
import { ButtonGroup } from "@/libs/shadcn/ui/button-group";
import { SquareChartGantt, Star, View } from "lucide-react";
import { updatePointPaymentTransaction } from "../_actions/pointPaymentTransaction";
import { usePathname, useRouter } from "@navigation";
import { useParams } from "next/navigation";
import { Badge } from "@/libs/shadcn/ui/badge";
import _ from "lodash";
import { useSocket } from "@/libs/socket-io/socket";

import { updateTagClient } from "@/app/[locale]/(main)/(contents)/(product_content)/products/shared/updateTagClient";
import type { InfiniteData } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export interface PaymentSuccessEvent {
  type: "payment.success";
  data: unknown;
}

export type RealtimeEvent = PaymentSuccessEvent;

export const SOCKET_EVENT_NAME = "keystone-update";

export const REALTIME_CHANNEL = "keystone-socket";

const columnHelper = createColumnHelper<PointTransactionFieldFragment>();

const statusMap: Record<string, { label: string; color: string }> = {
  requires_payment_method: {
    label: "Requires Payment Method",
    color: "text-yellow-600",
  },
  requires_confirmation: {
    label: "Requires Confirmation",
    color: "text-yellow-600",
  },
  requires_action: { label: "Requires Action", color: "text-orange-500" },
  processing: { label: "Processing", color: "text-blue-500" },
  requires_capture: { label: "Requires Capture", color: "text-purple-500" },
  canceled: { label: "Canceled", color: "text-destructive" },
  succeeded: { label: "Succeeded", color: "text-success" },
};
export function DatatableInfiniteScrollPoitnPayment({
  session,
}: {
  session: Session;
}) {
  // const [data, _setData] = React.useState(() => [...defaultData]);
  const formatter = useFormatter();
  const router = useRouter();
  const params = useParams() as { transactionId: string };

  const { socket, isConnected } = useSocket();

  const columns = useMemo<ColumnDef<PointTransactionFieldFragment, any>[]>(
    () => [
      // ID
      columnHelper.accessor((row) => row.id, {
        id: "id",
        size: 150,
        cell: (info) => (
          <i className="max-w-full truncate">{info.getValue()}</i>
        ),
        header: () => <span>ID</span>,
      }),

      // AMOUNT
      columnHelper.accessor("amount", {
        header: () => <span>Amount</span>,
        cell: (info) => {
          const value = info.getValue();
          if (value == null) return "-";
          return formatter.number(value, {
            style: "currency",
            currency: "THB",
            maximumFractionDigits: 0,
          });
        },
      }),

      // STATUS
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => {
          const status = info.getValue();
          const { label, color } = _.get(statusMap, status, {
            label: status,
            color: "text-muted-foreground",
          });
          return (
            <Badge
              variant="outline"
              className={clsx("max-w-full font-medium", color)}
            >
              <span className="truncate">{label}</span>
            </Badge>
          );
        },
      }),

      // CREATED AT
      columnHelper.accessor("createdAt", {
        header: () => "Created At",
        cell: (info) => {
          const value = info.getValue();
          if (!value) return "-";

          return formatter.dateTime(new Date(value), {
            dateStyle: "medium",
            timeStyle: "short",
          });
        },
      }),
      {
        header: () => {
          return <p className="flex justify-end">Action</p>;
        },
        id: "action",
        cell: (info) => {
          const row = info.row.original;
          const active = params.transactionId === row.id;
          return (
            <ButtonGroup className="w-full place-content-end">
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                className="cursor-pointer transition-all"
                disabled={active}
                onClick={() => {
                  router.push(`/account/${session.user.id}/payment/${row.id}`);
                }}
              >
                <SquareChartGantt
                  className={clsx("transition-opacity", active && `opacity-70`)}
                />
              </Button>
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                className="cursor-pointer"
              >
                <Star className="" />
              </Button>
            </ButtonGroup>
          );
        },
      },
    ],
    [formatter, params.transactionId, router, session.user.id]
  );
  const { query, queryKey } = usePointTransactionsInfiniteQuery({
    userId: session?.user.id,
  });
  const { data, fetchNextPage, isFetching, isLoading } = query;
  const flatData = useMemo(() => {
    console.log(data);
    return (
      data?.pages.flatMap((page) => page?.data?.pointTransactions ?? []) ?? []
    );
  }, [data]);

  const totalDBRowCount = data?.pages?.[0].data.pointTransactionsCount ?? 0;
  const totalFetched = flatData.length;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can
        console.log(
          totalFetched,
          totalDBRowCount,
          totalFetched < totalDBRowCount
        );
        if (
          scrollHeight - scrollTop - clientHeight <= 0 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          console.log("test");
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );
  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  const table = useReactTable({
    data: flatData as PointTransactionFieldFragment[],
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    debugTable: true,
  });
  useEffect(() => {
    if (!socket || !queryClient || !queryKey) return;
    function onServerUpdate(arg: string) {
      const data = (JSON.parse(arg) as RealtimeEvent)
        .data as PointTransactionFieldFragment;
      queryClient.setQueryData<
        InfiniteData<{
          data: { pointTransactions: PointTransactionFieldFragment[] };
        }>
      >(queryKey, (oldData) => {
        if (!oldData) {
          return {
            pages: [{ data: { pointTransactions: [data] } }],
            pageParams: [0],
          };
        }
        const itemExists = oldData.pages.some((p) =>
          p.data?.pointTransactions?.some((row) => row.id === data.id)
        );
        if (itemExists) {
          console.log(`[Socket] Updating item in cache: ${data.id}`);
          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,

              data: {
                ...page.data,

                pointTransactions: page.data?.pointTransactions?.map((row) =>
                  row.id === data.id ? data : row
                ),
              },
            })),
          };
        } else {
          const firstPage = oldData.pages[0];
          firstPage;
          return {
            ...oldData,
            pages: [
              {
                ...firstPage,
                data: {
                  ...firstPage.data,
                  pointTransactions: [
                    data, // (Item ใหม่)
                    ...(firstPage?.data?.pointTransactions ?? []),
                  ],
                },
              },
              ...oldData.pages.slice(1), // (หน้าที่เหลือ)
            ],
          };
        }
      });
      updateTagClient(`point-transaction-${data.id}`);
    }

    socket.on("keystone-socket", onServerUpdate);

    return () => {
      socket.off("keystone-socket", onServerUpdate);
    };
  }, [queryClient, queryKey, socket]);

  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    setSorting(updater);
    if (table.getRowModel().rows.length) {
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
    estimateSize: () => 50, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 6,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div
        className="absolute inset-0 container max-h-full overflow-auto overscroll-contain"
        onScroll={(e) => fetchMoreOnBottomReached(e.currentTarget)}
        ref={tableContainerRef}
        style={
          {
            //our scrollable table container
            // position: "relative", //needed for sticky header
          }
        }
      >
        <table className="grid table-fixed border-collapse">
          <TableHeader className="sticky top-0 z-10 grid backdrop-blur-md">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="flex">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    className="mx-auto place-content-center"
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

          <TableBody
            className="relative grid"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[
                virtualRow.index
              ] as Row<PointTransactionFieldFragment>;
              return (
                <TableRow
                  data-index={virtualRow.index} //needed for dynamic row height measurement
                  ref={(node) => rowVirtualizer.measureElement(node)} //measure dynamic row height
                  key={row.id}
                  className="absolute flex"
                  style={{
                    transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
                    width: "100%",
                  }}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className="mx-auto flex items-center"
                        style={{
                          width: cell.column.getSize(),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </table>
      </div>

      {isFetching && <div>Fetching More...</div>}
    </>
  );
}
