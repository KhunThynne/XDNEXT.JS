const typeDefs = /* GraphQL */ `
  type Mutation {
    register(
      email: String!
      password: String!
      username: String!
      image: String
      role: Role
      provider: UserProvider
    ): User
    registerAndLogin(
      email: String!
      password: String!
      username: String!
      image: String
      role: Role
      provider: UserProvider
    ): AuthPayload
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
