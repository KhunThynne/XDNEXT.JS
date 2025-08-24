import { graphql } from '@keystone-6/core';
import authenticateAndLinkProvider from './authenticateAndLinkProvider';
type MutationFn = (base: graphql.BaseSchemaMeta) => ReturnType<typeof graphql.field>;
export const mutations = (base: graphql.BaseSchemaMeta) => {
  return { authenticateAndLinkProvider: authenticateAndLinkProvider(base) };
};

const allMutationModules: Record<string, MutationFn> = {
  ...authenticateAndLinkProvider,
};
