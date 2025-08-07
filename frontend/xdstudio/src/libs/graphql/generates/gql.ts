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
    "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          orders {\n            id\n          }\n          carts {\n            id\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": typeof types.LoginDocument,
    "\n  fragment ImageField on Image {\n    id\n    name\n    altText\n    src {\n      filesize\n      width\n      height\n      extension\n      url\n      id\n    }\n  }\n": typeof types.ImageFieldFragmentDoc,
    "\n  query GetImage($where: ImageWhereUniqueInput!) {\n    image(where: $where) {\n      ...ImageField\n    }\n  }\n\n  mutation CreateImages($data: [ImageCreateInput!]!) {\n    createImages(data: $data) {\n      ...ImageField\n    }\n  }\n\n  mutation CreateImage($data: ImageCreateInput!) {\n    createImage(data: $data) {\n      ...ImageField\n    }\n  }\n": typeof types.GetImageDocument,
    "\n  query getOrder($where: OrderWhereUniqueInput!) {\n    order(where: $where) {\n      createdAt\n      id\n      itemsCount\n      updateAt\n      user {\n        id\n        email\n        username\n        suppiler {\n          id\n          name\n        }\n      }\n      items {\n        id\n        product {\n          id\n        }\n      }\n    }\n  }\n": typeof types.GetOrderDocument,
    "\n  fragment ProductFields on Product {\n    id\n    suppilers {\n      ...SupplierFields\n    }\n    name\n    description\n    details {\n      document\n    }\n    price {\n      price\n      description\n      price_type\n      price_type\n      id\n    }\n    status\n    publishedAt\n    updateAt\n    createdAt\n    images {\n      ...ImageField\n    }\n    imagesCount\n  }\n\n  query getProducts(\n    $take: Int\n    $skip: Int!\n    $orderBy: [ProductOrderByInput!]!\n  ) {\n    products(take: $take, skip: $skip, orderBy: $orderBy) {\n      ...ProductFields\n    }\n  }\n\n  query getProduct($where: ProductWhereUniqueInput!) {\n    product(where: $where) {\n      ...ProductFields\n    }\n  }\n": typeof types.ProductFieldsFragmentDoc,
    "\n  fragment SupplierFields on Supplier {\n    id\n    name\n    description\n    user {\n      id\n      email\n      username\n    }\n    productsCount\n  }\n": typeof types.SupplierFieldsFragmentDoc,
    "\n  query GetUsers {\n    users {\n      username\n      email\n      role\n    }\n  }\n": typeof types.GetUsersDocument,
    "\n  query GetUser($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      createdAt\n      email\n      image\n      name\n      username\n      id\n      role\n      password {\n        isSet\n      }\n      provider\n      avartar {\n        altText\n        id\n        src {\n          extension\n          url\n          height\n          width\n        }\n      }\n      preference {\n        id\n        setting {\n          document\n        }\n      }\n      carts {\n        id\n        createdAt\n      }\n      orders {\n        id\n        createdAt\n      }\n    }\n  }\n": typeof types.GetUserDocument,
    "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n    $image: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n        image: $image\n      }\n    ) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: $email }) {\n      id\n      name\n      username\n      provider\n      image\n      avartar {\n        id\n      }\n      role\n      email\n      postsCount\n      createdAt\n      passwordResetIssuedAt\n      passwordResetRedeemedAt\n    }\n  }\n": typeof types.GetUserByEmailDocument,
};
const documents: Documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          orders {\n            id\n          }\n          carts {\n            id\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  fragment ImageField on Image {\n    id\n    name\n    altText\n    src {\n      filesize\n      width\n      height\n      extension\n      url\n      id\n    }\n  }\n": types.ImageFieldFragmentDoc,
    "\n  query GetImage($where: ImageWhereUniqueInput!) {\n    image(where: $where) {\n      ...ImageField\n    }\n  }\n\n  mutation CreateImages($data: [ImageCreateInput!]!) {\n    createImages(data: $data) {\n      ...ImageField\n    }\n  }\n\n  mutation CreateImage($data: ImageCreateInput!) {\n    createImage(data: $data) {\n      ...ImageField\n    }\n  }\n": types.GetImageDocument,
    "\n  query getOrder($where: OrderWhereUniqueInput!) {\n    order(where: $where) {\n      createdAt\n      id\n      itemsCount\n      updateAt\n      user {\n        id\n        email\n        username\n        suppiler {\n          id\n          name\n        }\n      }\n      items {\n        id\n        product {\n          id\n        }\n      }\n    }\n  }\n": types.GetOrderDocument,
    "\n  fragment ProductFields on Product {\n    id\n    suppilers {\n      ...SupplierFields\n    }\n    name\n    description\n    details {\n      document\n    }\n    price {\n      price\n      description\n      price_type\n      price_type\n      id\n    }\n    status\n    publishedAt\n    updateAt\n    createdAt\n    images {\n      ...ImageField\n    }\n    imagesCount\n  }\n\n  query getProducts(\n    $take: Int\n    $skip: Int!\n    $orderBy: [ProductOrderByInput!]!\n  ) {\n    products(take: $take, skip: $skip, orderBy: $orderBy) {\n      ...ProductFields\n    }\n  }\n\n  query getProduct($where: ProductWhereUniqueInput!) {\n    product(where: $where) {\n      ...ProductFields\n    }\n  }\n": types.ProductFieldsFragmentDoc,
    "\n  fragment SupplierFields on Supplier {\n    id\n    name\n    description\n    user {\n      id\n      email\n      username\n    }\n    productsCount\n  }\n": types.SupplierFieldsFragmentDoc,
    "\n  query GetUsers {\n    users {\n      username\n      email\n      role\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetUser($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      createdAt\n      email\n      image\n      name\n      username\n      id\n      role\n      password {\n        isSet\n      }\n      provider\n      avartar {\n        altText\n        id\n        src {\n          extension\n          url\n          height\n          width\n        }\n      }\n      preference {\n        id\n        setting {\n          document\n        }\n      }\n      carts {\n        id\n        createdAt\n      }\n      orders {\n        id\n        createdAt\n      }\n    }\n  }\n": types.GetUserDocument,
    "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n    $image: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n        image: $image\n      }\n    ) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: $email }) {\n      id\n      name\n      username\n      provider\n      image\n      avartar {\n        id\n      }\n      role\n      email\n      postsCount\n      createdAt\n      passwordResetIssuedAt\n      passwordResetRedeemedAt\n    }\n  }\n": types.GetUserByEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          name\n          username\n          provider\n          role\n          email\n          image\n          postsCount\n          createdAt\n          password {\n            isSet\n          }\n          orders {\n            id\n          }\n          carts {\n            id\n          }\n          posts {\n            id\n            title\n            tagsCount\n          }\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        message\n      }\n    }\n  }\n"): typeof import('./graphql').LoginDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ImageField on Image {\n    id\n    name\n    altText\n    src {\n      filesize\n      width\n      height\n      extension\n      url\n      id\n    }\n  }\n"): typeof import('./graphql').ImageFieldFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetImage($where: ImageWhereUniqueInput!) {\n    image(where: $where) {\n      ...ImageField\n    }\n  }\n\n  mutation CreateImages($data: [ImageCreateInput!]!) {\n    createImages(data: $data) {\n      ...ImageField\n    }\n  }\n\n  mutation CreateImage($data: ImageCreateInput!) {\n    createImage(data: $data) {\n      ...ImageField\n    }\n  }\n"): typeof import('./graphql').GetImageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOrder($where: OrderWhereUniqueInput!) {\n    order(where: $where) {\n      createdAt\n      id\n      itemsCount\n      updateAt\n      user {\n        id\n        email\n        username\n        suppiler {\n          id\n          name\n        }\n      }\n      items {\n        id\n        product {\n          id\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductFields on Product {\n    id\n    suppilers {\n      ...SupplierFields\n    }\n    name\n    description\n    details {\n      document\n    }\n    price {\n      price\n      description\n      price_type\n      price_type\n      id\n    }\n    status\n    publishedAt\n    updateAt\n    createdAt\n    images {\n      ...ImageField\n    }\n    imagesCount\n  }\n\n  query getProducts(\n    $take: Int\n    $skip: Int!\n    $orderBy: [ProductOrderByInput!]!\n  ) {\n    products(take: $take, skip: $skip, orderBy: $orderBy) {\n      ...ProductFields\n    }\n  }\n\n  query getProduct($where: ProductWhereUniqueInput!) {\n    product(where: $where) {\n      ...ProductFields\n    }\n  }\n"): typeof import('./graphql').ProductFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SupplierFields on Supplier {\n    id\n    name\n    description\n    user {\n      id\n      email\n      username\n    }\n    productsCount\n  }\n"): typeof import('./graphql').SupplierFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    users {\n      username\n      email\n      role\n    }\n  }\n"): typeof import('./graphql').GetUsersDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($where: UserWhereUniqueInput!) {\n    user(where: $where) {\n      createdAt\n      email\n      image\n      name\n      username\n      id\n      role\n      password {\n        isSet\n      }\n      provider\n      avartar {\n        altText\n        id\n        src {\n          extension\n          url\n          height\n          width\n        }\n      }\n      preference {\n        id\n        setting {\n          document\n        }\n      }\n      carts {\n        id\n        createdAt\n      }\n      orders {\n        id\n        createdAt\n      }\n    }\n  }\n"): typeof import('./graphql').GetUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $name: String\n    $username: String\n    $provider: String\n    $password: String\n    $email: String\n    $image: String\n  ) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        provider: $provider\n        password: $password\n        email: $email\n        image: $image\n      }\n    ) {\n      id\n      name\n      username\n      provider\n      image\n      role\n      email\n      createdAt\n      password {\n        isSet\n      }\n    }\n  }\n"): typeof import('./graphql').CreateUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserByEmail($email: String!) {\n    user(where: { email: $email }) {\n      id\n      name\n      username\n      provider\n      image\n      avartar {\n        id\n      }\n      role\n      email\n      postsCount\n      createdAt\n      passwordResetIssuedAt\n      passwordResetRedeemedAt\n    }\n  }\n"): typeof import('./graphql').GetUserByEmailDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
