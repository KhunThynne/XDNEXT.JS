import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship, text, timestamp } from '@keystone-6/core/fields';
import { defaultGlobalField } from './shared/defaultGlobalField';

export const Rating: ListConfig<any> = list({
  access: allowAll,
  ui: {
    label: 'Rating',
  },
  fields: {
    score: integer({
      validation: { isRequired: true, min: 1, max: 5 },
      ui: {
        description: 'Score 1 to 5',
      },
    }),
    comment: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    ...defaultGlobalField({ includeCreatedAt: true, includeUpdateAt: true }),
  },
  hooks: {
    afterOperation: async ({ operation, item, context }) => {
      if (operation === 'create' || operation === 'update' || operation === 'delete') {
        const productId = item.productId;
        if (!productId) return;

        const ratings = await context.query.Rating.findMany({
          where: { product: { id: { equals: productId } } },
          query: 'score',
        });

        const avg = ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length;

        await context.db.Product.updateOne({
          where: { id: productId },
          data: { averageScore: avg },
        });
      }
    },
  },
});
