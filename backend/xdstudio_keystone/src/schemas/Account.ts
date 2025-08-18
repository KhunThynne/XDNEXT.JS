import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship } from '@keystone-6/core/fields';

export const Account = list({
  access: allowAll,
  fields: {
    provider: text(),
    providerAccountId: text(),
    user: relationship({ ref: 'User.accounts' }),
  },
});
