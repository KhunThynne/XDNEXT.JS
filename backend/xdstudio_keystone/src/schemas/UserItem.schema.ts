import { list, ListConfig } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship, select, timestamp, password, json } from '@keystone-6/core/fields'
export const UserItem: ListConfig<any> = list({
  access: allowAll,
  ui: {
    label: 'User Product',
    listView: {
      initialColumns: ['userId', 'createdAt'],
      pageSize: 10
    }
  },
  fields: {
    userId: relationship({
      ref: 'User.yourItem',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'email'],
        inlineEdit: { fields: ['name', 'email'] },
        linkToItem: true,
        inlineConnect: true
      }
    }),

    productId: relationship({
      ref: 'Product'
    }),
    item: relationship({
      ref: 'OrderItem.userItem',
      many: false
    }),
    config: json({
      defaultValue: {},
      ui: {}
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      ui: {
        itemView: { fieldMode: 'read' }
      }
    }),
    updateAt: timestamp({
      defaultValue: { kind: 'now' }
    })
  }
})
