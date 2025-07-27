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
    suppilersId: relationship({ ref: 'Supplier.products', many: false }),
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
    publishedAt: timestamp(),
    updateAt: timestamp({
      defaultValue: { kind: 'now' }
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
  }
})
