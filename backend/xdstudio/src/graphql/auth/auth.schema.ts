const typeDefs = /* GraphQL */ `
  type Mutation {
    register(email: String!, password: String!, username: String): User
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;
export default typeDefs;
