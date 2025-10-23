import { TypeInfo } from '.keystone/types';
import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship, timestamp } from '@keystone-6/core/fields';
export const OrderItem = list({
  access: allowAll,
  ui: {
    isHidden: true,
  },

  fields: {
    order: relationship({
      ref: 'Order.items',
      many: false,
      ui: {
        itemView: { fieldMode: 'read' },
        createView: { fieldMode: 'hidden' },
      },
    }),
    product: relationship({ ref: 'Product', many: false }),
    userItem: relationship({ ref: 'UserItem.item', many: false }),
    unitPrice: integer(),
    updateAt: timestamp(),
  },
}) satisfies ListConfig<TypeInfo['lists']['OrderItem']>;
