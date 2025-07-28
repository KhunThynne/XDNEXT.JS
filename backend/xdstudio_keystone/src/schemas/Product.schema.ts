import { list, ListConfig } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { relationship, select, text, timestamp } from '@keystone-6/core/fields'
export const Product: ListConfig<any> = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['id', 'name', 'createdAt', 'details'],
      pageSize: 10
    }
  },
  fields: {
    suppilers: relationship({ ref: 'Supplier.products', many: false }),
    name: text({ validation: { isRequired: true } }),
    details: text({
      ui: {
        displayMode: 'textarea'
      }
    }),
    status: select({
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' }
      ],
      defaultValue: 'draft',
      validation: { isRequired: true },
      ui: { displayMode: 'segmented-control' }
    }),
    description: text({
      ui: {
        displayMode: 'textarea'
      }
    }),
    publishedAt: timestamp({
      ui: { itemView: { fieldMode: 'read' } }
    }),
    updateAt: timestamp({
      defaultValue: { kind: 'now' },
      ui: { itemView: { fieldMode: 'read' } }
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' }
      }
    }),
    images: relationship({ ref: 'Image', many: true })
  },
  hooks: {
    resolveInput: ({ resolvedData, operation, item }) => {
      const now = new Date().toISOString()

      resolvedData.updateAt = now

      if (
        resolvedData.status === 'published' &&
        (operation === 'create' || item?.status !== 'published')
      ) {
        resolvedData.publishedAt = now
      }

      return resolvedData
    }
  }
})
