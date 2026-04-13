import { createContext, useContext } from "react";
import type { CartItem, User } from "@/payload-types";
import type { SortingState, Table } from "@tanstack/react-table";
import type {
  UseInfiniteQueryResult,
  InfiniteData,
} from "@tanstack/react-query";
import type { PaginatedDocs } from "payload";

export interface CartDataTableMeta {
  handleDeleteMore: (
    cart: CartItem[],
    coreTable: Table<CartItem>
  ) => Promise<void>;
  handleDelete: (
    idToDelete: CartItem["id"],
    coreTable: Table<CartItem>
  ) => Promise<void>;
}

export interface CartDataTableContextType {
  cartItemsData?: CartItem[];
  selectedCartItems: CartItem[];
  itemsCount: number;
  filter: string;
  sorting: SortingState;
  setSorting: (sorting: SortingState) => void;
  rowSelection: Record<string, boolean>;
  setRowSelection: (rowSelection: Record<string, boolean>) => void;
  userCredit: User["credit"];
  cartQuery: UseInfiniteQueryResult<
    InfiniteData<PaginatedDocs<CartItem>, unknown>,
    Error
  >;
}
export const CartItemsContext = createContext<CartDataTableContextType | null>(
  null
);
export const useCartItemsContext = () => {
  const context = useContext(CartItemsContext);
  if (!context) {
    throw new Error(
      "useCartItemsContext must be used within CartOrderFormProvider"
    );
  }
  return context;
};
