import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { float, relationship, select, text, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { defaultGlobalField } from './shared/defaultGlobalField';
import { TypeInfo } from '.keystone/types';
export const Product = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['id', 'name', 'createdAt', 'details', 'youtubeId'],
      pageSize: 10,
    },
    labelField: 'name',
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
      componentBlocks: {},
    }),
    tag: relationship({
      ref: 'Tag',
      ui: {
        displayMode: 'select',
        labelField: 'name',
        hideCreate: false,
        createView: {
          fieldMode: 'edit',
        },
      },
      many: true,
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
    faqs: relationship({
      ref: 'FAQ',
      many: true,
      ui: {
        displayMode: 'cards', // Display FAQs as cards with slide-out effect for inline create/edit
        cardFields: ['question', 'answer'], // Show both question and answer on the card
        inlineCreate: { fields: ['question', 'answer'] }, // Fields to fill when creating FAQ inline
        inlineEdit: { fields: ['question', 'answer'] }, // Fields editable inline
        description:
          'A list of FAQs related to this product. Each FAQ has a question and an answer.', // <-- English description
      },
    }),
    averageScore: float({
      validation: { min: 0, max: 5 },
      defaultValue: 0,
      ui: {
        description: 'Average Score form Ratings',
      },
    }),
    version: text({ ui: { description: 'Product version .' }, defaultValue: 'beta' }),
    ratings: relationship({
      ref: 'Rating',
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'hidden' },
      },
    }),

    youtubeId: text({
      validation: {
        length: { max: 20 },
      },
      ui: {
        description:
          'YouTube video ID (เช่น dQw4w9WgXcQ). สามารถวางเป็น URL ก็ได้ ระบบจะตัดให้เอง',
      },
    }),

    gallery: relationship({
      ref: 'Image',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'src'],
        inlineCreate: { fields: ['name', 'src'] },
        inlineEdit: { fields: ['name', 'src'] },
        inlineConnect: true,
        description: 'รูปภาพเพิ่มเติมสำหรับแสดงเป็นแกลเลอรีของสินค้า',
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

      if (typeof resolvedData.youtubeId === 'string' && resolvedData.youtubeId.trim()) {
        const raw = resolvedData.youtubeId.trim();
        const match =
          raw.match(/(?:v=|\/embed\/|youtu\.be\/|\/shorts\/)([A-Za-z0-9_-]{6,20})/) ||
          raw.match(/^([A-Za-z0-9_-]{6,20})$/);
        if (match) {
          resolvedData.youtubeId = match[1];
        } else {
          resolvedData.youtubeId = raw;
        }
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
}) satisfies ListConfig<TypeInfo['lists']['Product']>;
