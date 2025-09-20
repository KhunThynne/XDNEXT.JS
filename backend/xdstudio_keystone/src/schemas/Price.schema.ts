import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { float, relationship, select, text } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';

export const Price = list({
  access: allowAll,
  ui: { isHidden: true },
  fields: {
    price: float({ defaultValue: 0 }),

    price_type: select({
      type: 'enum',
      options: [
        { label: 'Retail', value: 'retail' }, // for customers buying single items
        { label: 'Wholesale', value: 'wholesale' }, // for bulk purchase pricing
        { label: 'Base', value: 'base' }, // base price before any markup
      ],
      defaultValue: 'retail',
      ui: {
        displayMode: 'select',
        description:
          'Retail: standard customer price\nWholesale: discounted for bulk buyers\nBase: cost before markup',
      },
    }),

    product: relationship({
      ref: 'Product.price',
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
      },
      many: true,
    }),
    description: text({ ui: { displayMode: 'textarea' } }),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
}) satisfies ListConfig<any>;
