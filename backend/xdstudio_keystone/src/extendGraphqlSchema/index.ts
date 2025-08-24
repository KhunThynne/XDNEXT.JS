import { graphql } from '@keystone-6/core';
import { mutations } from './mutations';

export const extendGraphqlSchema = graphql.extend((base) => {
  return {
    mutation: {
      ...mutations(base),
    },
  };
});
