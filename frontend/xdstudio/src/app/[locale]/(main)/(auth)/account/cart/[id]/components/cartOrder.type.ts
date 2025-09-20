import {
  Cart,
  CartItem,
  User,
  UserPoint,
} from "@/libs/graphql/generates/graphql";
import { Session } from "next-auth";
import { UseFormSetValue } from "react-hook-form";

export interface OrderFormProps {
  cartItems: CartItem[];
  invalidateCart: () => void;
  setValueCart: UseFormSetValue<CartOrderFormProps>;
}
export interface CartOrderFormProps {
  cartsOrderItem: CartItem[];
  session: Session;
  point?: User["point"];
  cartId: Cart["id"];
  userId: User["id"];
}
