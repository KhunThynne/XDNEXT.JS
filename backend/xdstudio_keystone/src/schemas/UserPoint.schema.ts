import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, integer } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
export const UserPoint = list({
  access: allowAll,
  ui: { isHidden: true, labelField: 'total_point' },
  fields: {
    user: relationship({ ref: 'User.point', many: false }),
    total_point: integer({
      defaultValue: 0,
      validation: { isRequired: true, min: 0 },
    }),
    ...defaultGlobalField({ includeUpdateAt: true }),
  },
}) satisfies ListConfig<any>;
