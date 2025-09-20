import { BaseFields } from '@keystone-6/core';
import { timestamp } from '@keystone-6/core/fields';
import { BaseListTypeInfo } from '@keystone-6/core/types';

type TimestampOptions = {
  includeUpdateAt?: boolean;
  includePublishedAt?: boolean;
  includeCreatedAt?: boolean;
};

export function defaultGlobalField(
  options: TimestampOptions = {
    includeUpdateAt: true,
    includeCreatedAt: true,
    includePublishedAt: true,
  },
): BaseFields<BaseListTypeInfo> {
  const fields: BaseFields<BaseListTypeInfo> = {};

  if (options.includePublishedAt) {
    fields.publishedAt = timestamp({
      ui: {
        description: 'The date this content was published.',
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    });
  }
  if (options.includeCreatedAt) {
    fields.createdAt = timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: false },
      ui: {
        description: 'The date this item was created.',
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    });
  }
  if (options.includeUpdateAt) {
    fields.updateAt = timestamp({
      defaultValue: { kind: 'now' },
      ui: {
        description: 'The last time this item was updated.',
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    });
  }

  return fields;
}
