import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, select, timestamp, password } from '@keystone-6/core/fields';
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
    username: text({ validation: { isRequired: true } }),
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
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
    password: password({ validation: { isRequired: true } }),
    item: relationship({ ref: 'UserItem.user', many: true }),
    point: relationship({ ref: 'UserPoint.user', many: false }),
    suppiler: relationship({ ref: 'Supplier.user', many: true }),
    order: relationship({ ref: 'Order.user', many: true }),
    preference: relationship({ ref: 'UserPreference.user', many: false }),
    posts: relationship({ ref: 'Post.author', many: true }),
  },
  hooks: {
    afterOperation: async ({ operation, item, context }) => {
      if (operation === 'create') {
        await context.db.Supplier.createOne({
          data: {
            supplierName: `Supplier for ${item.name}`,
            supplierDetails: `Supplier initails`,
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
