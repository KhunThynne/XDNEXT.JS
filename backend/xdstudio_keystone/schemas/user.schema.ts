// User.ts
import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, password, relationship, timestamp, select } from '@keystone-6/core/fields'

const User = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    password: password({ validation: { isRequired: true } }),
    role: select({
      options: [
        { label: 'Admin', value: 'ADMIN' },
        { label: 'User', value: 'USER' }
      ],
      defaultValue: 'USER',
      ui: { displayMode: 'select' }
    }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } })
  }
})

export default User
