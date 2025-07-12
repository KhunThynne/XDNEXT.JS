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
    "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      jwt_token\n      user {\n        id\n        username\n        email\n        role\n        provider\n      }\n    }\n  }\n": typeof types.LoginDocument,
    "\n  mutation Register(\n    $email: String!\n    $password: String!\n    $username: String!\n    $role: Role\n    $image: String\n    $provider: UserProvider\n  ) {\n    register(\n      email: $email\n      password: $password\n      username: $username\n      role: $role\n      image: $image\n      provider: $provider\n    ) {\n      id\n      username\n      email\n      role\n      image\n      provider\n    }\n  }\n": typeof types.RegisterDocument,
    "\n  mutation RegisterAndLogin(\n    $email: String!\n    $password: String!\n    $username: String!\n    $role: Role\n    $provider: UserProvider\n    $image: String\n  ) {\n    registerAndLogin(\n      email: $email\n      password: $password\n      username: $username\n      provider: $provider\n      role: $role\n      image: $image\n    ) {\n      jwt_token\n      user {\n        id\n        provider\n        username\n        email\n        role\n        image\n        provider\n      }\n    }\n  }\n": typeof types.RegisterAndLoginDocument,
    "\n  query GetUsers {\n    users {\n      id\n      username\n      email\n      role\n    }\n  }\n": typeof types.GetUsersDocument,
};
const documents: Documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      jwt_token\n      user {\n        id\n        username\n        email\n        role\n        provider\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register(\n    $email: String!\n    $password: String!\n    $username: String!\n    $role: Role\n    $image: String\n    $provider: UserProvider\n  ) {\n    register(\n      email: $email\n      password: $password\n      username: $username\n      role: $role\n      image: $image\n      provider: $provider\n    ) {\n      id\n      username\n      email\n      role\n      image\n      provider\n    }\n  }\n": types.RegisterDocument,
    "\n  mutation RegisterAndLogin(\n    $email: String!\n    $password: String!\n    $username: String!\n    $role: Role\n    $provider: UserProvider\n    $image: String\n  ) {\n    registerAndLogin(\n      email: $email\n      password: $password\n      username: $username\n      provider: $provider\n      role: $role\n      image: $image\n    ) {\n      jwt_token\n      user {\n        id\n        provider\n        username\n        email\n        role\n        image\n        provider\n      }\n    }\n  }\n": types.RegisterAndLoginDocument,
    "\n  query GetUsers {\n    users {\n      id\n      username\n      email\n      role\n    }\n  }\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      jwt_token\n      user {\n        id\n        username\n        email\n        role\n        provider\n      }\n    }\n  }\n"): typeof import('./graphql').LoginDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register(\n    $email: String!\n    $password: String!\n    $username: String!\n    $role: Role\n    $image: String\n    $provider: UserProvider\n  ) {\n    register(\n      email: $email\n      password: $password\n      username: $username\n      role: $role\n      image: $image\n      provider: $provider\n    ) {\n      id\n      username\n      email\n      role\n      image\n      provider\n    }\n  }\n"): typeof import('./graphql').RegisterDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterAndLogin(\n    $email: String!\n    $password: String!\n    $username: String!\n    $role: Role\n    $provider: UserProvider\n    $image: String\n  ) {\n    registerAndLogin(\n      email: $email\n      password: $password\n      username: $username\n      provider: $provider\n      role: $role\n      image: $image\n    ) {\n      jwt_token\n      user {\n        id\n        provider\n        username\n        email\n        role\n        image\n        provider\n      }\n    }\n  }\n"): typeof import('./graphql').RegisterAndLoginDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    users {\n      id\n      username\n      email\n      role\n    }\n  }\n"): typeof import('./graphql').GetUsersDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
