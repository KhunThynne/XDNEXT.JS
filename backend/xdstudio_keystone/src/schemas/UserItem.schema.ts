import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, timestamp, json } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const UserItem: ListConfig<any> = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['userId', 'createdAt'],
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
    }),
    config: json({
      defaultValue: {},
      ui: {},
    }),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
});
