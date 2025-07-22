import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';

const allTypeDefs = loadFilesSync(join(__dirname, '**/*.schema.{ts,js}'));
const allResolvers = loadFilesSync(join(__dirname, '**/*.resolver.{ts,js}'));

const schema = makeExecutableSchema({
  typeDefs: allTypeDefs,
  resolvers: allResolvers,
});

export { schema };
