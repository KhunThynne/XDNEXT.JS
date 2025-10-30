import { TypeInfo } from '.keystone/types';
import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship, select } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const PointTransaction = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['id', 'userId', 'amount', 'type', 'createdAt'],
    },
  },
  fields: {
    userId: relationship({ ref: 'User', many: true, label: 'User' }),
    type: select({
      options: [
        { label: 'Earn', value: 'earn' },
        { label: 'Redeem', value: 'redeem' },
      ],
      defaultValue: 'Earn',
      ui: {
        displayMode: 'select',
      },
      validation: { isRequired: true },
    }),
    amount: integer(),
    orders: relationship({ ref: 'Order', many: true }),
    description: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    ...defaultGlobalField({ includeCreatedAt: true }),
  },
}) satisfies ListConfig<TypeInfo['lists']['PointTransaction']>;
