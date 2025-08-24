import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship } from '@keystone-6/core/fields';

export const CartItem: ListConfig<any> = list({
  access: allowAll,
  ui: {
    isHidden: true,
  },
  fields: {
    cart: relationship({ ref: 'Cart.items', many: false, ui: { displayMode: 'select' } }),
    product: relationship({ ref: 'Product', many: false, ui: { displayMode: 'select' } }),
    quantity: integer({ defaultValue: 1, validation: { isRequired: true, min: 1 } }),
  },
  hooks: {
    async resolveInput({ operation, inputData, context }) {
      if (operation === 'create') {
        const cartId = inputData.cart?.connect?.id;
        const productId = inputData.product?.connect?.id;

        if (cartId && productId) {
          // เช็คว่ามี CartItem ที่ cartId + productId อยู่แล้วไหม
          const existingItems = await context.db.CartItem.findMany({
            where: {
              cart: { id: { equals: cartId } },
              product: { id: { equals: productId } },
            },
          });

          if (existingItems.length > 0) {
            // ถ้ามี ให้เพิ่ม quantity แทนการสร้างใหม่
            const existingItem = existingItems[0];
            let quantity = existingItem.quantity + (inputData.quantity ?? 1);
            if (existingItem.product.stock.type === 'one_per_user') {
              quantity = 1;
            }
            await context.db.CartItem.updateOne({
              where: { id: existingItem.id },
              data: quantity,
            });

            // คืนค่า `undefined` เพื่อบอก Keystone **ไม่ต้องสร้าง CartItem ใหม่**
            return undefined;
          }
        }
      }

      // สำหรับ update หรือกรณีอื่น คืนค่า inputData ตามปกติ
      return inputData;
    },
  },
});
