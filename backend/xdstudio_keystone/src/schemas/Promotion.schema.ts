import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, select, text, timestamp } from '@keystone-6/core/fields';
export const Promotion = list({
  access: allowAll,
  fields: {
    name: text(),
    discountType: select({
      options: [
        { label: 'Percent', value: 'percent' },
        { label: 'Fixed', value: 'fixed' },
        { label: 'Bogo', value: 'bogo' },
      ],
      defaultValue: 'Percent',
      ui: {
        displayMode: 'select',
      },
    }),
    discountValue: integer({ defaultValue: 0 }),
    publishedAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
}) satisfies ListConfig<any>;
