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
});
