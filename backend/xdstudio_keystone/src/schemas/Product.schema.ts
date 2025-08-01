import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select, text, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const Product: ListConfig<any> = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['id', 'name', 'createdAt', 'details'],
      pageSize: 10,
    },
  },
  fields: {
    status: select({
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'draft',
      validation: { isRequired: true },
      ui: { displayMode: 'segmented-control' },
    }),
    suppilers: relationship({
      ref: 'Supplier.products',
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'description'],
        inlineEdit: { fields: ['name', 'description'] },
        linkToItem: true,
        inlineConnect: true,
      },
      many: false,
    }),
    tags: relationship({
      ref: 'Tag',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        inlineEdit: { fields: ['name'] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ['name'] },
      },
    }),
    name: text({ ui: { description: 'Product name.' }, validation: { isRequired: true } }),
    price: relationship({
      ref: 'Price.product',
      ui: {
        displayMode: 'select',
        labelField: 'price',
        hideCreate: false,
        createView: {
          fieldMode: 'edit',
        },
      },
      many: false,
    }),

    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    details: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    images: relationship({
      ref: 'Image',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'src'],
        inlineCreate: { fields: ['name', 'src'] },
        inlineEdit: { fields: ['name', 'src'] },
        inlineConnect: true, // ✅ ตรงนี้จะช่วยให้เลือกจากรายการที่มีอยู่ได้
      },
    }),
    ...defaultGlobalField(),
  },
  hooks: {
    resolveInput: ({ resolvedData, operation, item }) => {
      const now = new Date().toISOString();

      resolvedData.updateAt = now;

      if (
        resolvedData.status === 'published' &&
        (operation === 'create' || item?.status !== 'published')
      ) {
        resolvedData.publishedAt = now;
      }

      return resolvedData;
    },
  },
});
