import type { Cart, CartItem, User } from "@/payload-types";
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import { z } from "zod";
export interface CartItemsFormProps {
  cartItems: CartItem[];
  filter: string;
  invalidateCartAction: () => void;
  setValueCart: (field: string, value: any) => void;
}

/**
 * Zod Schema for Cart Order Form validation.
 * Includes detailed documentation for each field and cross-field validation.
 */
export const cartFormSchema = z
  .object({
    /** * Unique identifier for the shopping cart.
     * Required to link the transaction to a specific cart session.
     */
    cartId: z.string().min(1, "Cart ID is required"),

    /** * The unique ID of the user performing the checkout.
     */
    userId: z.string().min(1, "User ID is required"),

    /** * A map of selected item IDs in the cart.
     * Format: { [rowId: string]: boolean }
     */
    selectedCartItemsId: z.record(z.string(), z.boolean()),

    /** * The final price to be paid after all deductions (credits, discounts, taxes).
     */
    grandTotal: z.number().min(0, "Total must be at least 0"),

    /** * Total monetary credit currently available in the user's account.
     */
    availableCredit: z.number().min(0, "Credit cannot be negative"),

    /** * The estimated credit balance remaining after this transaction.
     * Logic: availableCredit - grandTotal.
     */
    remainingCredit: z.number(),
  })
  /**
   * Cross-field validation: Ensures the user has enough credit to cover the total.
   */
  .refine((data) => data.remainingCredit >= 0, {
    message: "ยอดเครดิตไม่พอสำหรับการสั่งซื้อ",
    path: ["remainingCredit"],
  })
  .refine(
    (data) => {
      const selectedIds = Object.values(data.selectedCartItemsId);
      return selectedIds.some((isSelected) => isSelected === true);
    },
    {
      message: "กรุณาเลือกสินค้าอย่างน้อย 1 รายการ",
      path: ["selectedCartItemsId"],
    }
  );

/**
 * Derived TypeScript type from the Zod schema.
 * Use this for form props and component definitions.
 */
export type CartFormProps = z.infer<typeof cartFormSchema>;

export interface CartItemsDatableFormProps {
  columns: ColumnDef<CartItem>[];
  filter: string;
  total: number;
  selected: number;
  invalidateCartAction: () => void;
  setValueCart: (field: string, value: any) => void;
}
