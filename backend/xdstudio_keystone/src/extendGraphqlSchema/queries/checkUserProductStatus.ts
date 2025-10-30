import { graphql } from '@keystone-6/core';
import { Context } from '.keystone/types';

interface CheckProductSuccess {
  productId: string;
  inCart: boolean;
  inUserItem: boolean;
}

interface CheckProductFailure {
  message: string;
}

export const checkUserProductStatusProvider = (base: graphql.BaseSchemaMeta) => {
  const CheckProductSuccessObject = graphql.object<CheckProductSuccess>()({
    name: 'CheckProductSuccess',
    fields: {
      productId: graphql.field({ type: graphql.nonNull(graphql.String) }),
      inCart: graphql.field({ type: graphql.nonNull(graphql.Boolean) }),
      inUserItem: graphql.field({ type: graphql.nonNull(graphql.Boolean) }),
    },
  });

  const CheckProductFailureObject = graphql.object<CheckProductFailure>()({
    name: 'CheckProductFailure',
    fields: {
      message: graphql.field({ type: graphql.nonNull(graphql.String) }),
    },
  });

  const CheckProductPayload = graphql.union({
    name: 'CheckProductResponse',
    types: [CheckProductSuccessObject, CheckProductFailureObject],
    resolveType: (value) => ('productId' in value ? 'CheckProductSuccess' : 'CheckProductFailure'),
  });

  return graphql.field({
    type: CheckProductPayload,
    args: {
      productId: graphql.arg({ type: graphql.nonNull(graphql.String) }),
      userId: graphql.arg({ type: graphql.nonNull(graphql.String) }),
    },
    async resolve(_, { productId, userId }, context: Context) {
      try {
        const cartItems = await context.db.CartItem.findMany({
          where: {
            cart: {
              user: { id: { equals: userId } },
            },
            product: { id: { equals: productId } },
          },
        });

        const inventoryItems = await context.db.UserItem.findMany({
          where: {
            user: { id: { equals: userId } },
            item: { product: { id: { equals: productId } } },
          },
        });

        return {
          productId,
          inCart: cartItems.length > 0,
          inUserItem: inventoryItems.length > 0,
        };
      } catch (error) {
        return {
          message: (error as Error).message || 'Unknown error',
        };
      }
    },
  });
};
