const typeDefs = /* GraphQL */ `
  type Mutation {
    register(email: String!, password: String!, username: String!): String
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
  }
  type Query {
    _empty: String
  }

  type AuthPayload {
    token: String!
    user: String!
  }
`;
export default typeDefs;
