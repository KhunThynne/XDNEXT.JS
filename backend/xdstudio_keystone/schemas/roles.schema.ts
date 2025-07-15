import { select } from '@keystone-6/core/fields'

export const roleOptions = (): ReturnType<typeof select> => {
  return select({
    options: [
      { label: 'Admin', value: 'ADMIN' },
      { label: 'User', value: 'USER' },
      { label: 'Moderator', value: 'MODERATOR' },
      { label: 'Guest', value: 'GUEST' }
    ],
    defaultValue: 'USER',
    ui: {
      displayMode: 'select'
    }
  })
}
