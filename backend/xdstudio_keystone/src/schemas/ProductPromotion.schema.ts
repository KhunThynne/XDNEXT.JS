import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, timestamp } from '@keystone-6/core/fields';
export const ProductPromotion: ListConfig<any> = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['id', 'name', 'createdAt', 'details'],
      pageSize: 10,
    },
  },
  fields: {
    productId: relationship({ ref: 'Product', many: false }),
    promotionId: relationship({ ref: 'Promotion', many: true }),
    publishedAt: timestamp(),
    images: relationship({ ref: 'Image', many: true }),
  },
});
