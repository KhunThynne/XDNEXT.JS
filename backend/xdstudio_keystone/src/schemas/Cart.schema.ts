import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const Cart: ListConfig<any> = list({
  access: allowAll,
  fields: {
    user: relationship({ ref: 'User.carts', many: false, ui: { displayMode: 'select' } }),
    status: select({
      options: [
        { label: 'Active', value: 'ACTIVE' },
        { label: 'Saved', value: 'SAVED' },
        { label: 'Abandoned', value: 'ABANDONED' },
      ],
      defaultValue: 'ACTIVE',
      ui: { displayMode: 'segmented-control' },
    }),
    items: relationship({ ref: 'CartItem.cart', many: true }),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
});
