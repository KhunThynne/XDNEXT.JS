import { graphql } from "../../generates";

graphql(`
  mutation CreateUser(
    $name: String
    $username: String
    $provider: String
    $password: String
    $email: String
    $image: String
  ) {
    createUser(
      data: {
        name: $name
        username: $username
        provider: $provider
        password: $password
        email: $email
        image: $image
      }
    ) {
      id
      name
      username
      provider
      image
      role
      email
      createdAt
      password {
        isSet
      }
    }
  }
`);
