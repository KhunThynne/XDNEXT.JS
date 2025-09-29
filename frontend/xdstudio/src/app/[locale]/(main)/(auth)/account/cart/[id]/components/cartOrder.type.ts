import {
  Cart,
  CartItem,
  GetCartQuery,
  User,
} from "@/libs/graphql/generates/graphql";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { Session } from "next-auth";
import { UseFormSetValue } from "react-hook-form";

export interface CartItemsFormProps {
  cartItems: CartItem[];
  filter: string;
  invalidateCartAction: () => void;
  setValueCart: UseFormSetValue<CartFormProps>;
}
export interface CartFormProps {
  cartItems: CartItem[];
  session: Session;
  point?: User["point"];
  cartId: Cart["id"];
  userId: User["id"];
}

export interface CartItemsDatableFormProps {
  columns: ColumnDef<CartItem>[];
  filter: string;
  total: Cart["itemsCount"];
  selected: number;
  cartItems: CartItem[];

  invalidateCartAction: () => void;
  setValueCart: UseFormSetValue<CartFormProps>;
}
