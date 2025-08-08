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
    stock: relationship({
      ref: 'Stock.product',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['quantity', 'type', 'updateAt'],
        inlineEdit: { fields: ['quantity', 'type'] },
        linkToItem: true,
        removeMode: 'none',
        // inlineConnect: true,
      },
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
        inlineConnect: true,
      },
    }),
    ...defaultGlobalField(),
  },
  hooks: {
    resolveInput: async ({ resolvedData, operation, item }) => {
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
    beforeOperation: async ({ operation, item, context }) => {
      if (operation === 'delete') {
        const stockId = item?.stockId;
        if (stockId) {
          await context.prisma.stock.delete({
            where: { id: stockId },
          });
        }
      }
    },
    afterOperation: async ({ operation, item, context }) => {
      if (operation === 'create') {
        const stocks = await context.db.Stock.findMany({
          where: { product: { id: { equals: item.id } } },
        });

        if (stocks.length === 0) {
          await context.db.Stock.createOne({
            data: {
              product: { connect: { id: item.id } },
              quantity: 0,
            },
          });
        }
      }
    },
  },
});
