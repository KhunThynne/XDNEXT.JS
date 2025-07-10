const typeDefs = /* GraphQL */ `
  enum Role {
    ADMIN
    USER
    MODERATOR
    GUEST
  }

  type User {
    id: Int!
    email: String!
    username: String!
    provider: String!
    role: Role
  }

  type Query {
    users: [User!]!
  }
`;
export default typeDefs;
