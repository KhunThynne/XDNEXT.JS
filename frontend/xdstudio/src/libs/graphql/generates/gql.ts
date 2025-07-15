/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          documentId\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": typeof types.LoginDocument,
    "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n      }\n    ) {\n      id\n      name\n      documentId\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n": typeof types.CreateUserDocument,
};
const documents: Documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          documentId\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n      }\n    ) {\n      id\n      name\n      documentId\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          documentId\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n"): typeof import('./graphql').LoginDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n      }\n    ) {\n      id\n      name\n      documentId\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n"): typeof import('./graphql').CreateUserDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
