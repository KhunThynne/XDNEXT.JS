import { graphql, list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, integer, virtual } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';
import { TypeInfo } from '.keystone/types';
export const UserPoint = list({
  access: allowAll,
  ui: { isHidden: true, labelField: 'total_point' },
  fields: {
    user: relationship({ ref: 'User.point', many: false }),
    total_point: integer({
      defaultValue: 0,
      validation: { isRequired: true, min: 0 },
    }),
    total_spent: virtual({
      ui: { description: 'This current is thai bath(THB)' },
      field: graphql.field({
        type: graphql.Float,
        async resolve(item, args, context) {
          const userPoint = await context.query.UserPoint.findOne({
            where: { id: item.id.toString() },
            query: 'user { id }',
          });

          if (!userPoint?.user?.id) return 0;
          const userId = userPoint.user.id;

          const result = await context.prisma.pointTransaction.aggregate({
            _sum: {
              amount: true,
            },
            where: {
              user: { id: userId },
              status: 'succeeded',
            },
          });
          return result._sum.amount || 0;
        },
      }),
    }),
    ...defaultGlobalField({ includeUpdateAt: true }),
  },
}) satisfies ListConfig<TypeInfo['lists']['UserPoint']>;
