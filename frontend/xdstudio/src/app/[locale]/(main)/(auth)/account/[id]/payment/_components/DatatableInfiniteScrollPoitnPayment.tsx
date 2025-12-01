"use client";

import {
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
import {
  usePointTransactionsInfiniteQuery,
  useUpdatePointTransactionMutations,
} from "../_hooks/usePointTransactionsInfiniteQuery";
import { useEffect, useMemo } from "react";
import type { Session } from "next-auth";
import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";
import { useVirtualizer } from "@tanstack/react-virtual";
import clsx from "clsx";

import { useFormatter } from "next-intl";
import { Button } from "@/libs/shadcn/ui/button";
import { ButtonGroup } from "@/libs/shadcn/ui/button-group";
import { FileText, OctagonXIcon, SquareChartGantt, Star } from "lucide-react";
import { useRouter } from "@navigation";
import { useParams } from "next/navigation";
import _, { isEmpty } from "lodash";
import { useSocket } from "@/libs/socket-io/socket";

import { updateTagClient } from "@/app/[locale]/(main)/(contents)/(product_content)/products/shared/updateTagClient";
import type { InfiniteData } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { BadgePaymentStatus } from "./BadgePaymentStatus";
import { DialogFooterAction, useDialogGlobal } from "@/shared/components/ui";
import type { StatusValueStripePayment } from "../@stripe/_shared/types/statusValue";
import type Stripe from "stripe";
import { toast } from "sonner";
import { Empty, EmptyHeader } from "@/libs/shadcn/ui/empty";
import { Skeleton } from "@/libs/shadcn/ui/skeleton";
import { LoadingDots } from "@/shared/components/ui/Loading";
import { Spinner } from "@/libs/shadcn/ui/spinner";

export interface PaymentSuccessEvent {
  type: "payment.succeeded";
  data: unknown;
}

export type RealtimeEvent = PaymentSuccessEvent;

export const SOCKET_EVENT_NAME = "keystone-update";

export const REALTIME_CHANNEL = "keystone-socket";

const columnHelper = createColumnHelper<PointTransactionFieldFragment>();

export function DatatableInfiniteScrollPoitnPayment({
  session,
}: {
  session: Session;
}) {
  // const [data, _setData] = React.useState(() => [...defaultData]);
  const formatter = useFormatter();
  const router = useRouter();
  const params = useParams() as { transactionId: string };
  const dialog = useDialogGlobal();
  const { socket } = useSocket();
  const { switchFavorite, rejectPayment } =
    useUpdatePointTransactionMutations();
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
          return <BadgePaymentStatus status={status} />;
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
          const status = row.status as StatusValueStripePayment;

          return (
            <ButtonGroup className="flex w-full place-content-end">
              {status !== "canceled" && (
                <Button
                  size={"icon-sm"}
                  variant={"ghost"}
                  className={clsx(
                    "cursor-pointer transition-all",
                    !(status !== "succeeded") && `order-last`
                  )}
                  disabled={active}
                  onClick={() => {
                    router.push(
                      `/account/${session.user.id}/payment/${row.id}`
                    );
                  }}
                >
                  <SquareChartGantt
                    className={clsx(
                      "transition-opacity",
                      active && `opacity-70`
                    )}
                  />
                </Button>
              )}
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                className="cursor-pointer"
                onClick={async () => {
                  await switchFavorite({
                    id: row.id,
                    data: { isFavorite: !row.isFavorite },
                  });
                }}
              >
                <Star
                  className={clsx(
                    row.isFavorite && "fill-yellow-500 text-yellow-500"
                  )}
                />
              </Button>
              {status !== "succeeded" && status !== "canceled" && (
                <Button
                  // disabled={!(status !== "succeeded")}
                  size={"icon-sm"}
                  variant={"ghost"}
                  className="cursor-pointer transition-all"
                  onClick={() => {
                    dialog.openDialog({
                      title: "Confirm Payment Rejection",
                      description:
                        "This action will permanently cancel the Payment Intent and change its status to 'Canceled'. Are you sure you want to proceed?",
                      content: (
                        <p>
                          This payment intent will be moved to the **Canceled**
                          status.
                        </p>
                      ),
                      footer: (
                        <DialogFooterAction
                          onCancel={() => dialog.closeDialog()}
                          onConfirm={async () => {
                            await rejectPayment({
                              id: row.id,
                              paymentIntentId: (
                                row.metaData as Stripe.PaymentIntent
                              ).id,
                            });
                            dialog.closeDialog();
                          }}
                          buttonConfirm={{
                            children: "Reject Payment",
                            variant: "destructive",
                          }}
                        />
                      ),
                    });
                  }}
                >
                  <OctagonXIcon
                    className={clsx("text-destructive transition-opacity")}
                  />
                </Button>
              )}
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
        if (
          scrollHeight - scrollTop - clientHeight <= 0 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
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
  const onServerUpdate = React.useEffectEvent(function onServerUpdate(
    arg: string
  ) {
    const action = JSON.parse(arg) as RealtimeEvent;
    const data = action.data as PointTransactionFieldFragment;
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
      if (action.type === "payment.succeeded") {
        toast.success(`${action.type}-${data?.id}`);
      }

      if (itemExists) {
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
                  data,
                  ...(firstPage?.data?.pointTransactions ?? []),
                ],
              },
            },
            ...oldData.pages.slice(1),
          ],
        };
      }
    });
    updateTagClient(`point-transaction-${data.id}`);
  });
  useEffect(() => {
    if (!socket || !queryClient || !queryKey) return;

    socket.on("keystone-socket-payment", onServerUpdate);

    return () => {
      socket.off("keystone-socket-payment", onServerUpdate);
    };
  }, [queryClient, queryKey, socket]);

  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    setSorting(updater);
    if (table.getRowModel().rows.length) {
      rowVirtualizer.scrollToIndex?.(0);
    }
  };
  const isEmptyData = totalDBRowCount < 1;
  //since this table option is derived from table row model state, we're using the table.setOptions utility
  table.setOptions((prev) => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }));

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 20, //estimate row height for accurate scrollbar dragging
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
    return (
      <CardContent className="relative h-full place-content-center place-items-center">
        <Spinner className="size-30 opacity-80" />
      </CardContent>
    );
  }

  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base">Transaction Pointer</CardTitle>
          <CardDescription>ประวัติรายการทั้งหมด</CardDescription>
        </div>
        <div className="text-right">
          <div className="text-ทก font-bold tracking-tight tabular-nums">
            {totalFetched.toLocaleString()}
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              / {totalDBRowCount.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">รายการที่แสดงผล</p>
        </div>
      </CardHeader>
      <CardContent className="relative h-full">
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
          <table
            className={clsx(
              "flex table-fixed border-collapse flex-col",
              isEmptyData && `h-full`
            )}
          >
            <TableHeader className="sticky top-0 z-10 row-span-1 grid backdrop-blur-md">
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
              className={clsx("relative grid grow")}
              style={{
                height: !isEmptyData
                  ? `${rowVirtualizer.getTotalSize()}px`
                  : ``, //tells scrollbar how big the table is
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
                    key={row.original.id}
                    className="absolute flex w-full"
                    style={{
                      transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
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

              {isEmptyData && (
                <TableRow className="place-content-center place-items-center">
                  <TableCell className="text-center">
                    <Empty>
                      <EmptyHeader className="text-xl font-semibold">
                        <FileText className="mx-auto mb-2 size-15 text-foreground/60" />

                        <span className="text-foreground/80">
                          No Transactions Found
                        </span>
                      </EmptyHeader>

                      <p className="text-sm text-foreground/50">
                        There are no payment activities recorded yet.
                      </p>
                    </Empty>
                  </TableCell>
                </TableRow>
              )}
              {isFetching && (
                <TableRow className="flex h-fit items-center">
                  <TableCell>
                    <Skeleton className="h-6 w-30" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 w-40" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 w-60" />
                  </TableCell>
                  <TableCell className="ms-auto">
                    <div className="flex gap-3">
                      <Skeleton className="size-8" />
                      <Skeleton className="size-8" />
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </table>
        </div>
      </CardContent>
    </>
  );
}
