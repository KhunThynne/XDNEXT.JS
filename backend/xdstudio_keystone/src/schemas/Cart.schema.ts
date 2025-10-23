import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
import { TypeInfo } from '.keystone/types';
export const Cart = list({
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
    items: relationship({
      ref: 'CartItem.cart',
      many: true,
      ui: {
        // displayMode: 'cards',
        // cardFields: ['product', 'quantity'],
        // inlineEdit: { fields: ['quantity'] },
        // inlineCreate: { fields: ['product', 'quantity'] },
      },
    }),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
}) satisfies ListConfig<TypeInfo['lists']['Cart']>;
