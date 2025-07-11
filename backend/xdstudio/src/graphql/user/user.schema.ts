const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
`;
const typeDefsRole = /* GraphQL */ `
  enum Role {
    ADMIN
    USER
    MODERATOR
    GUEST
  }
`;

const typeDefsUser = /* GraphQL */ `
  type User {
    id: Int!
    email: String!
    username: String!
    provider: String!
    role: Role
  }
`;

export const typeDefsUserMerge = `${typeDefsUser}\n${typeDefsRole}`;
const typeDefsMergeQuery = `${typeDefs}\n${typeDefsUserMerge}`;
export default typeDefsMergeQuery;
