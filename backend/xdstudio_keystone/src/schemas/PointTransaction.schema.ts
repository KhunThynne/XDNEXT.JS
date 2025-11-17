import { TypeInfo } from '.keystone/types';
import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, json, relationship, select, text, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { defaultGlobalField } from './shared/defaultGlobalField';
import { publishRealtimeEvent } from '../shared/libs/redis/publisher';
export const PointTransaction = list({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ['id', 'userId', 'amount', 'type', 'createdAt'],
    },
  },
  fields: {
    user: relationship({
      ref: 'User',
      many: false,
      label: 'User',
      ui: { description: 'Owner of transection' },
    }),
    type: select({
      options: [
        { label: 'Earn', value: 'earn' },
        { label: 'Redeem', value: 'redeem' },
      ],
      defaultValue: 'Earn',
      ui: {
        displayMode: 'select',
      },
      validation: { isRequired: true },
    }),
    amount: integer(),
    status: select({
      options: [
        { label: 'Requires Payment Method', value: 'requires_payment_method' },
        { label: 'Requires Confirmation', value: 'requires_confirmation' },
        { label: 'Requires Action', value: 'requires_action' },
        { label: 'Processing', value: 'processing' },
        { label: 'Requires Capture', value: 'requires_capture' },
        { label: 'Canceled', value: 'canceled' },
        { label: 'Succeeded', value: 'succeeded' },
      ],
      defaultValue: 'requires_payment_method',
      ui: {
        displayMode: 'select', // dropdown
      },
    }),
    orders: relationship({ ref: 'Order', many: true }),
    metaData: json(),
    expiredAt: timestamp(),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
  hooks: {
    afterOperation: async (args) => {
      // 4. เช็กว่าเป็นการ 'update' และ 'point' เปลี่ยนแปลงจริง
      if (args.operation === 'update' && args.item && args.originalItem) {
        console.log(`[Keystone Hook] Point changed for ${args.item.id}, publishing to Redis...`);
        try {
          await publishRealtimeEvent({
            type: 'payment.success',
            data: { amount: args.item.amount ?? 0, userId: args.item.userId ?? '' },
          });
        } catch {
          console.log(`[Keystone Hook] Point changed for ${args.item.id}, Error`);
        }
      }
    },
  },
}) satisfies ListConfig<TypeInfo['lists']['PointTransaction']>;
