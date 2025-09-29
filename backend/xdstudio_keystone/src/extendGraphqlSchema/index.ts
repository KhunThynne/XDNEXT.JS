import { graphql } from '@keystone-6/core';
import { mutations } from './mutations';
import { queries } from './queries';

export const extendGraphqlSchema = graphql.extend((base) => {
  return {
    mutation: {
      ...mutations(base),
    },
    query: {
      ...queries(base),
    },
  };
});
