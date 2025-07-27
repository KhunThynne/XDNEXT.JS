import { BaseFields } from '@keystone-6/core'
import { timestamp } from '@keystone-6/core/fields'
import { BaseListTypeInfo } from '@keystone-6/core/types'

export const defaultGlobalField: BaseFields<BaseListTypeInfo> = {
  createdAt: timestamp({
    defaultValue: { kind: 'now' },
    ui: {
      createView: { fieldMode: 'hidden' }
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
