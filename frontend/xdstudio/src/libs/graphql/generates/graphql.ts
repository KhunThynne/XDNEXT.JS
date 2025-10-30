/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  meta?: Maybe<Scalars['JSON']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type AccountCreateInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type AccountManyRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByInput = {
  accessToken?: InputMaybe<OrderDirection>;
  expiresAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  provider?: InputMaybe<OrderDirection>;
  providerAccountId?: InputMaybe<OrderDirection>;
  refreshToken?: InputMaybe<OrderDirection>;
  scope?: InputMaybe<OrderDirection>;
};

export type AccountRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
};

export type AccountRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  create?: InputMaybe<Array<AccountCreateInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
};

export type AccountUpdateArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthProvidersFailure = {
  __typename?: 'AuthProvidersFailure';
  message?: Maybe<Scalars['String']['output']>;
};

export type AuthProvidersResponse = AuthProvidersFailure | AuthProvidersSuccess;

export type AuthProvidersSuccess = {
  __typename?: 'AuthProvidersSuccess';
  accessToken: Scalars['String']['output'];
  item: User;
  refetchToken?: Maybe<Scalars['String']['output']>;
  sessionToken: Scalars['String']['output'];
};

export type AuthenticatedItem = User;

export type Cart = {
  __typename?: 'Cart';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<CartItem>>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};


export type CartItemsArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartItemWhereInput;
};


export type CartItemsCountArgs = {
  where?: CartItemWhereInput;
};

export type CartCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<CartItemRelateToManyForCreateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type CartItem = {
  __typename?: 'CartItem';
  cart?: Maybe<Cart>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CartItemCreateInput = {
  cart?: InputMaybe<CartRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemManyRelationFilter = {
  every?: InputMaybe<CartItemWhereInput>;
  none?: InputMaybe<CartItemWhereInput>;
  some?: InputMaybe<CartItemWhereInput>;
};

export type CartItemOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type CartItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemUpdateArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateInput = {
  cart?: InputMaybe<CartRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  cart?: InputMaybe<CartWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<IntFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CartManyRelationFilter = {
  every?: InputMaybe<CartWhereInput>;
  none?: InputMaybe<CartWhereInput>;
  some?: InputMaybe<CartWhereInput>;
};

export type CartOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type CartRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  create?: InputMaybe<Array<CartCreateInput>>;
};

export type CartRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  create?: InputMaybe<Array<CartCreateInput>>;
  disconnect?: InputMaybe<Array<CartWhereUniqueInput>>;
  set?: InputMaybe<Array<CartWhereUniqueInput>>;
};

export type CartRelateToOneForCreateInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  create?: InputMaybe<CartCreateInput>;
};

export type CartRelateToOneForUpdateInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  create?: InputMaybe<CartCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartUpdateArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};

export type CartUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<CartItemRelateToManyForUpdateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CartWhereInput = {
  AND?: InputMaybe<Array<CartWhereInput>>;
  NOT?: InputMaybe<Array<CartWhereInput>>;
  OR?: InputMaybe<Array<CartWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<CartItemManyRelationFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CheckProductFailure = {
  __typename?: 'CheckProductFailure';
  message: Scalars['String']['output'];
};

export type CheckProductResponse = CheckProductFailure | CheckProductSuccess;

export type CheckProductSuccess = {
  __typename?: 'CheckProductSuccess';
  inCart: Scalars['Boolean']['output'];
  inUserItem: Scalars['Boolean']['output'];
  productId: Scalars['String']['output'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Faq = {
  __typename?: 'FAQ';
  answer?: Maybe<Faq_Answer_Document>;
  id: Scalars['ID']['output'];
  question?: Maybe<Scalars['String']['output']>;
};

export type FaqCreateInput = {
  answer?: InputMaybe<Scalars['JSON']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type FaqManyRelationFilter = {
  every?: InputMaybe<FaqWhereInput>;
  none?: InputMaybe<FaqWhereInput>;
  some?: InputMaybe<FaqWhereInput>;
};

export type FaqOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  question?: InputMaybe<OrderDirection>;
};

export type FaqRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  create?: InputMaybe<Array<FaqCreateInput>>;
};

export type FaqRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  create?: InputMaybe<Array<FaqCreateInput>>;
  disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  set?: InputMaybe<Array<FaqWhereUniqueInput>>;
};

export type FaqUpdateArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};

export type FaqUpdateInput = {
  answer?: InputMaybe<Scalars['JSON']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type FaqWhereInput = {
  AND?: InputMaybe<Array<FaqWhereInput>>;
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  OR?: InputMaybe<Array<FaqWhereInput>>;
  id?: InputMaybe<IdFilter>;
  question?: InputMaybe<StringFilter>;
};

export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Faq_Answer_Document = {
  __typename?: 'FAQ_answer_Document';
  document: Scalars['JSON']['output'];
};


export type Faq_Answer_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  src?: Maybe<ImageFieldOutput>;
};

export type ImageCreateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  src?: InputMaybe<ImageFieldInput>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ImageManyRelationFilter = {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
};

export type ImageOrderByInput = {
  altText?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type ImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
};

export type ImageRelateToOneForCreateInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  create?: InputMaybe<ImageCreateInput>;
};

export type ImageRelateToOneForUpdateInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  create?: InputMaybe<ImageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageUpdateArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  src?: InputMaybe<ImageFieldInput>;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  altText?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSearchFields: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateAndLinkProvider?: Maybe<AuthProvidersResponse>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAccount?: Maybe<Account>;
  createAccounts?: Maybe<Array<Maybe<Account>>>;
  createCart?: Maybe<Cart>;
  createCartItem?: Maybe<CartItem>;
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  createCarts?: Maybe<Array<Maybe<Cart>>>;
  createFAQ?: Maybe<Faq>;
  createFAQS?: Maybe<Array<Maybe<Faq>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  createOrders?: Maybe<Array<Maybe<Order>>>;
  createPointTransaction?: Maybe<PointTransaction>;
  createPointTransactions?: Maybe<Array<Maybe<PointTransaction>>>;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createPrice?: Maybe<Price>;
  createPrices?: Maybe<Array<Maybe<Price>>>;
  createProduct?: Maybe<Product>;
  createProductPromotion?: Maybe<ProductPromotion>;
  createProductPromotions?: Maybe<Array<Maybe<ProductPromotion>>>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createPromotion?: Maybe<Promotion>;
  createPromotions?: Maybe<Array<Maybe<Promotion>>>;
  createRating?: Maybe<Rating>;
  createRatings?: Maybe<Array<Maybe<Rating>>>;
  createSetting?: Maybe<Setting>;
  createSettings?: Maybe<Array<Maybe<Setting>>>;
  createStock?: Maybe<Stock>;
  createStocks?: Maybe<Array<Maybe<Stock>>>;
  createSupplier?: Maybe<Supplier>;
  createSuppliers?: Maybe<Array<Maybe<Supplier>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUserItem?: Maybe<UserItem>;
  createUserItems?: Maybe<Array<Maybe<UserItem>>>;
  createUserPoint?: Maybe<UserPoint>;
  createUserPoints?: Maybe<Array<Maybe<UserPoint>>>;
  createUserPreference?: Maybe<UserPreference>;
  createUserPreferences?: Maybe<Array<Maybe<UserPreference>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAccount?: Maybe<Account>;
  deleteAccounts?: Maybe<Array<Maybe<Account>>>;
  deleteCart?: Maybe<Cart>;
  deleteCartItem?: Maybe<CartItem>;
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  deleteCarts?: Maybe<Array<Maybe<Cart>>>;
  deleteFAQ?: Maybe<Faq>;
  deleteFAQS?: Maybe<Array<Maybe<Faq>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  deletePointTransaction?: Maybe<PointTransaction>;
  deletePointTransactions?: Maybe<Array<Maybe<PointTransaction>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deletePrice?: Maybe<Price>;
  deletePrices?: Maybe<Array<Maybe<Price>>>;
  deleteProduct?: Maybe<Product>;
  deleteProductPromotion?: Maybe<ProductPromotion>;
  deleteProductPromotions?: Maybe<Array<Maybe<ProductPromotion>>>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deletePromotion?: Maybe<Promotion>;
  deletePromotions?: Maybe<Array<Maybe<Promotion>>>;
  deleteRating?: Maybe<Rating>;
  deleteRatings?: Maybe<Array<Maybe<Rating>>>;
  deleteSetting?: Maybe<Setting>;
  deleteSettings?: Maybe<Array<Maybe<Setting>>>;
  deleteStock?: Maybe<Stock>;
  deleteStocks?: Maybe<Array<Maybe<Stock>>>;
  deleteSupplier?: Maybe<Supplier>;
  deleteSuppliers?: Maybe<Array<Maybe<Supplier>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteUser?: Maybe<User>;
  deleteUserItem?: Maybe<UserItem>;
  deleteUserItems?: Maybe<Array<Maybe<UserItem>>>;
  deleteUserPoint?: Maybe<UserPoint>;
  deleteUserPoints?: Maybe<Array<Maybe<UserPoint>>>;
  deleteUserPreference?: Maybe<UserPreference>;
  deleteUserPreferences?: Maybe<Array<Maybe<UserPreference>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean']['output'];
  updateAccount?: Maybe<Account>;
  updateAccounts?: Maybe<Array<Maybe<Account>>>;
  updateCart?: Maybe<Cart>;
  updateCartItem?: Maybe<CartItem>;
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  updateCarts?: Maybe<Array<Maybe<Cart>>>;
  updateFAQ?: Maybe<Faq>;
  updateFAQS?: Maybe<Array<Maybe<Faq>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  updatePointTransaction?: Maybe<PointTransaction>;
  updatePointTransactions?: Maybe<Array<Maybe<PointTransaction>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updatePrice?: Maybe<Price>;
  updatePrices?: Maybe<Array<Maybe<Price>>>;
  updateProduct?: Maybe<Product>;
  updateProductPromotion?: Maybe<ProductPromotion>;
  updateProductPromotions?: Maybe<Array<Maybe<ProductPromotion>>>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updatePromotion?: Maybe<Promotion>;
  updatePromotions?: Maybe<Array<Maybe<Promotion>>>;
  updateRating?: Maybe<Rating>;
  updateRatings?: Maybe<Array<Maybe<Rating>>>;
  updateSetting?: Maybe<Setting>;
  updateSettings?: Maybe<Array<Maybe<Setting>>>;
  updateStock?: Maybe<Stock>;
  updateStocks?: Maybe<Array<Maybe<Stock>>>;
  updateSupplier?: Maybe<Supplier>;
  updateSuppliers?: Maybe<Array<Maybe<Supplier>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateUser?: Maybe<User>;
  updateUserItem?: Maybe<UserItem>;
  updateUserItems?: Maybe<Array<Maybe<UserItem>>>;
  updateUserPoint?: Maybe<UserPoint>;
  updateUserPoints?: Maybe<Array<Maybe<UserPoint>>>;
  updateUserPreference?: Maybe<UserPreference>;
  updateUserPreferences?: Maybe<Array<Maybe<UserPreference>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateAndLinkProviderArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateAccountsArgs = {
  data: Array<AccountCreateInput>;
};


