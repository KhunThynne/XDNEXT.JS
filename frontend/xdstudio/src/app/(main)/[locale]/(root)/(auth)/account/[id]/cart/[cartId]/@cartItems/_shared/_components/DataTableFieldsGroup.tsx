import type { CartItem } from "@/payload-types";
import { InputForm } from "@/shared/components/form/InputForm";
import { withFieldGroup } from "@/shared/hooks/useAppForm";
import { Button } from "@/shared/libs/shadcn/ui/button";

import type { Table } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { formCartsOptions } from "../../../_shared/formOptions";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/libs/shadcn/ui/dropdown-menu";
export const DataTableFieldsGroup = withFieldGroup({
  // These values are only used for type-checking, and are not used at runtime
  // This allows you to `...formOpts` from `formOptions` without needing to redeclare the options
  defaultValues: {
    filter: formCartsOptions.defaultValues.filter,
  },
  // Optional, but adds props to the `render` function in addition to `form`
  props: {
    // These props are also set as default values for the `render` function
    table: {} as Table<CartItem>,
  },
  render: function Render({ group, table }) {
    return (
      <div>
        <div className="flex items-center gap-5">
          <group.AppField
            name="filter"
            children={(field) => (
              <field.Input
                placeholder="Filter emails..."
                className="max-w-lg grow"
              />
            )}
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
      </div>
    );
  },
});
