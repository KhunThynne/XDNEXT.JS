import { graphql } from '@keystone-6/core';
import { checkUserProductStatusProvider } from './checkUserProductStatus';

export const queries = (base: graphql.BaseSchemaMeta) => {
  return {
    checkUserProductStatus: checkUserProductStatusProvider(base),
  };
};