export type MutationCreateCartArgs = {
  data: CartCreateInput;
};


export type MutationCreateCartItemArgs = {
  data: CartItemCreateInput;
};


export type MutationCreateCartItemsArgs = {
  data: Array<CartItemCreateInput>;
};


export type MutationCreateCartsArgs = {
  data: Array<CartCreateInput>;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateFaqsArgs = {
  data: Array<FaqCreateInput>;
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateImagesArgs = {
  data: Array<ImageCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateOrderItemsArgs = {
  data: Array<OrderItemCreateInput>;
};


export type MutationCreateOrdersArgs = {
  data: Array<OrderCreateInput>;
};


export type MutationCreatePointTransactionArgs = {
  data: PointTransactionCreateInput;
};


export type MutationCreatePointTransactionsArgs = {
  data: Array<PointTransactionCreateInput>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};


export type MutationCreatePriceArgs = {
  data: PriceCreateInput;
};


export type MutationCreatePricesArgs = {
  data: Array<PriceCreateInput>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductPromotionArgs = {
  data: ProductPromotionCreateInput;
};


export type MutationCreateProductPromotionsArgs = {
  data: Array<ProductPromotionCreateInput>;
};


export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};


export type MutationCreatePromotionArgs = {
  data: PromotionCreateInput;
};


export type MutationCreatePromotionsArgs = {
  data: Array<PromotionCreateInput>;
};


export type MutationCreateRatingArgs = {
  data: RatingCreateInput;
};


export type MutationCreateRatingsArgs = {
  data: Array<RatingCreateInput>;
};


export type MutationCreateSettingArgs = {
  data: SettingCreateInput;
};


export type MutationCreateSettingsArgs = {
  data: Array<SettingCreateInput>;
};


export type MutationCreateStockArgs = {
  data: StockCreateInput;
};


export type MutationCreateStocksArgs = {
  data: Array<StockCreateInput>;
};


export type MutationCreateSupplierArgs = {
  data: SupplierCreateInput;
};


export type MutationCreateSuppliersArgs = {
  data: Array<SupplierCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserItemArgs = {
  data: UserItemCreateInput;
};


export type MutationCreateUserItemsArgs = {
  data: Array<UserItemCreateInput>;
};


export type MutationCreateUserPointArgs = {
  data: UserPointCreateInput;
};


export type MutationCreateUserPointsArgs = {
  data: Array<UserPointCreateInput>;
};


export type MutationCreateUserPreferenceArgs = {
  data: UserPreferenceCreateInput;
};


export type MutationCreateUserPreferencesArgs = {
  data: Array<UserPreferenceCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteAccountsArgs = {
  where: Array<AccountWhereUniqueInput>;
};


export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationDeleteCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type MutationDeleteCartItemsArgs = {
  where: Array<CartItemWhereUniqueInput>;
};


export type MutationDeleteCartsArgs = {
  where: Array<CartWhereUniqueInput>;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteFaqsArgs = {
  where: Array<FaqWhereUniqueInput>;
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteImagesArgs = {
  where: Array<ImageWhereUniqueInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteOrderItemsArgs = {
  where: Array<OrderItemWhereUniqueInput>;
};


export type MutationDeleteOrdersArgs = {
  where: Array<OrderWhereUniqueInput>;
};


export type MutationDeletePointTransactionArgs = {
  where: PointTransactionWhereUniqueInput;
};


export type MutationDeletePointTransactionsArgs = {
  where: Array<PointTransactionWhereUniqueInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};


export type MutationDeletePriceArgs = {
  where: PriceWhereUniqueInput;
};


export type MutationDeletePricesArgs = {
  where: Array<PriceWhereUniqueInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductPromotionArgs = {
  where: ProductPromotionWhereUniqueInput;
};


export type MutationDeleteProductPromotionsArgs = {
  where: Array<ProductPromotionWhereUniqueInput>;
};


export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};


export type MutationDeletePromotionArgs = {
  where: PromotionWhereUniqueInput;
};


export type MutationDeletePromotionsArgs = {
  where: Array<PromotionWhereUniqueInput>;
};


export type MutationDeleteRatingArgs = {
  where: RatingWhereUniqueInput;
};


export type MutationDeleteRatingsArgs = {
  where: Array<RatingWhereUniqueInput>;
};


export type MutationDeleteSettingArgs = {
  where?: SettingWhereUniqueInput;
};


export type MutationDeleteSettingsArgs = {
  where: Array<SettingWhereUniqueInput>;
};


export type MutationDeleteStockArgs = {
  where: StockWhereUniqueInput;
};


export type MutationDeleteStocksArgs = {
  where: Array<StockWhereUniqueInput>;
};


export type MutationDeleteSupplierArgs = {
  where: SupplierWhereUniqueInput;
};


export type MutationDeleteSuppliersArgs = {
  where: Array<SupplierWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserItemArgs = {
  where: UserItemWhereUniqueInput;
};


export type MutationDeleteUserItemsArgs = {
  where: Array<UserItemWhereUniqueInput>;
};


export type MutationDeleteUserPointArgs = {
  where: UserPointWhereUniqueInput;
};


export type MutationDeleteUserPointsArgs = {
  where: Array<UserPointWhereUniqueInput>;
};


export type MutationDeleteUserPreferenceArgs = {
  where: UserPreferenceWhereUniqueInput;
};


export type MutationDeleteUserPreferencesArgs = {
  where: Array<UserPreferenceWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateAccountsArgs = {
  data: Array<AccountUpdateArgs>;
};


export type MutationUpdateCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpdateCartItemsArgs = {
  data: Array<CartItemUpdateArgs>;
};


export type MutationUpdateCartsArgs = {
  data: Array<CartUpdateArgs>;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateFaqsArgs = {
  data: Array<FaqUpdateArgs>;
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateImagesArgs = {
  data: Array<ImageUpdateArgs>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateOrderItemsArgs = {
  data: Array<OrderItemUpdateArgs>;
};


export type MutationUpdateOrdersArgs = {
  data: Array<OrderUpdateArgs>;
};


export type MutationUpdatePointTransactionArgs = {
  data: PointTransactionUpdateInput;
  where: PointTransactionWhereUniqueInput;
};


export type MutationUpdatePointTransactionsArgs = {
  data: Array<PointTransactionUpdateArgs>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};


export type MutationUpdatePriceArgs = {
  data: PriceUpdateInput;
  where: PriceWhereUniqueInput;
};


export type MutationUpdatePricesArgs = {
  data: Array<PriceUpdateArgs>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductPromotionArgs = {
  data: ProductPromotionUpdateInput;
  where: ProductPromotionWhereUniqueInput;
};


export type MutationUpdateProductPromotionsArgs = {
  data: Array<ProductPromotionUpdateArgs>;
};


export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};


export type MutationUpdatePromotionArgs = {
  data: PromotionUpdateInput;
  where: PromotionWhereUniqueInput;
};


export type MutationUpdatePromotionsArgs = {
  data: Array<PromotionUpdateArgs>;
};


export type MutationUpdateRatingArgs = {
  data: RatingUpdateInput;
  where: RatingWhereUniqueInput;
};


export type MutationUpdateRatingsArgs = {
  data: Array<RatingUpdateArgs>;
};


export type MutationUpdateSettingArgs = {
  data: SettingUpdateInput;
  where?: SettingWhereUniqueInput;
};


export type MutationUpdateSettingsArgs = {
  data: Array<SettingUpdateArgs>;
};


export type MutationUpdateStockArgs = {
  data: StockUpdateInput;
  where: StockWhereUniqueInput;
};


export type MutationUpdateStocksArgs = {
  data: Array<StockUpdateArgs>;
};


export type MutationUpdateSupplierArgs = {
  data: SupplierUpdateInput;
  where: SupplierWhereUniqueInput;
};


export type MutationUpdateSuppliersArgs = {
  data: Array<SupplierUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserItemArgs = {
  data: UserItemUpdateInput;
  where: UserItemWhereUniqueInput;
};


export type MutationUpdateUserItemsArgs = {
  data: Array<UserItemUpdateArgs>;
};


export type MutationUpdateUserPointArgs = {
  data: UserPointUpdateInput;
  where: UserPointWhereUniqueInput;
};


export type MutationUpdateUserPointsArgs = {
  data: Array<UserPointUpdateArgs>;
};


export type MutationUpdateUserPreferenceArgs = {
  data: UserPreferenceUpdateInput;
  where: UserPreferenceWhereUniqueInput;
};


export type MutationUpdateUserPreferencesArgs = {
  data: Array<UserPreferenceUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<OrderItem>>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};


export type OrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderItemWhereInput;
};


export type OrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<OrderItemRelateToManyForCreateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  unitPrice?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  userItem?: Maybe<UserItem>;
};

export type OrderItemCreateInput = {
  order?: InputMaybe<OrderRelateToOneForCreateInput>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  unitPrice?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userItem?: InputMaybe<UserItemRelateToOneForCreateInput>;
};

export type OrderItemManyRelationFilter = {
  every?: InputMaybe<OrderItemWhereInput>;
  none?: InputMaybe<OrderItemWhereInput>;
  some?: InputMaybe<OrderItemWhereInput>;
};

export type OrderItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  unitPrice?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type OrderItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemRelateToOneForCreateInput = {
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  create?: InputMaybe<OrderItemCreateInput>;
};

export type OrderItemRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  create?: InputMaybe<OrderItemCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemUpdateArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateInput = {
  order?: InputMaybe<OrderRelateToOneForUpdateInput>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  unitPrice?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userItem?: InputMaybe<UserItemRelateToOneForUpdateInput>;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  unitPrice?: InputMaybe<IntNullableFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  userItem?: InputMaybe<UserItemWhereInput>;
};

export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  userItem?: InputMaybe<UserItemWhereUniqueInput>;
};

export type OrderManyRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type OrderRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
};

export type OrderRelateToOneForCreateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
};

export type OrderRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderUpdateArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<OrderItemRelateToManyForUpdateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<OrderItemManyRelationFilter>;
  status?: InputMaybe<StringFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type PointTransaction = {
  __typename?: 'PointTransaction';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<PointTransaction_Description_Document>;
  id: Scalars['ID']['output'];
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Array<User>>;
  userIdCount?: Maybe<Scalars['Int']['output']>;
};


export type PointTransactionOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};


export type PointTransactionOrdersCountArgs = {
  where?: OrderWhereInput;
};


export type PointTransactionUserIdArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type PointTransactionUserIdCountArgs = {
  where?: UserWhereInput;
};

export type PointTransactionCreateInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  orders?: InputMaybe<OrderRelateToManyForCreateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type PointTransactionOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type PointTransactionUpdateArgs = {
  data: PointTransactionUpdateInput;
  where: PointTransactionWhereUniqueInput;
};

export type PointTransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  orders?: InputMaybe<OrderRelateToManyForUpdateInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type PointTransactionWhereInput = {
  AND?: InputMaybe<Array<PointTransactionWhereInput>>;
  NOT?: InputMaybe<Array<PointTransactionWhereInput>>;
  OR?: InputMaybe<Array<PointTransactionWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  orders?: InputMaybe<OrderManyRelationFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<UserManyRelationFilter>;
};

export type PointTransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PointTransaction_Description_Document = {
  __typename?: 'PointTransaction_description_Document';
  document: Scalars['JSON']['output'];
};


export type PointTransaction_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Post_Content_Document>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PostTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PostTagsCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Post_Content_Document = {
  __typename?: 'Post_content_Document';
  document: Scalars['JSON']['output'];
};


export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Price = {
  __typename?: 'Price';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  price_type?: Maybe<PricePriceTypeType>;
  product?: Maybe<Array<Product>>;
  productCount?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PriceProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type PriceProductCountArgs = {
  where?: ProductWhereInput;
};

export type PriceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_type?: InputMaybe<PricePriceTypeType>;
  product?: InputMaybe<ProductRelateToManyForCreateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PriceOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  price_type?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export enum PricePriceTypeType {
  Base = 'base',
  Retail = 'retail',
  Wholesale = 'wholesale'
}

export type PricePriceTypeTypeNullableFilter = {
  equals?: InputMaybe<PricePriceTypeType>;
  in?: InputMaybe<Array<PricePriceTypeType>>;
  not?: InputMaybe<PricePriceTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<PricePriceTypeType>>;
};

export type PriceRelateToOneForCreateInput = {
  connect?: InputMaybe<PriceWhereUniqueInput>;
  create?: InputMaybe<PriceCreateInput>;
};

export type PriceRelateToOneForUpdateInput = {
  connect?: InputMaybe<PriceWhereUniqueInput>;
  create?: InputMaybe<PriceCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PriceUpdateArgs = {
  data: PriceUpdateInput;
  where: PriceWhereUniqueInput;
};

export type PriceUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_type?: InputMaybe<PricePriceTypeType>;
  product?: InputMaybe<ProductRelateToManyForUpdateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PriceWhereInput = {
  AND?: InputMaybe<Array<PriceWhereInput>>;
  NOT?: InputMaybe<Array<PriceWhereInput>>;
  OR?: InputMaybe<Array<PriceWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  price_type?: InputMaybe<PricePriceTypeTypeNullableFilter>;
  product?: InputMaybe<ProductManyRelationFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PriceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Product = {
  __typename?: 'Product';
  averageScore?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Product_Details_Document>;
  faqs?: Maybe<Array<Faq>>;
  faqsCount?: Maybe<Scalars['Int']['output']>;
  gallery?: Maybe<Array<Image>>;
  galleryCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Price>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  ratings?: Maybe<Array<Rating>>;
  ratingsCount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Stock>;
  suppilers?: Maybe<Supplier>;
  tag?: Maybe<Array<Tag>>;
  tagCount?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  youtubeId?: Maybe<Scalars['String']['output']>;
};


export type ProductFaqsArgs = {
  cursor?: InputMaybe<FaqWhereUniqueInput>;
  orderBy?: Array<FaqOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FaqWhereInput;
};


export type ProductFaqsCountArgs = {
  where?: FaqWhereInput;
};


export type ProductGalleryArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ImageWhereInput;
};


export type ProductGalleryCountArgs = {
  where?: ImageWhereInput;
};


export type ProductImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ImageWhereInput;
};


export type ProductImagesCountArgs = {
  where?: ImageWhereInput;
};


export type ProductRatingsArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  orderBy?: Array<RatingOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RatingWhereInput;
};


export type ProductRatingsCountArgs = {
  where?: RatingWhereInput;
};


export type ProductTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ProductTagCountArgs = {
  where?: TagWhereInput;
};


export type ProductTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type ProductTagsCountArgs = {
  where?: TagWhereInput;
};

export type ProductCreateInput = {
  averageScore?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  faqs?: InputMaybe<FaqRelateToManyForCreateInput>;
  gallery?: InputMaybe<ImageRelateToManyForCreateInput>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceRelateToOneForCreateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  ratings?: InputMaybe<RatingRelateToManyForCreateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<StockRelateToOneForCreateInput>;
  suppilers?: InputMaybe<SupplierRelateToOneForCreateInput>;
  tag?: InputMaybe<TagRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  youtubeId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductManyRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  averageScore?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
  version?: InputMaybe<OrderDirection>;
  youtubeId?: InputMaybe<OrderDirection>;
};

export type ProductPromotion = {
  __typename?: 'ProductPromotion';
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Product>;
  promotionId?: Maybe<Array<Promotion>>;
  promotionIdCount?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductPromotionImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ImageWhereInput;
};


export type ProductPromotionImagesCountArgs = {
  where?: ImageWhereInput;
};


export type ProductPromotionPromotionIdArgs = {
  cursor?: InputMaybe<PromotionWhereUniqueInput>;
  orderBy?: Array<PromotionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PromotionWhereInput;
};


export type ProductPromotionPromotionIdCountArgs = {
  where?: PromotionWhereInput;
};

export type ProductPromotionCreateInput = {
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  productId?: InputMaybe<ProductRelateToOneForCreateInput>;
  promotionId?: InputMaybe<PromotionRelateToManyForCreateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductPromotionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
};

export type ProductPromotionUpdateArgs = {
  data: ProductPromotionUpdateInput;
  where: ProductPromotionWhereUniqueInput;
};

export type ProductPromotionUpdateInput = {
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  productId?: InputMaybe<ProductRelateToOneForUpdateInput>;
  promotionId?: InputMaybe<PromotionRelateToManyForUpdateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductPromotionWhereInput = {
  AND?: InputMaybe<Array<ProductPromotionWhereInput>>;
  NOT?: InputMaybe<Array<ProductPromotionWhereInput>>;
  OR?: InputMaybe<Array<ProductPromotionWhereInput>>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  productId?: InputMaybe<ProductWhereInput>;
  promotionId?: InputMaybe<PromotionManyRelationFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ProductPromotionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
};

export type ProductRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  averageScore?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  faqs?: InputMaybe<FaqRelateToManyForUpdateInput>;
  gallery?: InputMaybe<ImageRelateToManyForUpdateInput>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceRelateToOneForUpdateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  ratings?: InputMaybe<RatingRelateToManyForUpdateInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<StockRelateToOneForUpdateInput>;
  suppilers?: InputMaybe<SupplierRelateToOneForUpdateInput>;
  tag?: InputMaybe<TagRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  youtubeId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  averageScore?: InputMaybe<FloatNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  faqs?: InputMaybe<FaqManyRelationFilter>;
  gallery?: InputMaybe<ImageManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<PriceWhereInput>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  ratings?: InputMaybe<RatingManyRelationFilter>;
  status?: InputMaybe<StringFilter>;
  stock?: InputMaybe<StockWhereInput>;
  suppilers?: InputMaybe<SupplierWhereInput>;
  tag?: InputMaybe<TagManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  version?: InputMaybe<StringFilter>;
  youtubeId?: InputMaybe<StringFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  stock?: InputMaybe<StockWhereUniqueInput>;
};

export type Product_Details_Document = {
  __typename?: 'Product_details_Document';
  document: Scalars['JSON']['output'];
};


export type Product_Details_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Promotion = {
  __typename?: 'Promotion';
  discountType?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PromotionCreateInput = {
  discountType?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromotionManyRelationFilter = {
  every?: InputMaybe<PromotionWhereInput>;
  none?: InputMaybe<PromotionWhereInput>;
  some?: InputMaybe<PromotionWhereInput>;
};

export type PromotionOrderByInput = {
  discountType?: InputMaybe<OrderDirection>;
  discountValue?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
};

export type PromotionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PromotionWhereUniqueInput>>;
  create?: InputMaybe<Array<PromotionCreateInput>>;
};

export type PromotionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PromotionWhereUniqueInput>>;
  create?: InputMaybe<Array<PromotionCreateInput>>;
  disconnect?: InputMaybe<Array<PromotionWhereUniqueInput>>;
  set?: InputMaybe<Array<PromotionWhereUniqueInput>>;
};

export type PromotionUpdateArgs = {
  data: PromotionUpdateInput;
  where: PromotionWhereUniqueInput;
};

export type PromotionUpdateInput = {
  discountType?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromotionWhereInput = {
  AND?: InputMaybe<Array<PromotionWhereInput>>;
  NOT?: InputMaybe<Array<PromotionWhereInput>>;
  OR?: InputMaybe<Array<PromotionWhereInput>>;
  discountType?: InputMaybe<StringNullableFilter>;
  discountValue?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PromotionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  cart?: Maybe<Cart>;
  cartItem?: Maybe<CartItem>;
  cartItems?: Maybe<Array<CartItem>>;
  cartItemsCount?: Maybe<Scalars['Int']['output']>;
  carts?: Maybe<Array<Cart>>;
  cartsCount?: Maybe<Scalars['Int']['output']>;
  checkUserProductStatus?: Maybe<CheckProductResponse>;
  fAQ?: Maybe<Faq>;
  fAQS?: Maybe<Array<Faq>>;
  fAQSCount?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<OrderItem>>;
  orderItemsCount?: Maybe<Scalars['Int']['output']>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  pointTransaction?: Maybe<PointTransaction>;
  pointTransactions?: Maybe<Array<PointTransaction>>;
  pointTransactionsCount?: Maybe<Scalars['Int']['output']>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Price>;
  prices?: Maybe<Array<Price>>;
  pricesCount?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  productPromotion?: Maybe<ProductPromotion>;
  productPromotions?: Maybe<Array<ProductPromotion>>;
  productPromotionsCount?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  promotion?: Maybe<Promotion>;
  promotions?: Maybe<Array<Promotion>>;
  promotionsCount?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Rating>;
  ratings?: Maybe<Array<Rating>>;
  ratingsCount?: Maybe<Scalars['Int']['output']>;
  setting?: Maybe<Setting>;
  settings?: Maybe<Array<Setting>>;
  settingsCount?: Maybe<Scalars['Int']['output']>;
  stock?: Maybe<Stock>;
  stocks?: Maybe<Array<Stock>>;
  stocksCount?: Maybe<Scalars['Int']['output']>;
  supplier?: Maybe<Supplier>;
  suppliers?: Maybe<Array<Supplier>>;
  suppliersCount?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userItem?: Maybe<UserItem>;
  userItems?: Maybe<Array<UserItem>>;
  userItemsCount?: Maybe<Scalars['Int']['output']>;
  userPoint?: Maybe<UserPoint>;
  userPoints?: Maybe<Array<UserPoint>>;
  userPointsCount?: Maybe<Scalars['Int']['output']>;
  userPreference?: Maybe<UserPreference>;
  userPreferences?: Maybe<Array<UserPreference>>;
  userPreferencesCount?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AccountWhereInput;
};


export type QueryAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type QueryCartArgs = {
  where: CartWhereUniqueInput;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type QueryCartItemsArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartItemWhereInput;
};


export type QueryCartItemsCountArgs = {
  where?: CartItemWhereInput;
};


export type QueryCartsArgs = {
  cursor?: InputMaybe<CartWhereUniqueInput>;
  orderBy?: Array<CartOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartWhereInput;
};


export type QueryCartsCountArgs = {
  where?: CartWhereInput;
};


export type QueryCheckUserProductStatusArgs = {
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryFAqArgs = {
  where: FaqWhereUniqueInput;
};


export type QueryFAqsArgs = {
  cursor?: InputMaybe<FaqWhereUniqueInput>;
  orderBy?: Array<FaqOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FaqWhereInput;
};


export type QueryFAqsCountArgs = {
  where?: FaqWhereInput;
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ImageWhereInput;
};


export type QueryImagesCountArgs = {
  where?: ImageWhereInput;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type QueryOrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderItemWhereInput;
};


export type QueryOrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};


export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};


export type QueryOrdersCountArgs = {
  where?: OrderWhereInput;
};


export type QueryPointTransactionArgs = {
  where: PointTransactionWhereUniqueInput;
};


export type QueryPointTransactionsArgs = {
  cursor?: InputMaybe<PointTransactionWhereUniqueInput>;
  orderBy?: Array<PointTransactionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PointTransactionWhereInput;
};


export type QueryPointTransactionsCountArgs = {
  where?: PointTransactionWhereInput;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};


export type QueryPriceArgs = {
  where: PriceWhereUniqueInput;
};


export type QueryPricesArgs = {
  cursor?: InputMaybe<PriceWhereUniqueInput>;
  orderBy?: Array<PriceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PriceWhereInput;
};


export type QueryPricesCountArgs = {
  where?: PriceWhereInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductPromotionArgs = {
  where: ProductPromotionWhereUniqueInput;
};


export type QueryProductPromotionsArgs = {
  cursor?: InputMaybe<ProductPromotionWhereUniqueInput>;
  orderBy?: Array<ProductPromotionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductPromotionWhereInput;
};


export type QueryProductPromotionsCountArgs = {
  where?: ProductPromotionWhereInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};


export type QueryPromotionArgs = {
  where: PromotionWhereUniqueInput;
};


export type QueryPromotionsArgs = {
  cursor?: InputMaybe<PromotionWhereUniqueInput>;
  orderBy?: Array<PromotionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PromotionWhereInput;
};


export type QueryPromotionsCountArgs = {
  where?: PromotionWhereInput;
};


export type QueryRatingArgs = {
  where: RatingWhereUniqueInput;
};


export type QueryRatingsArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  orderBy?: Array<RatingOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RatingWhereInput;
};


export type QueryRatingsCountArgs = {
  where?: RatingWhereInput;
};


export type QuerySettingArgs = {
  where?: SettingWhereUniqueInput;
};


export type QuerySettingsArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  orderBy?: Array<SettingOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SettingWhereInput;
};


export type QuerySettingsCountArgs = {
  where?: SettingWhereInput;
};


export type QueryStockArgs = {
  where: StockWhereUniqueInput;
};


export type QueryStocksArgs = {
  cursor?: InputMaybe<StockWhereUniqueInput>;
  orderBy?: Array<StockOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: StockWhereInput;
};


export type QueryStocksCountArgs = {
  where?: StockWhereInput;
};


export type QuerySupplierArgs = {
  where: SupplierWhereUniqueInput;
};


export type QuerySuppliersArgs = {
  cursor?: InputMaybe<SupplierWhereUniqueInput>;
  orderBy?: Array<SupplierOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SupplierWhereInput;
};


export type QuerySuppliersCountArgs = {
  where?: SupplierWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserItemArgs = {
  where: UserItemWhereUniqueInput;
};


export type QueryUserItemsArgs = {
  cursor?: InputMaybe<UserItemWhereUniqueInput>;
  orderBy?: Array<UserItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserItemWhereInput;
};


export type QueryUserItemsCountArgs = {
  where?: UserItemWhereInput;
};


export type QueryUserPointArgs = {
  where: UserPointWhereUniqueInput;
};


export type QueryUserPointsArgs = {
  cursor?: InputMaybe<UserPointWhereUniqueInput>;
  orderBy?: Array<UserPointOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserPointWhereInput;
};


export type QueryUserPointsCountArgs = {
  where?: UserPointWhereInput;
};


export type QueryUserPreferenceArgs = {
  where: UserPreferenceWhereUniqueInput;
};


export type QueryUserPreferencesArgs = {
  cursor?: InputMaybe<UserPreferenceWhereUniqueInput>;
  orderBy?: Array<UserPreferenceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserPreferenceWhereInput;
};


export type QueryUserPreferencesCountArgs = {
  where?: UserPreferenceWhereInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Rating = {
  __typename?: 'Rating';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RatingCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RatingManyRelationFilter = {
  every?: InputMaybe<RatingWhereInput>;
  none?: InputMaybe<RatingWhereInput>;
  some?: InputMaybe<RatingWhereInput>;
};

export type RatingOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  score?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type RatingRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  create?: InputMaybe<Array<RatingCreateInput>>;
};

export type RatingRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  create?: InputMaybe<Array<RatingCreateInput>>;
  disconnect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  set?: InputMaybe<Array<RatingWhereUniqueInput>>;
};

export type RatingUpdateArgs = {
  data: RatingUpdateInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RatingWhereInput = {
  AND?: InputMaybe<Array<RatingWhereInput>>;
  NOT?: InputMaybe<Array<RatingWhereInput>>;
  OR?: InputMaybe<Array<RatingWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  score?: InputMaybe<IntFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
};

export type RatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type Setting = {
  __typename?: 'Setting';
  id: Scalars['ID']['output'];
  redirect?: Maybe<Scalars['String']['output']>;
  smtpHost?: Maybe<Scalars['String']['output']>;
  smtpPass?: Maybe<Scalars['String']['output']>;
  smtpPort?: Maybe<Scalars['String']['output']>;
  smtpUser?: Maybe<Scalars['String']['output']>;
};

export type SettingCreateInput = {
  redirect?: InputMaybe<Scalars['String']['input']>;
  smtpHost?: InputMaybe<Scalars['String']['input']>;
  smtpPass?: InputMaybe<Scalars['String']['input']>;
  smtpPort?: InputMaybe<Scalars['String']['input']>;
  smtpUser?: InputMaybe<Scalars['String']['input']>;
};

export type SettingOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  redirect?: InputMaybe<OrderDirection>;
  smtpHost?: InputMaybe<OrderDirection>;
  smtpPass?: InputMaybe<OrderDirection>;
  smtpPort?: InputMaybe<OrderDirection>;
  smtpUser?: InputMaybe<OrderDirection>;
};

export type SettingUpdateArgs = {
  data: SettingUpdateInput;
  where?: SettingWhereUniqueInput;
};

export type SettingUpdateInput = {
  redirect?: InputMaybe<Scalars['String']['input']>;
  smtpHost?: InputMaybe<Scalars['String']['input']>;
  smtpPass?: InputMaybe<Scalars['String']['input']>;
  smtpPort?: InputMaybe<Scalars['String']['input']>;
  smtpUser?: InputMaybe<Scalars['String']['input']>;
};

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  id?: InputMaybe<IdFilter>;
  redirect?: InputMaybe<StringFilter>;
  smtpHost?: InputMaybe<StringFilter>;
  smtpPass?: InputMaybe<StringFilter>;
  smtpPort?: InputMaybe<StringFilter>;
  smtpUser?: InputMaybe<StringFilter>;
};

export type SettingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Stock = {
  __typename?: 'Stock';
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StockCreateInput = {
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StockOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type StockRelateToOneForCreateInput = {
  connect?: InputMaybe<StockWhereUniqueInput>;
  create?: InputMaybe<StockCreateInput>;
};

export type StockRelateToOneForUpdateInput = {
  connect?: InputMaybe<StockWhereUniqueInput>;
  create?: InputMaybe<StockCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StockUpdateArgs = {
  data: StockUpdateInput;
  where: StockWhereUniqueInput;
};

export type StockUpdateInput = {
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StockWhereInput = {
  AND?: InputMaybe<Array<StockWhereInput>>;
  NOT?: InputMaybe<Array<StockWhereInput>>;
  OR?: InputMaybe<Array<StockWhereInput>>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
};

export type StockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<ProductWhereUniqueInput>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};


export type SupplierProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type SupplierProductsCountArgs = {
  where?: ProductWhereInput;
};

export type SupplierCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type SupplierManyRelationFilter = {
  every?: InputMaybe<SupplierWhereInput>;
  none?: InputMaybe<SupplierWhereInput>;
  some?: InputMaybe<SupplierWhereInput>;
};

export type SupplierOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type SupplierRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SupplierWhereUniqueInput>>;
  create?: InputMaybe<Array<SupplierCreateInput>>;
};

export type SupplierRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SupplierWhereUniqueInput>>;
  create?: InputMaybe<Array<SupplierCreateInput>>;
  disconnect?: InputMaybe<Array<SupplierWhereUniqueInput>>;
  set?: InputMaybe<Array<SupplierWhereUniqueInput>>;
};

export type SupplierRelateToOneForCreateInput = {
  connect?: InputMaybe<SupplierWhereUniqueInput>;
  create?: InputMaybe<SupplierCreateInput>;
};

export type SupplierRelateToOneForUpdateInput = {
  connect?: InputMaybe<SupplierWhereUniqueInput>;
  create?: InputMaybe<SupplierCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SupplierUpdateArgs = {
  data: SupplierUpdateInput;
  where: SupplierWhereUniqueInput;
};

export type SupplierUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type SupplierWhereInput = {
  AND?: InputMaybe<Array<SupplierWhereInput>>;
  NOT?: InputMaybe<Array<SupplierWhereInput>>;
  OR?: InputMaybe<Array<SupplierWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type SupplierWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
};


export type TagPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type TagPostsCountArgs = {
  where?: PostWhereInput;
};

export type TagCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Account>>;
  accountsCount?: Maybe<Scalars['Int']['output']>;
  avartar?: Maybe<Image>;
  carts?: Maybe<Array<Cart>>;
  cartsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<UserItem>>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetToken?: Maybe<PasswordState>;
  point?: Maybe<UserPoint>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  preference?: Maybe<UserPreference>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  suppiler?: Maybe<Array<Supplier>>;
  suppilerCount?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: Array<AccountOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AccountWhereInput;
};


export type UserAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type UserCartsArgs = {
  cursor?: InputMaybe<CartWhereUniqueInput>;
  orderBy?: Array<CartOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartWhereInput;
};


export type UserCartsCountArgs = {
  where?: CartWhereInput;
};


export type UserItemsArgs = {
  cursor?: InputMaybe<UserItemWhereUniqueInput>;
  orderBy?: Array<UserItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserItemWhereInput;
};


export type UserItemsCountArgs = {
  where?: UserItemWhereInput;
};


export type UserOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};


export type UserOrdersCountArgs = {
  where?: OrderWhereInput;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type UserPostsCountArgs = {
  where?: PostWhereInput;
};


export type UserSuppilerArgs = {
  cursor?: InputMaybe<SupplierWhereUniqueInput>;
  orderBy?: Array<SupplierOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SupplierWhereInput;
};


export type UserSuppilerCountArgs = {
  where?: SupplierWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountRelateToManyForCreateInput>;
  avartar?: InputMaybe<ImageRelateToOneForCreateInput>;
  carts?: InputMaybe<CartRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<UserItemRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<UserPointRelateToOneForCreateInput>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  preference?: InputMaybe<UserPreferenceRelateToOneForCreateInput>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  suppiler?: InputMaybe<SupplierRelateToManyForCreateInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserItem = {
  __typename?: 'UserItem';
  config?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<OrderItem>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type UserItemCreateInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  item?: InputMaybe<OrderItemRelateToOneForCreateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserItemManyRelationFilter = {
  every?: InputMaybe<UserItemWhereInput>;
  none?: InputMaybe<UserItemWhereInput>;
  some?: InputMaybe<UserItemWhereInput>;
};

export type UserItemOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type UserItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserItemWhereUniqueInput>>;
  create?: InputMaybe<Array<UserItemCreateInput>>;
};

export type UserItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserItemWhereUniqueInput>>;
  create?: InputMaybe<Array<UserItemCreateInput>>;
  disconnect?: InputMaybe<Array<UserItemWhereUniqueInput>>;
  set?: InputMaybe<Array<UserItemWhereUniqueInput>>;
};

export type UserItemRelateToOneForCreateInput = {
  connect?: InputMaybe<UserItemWhereUniqueInput>;
  create?: InputMaybe<UserItemCreateInput>;
};

export type UserItemRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserItemWhereUniqueInput>;
  create?: InputMaybe<UserItemCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserItemUpdateArgs = {
  data: UserItemUpdateInput;
  where: UserItemWhereUniqueInput;
};

export type UserItemUpdateInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  item?: InputMaybe<OrderItemRelateToOneForUpdateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserItemWhereInput = {
  AND?: InputMaybe<Array<UserItemWhereInput>>;
  NOT?: InputMaybe<Array<UserItemWhereInput>>;
  OR?: InputMaybe<Array<UserItemWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  item?: InputMaybe<OrderItemWhereInput>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<OrderItemWhereUniqueInput>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
  provider?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
};

export type UserPoint = {
  __typename?: 'UserPoint';
  id: Scalars['ID']['output'];
  total_point?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type UserPointCreateInput = {
  total_point?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserPointOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  total_point?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
};

export type UserPointRelateToOneForCreateInput = {
  connect?: InputMaybe<UserPointWhereUniqueInput>;
  create?: InputMaybe<UserPointCreateInput>;
};

export type UserPointRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserPointWhereUniqueInput>;
  create?: InputMaybe<UserPointCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserPointUpdateArgs = {
  data: UserPointUpdateInput;
  where: UserPointWhereUniqueInput;
};

export type UserPointUpdateInput = {
  total_point?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserPointWhereInput = {
  AND?: InputMaybe<Array<UserPointWhereInput>>;
  NOT?: InputMaybe<Array<UserPointWhereInput>>;
  OR?: InputMaybe<Array<UserPointWhereInput>>;
  id?: InputMaybe<IdFilter>;
  total_point?: InputMaybe<IntFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserPointWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type UserPreference = {
  __typename?: 'UserPreference';
  id: Scalars['ID']['output'];
  setting?: Maybe<UserPreference_Setting_Document>;
  user?: Maybe<User>;
};

export type UserPreferenceCreateInput = {
  setting?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserPreferenceOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type UserPreferenceRelateToOneForCreateInput = {
  connect?: InputMaybe<UserPreferenceWhereUniqueInput>;
  create?: InputMaybe<UserPreferenceCreateInput>;
};

export type UserPreferenceRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserPreferenceWhereUniqueInput>;
  create?: InputMaybe<UserPreferenceCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserPreferenceUpdateArgs = {
  data: UserPreferenceUpdateInput;
  where: UserPreferenceWhereUniqueInput;
};

export type UserPreferenceUpdateInput = {
  setting?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserPreferenceWhereInput = {
  AND?: InputMaybe<Array<UserPreferenceWhereInput>>;
  NOT?: InputMaybe<Array<UserPreferenceWhereInput>>;
  OR?: InputMaybe<Array<UserPreferenceWhereInput>>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserPreferenceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<UserWhereUniqueInput>;
};

export type UserPreference_Setting_Document = {
  __typename?: 'UserPreference_setting_Document';
  document: Scalars['JSON']['output'];
};


export type UserPreference_Setting_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountRelateToManyForUpdateInput>;
  avartar?: InputMaybe<ImageRelateToOneForUpdateInput>;
  carts?: InputMaybe<CartRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<UserItemRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<UserPointRelateToOneForUpdateInput>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  preference?: InputMaybe<UserPreferenceRelateToOneForUpdateInput>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  suppiler?: InputMaybe<SupplierRelateToManyForUpdateInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountManyRelationFilter>;
  avartar?: InputMaybe<ImageWhereInput>;
  carts?: InputMaybe<CartManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  items?: InputMaybe<UserItemManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderManyRelationFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  point?: InputMaybe<UserPointWhereInput>;
  posts?: InputMaybe<PostManyRelationFilter>;
  preference?: InputMaybe<UserPreferenceWhereInput>;
  provider?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringNullableFilter>;
  suppiler?: InputMaybe<SupplierManyRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  point?: InputMaybe<UserPointWhereUniqueInput>;
  preference?: InputMaybe<UserPreferenceWhereUniqueInput>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type AuthUserItemFragment = { __typename?: 'User', id: string, name?: string | null, username?: string | null, provider?: string | null, role?: string | null, email?: string | null, image?: string | null, postsCount?: number | null, createdAt?: any | null, passwordResetIssuedAt?: any | null, passwordResetRedeemedAt?: any | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, orders?: Array<{ __typename?: 'Order', id: string }> | null, carts?: Array<{ __typename?: 'Cart', id: string }> | null, point?: { __typename?: 'UserPoint', id: string, total_point?: number | null, updateAt?: any | null } | null, posts?: Array<{ __typename?: 'Post', id: string, title?: string | null, tagsCount?: number | null }> | null } & { ' $fragmentName'?: 'AuthUserItemFragment' };

export type ValidateUserPasswordResetTokenQueryVariables = Exact<{
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type ValidateUserPasswordResetTokenQuery = { __typename?: 'Query', validateUserPasswordResetToken?: { __typename?: 'ValidateUserPasswordResetTokenResult', message: string, code: PasswordResetRedemptionErrorCode } | null };

export type RedeemUserPasswordResetTokenResultMutationVariables = Exact<{
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RedeemUserPasswordResetTokenResultMutation = { __typename?: 'Mutation', redeemUserPasswordResetToken?: { __typename?: 'RedeemUserPasswordResetTokenResult', code: PasswordResetRedemptionErrorCode, message: string } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', authenticateUserWithPassword?:
    | { __typename?: 'UserAuthenticationWithPasswordFailure', message: string }
    | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: (
        { __typename?: 'User' }
        & { ' $fragmentRefs'?: { 'AuthUserItemFragment': AuthUserItemFragment } }
      ) }
   | null };

export type SendUserPasswordResetTokenMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendUserPasswordResetTokenMutation = { __typename?: 'Mutation', sendUserPasswordResetLink: boolean };

export type AuthenticateAndLinkProviderMutationVariables = Exact<{
  provider: Scalars['String']['input'];
  email: Scalars['String']['input'];
  accessToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  providerAccountId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
}>;


export type AuthenticateAndLinkProviderMutation = { __typename?: 'Mutation', authenticateAndLinkProvider?:
    | { __typename?: 'AuthProvidersFailure', message?: string | null }
    | { __typename: 'AuthProvidersSuccess', sessionToken: string, accessToken: string, refetchToken?: string | null, item: (
        { __typename?: 'User' }
        & { ' $fragmentRefs'?: { 'AuthUserItemFragment': AuthUserItemFragment } }
      ) }
   | null };

export type UpdateCartMutationVariables = Exact<{
  where: CartWhereUniqueInput;
  data: CartUpdateInput;
}>;


export type UpdateCartMutation = { __typename?: 'Mutation', updateCart?: { __typename?: 'Cart', id: string, status?: string | null, itemsCount?: number | null, createdAt?: any | null, updateAt?: any | null, user?: { __typename?: 'User', id: string } | null, items?: Array<{ __typename?: 'CartItem', id: string }> | null } | null };

export type GetCartQueryVariables = Exact<{
  where: CartWhereUniqueInput;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip: Scalars['Int']['input'];
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CartItemOrderByInput> | CartItemOrderByInput>;
}>;


export type GetCartQuery = { __typename?: 'Query', cart?: { __typename?: 'Cart', createdAt?: any | null, id: string, itemsCount?: number | null, status?: string | null, updateAt?: any | null, items?: Array<{ __typename?: 'CartItem', id: string, quantity?: number | null, product?: (
        { __typename?: 'Product' }
        & { ' $fragmentRefs'?: { 'ProductFieldsFragment': ProductFieldsFragment } }
      ) | null }> | null, user?: { __typename?: 'User', id: string, username?: string | null } | null } | null };

export type CreateCartItemMutationVariables = Exact<{
  data: CartItemCreateInput;
}>;


export type CreateCartItemMutation = { __typename?: 'Mutation', createCartItem?: { __typename?: 'CartItem', id: string, quantity?: number | null, cart?: { __typename?: 'Cart', id: string } | null, product?: { __typename?: 'Product', id: string } | null } | null };

export type DeleteCartItemMutationVariables = Exact<{
  where: CartItemWhereUniqueInput;
}>;


export type DeleteCartItemMutation = { __typename?: 'Mutation', deleteCartItem?: { __typename?: 'CartItem', id: string } | null };

export type DeleteCartItemsMutationVariables = Exact<{
  where: Array<CartItemWhereUniqueInput> | CartItemWhereUniqueInput;
}>;


export type DeleteCartItemsMutation = { __typename?: 'Mutation', deleteCartItems?: Array<{ __typename?: 'CartItem', id: string } | null> | null };

export type CheckUserProductStatusQueryVariables = Exact<{
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type CheckUserProductStatusQuery = { __typename?: 'Query', checkUserProductStatus?:
    | { __typename: 'CheckProductFailure', message: string }
    | { __typename: 'CheckProductSuccess', inCart: boolean, inUserItem: boolean, productId: string }
   | null };

export type ImageFieldFragment = { __typename?: 'Image', id: string, name?: string | null, altText?: string | null, src?: { __typename?: 'ImageFieldOutput', filesize: number, width: number, height: number, extension: ImageExtension, url: string, id: string } | null } & { ' $fragmentName'?: 'ImageFieldFragment' };

export type GetImageQueryVariables = Exact<{
  where: ImageWhereUniqueInput;
}>;


export type GetImageQuery = { __typename?: 'Query', image?: (
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFieldFragment': ImageFieldFragment } }
  ) | null };

export type CreateImagesMutationVariables = Exact<{
  data: Array<ImageCreateInput> | ImageCreateInput;
}>;


export type CreateImagesMutation = { __typename?: 'Mutation', createImages?: Array<(
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFieldFragment': ImageFieldFragment } }
  ) | null> | null };

export type CreateImageMutationVariables = Exact<{
  data: ImageCreateInput;
}>;


export type CreateImageMutation = { __typename?: 'Mutation', createImage?: (
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFieldFragment': ImageFieldFragment } }
  ) | null };

export type GetOrderQueryVariables = Exact<{
  where: OrderWhereUniqueInput;
}>;


export type GetOrderQuery = { __typename?: 'Query', order?: { __typename?: 'Order', createdAt?: any | null, id: string, itemsCount?: number | null, updateAt?: any | null, user?: { __typename?: 'User', id: string, email?: string | null, username?: string | null, suppiler?: Array<{ __typename?: 'Supplier', id: string, name?: string | null }> | null } | null, items?: Array<{ __typename?: 'OrderItem', id: string, product?: { __typename?: 'Product', id: string } | null }> | null } | null };

export type CreateOrderAndUserItemsMutationVariables = Exact<{
  data: OrderCreateInput;
}>;


export type CreateOrderAndUserItemsMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'Order', createdAt?: any | null, id: string, updateAt?: any | null, status?: string | null, itemsCount?: number | null, items?: Array<{ __typename?: 'OrderItem', id: string, unitPrice?: number | null, product?: { __typename?: 'Product', id: string } | null }> | null, user?: { __typename?: 'User', email?: string | null, id: string, name?: string | null } | null } | null };

export type ProductFieldsFragment = { __typename?: 'Product', id: string, name?: string | null, description?: string | null, averageScore?: number | null, status?: string | null, publishedAt?: any | null, updateAt?: any | null, createdAt?: any | null, imagesCount?: number | null, youtubeId?: string | null, galleryCount?: number | null, suppilers?: (
    { __typename?: 'Supplier' }
    & { ' $fragmentRefs'?: { 'SupplierFieldsFragment': SupplierFieldsFragment } }
  ) | null, details?: { __typename?: 'Product_details_Document', document: any } | null, price?: { __typename?: 'Price', price?: number | null, description?: string | null, price_type?: PricePriceTypeType | null, id: string } | null, tag?: Array<{ __typename?: 'Tag', id: string, name?: string | null, postsCount?: number | null }> | null, faqs?: Array<{ __typename?: 'FAQ', id: string, question?: string | null, answer?: { __typename?: 'FAQ_answer_Document', document: any } | null }> | null, images?: Array<(
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFieldFragment': ImageFieldFragment } }
  )> | null, gallery?: Array<(
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFieldFragment': ImageFieldFragment } }
  )> | null } & { ' $fragmentName'?: 'ProductFieldsFragment' };

export type GetProductsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip: Scalars['Int']['input'];
  orderBy: Array<ProductOrderByInput> | ProductOrderByInput;
}>;


export type GetProductsQuery = { __typename?: 'Query', productsCount?: number | null, products?: Array<(
    { __typename?: 'Product' }
    & { ' $fragmentRefs'?: { 'ProductFieldsFragment': ProductFieldsFragment } }
  )> | null };

export type GetProductsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsCountQuery = { __typename?: 'Query', productsCount?: number | null };

export type GetProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type GetProductQuery = { __typename?: 'Query', product?: (
    { __typename?: 'Product' }
    & { ' $fragmentRefs'?: { 'ProductFieldsFragment': ProductFieldsFragment } }
  ) | null };

export type SupplierFieldsFragment = { __typename?: 'Supplier', id: string, name?: string | null, description?: string | null, productsCount?: number | null, user?: { __typename?: 'User', id: string, email?: string | null, username?: string | null } | null } & { ' $fragmentName'?: 'SupplierFieldsFragment' };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username?: string | null, email?: string | null, role?: string | null }> | null };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', createdAt?: any | null, email?: string | null, image?: string | null, name?: string | null, username?: string | null, id: string, role?: string | null, provider?: string | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, point?: { __typename?: 'UserPoint', id: string, total_point?: number | null, updateAt?: any | null } | null, avartar?: { __typename?: 'Image', altText?: string | null, id: string, src?: { __typename?: 'ImageFieldOutput', extension: ImageExtension, url: string, height: number, width: number } | null } | null, preference?: { __typename?: 'UserPreference', id: string, setting?: { __typename?: 'UserPreference_setting_Document', document: any } | null } | null, carts?: Array<{ __typename?: 'Cart', id: string, createdAt?: any | null }> | null, orders?: Array<{ __typename?: 'Order', id: string, createdAt?: any | null }> | null } | null };

export type GetUserItemQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserItemQuery = { __typename?: 'Query', user?: { __typename?: 'User', itemsCount?: number | null, items?: Array<{ __typename?: 'UserItem', id: string, config?: any | null, createdAt?: any | null, updateAt?: any | null, item?: { __typename?: 'OrderItem', id: string, product?: { __typename?: 'Product', name?: string | null, status?: string | null, createdAt?: any | null, updateAt?: any | null, images?: Array<{ __typename?: 'Image', altText?: string | null, id: string, name?: string | null, src?: { __typename?: 'ImageFieldOutput', extension: ImageExtension, filesize: number, height: number, url: string, width: number } | null }> | null } | null } | null }> | null } | null };

export type CreateUserMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name?: string | null, username?: string | null, provider?: string | null, image?: string | null, role?: string | null, email?: string | null, createdAt?: any | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null } | null };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserByEmailQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name?: string | null, username?: string | null, provider?: string | null, image?: string | null, role?: string | null, email?: string | null, postsCount?: number | null, createdAt?: any | null, passwordResetIssuedAt?: any | null, passwordResetRedeemedAt?: any | null, avartar?: { __typename?: 'Image', id: string } | null } | null };

export type GetUserPointQueryVariables = Exact<{
  where: UserPointWhereUniqueInput;
}>;


export type GetUserPointQuery = { __typename?: 'Query', userPoint?: { __typename?: 'UserPoint', id: string, total_point?: number | null, updateAt?: any | null, user?: { __typename?: 'User', id: string } | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const AuthUserItemFragmentDoc = new TypedDocumentString(`
    fragment AuthUserItem on User {
  id
  name
  username
  provider
  role
  email
  image
  postsCount
  createdAt
  password {
    isSet
  }
  orders {
    id
  }
  carts {
    id
  }
  point {
    id
    total_point
    updateAt
  }
  posts {
    id
    title
    tagsCount
  }
  passwordResetIssuedAt
  passwordResetRedeemedAt
}
    `, {"fragmentName":"AuthUserItem"}) as unknown as TypedDocumentString<AuthUserItemFragment, unknown>;
export const SupplierFieldsFragmentDoc = new TypedDocumentString(`
    fragment SupplierFields on Supplier {
  id
  name
  description
  user {
    id
    email
    username
  }
  productsCount
}
    `, {"fragmentName":"SupplierFields"}) as unknown as TypedDocumentString<SupplierFieldsFragment, unknown>;
export const ImageFieldFragmentDoc = new TypedDocumentString(`
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}
    `, {"fragmentName":"ImageField"}) as unknown as TypedDocumentString<ImageFieldFragment, unknown>;
export const ProductFieldsFragmentDoc = new TypedDocumentString(`
    fragment ProductFields on Product {
  id
  suppilers {
    ...SupplierFields
  }
  name
  description
  details {
    document
  }
  price {
    price
    description
    price_type
    price_type
    id
  }
  tag {
    id
    name
    postsCount
  }
  faqs {
    id
    question
    answer {
      document
    }
  }
  averageScore
  status
  publishedAt
  updateAt
  createdAt
  images {
    ...ImageField
  }
  imagesCount
  youtubeId
  gallery {
    ...ImageField
  }
  galleryCount
}
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}
fragment SupplierFields on Supplier {
  id
  name
  description
  user {
    id
    email
    username
  }
  productsCount
}`, {"fragmentName":"ProductFields"}) as unknown as TypedDocumentString<ProductFieldsFragment, unknown>;
export const ValidateUserPasswordResetTokenDocument = new TypedDocumentString(`
    query ValidateUserPasswordResetToken($email: String!, $token: String!) {
  validateUserPasswordResetToken(email: $email, token: $token) {
    message
    code
  }
}
    `) as unknown as TypedDocumentString<ValidateUserPasswordResetTokenQuery, ValidateUserPasswordResetTokenQueryVariables>;
export const RedeemUserPasswordResetTokenResultDocument = new TypedDocumentString(`
    mutation RedeemUserPasswordResetTokenResult($email: String!, $token: String!, $password: String!) {
  redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
    code
    message
  }
}
    `) as unknown as TypedDocumentString<RedeemUserPasswordResetTokenResultMutation, RedeemUserPasswordResetTokenResultMutationVariables>;
export const LoginDocument = new TypedDocumentString(`
    mutation Login($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        ...AuthUserItem
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
    fragment AuthUserItem on User {
  id
  name
  username
  provider
  role
  email
  image
  postsCount
  createdAt
  password {
    isSet
  }
  orders {
    id
  }
  carts {
    id
  }
  point {
    id
    total_point
    updateAt
  }
  posts {
    id
    title
    tagsCount
  }
  passwordResetIssuedAt
  passwordResetRedeemedAt
}`) as unknown as TypedDocumentString<LoginMutation, LoginMutationVariables>;
export const SendUserPasswordResetTokenDocument = new TypedDocumentString(`
    mutation SendUserPasswordResetToken($email: String!) {
  sendUserPasswordResetLink(email: $email)
}
    `) as unknown as TypedDocumentString<SendUserPasswordResetTokenMutation, SendUserPasswordResetTokenMutationVariables>;
export const AuthenticateAndLinkProviderDocument = new TypedDocumentString(`
    mutation AuthenticateAndLinkProvider($provider: String!, $email: String!, $accessToken: String, $refreshToken: String, $providerAccountId: String!, $name: String, $image: String) {
  authenticateAndLinkProvider(
    provider: $provider
    email: $email
    name: $name
    accessToken: $accessToken
    refreshToken: $refreshToken
    providerAccountId: $providerAccountId
    image: $image
  ) {
    ... on AuthProvidersSuccess {
      sessionToken
      accessToken
      refetchToken
      __typename
      item {
        ...AuthUserItem
      }
    }
    ... on AuthProvidersFailure {
      message
    }
  }
}
    fragment AuthUserItem on User {
  id
  name
  username
  provider
  role
  email
  image
  postsCount
  createdAt
  password {
    isSet
  }
  orders {
    id
  }
  carts {
    id
  }
  point {
    id
    total_point
    updateAt
  }
  posts {
    id
    title
    tagsCount
  }
  passwordResetIssuedAt
  passwordResetRedeemedAt
}`) as unknown as TypedDocumentString<AuthenticateAndLinkProviderMutation, AuthenticateAndLinkProviderMutationVariables>;
export const UpdateCartDocument = new TypedDocumentString(`
    mutation UpdateCart($where: CartWhereUniqueInput!, $data: CartUpdateInput!) {
  updateCart(where: $where, data: $data) {
    id
    user {
      id
    }
    status
    items {
      id
    }
    itemsCount
    createdAt
    updateAt
  }
}
    `) as unknown as TypedDocumentString<UpdateCartMutation, UpdateCartMutationVariables>;
export const GetCartDocument = new TypedDocumentString(`
    query getCart($where: CartWhereUniqueInput!, $take: Int, $skip: Int!, $cursor: CartItemWhereUniqueInput, $orderBy: [CartItemOrderByInput!]) {
  cart(where: $where) {
    createdAt
    id
    itemsCount
    items(take: $take, skip: $skip, cursor: $cursor, orderBy: $orderBy) {
      id
      quantity
      product {
        ...ProductFields
      }
    }
    status
    updateAt
    user {
      id
      username
    }
  }
}
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}
fragment ProductFields on Product {
  id
  suppilers {
    ...SupplierFields
  }
  name
  description
  details {
    document
  }
  price {
    price
    description
    price_type
    price_type
    id
  }
  tag {
    id
    name
    postsCount
  }
  faqs {
    id
    question
    answer {
      document
    }
  }
  averageScore
  status
  publishedAt
  updateAt
  createdAt
  images {
    ...ImageField
  }
  imagesCount
  youtubeId
  gallery {
    ...ImageField
  }
  galleryCount
}
fragment SupplierFields on Supplier {
  id
  name
  description
  user {
    id
    email
    username
  }
  productsCount
}`) as unknown as TypedDocumentString<GetCartQuery, GetCartQueryVariables>;
export const CreateCartItemDocument = new TypedDocumentString(`
    mutation CreateCartItem($data: CartItemCreateInput!) {
  createCartItem(data: $data) {
    cart {
      id
    }
    id
    quantity
    product {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CreateCartItemMutation, CreateCartItemMutationVariables>;
export const DeleteCartItemDocument = new TypedDocumentString(`
    mutation DeleteCartItem($where: CartItemWhereUniqueInput!) {
  deleteCartItem(where: $where) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const DeleteCartItemsDocument = new TypedDocumentString(`
    mutation DeleteCartItems($where: [CartItemWhereUniqueInput!]!) {
  deleteCartItems(where: $where) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteCartItemsMutation, DeleteCartItemsMutationVariables>;
export const CheckUserProductStatusDocument = new TypedDocumentString(`
    query CheckUserProductStatus($productId: String!, $userId: String!) {
  checkUserProductStatus(productId: $productId, userId: $userId) {
    ... on CheckProductSuccess {
      inCart
      inUserItem
      productId
    }
    __typename
    ... on CheckProductFailure {
      message
    }
  }
}
    `) as unknown as TypedDocumentString<CheckUserProductStatusQuery, CheckUserProductStatusQueryVariables>;
export const GetImageDocument = new TypedDocumentString(`
    query GetImage($where: ImageWhereUniqueInput!) {
  image(where: $where) {
    ...ImageField
  }
}
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}`) as unknown as TypedDocumentString<GetImageQuery, GetImageQueryVariables>;
export const CreateImagesDocument = new TypedDocumentString(`
    mutation CreateImages($data: [ImageCreateInput!]!) {
  createImages(data: $data) {
    ...ImageField
  }
}
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}`) as unknown as TypedDocumentString<CreateImagesMutation, CreateImagesMutationVariables>;
export const CreateImageDocument = new TypedDocumentString(`
    mutation CreateImage($data: ImageCreateInput!) {
  createImage(data: $data) {
    ...ImageField
  }
}
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}`) as unknown as TypedDocumentString<CreateImageMutation, CreateImageMutationVariables>;
export const GetOrderDocument = new TypedDocumentString(`
    query getOrder($where: OrderWhereUniqueInput!) {
  order(where: $where) {
    createdAt
    id
    itemsCount
    updateAt
    user {
      id
      email
      username
      suppiler {
        id
        name
      }
    }
    items {
      id
      product {
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetOrderQuery, GetOrderQueryVariables>;
export const CreateOrderAndUserItemsDocument = new TypedDocumentString(`
    mutation CreateOrderAndUserItems($data: OrderCreateInput!) {
  createOrder(data: $data) {
    items {
      id
      unitPrice
      product {
        id
      }
    }
    createdAt
    id
    updateAt
    status
    itemsCount
    user {
      email
      id
      name
    }
  }
}
    `) as unknown as TypedDocumentString<CreateOrderAndUserItemsMutation, CreateOrderAndUserItemsMutationVariables>;
export const GetProductsDocument = new TypedDocumentString(`
    query getProducts($take: Int, $skip: Int!, $orderBy: [ProductOrderByInput!]!) {
  products(take: $take, skip: $skip, orderBy: $orderBy) {
    ...ProductFields
  }
  productsCount
}
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}
fragment ProductFields on Product {
  id
  suppilers {
    ...SupplierFields
  }
  name
  description
  details {
    document
  }
  price {
    price
    description
    price_type
    price_type
    id
  }
  tag {
    id
    name
    postsCount
  }
  faqs {
    id
    question
    answer {
      document
    }
  }
  averageScore
  status
  publishedAt
  updateAt
  createdAt
  images {
    ...ImageField
  }
  imagesCount
  youtubeId
  gallery {
    ...ImageField
  }
  galleryCount
}
fragment SupplierFields on Supplier {
  id
  name
  description
  user {
    id
    email
    username
  }
  productsCount
}`) as unknown as TypedDocumentString<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsCountDocument = new TypedDocumentString(`
    query getProductsCount {
  productsCount
}
    `) as unknown as TypedDocumentString<GetProductsCountQuery, GetProductsCountQueryVariables>;
export const GetProductDocument = new TypedDocumentString(`
    query getProduct($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    ...ProductFields
  }
}
    fragment ImageField on Image {
  id
  name
  altText
  src {
    filesize
    width
    height
    extension
    url
    id
  }
}
fragment ProductFields on Product {
  id
  suppilers {
    ...SupplierFields
  }
  name
  description
  details {
    document
  }
  price {
    price
    description
    price_type
    price_type
    id
  }
  tag {
    id
    name
    postsCount
  }
  faqs {
    id
    question
    answer {
      document
    }
  }
  averageScore
  status
  publishedAt
  updateAt
  createdAt
  images {
    ...ImageField
  }
  imagesCount
  youtubeId
  gallery {
    ...ImageField
  }
  galleryCount
}
fragment SupplierFields on Supplier {
  id
  name
  description
  user {
    id
    email
    username
  }
  productsCount
}`) as unknown as TypedDocumentString<GetProductQuery, GetProductQueryVariables>;
export const GetUsersDocument = new TypedDocumentString(`
    query GetUsers {
  users {
    username
    email
    role
  }
}
    `) as unknown as TypedDocumentString<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = new TypedDocumentString(`
    query GetUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    createdAt
    email
    image
    name
    username
    id
    role
    password {
      isSet
    }
    provider
    point {
      id
      total_point
      updateAt
    }
    avartar {
      altText
      id
      src {
        extension
        url
        height
        width
      }
    }
    preference {
      id
      setting {
        document
      }
    }
    carts {
      id
      createdAt
    }
    orders {
      id
      createdAt
    }
  }
}
    `) as unknown as TypedDocumentString<GetUserQuery, GetUserQueryVariables>;
export const GetUserItemDocument = new TypedDocumentString(`
    query GetUserItem($where: UserWhereUniqueInput!) {
  user(where: $where) {
    itemsCount
    items {
      id
      config
      createdAt
      updateAt
      item {
        id
        product {
          name
          images {
            altText
            id
            name
            src {
              extension
              filesize
              height
              url
              width
            }
          }
          status
          createdAt
          updateAt
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetUserItemQuery, GetUserItemQueryVariables>;
export const CreateUserDocument = new TypedDocumentString(`
    mutation CreateUser($name: String, $username: String, $provider: String, $password: String, $email: String, $image: String) {
  createUser(
    data: {name: $name, username: $username, provider: $provider, password: $password, email: $email, image: $image}
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
    `) as unknown as TypedDocumentString<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserByEmailDocument = new TypedDocumentString(`
    query GetUserByEmail($email: String!) {
  user(where: {email: $email}) {
    id
    name
    username
    provider
    image
    avartar {
      id
    }
    role
    email
    postsCount
    createdAt
    passwordResetIssuedAt
    passwordResetRedeemedAt
  }
}
    `) as unknown as TypedDocumentString<GetUserByEmailQuery, GetUserByEmailQueryVariables>;
export const GetUserPointDocument = new TypedDocumentString(`
    query GetUserPoint($where: UserPointWhereUniqueInput!) {
  userPoint(where: $where) {
    id
    total_point
    updateAt
    user {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<GetUserPointQuery, GetUserPointQueryVariables>;