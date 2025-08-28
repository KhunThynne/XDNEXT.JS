import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, select, password } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const User: ListConfig<any> = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['name', 'username', 'email', 'role'],
      pageSize: 10,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    username: text(),

    provider: text({ defaultValue: 'credentials' }),
    image: text(),
    avartar: relationship({ ref: 'Image', many: false }),
    role: select({
      options: [
        { label: 'Admin', value: 'ADMIN' },
        { label: 'User', value: 'USER' },
        { label: 'Moderator', value: 'MODERATOR' },
        { label: 'Guest', value: 'GUEST' },
      ],
      defaultValue: 'USER',
      ui: { displayMode: 'select' },
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password({ validation: { isRequired: true } }),
    ...defaultGlobalField({ includeCreatedAt: true }),
    accounts: relationship({
      ref: 'Account.user',
      many: true,
      ui: {
        description: 'All provider accounts linked to this user',
        hideCreate: true,
        displayMode: 'count',
      },
    }),
    carts: relationship({
      ref: 'Cart.user',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['status', 'createdAt', 'updateAt'],
        inlineCreate: { fields: ['status'] },
        inlineEdit: { fields: ['status'] },
        linkToItem: true,
      },
    }),
    items: relationship({
      ref: 'UserItem.user',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['item'],
        inlineCreate: { fields: ['item'] },
        inlineEdit: { fields: ['item'] },
        linkToItem: true,
      },
    }),
    point: relationship({
      ref: 'UserPoint.user',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['total_point'],
        inlineCreate: { fields: ['total_point'] },
        inlineEdit: { fields: ['total_point'] },
        linkToItem: true,
        removeMode: 'none',
      },
    }),
    suppiler: relationship({
      ref: 'Supplier.user',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'description'],
        inlineCreate: { fields: ['name', 'description'] },
        inlineEdit: { fields: ['name', 'description'] },
        linkToItem: true,
      },
    }),
    orders: relationship({
      ref: 'Order.user',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['status', 'createdAt'],
        inlineCreate: { fields: ['status'] },
        inlineEdit: { fields: ['status'] },
        linkToItem: true,
      },
    }),
    preference: relationship({
      ref: 'UserPreference.user',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['setting'],
        inlineCreate: { fields: ['setting'] },
        inlineEdit: { fields: ['setting'] },
        linkToItem: true,
        removeMode: 'none',
      },
    }),
    posts: relationship({
      ref: 'Post.author',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['title'],
        inlineCreate: { fields: ['title'] },
        inlineEdit: { fields: ['title'] },
        linkToItem: true,
      },
    }),
  },
  hooks: {
    beforeOperation: async ({ operation, resolvedData, context }) => {
      if (operation === 'create') {
        if (!resolvedData.username && resolvedData.name) {
          resolvedData.username = resolvedData.name;
        }
      }
    },
    afterOperation: async ({ operation, item, context }) => {
      if (operation === 'create') {
        console.log('HI');
        await context.db.Supplier.createOne({
          data: {
            name: `Supplier for ${item.name}`,
            description: `Supplier initails`,
            user: { connect: { id: item.id } },
          },
        });
        await context.db.UserPoint.createOne({
          data: {
            total_point: 0,
            user: { connect: { id: item.id } },
          },
        });

        await context.db.Cart.createOne({
          data: {
            user: { connect: { id: item.id } },
          },
        });
        await context.db.UserPreference.createOne({
          data: {
            user: { connect: { id: item.id } },
          },
        });
      }
    },
  },
});
