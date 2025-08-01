import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship } from '@keystone-6/core/fields';

export const Supplier: ListConfig<any> = list({
  access: allowAll,
  fields: {
    user: relationship({
      ref: 'User.suppiler',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['username', 'email'],
        inlineEdit: { fields: ['username', 'email'] },
        linkToItem: true,
        inlineConnect: true,
      },
    }),
    products: relationship({
      ref: 'Product.suppilers',
      many: true,
      ui: {
        description: 'Related products from this supplier.',
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
      },
    }),

    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: 'textarea' } }),
  },

  hooks: {
    validateInput: ({ resolvedData, addValidationError }) => {
      if (!resolvedData.user) {
        addValidationError('User is required.');
      }
    },
  },
});
