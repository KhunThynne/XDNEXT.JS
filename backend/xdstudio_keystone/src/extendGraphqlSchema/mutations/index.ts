import { graphql } from '@keystone-6/core';
import authenticateAndLinkProvider from './authenticateAndLinkProvider';

export const mutations = (base: graphql.BaseSchemaMeta) => {
  return {
    authenticateAndLinkProvider: authenticateAndLinkProvider(base),
  };
};
