import { list, ListConfig } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { text, relationship } from '@keystone-6/core/fields'

export const Supplier: ListConfig<any> = list({
  access: allowAll,
  fields: {
    userId: relationship({ ref: 'User.yourSuppiler', many: false }),
    products: relationship({ ref: 'Product.suppilersId', many: true }),
    supplierName: text(),
    supplierDetails: text()
  }
})
