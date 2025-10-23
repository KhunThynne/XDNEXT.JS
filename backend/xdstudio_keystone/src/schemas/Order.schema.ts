import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select, timestamp } from '@keystone-6/core/fields';
import { TypeInfo, type Context, type OrderCreateInput } from '.keystone/types';

export const Order = list({
  access: allowAll,
  ui: {
    listView: { defaultFieldMode: 'read', initialColumns: ['id', 'user', 'createdAt', 'updateAt'] },
  },
  fields: {
    user: relationship({ ref: 'User.orders', many: false }),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    status: select({
      options: [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Paid', value: 'PAID' },
        { label: 'Cancelled', value: 'CANCELLED' },
        { label: 'Shipped', value: 'SHIPPED' },
        { label: 'Delivered', value: 'DELIVERED' },
      ],
      defaultValue: 'PENDING',
      ui: {
        displayMode: 'segmented-control', // หรือ 'select'
      },
      validation: { isRequired: true },
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        createView: { fieldMode: 'edit' },
        itemView: { fieldMode: 'read' },
      },
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
  hooks: {
    afterOperation: async (args) => {
      const { operation, item, inputData, context } = args;

      console.log(item);
      console.log(inputData);
      if (operation === 'create') {
        const userId = inputData?.user?.connect?.id;
        const createData = inputData.items?.create;
        const itemsArray = createData
          ? Array.isArray(createData)
            ? createData
            : [createData]
          : [];
        const summaryItemPointTotal = itemsArray.reduce((total, item) => {
          return total + (item.unitPrice ?? 0);
        }, 0);
        const args = { context, summaryItemPointTotal, userId };
        // await UpdateUserPoint(args);
        // await CreatePointTransaction(args);
      }
    },
  },
}) satisfies ListConfig<TypeInfo['lists']['Order']>;

interface ArgsOrder {
  userId: string | null | undefined;
  summaryItemPointTotal: number;
  context: Context;
}

const UpdateUserPoint = async ({ userId, context, summaryItemPointTotal }: ArgsOrder) => {
  if (userId) {
    if (summaryItemPointTotal > 0) {
      try {
        await context.prisma.userPoint.updateMany({
          where: {
            user: { id: userId },
          },
          data: {
            total_point: {
              decrement: summaryItemPointTotal,
            },
          },
        });
      } catch (error) {
        console.error(`Failed to update points for user: ${userId}`, error);
        throw new Error('Failed to update user points.');
      }
    }
  }
};

const CreatePointTransaction = async ({ userId, context, summaryItemPointTotal }: ArgsOrder) => {
  if (userId) {
    try {
      await context.db.PointTransaction.createOne({
        data: {
          userId: { connect: { id: userId } },
          amount: summaryItemPointTotal,
        },
      });
    } catch (error) {
      console.error(`Failed to update points for user: ${userId}`, error);
      throw new Error('Failed to update user points.');
    }
  }
};
