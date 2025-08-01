import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, timestamp, integer } from '@keystone-6/core/fields';
export const UserPoint: ListConfig<any> = list({
  access: allowAll,
  ui: { isHidden: true },
  fields: {
    user: relationship({ ref: 'User.point', many: false }),
    total_point: integer({
      defaultValue: 0,
      validation: { isRequired: true, min: 0 },
    }),
    updateAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
