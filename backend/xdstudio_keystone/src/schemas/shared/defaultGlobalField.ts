import { BaseFields } from '@keystone-6/core';
import { timestamp } from '@keystone-6/core/fields';
import { BaseListTypeInfo } from '@keystone-6/core/types';

export const defaultGlobalField: BaseFields<BaseListTypeInfo> = {
  // The date and time when the content was published
  publishedAt: timestamp({
    ui: {
      description: 'The date this content was published.',
      createView: { fieldMode: 'hidden' },
      itemView: { fieldMode: 'read' },
    },
  }),

  // The last time this item was updated
  updateAt: timestamp({
    defaultValue: { kind: 'now' },
    ui: {
      description: 'The last time this item was updated.',
      createView: { fieldMode: 'hidden' },
      itemView: { fieldMode: 'read' },
    },
  }),

  // The date and time when the item was created
  createdAt: timestamp({
    defaultValue: { kind: 'now' },
    validation: { isRequired: false },
    ui: {
      description: 'The date this item was created.',
      createView: { fieldMode: 'hidden' },
      itemView: { fieldMode: 'read' },
    },
  }),
};
