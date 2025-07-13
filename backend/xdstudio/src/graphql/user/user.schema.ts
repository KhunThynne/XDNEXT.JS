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

  enum UserProvider {
    CREDENTIALS
    DISCORD
    GOOGLE
    FACEBOOK
    GITHUB
    TWITTER
    LINKEDIN
    APPLE
    MICROSOFT
    AMAZON
  }
`;

const typeDefsUser = /* GraphQL */ `
  type User {
    documentId: String!
    email: String!
    username: String!
    provider: UserProvider
    role: Role
    image: String
  }
`;

export const typeDefsUserMerge = `${typeDefsUser}\n${typeDefsRole}`;
const typeDefsMergeQuery = `${typeDefs}\n${typeDefsUserMerge}`;
export default typeDefsMergeQuery;
