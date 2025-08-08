import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship, select } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';

export const Stock: ListConfig<any> = list({
  access: {
    operation: {
      query: allowAll,
      create: allowAll,
      update: allowAll,
      delete: allowAll,
    },
  },
  ui: {
    isHidden: true,
    // hideDelete: true,
  },
  fields: {
    product: relationship({
      ref: 'Product.stock',
      many: false,
      ui: {
        displayMode: 'select',
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    type: select({
      options: [
        {
          label: 'Limit by available stock',
          value: 'by_stock',
        },
        {
          label: 'One item per user',
          value: 'one_per_user',
        },
      ],
      defaultValue: 'by_stock',
      ui: {
        displayMode: 'segmented-control',
        description:
          'Defines how this product’s stock is managed: limit by stock quantity or allow only one purchase per user.',
      },
      validation: {
        isRequired: true,
      },
    }),
    quantity: integer({
      validation: { isRequired: true, min: 0 },
      ui: {
        description:
          'Specifies how many units of this product are available. This value is used only when the stock type is set to "Limit by available stock".',
      },
    }),
    ...defaultGlobalField({ includeUpdateAt: true }),
  },
  hooks: {
    resolveInput: async ({ resolvedData }) => {
      const now = new Date().toISOString();
      resolvedData.updateAt = now;
      return resolvedData;
    },
  },
});
