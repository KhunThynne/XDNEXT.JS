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
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      exp\n      token\n      user {\n        id\n        username\n        provider\n        image\n        role\n        updatedAt\n        createdAt\n        email\n        resetPasswordToken\n        resetPasswordExpiration\n        salt\n        hash\n        loginAttempts\n        lockUntil\n        avatar {\n          id\n          name\n          altText\n          updatedAt\n          createdAt\n          url\n          thumbnailURL\n          filename\n          mimeType\n          filesize\n          width\n          height\n          focalX\n          focalY\n        }\n        accounts {\n          id\n          provider\n          providerAccountId\n          accessToken\n          refreshToken\n          expiresAt\n          scope\n          meta\n          updatedAt\n          createdAt\n        }\n      }\n    }\n  }\n": typeof types.LoginUserDocument,
    "\n  query GetUsers {\n    Users {\n      docs {\n        username\n        email\n        role\n      }\n    }\n  }\n": typeof types.GetUsersDocument,
};
const documents: Documents = {
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      exp\n      token\n      user {\n        id\n        username\n        provider\n        image\n        role\n        updatedAt\n        createdAt\n        email\n        resetPasswordToken\n        resetPasswordExpiration\n        salt\n        hash\n        loginAttempts\n        lockUntil\n        avatar {\n          id\n          name\n          altText\n          updatedAt\n          createdAt\n          url\n          thumbnailURL\n          filename\n          mimeType\n          filesize\n          width\n          height\n          focalX\n          focalY\n        }\n        accounts {\n          id\n          provider\n          providerAccountId\n          accessToken\n          refreshToken\n          expiresAt\n          scope\n          meta\n          updatedAt\n          createdAt\n        }\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  query GetUsers {\n    Users {\n      docs {\n        username\n        email\n        role\n      }\n    }\n  }\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      exp\n      token\n      user {\n        id\n        username\n        provider\n        image\n        role\n        updatedAt\n        createdAt\n        email\n        resetPasswordToken\n        resetPasswordExpiration\n        salt\n        hash\n        loginAttempts\n        lockUntil\n        avatar {\n          id\n          name\n          altText\n          updatedAt\n          createdAt\n          url\n          thumbnailURL\n          filename\n          mimeType\n          filesize\n          width\n          height\n          focalX\n          focalY\n        }\n        accounts {\n          id\n          provider\n          providerAccountId\n          accessToken\n          refreshToken\n          expiresAt\n          scope\n          meta\n          updatedAt\n          createdAt\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').LoginUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    Users {\n      docs {\n        username\n        email\n        role\n      }\n    }\n  }\n"): typeof import('./graphql').GetUsersDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
