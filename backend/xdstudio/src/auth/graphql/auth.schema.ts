const typeDefs = /* GraphQL */ `
  type Mutation {
    register(
      email: String!
      password: String!
      username: String!
      role: Role
    ): User
    login(email: String!, password: String!): AuthPayload
    logout: Boolean
  }
  type Query {
    _empty: String
  }

  type AuthPayload {
    jwt_token: String!
    user: User!
  }
`;
export default typeDefs;
