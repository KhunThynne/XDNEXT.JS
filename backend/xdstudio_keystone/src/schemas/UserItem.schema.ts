import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, json } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const UserItem = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['user', 'item', 'createdAt', 'updateAt'],
      pageSize: 10,
    },
    isHidden: true,
  },
  fields: {
    user: relationship({
      ref: 'User.items',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'email'],
        inlineEdit: { fields: ['name', 'email'] },
        linkToItem: true,
        inlineConnect: true,
      },
    }),
    item: relationship({
      ref: 'OrderItem.userItem',
      many: false,
      // ui: { labelField: 'product' },
    }),
    config: json({
      defaultValue: {},
      ui: {},
    }),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
}) satisfies ListConfig<any>;
