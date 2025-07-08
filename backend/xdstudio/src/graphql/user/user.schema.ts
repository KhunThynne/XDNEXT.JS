const typeDefs = /* GraphQL */ `
  type User {
    id: Int!
    email: String!
    username: String
    provider: String!
  }

  type Query {
    users: [User!]!
  }
`;
export default typeDefs;
