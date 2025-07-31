import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
export const UserPreference: ListConfig<any> = list({
  access: allowAll,
  ui: {
    label: 'User Preference',
    listView: {
      initialColumns: ['userId'],
    },
  },
  fields: {
    user: relationship({
      ref: 'User.preference',
      ui: {
        displayMode: 'select',
      },
      many: false,
    }),
    setting: document({
      formatting: true,
      links: true,
      dividers: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
    }),
  },
});
