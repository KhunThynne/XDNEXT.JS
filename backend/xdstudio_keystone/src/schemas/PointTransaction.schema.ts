import { list, ListConfig } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { integer, relationship, select } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
export const PointTransaction: ListConfig<any> = list({
  access: allowAll,
  fields: {
    userId: relationship({ ref: 'User', many: true }),
    type: select({
      options: [
        { label: 'Earn', value: 'earn' },
        { label: 'Redeem', value: 'redeem' }
      ],
      defaultValue: 'Earn',
      ui: {
        displayMode: 'select'
      },
      validation: { isRequired: true }
    }),
    amount: integer(),
    description: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    })
  }
})
