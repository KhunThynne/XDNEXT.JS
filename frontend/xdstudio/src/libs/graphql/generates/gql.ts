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
    "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": typeof types.LoginDocument,
    "\n  query GetImage($where: ImageWhereUniqueInput!) {\n    image(where: $where) {\n      name\n      src {\n        id\n        extension\n        filesize\n        height\n        url\n        width\n      }\n      id\n      altText\n    }\n  }\n\n  mutation CreateImages($data: [ImageCreateInput!]!) {\n    createImages(data: $data) {\n      name\n      id\n      altText\n      src {\n        id\n        filesize\n        width\n        height\n        extension\n        url\n      }\n    }\n  }\n\n  mutation CreateImage($data: ImageCreateInput!) {\n    createImage(data: $data) {\n      altText\n      id\n      name\n      src {\n        extension\n        filesize\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n": typeof types.GetImageDocument,
    "\n  fragment SupplierFields on Supplier {\n    id\n    supplierName\n    supplierDetails\n    userId {\n      id\n      email\n      username\n    }\n    productsCount\n  }\n\n  fragment ImageFields on Image {\n    id\n    name\n    altText\n    src {\n      id\n      filesize\n      width\n      height\n      extension\n      url\n    }\n  }\n\n  fragment ProductFields on Product {\n    id\n    suppilersId {\n      ...SupplierFields\n    }\n    name\n    details\n    status\n    publishedAt\n    updateAt\n    createdAt\n    images {\n      ...ImageFields\n    }\n    imagesCount\n  }\n\n  query getProducts(\n    $take: Int\n    $skip: Int!\n    $orderBy: [ProductOrderByInput!]!\n  ) {\n    products(take: $take, skip: $skip, orderBy: $orderBy) {\n      ...ProductFields\n    }\n  }\n\n  query getProduct($where: ProductWhereUniqueInput!) {\n    product(where: $where) {\n      ...ProductFields\n    }\n  }\n": typeof types.SupplierFieldsFragmentDoc,
    "\n  query GetUsers {\n    users {\n      username\n      email\n      role\n    }\n  }\n": typeof types.GetUsersDocument,
    "\n  query GetUser($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      createdAt\n      email\n      image\n      id\n      images {\n        name\n        id\n        altText\n      }\n    }\n  }\n": typeof types.GetUserDocument,
    "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n      }\n    ) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: $email }) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      postsCount\n      createdAt\n      passwordResetIssuedAt\n      passwordResetRedeemedAt\n    }\n  }\n": typeof types.GetUserByEmailDocument,
};
const documents: Documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  query GetImage($where: ImageWhereUniqueInput!) {\n    image(where: $where) {\n      name\n      src {\n        id\n        extension\n        filesize\n        height\n        url\n        width\n      }\n      id\n      altText\n    }\n  }\n\n  mutation CreateImages($data: [ImageCreateInput!]!) {\n    createImages(data: $data) {\n      name\n      id\n      altText\n      src {\n        id\n        filesize\n        width\n        height\n        extension\n        url\n      }\n    }\n  }\n\n  mutation CreateImage($data: ImageCreateInput!) {\n    createImage(data: $data) {\n      altText\n      id\n      name\n      src {\n        extension\n        filesize\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n": types.GetImageDocument,
    "\n  fragment SupplierFields on Supplier {\n    id\n    supplierName\n    supplierDetails\n    userId {\n      id\n      email\n      username\n    }\n    productsCount\n  }\n\n  fragment ImageFields on Image {\n    id\n    name\n    altText\n    src {\n      id\n      filesize\n      width\n      height\n      extension\n      url\n    }\n  }\n\n  fragment ProductFields on Product {\n    id\n    suppilersId {\n      ...SupplierFields\n    }\n    name\n    details\n    status\n    publishedAt\n    updateAt\n    createdAt\n    images {\n      ...ImageFields\n    }\n    imagesCount\n  }\n\n  query getProducts(\n    $take: Int\n    $skip: Int!\n    $orderBy: [ProductOrderByInput!]!\n  ) {\n    products(take: $take, skip: $skip, orderBy: $orderBy) {\n      ...ProductFields\n    }\n  }\n\n  query getProduct($where: ProductWhereUniqueInput!) {\n    product(where: $where) {\n      ...ProductFields\n    }\n  }\n": types.SupplierFieldsFragmentDoc,
    "\n  query GetUsers {\n    users {\n      username\n      email\n      role\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetUser($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      createdAt\n      email\n      image\n      id\n      images {\n        name\n        id\n        altText\n      }\n    }\n  }\n": types.GetUserDocument,
    "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n      }\n    ) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: $email }) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      postsCount\n      createdAt\n      passwordResetIssuedAt\n      passwordResetRedeemedAt\n    }\n  }\n": types.GetUserByEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n"): typeof import('./graphql').LoginDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetImage($where: ImageWhereUniqueInput!) {\n    image(where: $where) {\n      name\n      src {\n        id\n        extension\n        filesize\n        height\n        url\n        width\n      }\n      id\n      altText\n    }\n  }\n\n  mutation CreateImages($data: [ImageCreateInput!]!) {\n    createImages(data: $data) {\n      name\n      id\n      altText\n      src {\n        id\n        filesize\n        width\n        height\n        extension\n        url\n      }\n    }\n  }\n\n  mutation CreateImage($data: ImageCreateInput!) {\n    createImage(data: $data) {\n      altText\n      id\n      name\n      src {\n        extension\n        filesize\n        height\n        id\n        url\n        width\n      }\n    }\n  }\n"): typeof import('./graphql').GetImageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SupplierFields on Supplier {\n    id\n    supplierName\n    supplierDetails\n    userId {\n      id\n      email\n      username\n    }\n    productsCount\n  }\n\n  fragment ImageFields on Image {\n    id\n    name\n    altText\n    src {\n      id\n      filesize\n      width\n      height\n      extension\n      url\n    }\n  }\n\n  fragment ProductFields on Product {\n    id\n    suppilersId {\n      ...SupplierFields\n    }\n    name\n    details\n    status\n    publishedAt\n    updateAt\n    createdAt\n    images {\n      ...ImageFields\n    }\n    imagesCount\n  }\n\n  query getProducts(\n    $take: Int\n    $skip: Int!\n    $orderBy: [ProductOrderByInput!]!\n  ) {\n    products(take: $take, skip: $skip, orderBy: $orderBy) {\n      ...ProductFields\n    }\n  }\n\n  query getProduct($where: ProductWhereUniqueInput!) {\n    product(where: $where) {\n      ...ProductFields\n    }\n  }\n"): typeof import('./graphql').SupplierFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    users {\n      username\n      email\n      role\n    }\n  }\n"): typeof import('./graphql').GetUsersDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      createdAt\n      email\n      image\n      id\n      images {\n        name\n        id\n        altText\n      }\n    }\n  }\n"): typeof import('./graphql').GetUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n      }\n    ) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n"): typeof import('./graphql').CreateUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: $email }) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      postsCount\n      createdAt\n      passwordResetIssuedAt\n      passwordResetRedeemedAt\n    }\n  }\n"): typeof import('./graphql').GetUserByEmailDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
