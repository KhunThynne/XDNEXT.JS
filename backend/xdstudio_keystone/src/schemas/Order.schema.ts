import { list, ListConfig } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { relationship, timestamp } from '@keystone-6/core/fields'
export const Order: ListConfig<any> = list({
  access: allowAll,
  fields: {
    user: relationship({ ref: 'User.order', many: false }),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' }
      }
    }),
    updateAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' }
      }
    })
  }
})
