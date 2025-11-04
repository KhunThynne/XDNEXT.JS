import { CardProduct } from "@/app/[locale]/(main)/(contents)/(product_content)/products/components/ProductCard";
import { execute } from "@/libs/graphql/execute";
import {
  GetUserItemDocument,
  type GetUserItemQuery,
  type Product,
  type UserItem,
} from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/libs/shadcn/ui/empty";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/libs/shadcn/ui/table";
import { MotionTransition } from "@/shared/components/MotionTransition";
import { usePathname, useRouter } from "@navigation";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import type {
  SortingState,
  ColumnDef,
  OnChangeFn,
  Row,
} from "@tanstack/react-table";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import clsx from "clsx";
import _ from "lodash";
import { FileCode, PackageOpen } from "lucide-react";
import type { Session } from "next-auth";
import { useFormatter } from "next-intl";
import Image from "next/image";
import React from "react";
import { ImageProduct } from "../../cart/[id]/components/forms/CardCartOrdersSummaryForm";

export const DataTableGridItemsInfiniteScroll = ({
  session,
  filterText = "",
}: {
  filterText?: string;
  session: Session;
}) => {
  //we need a reference to the scrolling element for logic down below
  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const format = useFormatter();
  const columns = React.useMemo<ColumnDef<UserItem>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        id: "id",
        enableHiding: true,
      },
      {
        accessorKey: "item",
        size: 20,
        accessorFn: (row) => row.item?.id,
        cell: ({ row }) => {
          const cell = row.original;
          const purchasedDate = new Date(cell.createdAt);
          const formattedDate = format.dateTime(purchasedDate, {
            dateStyle: "medium",
          });

          const formattedNumericDate = format.dateTime(purchasedDate, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const image = cell.item?.product?.previewImage!;
          // const relativeTime = format.relativeTime(purchasedDate);
          return (
            <Card className="max-w-sm flex-row p-5">
              <CardHeader className="relative">
                <div className="absolute inset-0 place-content-center place-items-center">
                  <ImageProduct image={image} className="size-full" />
                </div>
              </CardHeader>
              <CardContent className="border-s px-5">
                <h3>{cell.item?.product?.name}</h3>
                <section className="contents text-sm text-primary/40">
                  <p className="space-x-0.5">
                    <span className="capitalize"> purchased:</span>
                    <span>{formattedNumericDate}</span>
                  </p>
                  <p>
                    Version : <span className="text-xd">0.0</span>
                  </p>
                </section>
              </CardContent>
            </Card>
          );
        },
      },
      {
        size: 0,
        enableColumnFilter: true,
        accessorFn: (row) => row.item?.product?.name,
        id: "name",
        enableHiding: true,
        cell: (info) => null,
        header: () => <span>Name</span>,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        cell: (info) => info.getValue<Date>()?.toLocaleString(),
        enableHiding: true,
      },
    ],
    []
  );

  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery({
    queryKey: ["user-items", session.user.id],
    queryFn: async () => {
      const res = await execute(GetUserItemDocument, {
        where: { id: session.user.id },
      });
      return res;
    },
    enabled: !!session.user.id,

    initialPageParam: 0,
    getNextPageParam: (_lastGroup, groups) => groups.length,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  //flatten the array of arrays from the useInfiniteQuery hook
  const flatData = React.useMemo(
    () =>
      data?.pages?.flatMap((page) => page.data.user?.items as UserItem[]) ?? [],
    [data]
  );
  const totalDBRowCount = data?.pages?.[0]?.data.user?.itemsCount ?? 0;
  const totalFetched = flatData.length;

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
  const router = useRouter();
  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  const table = useReactTable({
    data: flatData,
    columns,
    state: {
      sorting,
      globalFilter: filterText,
    },
    globalFilterFn: (row, columnId, filterValue) => {
      const name = row?.original?.item?.product?.name?.toLowerCase();
      const search = String(filterValue).toLowerCase();
      return name?.includes(search) ?? false;
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualSorting: true,
    debugTable: true,
    initialState: {
      columnVisibility: {
        id: false,
      },
    },
  });

  //scroll to top of table when sorting changes
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
    <>
      <div
        className="absolute inset-0 container max-h-full overscroll-contain rounded-lg border border-dashed"
        onScroll={(e) => fetchMoreOnBottomReached(e.currentTarget)}
        ref={tableContainerRef}
        style={{
          overflow: "auto", //our scrollable table container
          // position: "relative", //needed for sticky header
        }}
      >
        {/* Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights */}
        <table className="w-full table-fixed border-collapse">
          <TableHeader className="sticky top-0 z-10 hidden backdrop-blur-lg">
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
                <TableRow key={row.id} className="">
                  {row.getVisibleCells().map((cell) => {
                    if (!cell.column.columnDef.enableHiding)
                      return (
                        <TableCell
                          className="px-8 py-5"
                          key={cell.id}
                          style={{ width: cell.column.getSize() }}
                          onClick={() => {
                            router.push(
                              `/account/${session.user.id}/${row.original.id}`
                            );
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
              ))
            ) : (
              <TableRow className="">
                <TableCell
                  colSpan={columns.length}
                  className="absolute inset-0 place-content-center text-center"
                >
                  <Empty className="h-full">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <FileCode />
                      </EmptyMedia>
                      <EmptyTitle>No Data</EmptyTitle>
                      <EmptyDescription>
                        You haven&apos;t created any projects yet. Get started
                        by creating your first project.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </table>
      </div>
      {isFetching && <div>Fetching More...</div>}
    </>
  );
};

//  <MotionTransition
//       animationKey="grid"
//       className={clsx(
//         `grid`,
//         "@min-xl:grid-col-5 gap-3 @min-3xs:grid-cols-2 @min-lg:grid-cols-4 xl:@min-lg:grid-cols-5"
//       )}
//     ></MotionTransition>
