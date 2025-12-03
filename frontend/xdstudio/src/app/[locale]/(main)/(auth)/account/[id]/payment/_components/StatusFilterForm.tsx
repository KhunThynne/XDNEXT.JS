import React from "react";
import type { Table as TanStackTable } from "@tanstack/react-table";
import { Button } from "@/libs/shadcn/ui/button";
import { Checkbox } from "@/libs/shadcn/custom/checkbox";
import { Label } from "@/libs/shadcn/ui/label";
import {
  Item,
  ItemContent,
  ItemHeader,
  ItemTitle,
} from "@/libs/shadcn/ui/item";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/libs/shadcn/ui/dropdown-menu";
import { ChevronDown, Filter } from "lucide-react";

type RowData = any;

interface StatusFilterProps {
  table: TanStackTable<RowData>;
  columnId: string;
  allStatuses: string[];
}

function StatusFilterForm({ table, columnId, allStatuses }: StatusFilterProps) {
  const column = table.getColumn(columnId);
  if (!column) return null;

  const filterValue = (column.getFilterValue() as string[] | undefined) || [];

  const handleCheckboxChange = (status: string, checked: boolean) => {
    let newFilterValue: string[];

    if (checked) {
      newFilterValue = [...filterValue, status];
    } else {
      newFilterValue = filterValue.filter((v) => v !== status);
    }

    column.setFilterValue(
      newFilterValue.length > 0 ? newFilterValue : undefined
    );
  };

  return (
    <form className="flex justify-between">
      {/* <Button
        type="button"
        variant="outline"
        onClick={() => column.setFilterValue(undefined)}
      >
        Clear Filter
      </Button> */}
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <Filter className="size-3.5 opacity-50 transition-opacity hover:opacity-100 data-[state=open]:opacity-100" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {allStatuses.map((status) => {
            return (
              <DropdownMenuCheckboxItem
                key={`status-${status}-${column.id}`}
                className="capitalize"
                id={`status-${status}`}
                checked={filterValue.includes(status)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(status, checked as boolean)
                }
              >
                <Label
                  htmlFor={`status-${status}`}
                  className="text-sm font-normal capitalize"
                >
                  {status.replace(/_/g, " ")}
                </Label>
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </form>
  );
}
export default StatusFilterForm;
// <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
//     {allStatuses.map((status) => (
//       <div key={status} className="flex items-center space-x-2">
//         <Checkbox
//           id={`status-${status}`}
//           checked={filterValue.includes(status)}
//           onCheckedChange={(checked) =>
//             handleCheckboxChange(status, checked as boolean)
//           }
//         />
//         <Label
//           htmlFor={`status-${status}`}
//           className="text-sm font-normal capitalize"
//         >
//           {status.replace(/_/g, " ")}{" "}
//           {/* ปรับให้ Status อ่านง่ายขึ้น */}
//         </Label>
//       </div>
//     ))}
//   </div>
