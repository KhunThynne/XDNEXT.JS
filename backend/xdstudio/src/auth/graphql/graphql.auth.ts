import { makeExecutableSchema } from '@graphql-tools/schema';
import { createHandler } from 'graphql-http/lib/use/express';
import typeDefs from './auth.schema';
import { resolvers } from './auth.resolver';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { typeDefsUserMerge } from '@/graphql/user/user.schema';
const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([typeDefs, typeDefsUserMerge]),
  resolvers,
});

export const handlerAuth = createHandler({
  schema,
});
