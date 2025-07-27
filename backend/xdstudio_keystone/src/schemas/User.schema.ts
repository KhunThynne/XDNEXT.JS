import { list, ListConfig } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship, select, timestamp, password } from '@keystone-6/core/fields'
export const User: ListConfig<any> = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['name', 'username', 'email', 'role'],
      pageSize: 10
    }
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    username: text({ validation: { isRequired: true } }),
    provider: text({ defaultValue: 'credentials' }),
    image: text(),
    images: relationship({ ref: 'Image', many: true }),
    role: select({
      options: [
        { label: 'Admin', value: 'ADMIN' },
        { label: 'User', value: 'USER' },
        { label: 'Moderator', value: 'MODERATOR' },
        { label: 'Guest', value: 'GUEST' }
      ],
      defaultValue: 'USER',
      ui: { displayMode: 'select' }
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique'
    }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
    password: password({ validation: { isRequired: true } }),
    yourItem: relationship({ ref: 'UserItem.userId', many: true }),
    yourPoint: relationship({ ref: 'UserPoint.userId', many: false }),
    yourSuppiler: relationship({ ref: 'Suppiler.userId', many: true }),
    order: relationship({ ref: 'Order.userId', many: true }),
    preference: relationship({ ref: 'UserPreference.userId', many: false }),
    posts: relationship({ ref: 'Post.author', many: true })
  }
})
