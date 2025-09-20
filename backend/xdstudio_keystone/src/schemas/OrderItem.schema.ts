import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship, timestamp } from '@keystone-6/core/fields';
export const OrderItem = list({
  access: allowAll,
  ui: {
    isHidden: true,
  },
  fields: {
    order: relationship({ ref: 'Order.items', many: false }),
    product: relationship({ ref: 'Product' }),
    userItem: relationship({ ref: 'UserItem.item', many: false }),
    unitPrice: integer(),
    updateAt: timestamp(),
  },
}) satisfies ListConfig<any>;
