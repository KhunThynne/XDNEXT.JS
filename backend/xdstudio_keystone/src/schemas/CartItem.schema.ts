import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
import { TypeInfo } from '.keystone/types';

export const CartItem = list({
  access: allowAll,
  ui: {
    isHidden: true,
  },
  fields: {
    cart: relationship({ ref: 'Cart.items', many: false, ui: { displayMode: 'select' } }),
    product: relationship({ ref: 'Product', many: false, ui: { displayMode: 'select' } }),
    quantity: integer({ defaultValue: 1, validation: { isRequired: true, min: 1 } }),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
  hooks: {
    async resolveInput({ operation, inputData, context, resolvedData }) {
      // if (operation === 'create') {
      //   const cartId = inputData.cart?.connect?.id;
      //   const productId = inputData.product?.connect?.id;

      //   if (cartId && productId) {
      //     const existingItems = await context.db.CartItem.findMany({
      //       where: {
      //         cart: { id: { equals: cartId } },
      //         product: { id: { equals: productId } },
      //       },
      //     });

      //     if (existingItems.length > 0) {
      //       const existingItem = existingItems[0];
      //       if (existingItem?.product?.stock) {
      //         let quantity = existingItem?.quantity + (inputData.quantity ?? 1);
      //         if (existingItem?.product?.stock?.type === 'one_per_user') {
      //           quantity = 1;
      //         }
      //         await context.db.CartItem.updateOne({
      //           where: { id: existingItem.id },
      //           data: quantity,
      //         });
      //       }

      //       return undefined;
      //     }
      //   }
      // }

      return resolvedData;
    },
  },
}) satisfies ListConfig<TypeInfo['lists']['CartItem']>;
