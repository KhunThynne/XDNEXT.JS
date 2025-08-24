import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, integer } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const UserPoint: ListConfig<any> = list({
  access: allowAll,
  ui: { isHidden: true },
  fields: {
    user: relationship({ ref: 'User.point', many: false }),
    total_point: integer({
      defaultValue: 0,
      validation: { isRequired: true, min: 0 },
    }),
    ...defaultGlobalField({ includeUpdateAt: true }),
  },
});
