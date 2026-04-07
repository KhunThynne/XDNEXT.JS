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
    "\n  mutation UpdateCart($id: Int!, $data: mutationCartUpdateInput!) {\n    updateCart(id: $id, data: $data) {\n      id\n      user {\n        id\n      }\n      status\n      items {\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.UpdateCartDocument,
    "\n  query getCart(\n    $where: Cart_where\n    $limit: Int\n    $page: Int\n    $sort: String\n  ) {\n    Carts(where: $where, limit: $limit, page: $page, sort: $sort) {\n      docs {\n        createdAt\n        id\n        items {\n          id\n          quantity\n          product {\n            ...ProductFields\n          }\n        }\n        status\n        updatedAt\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n": typeof types.GetCartDocument,
    "\n  mutation CreateCartItem($data: mutationCartItemInput!) {\n    createCartItem(data: $data) {\n      cart {\n        id\n      }\n      id\n      quantity\n      product {\n        id\n      }\n    }\n  }\n": typeof types.CreateCartItemDocument,
    "\n  mutation DeleteCartItem($id: Int!) {\n    deleteCartItem(id: $id) {\n      id\n    }\n  }\n": typeof types.DeleteCartItemDocument,
    "\n  fragment MediaField on Media {\n    id\n    name\n    altText\n    filesize\n    width\n    height\n    url\n  }\n": typeof types.MediaFieldFragmentDoc,
    "\n  query GetMedia($where: Media_where) {\n    allMedia(where: $where) {\n      docs {\n        ...MediaField\n      }\n    }\n  }\n": typeof types.GetMediaDocument,
    "\n  mutation CreateMedia($data: mutationMediaInput!) {\n    createMedia(data: $data) {\n      ...MediaField\n    }\n  }\n": typeof types.CreateMediaDocument,
    "\n  query getOrder($where: Order_where) {\n    Orders(where: $where) {\n      docs {\n        createdAt\n        id\n        status\n        updatedAt\n        user {\n          id\n          email\n          username\n          supplier {\n            id\n            name\n          }\n        }\n        items {\n          id\n          product {\n            id\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetOrderDocument,
    "\n  mutation CreateOrderAndUserItems($data: mutationOrderInput!) {\n    createOrder(data: $data) {\n      items {\n        id\n        unitPrice\n        product {\n          id\n        }\n      }\n      createdAt\n      id\n      updatedAt\n      status\n      user {\n        email\n        id\n      }\n    }\n  }\n": typeof types.CreateOrderAndUserItemsDocument,
    "\n  fragment PointTransactionField on PointTransaction {\n    id\n    user {\n      id\n    }\n    type\n    amount\n    status\n    orders {\n      id\n    }\n    metaData\n    expiredAt\n    createdAt\n    updatedAt\n    isFavorite\n  }\n": typeof types.PointTransactionFieldFragmentDoc,
    "\n  query getPointTransactions(\n    $where: PointTransaction_where\n    $sort: String\n    $limit: Int\n    $page: Int\n  ) {\n    PointTransactions(where: $where, sort: $sort, limit: $limit, page: $page) {\n      docs {\n        ...PointTransactionField\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n      nextPage\n      prevPage\n    }\n  }\n": typeof types.GetPointTransactionsDocument,
    "\n  mutation createPointTransaction($data: mutationPointTransactionInput!) {\n    createPointTransaction(data: $data) {\n      ...PointTransactionField\n    }\n  }\n": typeof types.CreatePointTransactionDocument,
    "\n  mutation updatePointTransaction($id: Int!, $data: mutationPointTransactionUpdateInput!) {\n    updatePointTransaction(id: $id, data: $data) {\n      ...PointTransactionField\n    }\n  }\n": typeof types.UpdatePointTransactionDocument,
    "\n  mutation deletePointTransaction($id: Int!) {\n    deletePointTransaction(id: $id) {\n      ...PointTransactionField\n    }\n  }\n": typeof types.DeletePointTransactionDocument,
    "\n  fragment ProductFields on Product {\n    id\n    supplier {\n      ...SupplierFields\n    }\n    name\n    description\n    details\n    price {\n      price\n      description\n      price_type\n      id\n    }\n    tags {\n      id\n      name\n    }\n    faqs {\n      id\n      question\n      answer\n    }\n    averageScore\n    status\n    publishedAt\n    updatedAt\n    createdAt\n    previewImage {\n      ...MediaField\n    }\n    media\n  }\n": typeof types.ProductFieldsFragmentDoc,
    "\n  query GetProducts(\n    $limit: Int\n    $page: Int\n    $sort: String\n    $where: Product_where\n  ) {\n    Products(limit: $limit, page: $page, sort: $sort, where: $where) {\n      docs {\n        ...ProductFields\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n      nextPage\n      prevPage\n    }\n  }\n": typeof types.GetProductsDocument,
    "\n  query GetProductsCount($where: Product_where) {\n    Products(limit: 1, where: $where) {\n      totalDocs\n    }\n  }\n": typeof types.GetProductsCountDocument,
    "\n  query GetProduct($where: Product_where) {\n    Products(where: $where) {\n      docs {\n        ...ProductFields\n      }\n    }\n  }\n": typeof types.GetProductDocument,
    "\n  fragment SupplierFields on Supplier {\n    id\n    name\n    description\n    user {\n      id\n      email\n      username\n    }\n  }\n": typeof types.SupplierFieldsFragmentDoc,
    "\n  query GetUserAItemConfig($where: UserItem_where) {\n    UserItems(where: $where) {\n      docs {\n        config\n        createdAt\n        id\n        item {\n          id\n          product {\n            name\n            previewImage {\n              altText\n              id\n              name\n              url\n              filesize\n              height\n              width\n            }\n            status\n            createdAt\n            updatedAt\n          }\n        }\n        updatedAt\n        user {\n          id\n          email\n          username\n        }\n        __typename\n      }\n    }\n  }\n": typeof types.GetUserAItemConfigDocument,
    "\n  query GetUserPoint($where: UserPoint_where) {\n    UserPoints(where: $where) {\n      docs {\n        id\n        total_point\n        updatedAt\n        total_spent\n        __typename\n        user {\n          id\n        }\n      }\n    }\n  }\n": typeof types.GetUserPointDocument,
    "\n  query GetUserPreference($where: UserPreference_where) {\n    UserPreferences(where: $where) {\n      docs {\n        id\n        setting\n        createdAt\n        updatedAt\n        user {\n          id\n        }\n      }\n    }\n  }\n": typeof types.GetUserPreferenceDocument,
    "\n  mutation CreateUserPreference($data: mutationUserPreferenceInput!) {\n    createUserPreference(data: $data) {\n      id\n      setting\n      user {\n        id\n      }\n    }\n  }\n": typeof types.CreateUserPreferenceDocument,
    "\n  mutation UpdateUserPreference($id: Int!, $data: mutationUserPreferenceUpdateInput!) {\n    updateUserPreference(id: $id, data: $data) {\n      id\n      setting\n    }\n  }\n": typeof types.UpdateUserPreferenceDocument,
    "\n  mutation DeleteUserPreference($id: Int!) {\n    deleteUserPreference(id: $id) {\n      id\n    }\n  }\n": typeof types.DeleteUserPreferenceDocument,
    "\n  query GetUsers {\n    Users {\n      docs {\n        username\n        email\n        role\n      }\n    }\n  }\n": typeof types.GetUsersDocument,
};
const documents: Documents = {
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      exp\n      token\n      user {\n        id\n        username\n        provider\n        image\n        role\n        updatedAt\n        createdAt\n        email\n        resetPasswordToken\n        resetPasswordExpiration\n        salt\n        hash\n        loginAttempts\n        lockUntil\n        avatar {\n          id\n          name\n          altText\n          updatedAt\n          createdAt\n          url\n          thumbnailURL\n          filename\n          mimeType\n          filesize\n          width\n          height\n          focalX\n          focalY\n        }\n        accounts {\n          id\n          provider\n          providerAccountId\n          accessToken\n          refreshToken\n          expiresAt\n          scope\n          meta\n          updatedAt\n          createdAt\n        }\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation UpdateCart($id: Int!, $data: mutationCartUpdateInput!) {\n    updateCart(id: $id, data: $data) {\n      id\n      user {\n        id\n      }\n      status\n      items {\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateCartDocument,
    "\n  query getCart(\n    $where: Cart_where\n    $limit: Int\n    $page: Int\n    $sort: String\n  ) {\n    Carts(where: $where, limit: $limit, page: $page, sort: $sort) {\n      docs {\n        createdAt\n        id\n        items {\n          id\n          quantity\n          product {\n            ...ProductFields\n          }\n        }\n        status\n        updatedAt\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n": types.GetCartDocument,
    "\n  mutation CreateCartItem($data: mutationCartItemInput!) {\n    createCartItem(data: $data) {\n      cart {\n        id\n      }\n      id\n      quantity\n      product {\n        id\n      }\n    }\n  }\n": types.CreateCartItemDocument,
    "\n  mutation DeleteCartItem($id: Int!) {\n    deleteCartItem(id: $id) {\n      id\n    }\n  }\n": types.DeleteCartItemDocument,
    "\n  fragment MediaField on Media {\n    id\n    name\n    altText\n    filesize\n    width\n    height\n    url\n  }\n": types.MediaFieldFragmentDoc,
    "\n  query GetMedia($where: Media_where) {\n    allMedia(where: $where) {\n      docs {\n        ...MediaField\n      }\n    }\n  }\n": types.GetMediaDocument,
    "\n  mutation CreateMedia($data: mutationMediaInput!) {\n    createMedia(data: $data) {\n      ...MediaField\n    }\n  }\n": types.CreateMediaDocument,
    "\n  query getOrder($where: Order_where) {\n    Orders(where: $where) {\n      docs {\n        createdAt\n        id\n        status\n        updatedAt\n        user {\n          id\n          email\n          username\n          supplier {\n            id\n            name\n          }\n        }\n        items {\n          id\n          product {\n            id\n          }\n        }\n      }\n    }\n  }\n": types.GetOrderDocument,
    "\n  mutation CreateOrderAndUserItems($data: mutationOrderInput!) {\n    createOrder(data: $data) {\n      items {\n        id\n        unitPrice\n        product {\n          id\n        }\n      }\n      createdAt\n      id\n      updatedAt\n      status\n      user {\n        email\n        id\n      }\n    }\n  }\n": types.CreateOrderAndUserItemsDocument,
    "\n  fragment PointTransactionField on PointTransaction {\n    id\n    user {\n      id\n    }\n    type\n    amount\n    status\n    orders {\n      id\n    }\n    metaData\n    expiredAt\n    createdAt\n    updatedAt\n    isFavorite\n  }\n": types.PointTransactionFieldFragmentDoc,
    "\n  query getPointTransactions(\n    $where: PointTransaction_where\n    $sort: String\n    $limit: Int\n    $page: Int\n  ) {\n    PointTransactions(where: $where, sort: $sort, limit: $limit, page: $page) {\n      docs {\n        ...PointTransactionField\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n      nextPage\n      prevPage\n    }\n  }\n": types.GetPointTransactionsDocument,
    "\n  mutation createPointTransaction($data: mutationPointTransactionInput!) {\n    createPointTransaction(data: $data) {\n      ...PointTransactionField\n    }\n  }\n": types.CreatePointTransactionDocument,
    "\n  mutation updatePointTransaction($id: Int!, $data: mutationPointTransactionUpdateInput!) {\n    updatePointTransaction(id: $id, data: $data) {\n      ...PointTransactionField\n    }\n  }\n": types.UpdatePointTransactionDocument,
    "\n  mutation deletePointTransaction($id: Int!) {\n    deletePointTransaction(id: $id) {\n      ...PointTransactionField\n    }\n  }\n": types.DeletePointTransactionDocument,
    "\n  fragment ProductFields on Product {\n    id\n    supplier {\n      ...SupplierFields\n    }\n    name\n    description\n    details\n    price {\n      price\n      description\n      price_type\n      id\n    }\n    tags {\n      id\n      name\n    }\n    faqs {\n      id\n      question\n      answer\n    }\n    averageScore\n    status\n    publishedAt\n    updatedAt\n    createdAt\n    previewImage {\n      ...MediaField\n    }\n    media\n  }\n": types.ProductFieldsFragmentDoc,
    "\n  query GetProducts(\n    $limit: Int\n    $page: Int\n    $sort: String\n    $where: Product_where\n  ) {\n    Products(limit: $limit, page: $page, sort: $sort, where: $where) {\n      docs {\n        ...ProductFields\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n      nextPage\n      prevPage\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProductsCount($where: Product_where) {\n    Products(limit: 1, where: $where) {\n      totalDocs\n    }\n  }\n": types.GetProductsCountDocument,
    "\n  query GetProduct($where: Product_where) {\n    Products(where: $where) {\n      docs {\n        ...ProductFields\n      }\n    }\n  }\n": types.GetProductDocument,
    "\n  fragment SupplierFields on Supplier {\n    id\n    name\n    description\n    user {\n      id\n      email\n      username\n    }\n  }\n": types.SupplierFieldsFragmentDoc,
    "\n  query GetUserAItemConfig($where: UserItem_where) {\n    UserItems(where: $where) {\n      docs {\n        config\n        createdAt\n        id\n        item {\n          id\n          product {\n            name\n            previewImage {\n              altText\n              id\n              name\n              url\n              filesize\n              height\n              width\n            }\n            status\n            createdAt\n            updatedAt\n          }\n        }\n        updatedAt\n        user {\n          id\n          email\n          username\n        }\n        __typename\n      }\n    }\n  }\n": types.GetUserAItemConfigDocument,
    "\n  query GetUserPoint($where: UserPoint_where) {\n    UserPoints(where: $where) {\n      docs {\n        id\n        total_point\n        updatedAt\n        total_spent\n        __typename\n        user {\n          id\n        }\n      }\n    }\n  }\n": types.GetUserPointDocument,
    "\n  query GetUserPreference($where: UserPreference_where) {\n    UserPreferences(where: $where) {\n      docs {\n        id\n        setting\n        createdAt\n        updatedAt\n        user {\n          id\n        }\n      }\n    }\n  }\n": types.GetUserPreferenceDocument,
    "\n  mutation CreateUserPreference($data: mutationUserPreferenceInput!) {\n    createUserPreference(data: $data) {\n      id\n      setting\n      user {\n        id\n      }\n    }\n  }\n": types.CreateUserPreferenceDocument,
    "\n  mutation UpdateUserPreference($id: Int!, $data: mutationUserPreferenceUpdateInput!) {\n    updateUserPreference(id: $id, data: $data) {\n      id\n      setting\n    }\n  }\n": types.UpdateUserPreferenceDocument,
    "\n  mutation DeleteUserPreference($id: Int!) {\n    deleteUserPreference(id: $id) {\n      id\n    }\n  }\n": types.DeleteUserPreferenceDocument,
    "\n  query GetUsers {\n    Users {\n      docs {\n        username\n        email\n        role\n      }\n    }\n  }\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      exp\n      token\n      user {\n        id\n        username\n        provider\n        image\n        role\n        updatedAt\n        createdAt\n        email\n        resetPasswordToken\n        resetPasswordExpiration\n        salt\n        hash\n        loginAttempts\n        lockUntil\n        avatar {\n          id\n          name\n          altText\n          updatedAt\n          createdAt\n          url\n          thumbnailURL\n          filename\n          mimeType\n          filesize\n          width\n          height\n          focalX\n          focalY\n        }\n        accounts {\n          id\n          provider\n          providerAccountId\n          accessToken\n          refreshToken\n          expiresAt\n          scope\n          meta\n          updatedAt\n          createdAt\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').LoginUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateCart($id: Int!, $data: mutationCartUpdateInput!) {\n    updateCart(id: $id, data: $data) {\n      id\n      user {\n        id\n      }\n      status\n      items {\n        id\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"): typeof import('./graphql').UpdateCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCart(\n    $where: Cart_where\n    $limit: Int\n    $page: Int\n    $sort: String\n  ) {\n    Carts(where: $where, limit: $limit, page: $page, sort: $sort) {\n      docs {\n        createdAt\n        id\n        items {\n          id\n          quantity\n          product {\n            ...ProductFields\n          }\n        }\n        status\n        updatedAt\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateCartItem($data: mutationCartItemInput!) {\n    createCartItem(data: $data) {\n      cart {\n        id\n      }\n      id\n      quantity\n      product {\n        id\n      }\n    }\n  }\n"): typeof import('./graphql').CreateCartItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteCartItem($id: Int!) {\n    deleteCartItem(id: $id) {\n      id\n    }\n  }\n"): typeof import('./graphql').DeleteCartItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MediaField on Media {\n    id\n    name\n    altText\n    filesize\n    width\n    height\n    url\n  }\n"): typeof import('./graphql').MediaFieldFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMedia($where: Media_where) {\n    allMedia(where: $where) {\n      docs {\n        ...MediaField\n      }\n    }\n  }\n"): typeof import('./graphql').GetMediaDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMedia($data: mutationMediaInput!) {\n    createMedia(data: $data) {\n      ...MediaField\n    }\n  }\n"): typeof import('./graphql').CreateMediaDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOrder($where: Order_where) {\n    Orders(where: $where) {\n      docs {\n        createdAt\n        id\n        status\n        updatedAt\n        user {\n          id\n          email\n          username\n          supplier {\n            id\n            name\n          }\n        }\n        items {\n          id\n          product {\n            id\n          }\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOrderAndUserItems($data: mutationOrderInput!) {\n    createOrder(data: $data) {\n      items {\n        id\n        unitPrice\n        product {\n          id\n        }\n      }\n      createdAt\n      id\n      updatedAt\n      status\n      user {\n        email\n        id\n      }\n    }\n  }\n"): typeof import('./graphql').CreateOrderAndUserItemsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PointTransactionField on PointTransaction {\n    id\n    user {\n      id\n    }\n    type\n    amount\n    status\n    orders {\n      id\n    }\n    metaData\n    expiredAt\n    createdAt\n    updatedAt\n    isFavorite\n  }\n"): typeof import('./graphql').PointTransactionFieldFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPointTransactions(\n    $where: PointTransaction_where\n    $sort: String\n    $limit: Int\n    $page: Int\n  ) {\n    PointTransactions(where: $where, sort: $sort, limit: $limit, page: $page) {\n      docs {\n        ...PointTransactionField\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n      nextPage\n      prevPage\n    }\n  }\n"): typeof import('./graphql').GetPointTransactionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPointTransaction($data: mutationPointTransactionInput!) {\n    createPointTransaction(data: $data) {\n      ...PointTransactionField\n    }\n  }\n"): typeof import('./graphql').CreatePointTransactionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePointTransaction($id: Int!, $data: mutationPointTransactionUpdateInput!) {\n    updatePointTransaction(id: $id, data: $data) {\n      ...PointTransactionField\n    }\n  }\n"): typeof import('./graphql').UpdatePointTransactionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deletePointTransaction($id: Int!) {\n    deletePointTransaction(id: $id) {\n      ...PointTransactionField\n    }\n  }\n"): typeof import('./graphql').DeletePointTransactionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductFields on Product {\n    id\n    supplier {\n      ...SupplierFields\n    }\n    name\n    description\n    details\n    price {\n      price\n      description\n      price_type\n      id\n    }\n    tags {\n      id\n      name\n    }\n    faqs {\n      id\n      question\n      answer\n    }\n    averageScore\n    status\n    publishedAt\n    updatedAt\n    createdAt\n    previewImage {\n      ...MediaField\n    }\n    media\n  }\n"): typeof import('./graphql').ProductFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProducts(\n    $limit: Int\n    $page: Int\n    $sort: String\n    $where: Product_where\n  ) {\n    Products(limit: $limit, page: $page, sort: $sort, where: $where) {\n      docs {\n        ...ProductFields\n      }\n      totalDocs\n      totalPages\n      page\n      limit\n      hasNextPage\n      hasPrevPage\n      nextPage\n      prevPage\n    }\n  }\n"): typeof import('./graphql').GetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductsCount($where: Product_where) {\n    Products(limit: 1, where: $where) {\n      totalDocs\n    }\n  }\n"): typeof import('./graphql').GetProductsCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProduct($where: Product_where) {\n    Products(where: $where) {\n      docs {\n        ...ProductFields\n      }\n    }\n  }\n"): typeof import('./graphql').GetProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SupplierFields on Supplier {\n    id\n    name\n    description\n    user {\n      id\n      email\n      username\n    }\n  }\n"): typeof import('./graphql').SupplierFieldsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserAItemConfig($where: UserItem_where) {\n    UserItems(where: $where) {\n      docs {\n        config\n        createdAt\n        id\n        item {\n          id\n          product {\n            name\n            previewImage {\n              altText\n              id\n              name\n              url\n              filesize\n              height\n              width\n            }\n            status\n            createdAt\n            updatedAt\n          }\n        }\n        updatedAt\n        user {\n          id\n          email\n          username\n        }\n        __typename\n      }\n    }\n  }\n"): typeof import('./graphql').GetUserAItemConfigDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserPoint($where: UserPoint_where) {\n    UserPoints(where: $where) {\n      docs {\n        id\n        total_point\n        updatedAt\n        total_spent\n        __typename\n        user {\n          id\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetUserPointDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserPreference($where: UserPreference_where) {\n    UserPreferences(where: $where) {\n      docs {\n        id\n        setting\n        createdAt\n        updatedAt\n        user {\n          id\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetUserPreferenceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserPreference($data: mutationUserPreferenceInput!) {\n    createUserPreference(data: $data) {\n      id\n      setting\n      user {\n        id\n      }\n    }\n  }\n"): typeof import('./graphql').CreateUserPreferenceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserPreference($id: Int!, $data: mutationUserPreferenceUpdateInput!) {\n    updateUserPreference(id: $id, data: $data) {\n      id\n      setting\n    }\n  }\n"): typeof import('./graphql').UpdateUserPreferenceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUserPreference($id: Int!) {\n    deleteUserPreference(id: $id) {\n      id\n    }\n  }\n"): typeof import('./graphql').DeleteUserPreferenceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    Users {\n      docs {\n        username\n        email\n        role\n      }\n    }\n  }\n"): typeof import('./graphql').GetUsersDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
