import type { Cart, CartItem, User } from "@/payload-types";
import type { ColumnDef } from "@tanstack/react-table";
import type { Session } from "next-auth";
import type { UseFormSetValue } from "react-hook-form";

export interface CartItemsFormProps {
  cartItems: CartItem[];
  filter: string;
  invalidateCartAction: () => void;
  setValueCart: UseFormSetValue<CartFormProps>;
}
export interface CartFormProps {
  session?: Session;
  grandTotal: number;
  availablePoint: number;
  remainingpointPayment: number;
  credit?: User["credit"];
  cartId: Cart["id"];
  userId: User["id"];
}

export interface CartItemsDatableFormProps {
  columns: ColumnDef<CartItem>[];
  filter: string;
  total: number;
  selected: number;
  cartItems: CartItem[];

  invalidateCartAction: () => void;
  setValueCart: UseFormSetValue<CartFormProps>;
}
