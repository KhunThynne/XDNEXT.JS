import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';

import { document } from '@keystone-6/fields-document';

export const FAQ: ListConfig<any> = list({
  access: allowAll,
  ui: {
    isHidden: true,
  },
  fields: {
    question: text({ validation: { isRequired: true } }),
    answer: document({
      formatting: true,
      links: true,
      dividers: true,
    }),
  },
});
