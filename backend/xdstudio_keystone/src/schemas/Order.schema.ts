import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select, timestamp } from '@keystone-6/core/fields';
export const Order: ListConfig<any> = list({
  access: allowAll,
  fields: {
    user: relationship({ ref: 'User.orders', many: false }),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    status: select({
      options: [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Paid', value: 'PAID' },
        { label: 'Cancelled', value: 'CANCELLED' },
        { label: 'Shipped', value: 'SHIPPED' },
        { label: 'Delivered', value: 'DELIVERED' },
      ],
      defaultValue: 'PENDING',
      ui: {
        displayMode: 'segmented-control', // หรือ 'select'
      },
      validation: { isRequired: true },
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' },
      },
    }),
    updateAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
