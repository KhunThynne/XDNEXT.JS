/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  accounts?: Maybe<AccountsAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  cart_items?: Maybe<Cart_ItemsAccess>;
  carts?: Maybe<CartsAccess>;
  faqs?: Maybe<FaqsAccess>;
  media?: Maybe<MediaAccess>;
  order_items?: Maybe<Order_ItemsAccess>;
  orders?: Maybe<OrdersAccess>;
  payload_kv?: Maybe<Payload_KvAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  point_transactions?: Maybe<Point_TransactionsAccess>;
  posts?: Maybe<PostsAccess>;
  prices?: Maybe<PricesAccess>;
  product_promotions?: Maybe<Product_PromotionsAccess>;
  products?: Maybe<ProductsAccess>;
  promotions?: Maybe<PromotionsAccess>;
  ratings?: Maybe<RatingsAccess>;
  settings?: Maybe<SettingsAccess>;
  stocks?: Maybe<StocksAccess>;
  suppliers?: Maybe<SuppliersAccess>;
  tags?: Maybe<TagsAccess>;
  user_items?: Maybe<User_ItemsAccess>;
  user_points?: Maybe<User_PointsAccess>;
  user_preferences?: Maybe<User_PreferencesAccess>;
  users?: Maybe<UsersAccess>;
};

export type Account = {
  __typename?: 'Account';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  meta?: Maybe<Scalars['JSON']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type Account_AccessToken_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Account_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Account_ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Account_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Account_Meta_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type Account_ProviderAccountId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Account_Provider_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Account_RefreshToken_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Account_Scope_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Account_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Account_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Account_Where = {
  AND?: InputMaybe<Array<InputMaybe<Account_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Account_Where_Or>>>;
  accessToken?: InputMaybe<Account_AccessToken_Operator>;
  createdAt?: InputMaybe<Account_CreatedAt_Operator>;
  expiresAt?: InputMaybe<Account_ExpiresAt_Operator>;
  id?: InputMaybe<Account_Id_Operator>;
  meta?: InputMaybe<Account_Meta_Operator>;
  provider?: InputMaybe<Account_Provider_Operator>;
  providerAccountId?: InputMaybe<Account_ProviderAccountId_Operator>;
  refreshToken?: InputMaybe<Account_RefreshToken_Operator>;
  scope?: InputMaybe<Account_Scope_Operator>;
  updatedAt?: InputMaybe<Account_UpdatedAt_Operator>;
  user?: InputMaybe<Account_User_Operator>;
};

export type Account_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Account_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Account_Where_Or>>>;
  accessToken?: InputMaybe<Account_AccessToken_Operator>;
  createdAt?: InputMaybe<Account_CreatedAt_Operator>;
  expiresAt?: InputMaybe<Account_ExpiresAt_Operator>;
  id?: InputMaybe<Account_Id_Operator>;
  meta?: InputMaybe<Account_Meta_Operator>;
  provider?: InputMaybe<Account_Provider_Operator>;
  providerAccountId?: InputMaybe<Account_ProviderAccountId_Operator>;
  refreshToken?: InputMaybe<Account_RefreshToken_Operator>;
  scope?: InputMaybe<Account_Scope_Operator>;
  updatedAt?: InputMaybe<Account_UpdatedAt_Operator>;
  user?: InputMaybe<Account_User_Operator>;
};

export type Account_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Account_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Account_Where_Or>>>;
  accessToken?: InputMaybe<Account_AccessToken_Operator>;
  createdAt?: InputMaybe<Account_CreatedAt_Operator>;
  expiresAt?: InputMaybe<Account_ExpiresAt_Operator>;
  id?: InputMaybe<Account_Id_Operator>;
  meta?: InputMaybe<Account_Meta_Operator>;
  provider?: InputMaybe<Account_Provider_Operator>;
  providerAccountId?: InputMaybe<Account_ProviderAccountId_Operator>;
  refreshToken?: InputMaybe<Account_RefreshToken_Operator>;
  scope?: InputMaybe<Account_Scope_Operator>;
  updatedAt?: InputMaybe<Account_UpdatedAt_Operator>;
  user?: InputMaybe<Account_User_Operator>;
};

export type Accounts = {
  __typename?: 'Accounts';
  docs: Array<Account>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type AccountsCreateAccess = {
  __typename?: 'AccountsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsCreateDocAccess = {
  __typename?: 'AccountsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsDeleteAccess = {
  __typename?: 'AccountsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsDeleteDocAccess = {
  __typename?: 'AccountsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsDocAccessFields = {
  __typename?: 'AccountsDocAccessFields';
  accessToken?: Maybe<AccountsDocAccessFields_AccessToken>;
  createdAt?: Maybe<AccountsDocAccessFields_CreatedAt>;
  expiresAt?: Maybe<AccountsDocAccessFields_ExpiresAt>;
  meta?: Maybe<AccountsDocAccessFields_Meta>;
  provider?: Maybe<AccountsDocAccessFields_Provider>;
  providerAccountId?: Maybe<AccountsDocAccessFields_ProviderAccountId>;
  refreshToken?: Maybe<AccountsDocAccessFields_RefreshToken>;
  scope?: Maybe<AccountsDocAccessFields_Scope>;
  updatedAt?: Maybe<AccountsDocAccessFields_UpdatedAt>;
  user?: Maybe<AccountsDocAccessFields_User>;
};

export type AccountsDocAccessFields_AccessToken = {
  __typename?: 'AccountsDocAccessFields_accessToken';
  create?: Maybe<AccountsDocAccessFields_AccessToken_Create>;
  delete?: Maybe<AccountsDocAccessFields_AccessToken_Delete>;
  read?: Maybe<AccountsDocAccessFields_AccessToken_Read>;
  update?: Maybe<AccountsDocAccessFields_AccessToken_Update>;
};

export type AccountsDocAccessFields_AccessToken_Create = {
  __typename?: 'AccountsDocAccessFields_accessToken_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_AccessToken_Delete = {
  __typename?: 'AccountsDocAccessFields_accessToken_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_AccessToken_Read = {
  __typename?: 'AccountsDocAccessFields_accessToken_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_AccessToken_Update = {
  __typename?: 'AccountsDocAccessFields_accessToken_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_CreatedAt = {
  __typename?: 'AccountsDocAccessFields_createdAt';
  create?: Maybe<AccountsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<AccountsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<AccountsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<AccountsDocAccessFields_CreatedAt_Update>;
};

export type AccountsDocAccessFields_CreatedAt_Create = {
  __typename?: 'AccountsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'AccountsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_CreatedAt_Read = {
  __typename?: 'AccountsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_CreatedAt_Update = {
  __typename?: 'AccountsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_ExpiresAt = {
  __typename?: 'AccountsDocAccessFields_expiresAt';
  create?: Maybe<AccountsDocAccessFields_ExpiresAt_Create>;
  delete?: Maybe<AccountsDocAccessFields_ExpiresAt_Delete>;
  read?: Maybe<AccountsDocAccessFields_ExpiresAt_Read>;
  update?: Maybe<AccountsDocAccessFields_ExpiresAt_Update>;
};

export type AccountsDocAccessFields_ExpiresAt_Create = {
  __typename?: 'AccountsDocAccessFields_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_ExpiresAt_Delete = {
  __typename?: 'AccountsDocAccessFields_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_ExpiresAt_Read = {
  __typename?: 'AccountsDocAccessFields_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_ExpiresAt_Update = {
  __typename?: 'AccountsDocAccessFields_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Meta = {
  __typename?: 'AccountsDocAccessFields_meta';
  create?: Maybe<AccountsDocAccessFields_Meta_Create>;
  delete?: Maybe<AccountsDocAccessFields_Meta_Delete>;
  read?: Maybe<AccountsDocAccessFields_Meta_Read>;
  update?: Maybe<AccountsDocAccessFields_Meta_Update>;
};

export type AccountsDocAccessFields_Meta_Create = {
  __typename?: 'AccountsDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Meta_Delete = {
  __typename?: 'AccountsDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Meta_Read = {
  __typename?: 'AccountsDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Meta_Update = {
  __typename?: 'AccountsDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Provider = {
  __typename?: 'AccountsDocAccessFields_provider';
  create?: Maybe<AccountsDocAccessFields_Provider_Create>;
  delete?: Maybe<AccountsDocAccessFields_Provider_Delete>;
  read?: Maybe<AccountsDocAccessFields_Provider_Read>;
  update?: Maybe<AccountsDocAccessFields_Provider_Update>;
};

export type AccountsDocAccessFields_ProviderAccountId = {
  __typename?: 'AccountsDocAccessFields_providerAccountId';
  create?: Maybe<AccountsDocAccessFields_ProviderAccountId_Create>;
  delete?: Maybe<AccountsDocAccessFields_ProviderAccountId_Delete>;
  read?: Maybe<AccountsDocAccessFields_ProviderAccountId_Read>;
  update?: Maybe<AccountsDocAccessFields_ProviderAccountId_Update>;
};

export type AccountsDocAccessFields_ProviderAccountId_Create = {
  __typename?: 'AccountsDocAccessFields_providerAccountId_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_ProviderAccountId_Delete = {
  __typename?: 'AccountsDocAccessFields_providerAccountId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_ProviderAccountId_Read = {
  __typename?: 'AccountsDocAccessFields_providerAccountId_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_ProviderAccountId_Update = {
  __typename?: 'AccountsDocAccessFields_providerAccountId_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Provider_Create = {
  __typename?: 'AccountsDocAccessFields_provider_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Provider_Delete = {
  __typename?: 'AccountsDocAccessFields_provider_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Provider_Read = {
  __typename?: 'AccountsDocAccessFields_provider_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Provider_Update = {
  __typename?: 'AccountsDocAccessFields_provider_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_RefreshToken = {
  __typename?: 'AccountsDocAccessFields_refreshToken';
  create?: Maybe<AccountsDocAccessFields_RefreshToken_Create>;
  delete?: Maybe<AccountsDocAccessFields_RefreshToken_Delete>;
  read?: Maybe<AccountsDocAccessFields_RefreshToken_Read>;
  update?: Maybe<AccountsDocAccessFields_RefreshToken_Update>;
};

export type AccountsDocAccessFields_RefreshToken_Create = {
  __typename?: 'AccountsDocAccessFields_refreshToken_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_RefreshToken_Delete = {
  __typename?: 'AccountsDocAccessFields_refreshToken_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_RefreshToken_Read = {
  __typename?: 'AccountsDocAccessFields_refreshToken_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_RefreshToken_Update = {
  __typename?: 'AccountsDocAccessFields_refreshToken_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Scope = {
  __typename?: 'AccountsDocAccessFields_scope';
  create?: Maybe<AccountsDocAccessFields_Scope_Create>;
  delete?: Maybe<AccountsDocAccessFields_Scope_Delete>;
  read?: Maybe<AccountsDocAccessFields_Scope_Read>;
  update?: Maybe<AccountsDocAccessFields_Scope_Update>;
};

export type AccountsDocAccessFields_Scope_Create = {
  __typename?: 'AccountsDocAccessFields_scope_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Scope_Delete = {
  __typename?: 'AccountsDocAccessFields_scope_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Scope_Read = {
  __typename?: 'AccountsDocAccessFields_scope_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_Scope_Update = {
  __typename?: 'AccountsDocAccessFields_scope_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_UpdatedAt = {
  __typename?: 'AccountsDocAccessFields_updatedAt';
  create?: Maybe<AccountsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<AccountsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<AccountsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<AccountsDocAccessFields_UpdatedAt_Update>;
};

export type AccountsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'AccountsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'AccountsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'AccountsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'AccountsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_User = {
  __typename?: 'AccountsDocAccessFields_user';
  create?: Maybe<AccountsDocAccessFields_User_Create>;
  delete?: Maybe<AccountsDocAccessFields_User_Delete>;
  read?: Maybe<AccountsDocAccessFields_User_Read>;
  update?: Maybe<AccountsDocAccessFields_User_Update>;
};

export type AccountsDocAccessFields_User_Create = {
  __typename?: 'AccountsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_User_Delete = {
  __typename?: 'AccountsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_User_Read = {
  __typename?: 'AccountsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsDocAccessFields_User_Update = {
  __typename?: 'AccountsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields = {
  __typename?: 'AccountsFields';
  accessToken?: Maybe<AccountsFields_AccessToken>;
  createdAt?: Maybe<AccountsFields_CreatedAt>;
  expiresAt?: Maybe<AccountsFields_ExpiresAt>;
  meta?: Maybe<AccountsFields_Meta>;
  provider?: Maybe<AccountsFields_Provider>;
  providerAccountId?: Maybe<AccountsFields_ProviderAccountId>;
  refreshToken?: Maybe<AccountsFields_RefreshToken>;
  scope?: Maybe<AccountsFields_Scope>;
  updatedAt?: Maybe<AccountsFields_UpdatedAt>;
  user?: Maybe<AccountsFields_User>;
};

export type AccountsFields_AccessToken = {
  __typename?: 'AccountsFields_accessToken';
  create?: Maybe<AccountsFields_AccessToken_Create>;
  delete?: Maybe<AccountsFields_AccessToken_Delete>;
  read?: Maybe<AccountsFields_AccessToken_Read>;
  update?: Maybe<AccountsFields_AccessToken_Update>;
};

export type AccountsFields_AccessToken_Create = {
  __typename?: 'AccountsFields_accessToken_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_AccessToken_Delete = {
  __typename?: 'AccountsFields_accessToken_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_AccessToken_Read = {
  __typename?: 'AccountsFields_accessToken_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_AccessToken_Update = {
  __typename?: 'AccountsFields_accessToken_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_CreatedAt = {
  __typename?: 'AccountsFields_createdAt';
  create?: Maybe<AccountsFields_CreatedAt_Create>;
  delete?: Maybe<AccountsFields_CreatedAt_Delete>;
  read?: Maybe<AccountsFields_CreatedAt_Read>;
  update?: Maybe<AccountsFields_CreatedAt_Update>;
};

export type AccountsFields_CreatedAt_Create = {
  __typename?: 'AccountsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_CreatedAt_Delete = {
  __typename?: 'AccountsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_CreatedAt_Read = {
  __typename?: 'AccountsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_CreatedAt_Update = {
  __typename?: 'AccountsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_ExpiresAt = {
  __typename?: 'AccountsFields_expiresAt';
  create?: Maybe<AccountsFields_ExpiresAt_Create>;
  delete?: Maybe<AccountsFields_ExpiresAt_Delete>;
  read?: Maybe<AccountsFields_ExpiresAt_Read>;
  update?: Maybe<AccountsFields_ExpiresAt_Update>;
};

export type AccountsFields_ExpiresAt_Create = {
  __typename?: 'AccountsFields_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_ExpiresAt_Delete = {
  __typename?: 'AccountsFields_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_ExpiresAt_Read = {
  __typename?: 'AccountsFields_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_ExpiresAt_Update = {
  __typename?: 'AccountsFields_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Meta = {
  __typename?: 'AccountsFields_meta';
  create?: Maybe<AccountsFields_Meta_Create>;
  delete?: Maybe<AccountsFields_Meta_Delete>;
  read?: Maybe<AccountsFields_Meta_Read>;
  update?: Maybe<AccountsFields_Meta_Update>;
};

export type AccountsFields_Meta_Create = {
  __typename?: 'AccountsFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Meta_Delete = {
  __typename?: 'AccountsFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Meta_Read = {
  __typename?: 'AccountsFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Meta_Update = {
  __typename?: 'AccountsFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Provider = {
  __typename?: 'AccountsFields_provider';
  create?: Maybe<AccountsFields_Provider_Create>;
  delete?: Maybe<AccountsFields_Provider_Delete>;
  read?: Maybe<AccountsFields_Provider_Read>;
  update?: Maybe<AccountsFields_Provider_Update>;
};

export type AccountsFields_ProviderAccountId = {
  __typename?: 'AccountsFields_providerAccountId';
  create?: Maybe<AccountsFields_ProviderAccountId_Create>;
  delete?: Maybe<AccountsFields_ProviderAccountId_Delete>;
  read?: Maybe<AccountsFields_ProviderAccountId_Read>;
  update?: Maybe<AccountsFields_ProviderAccountId_Update>;
};

export type AccountsFields_ProviderAccountId_Create = {
  __typename?: 'AccountsFields_providerAccountId_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_ProviderAccountId_Delete = {
  __typename?: 'AccountsFields_providerAccountId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_ProviderAccountId_Read = {
  __typename?: 'AccountsFields_providerAccountId_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_ProviderAccountId_Update = {
  __typename?: 'AccountsFields_providerAccountId_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Provider_Create = {
  __typename?: 'AccountsFields_provider_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Provider_Delete = {
  __typename?: 'AccountsFields_provider_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Provider_Read = {
  __typename?: 'AccountsFields_provider_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Provider_Update = {
  __typename?: 'AccountsFields_provider_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_RefreshToken = {
  __typename?: 'AccountsFields_refreshToken';
  create?: Maybe<AccountsFields_RefreshToken_Create>;
  delete?: Maybe<AccountsFields_RefreshToken_Delete>;
  read?: Maybe<AccountsFields_RefreshToken_Read>;
  update?: Maybe<AccountsFields_RefreshToken_Update>;
};

export type AccountsFields_RefreshToken_Create = {
  __typename?: 'AccountsFields_refreshToken_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_RefreshToken_Delete = {
  __typename?: 'AccountsFields_refreshToken_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_RefreshToken_Read = {
  __typename?: 'AccountsFields_refreshToken_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_RefreshToken_Update = {
  __typename?: 'AccountsFields_refreshToken_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Scope = {
  __typename?: 'AccountsFields_scope';
  create?: Maybe<AccountsFields_Scope_Create>;
  delete?: Maybe<AccountsFields_Scope_Delete>;
  read?: Maybe<AccountsFields_Scope_Read>;
  update?: Maybe<AccountsFields_Scope_Update>;
};

export type AccountsFields_Scope_Create = {
  __typename?: 'AccountsFields_scope_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Scope_Delete = {
  __typename?: 'AccountsFields_scope_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Scope_Read = {
  __typename?: 'AccountsFields_scope_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_Scope_Update = {
  __typename?: 'AccountsFields_scope_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_UpdatedAt = {
  __typename?: 'AccountsFields_updatedAt';
  create?: Maybe<AccountsFields_UpdatedAt_Create>;
  delete?: Maybe<AccountsFields_UpdatedAt_Delete>;
  read?: Maybe<AccountsFields_UpdatedAt_Read>;
  update?: Maybe<AccountsFields_UpdatedAt_Update>;
};

export type AccountsFields_UpdatedAt_Create = {
  __typename?: 'AccountsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_UpdatedAt_Delete = {
  __typename?: 'AccountsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_UpdatedAt_Read = {
  __typename?: 'AccountsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_UpdatedAt_Update = {
  __typename?: 'AccountsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_User = {
  __typename?: 'AccountsFields_user';
  create?: Maybe<AccountsFields_User_Create>;
  delete?: Maybe<AccountsFields_User_Delete>;
  read?: Maybe<AccountsFields_User_Read>;
  update?: Maybe<AccountsFields_User_Update>;
};

export type AccountsFields_User_Create = {
  __typename?: 'AccountsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_User_Delete = {
  __typename?: 'AccountsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_User_Read = {
  __typename?: 'AccountsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type AccountsFields_User_Update = {
  __typename?: 'AccountsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type AccountsReadAccess = {
  __typename?: 'AccountsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsReadDocAccess = {
  __typename?: 'AccountsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsUpdateAccess = {
  __typename?: 'AccountsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsUpdateDocAccess = {
  __typename?: 'AccountsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  items?: Maybe<Array<CartItem>>;
  status?: Maybe<Cart_Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type CartItem = {
  __typename?: 'CartItem';
  cart?: Maybe<Cart>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  product?: Maybe<Product>;
  quantity: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CartItem_Cart_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CartItem_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItem_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CartItem_Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type CartItem_Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CartItem_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItem_Where = {
  AND?: InputMaybe<Array<InputMaybe<CartItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<CartItem_Where_Or>>>;
  cart?: InputMaybe<CartItem_Cart_Operator>;
  createdAt?: InputMaybe<CartItem_CreatedAt_Operator>;
  id?: InputMaybe<CartItem_Id_Operator>;
  product?: InputMaybe<CartItem_Product_Operator>;
  quantity?: InputMaybe<CartItem_Quantity_Operator>;
  updatedAt?: InputMaybe<CartItem_UpdatedAt_Operator>;
};

export type CartItem_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<CartItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<CartItem_Where_Or>>>;
  cart?: InputMaybe<CartItem_Cart_Operator>;
  createdAt?: InputMaybe<CartItem_CreatedAt_Operator>;
  id?: InputMaybe<CartItem_Id_Operator>;
  product?: InputMaybe<CartItem_Product_Operator>;
  quantity?: InputMaybe<CartItem_Quantity_Operator>;
  updatedAt?: InputMaybe<CartItem_UpdatedAt_Operator>;
};

export type CartItem_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<CartItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<CartItem_Where_Or>>>;
  cart?: InputMaybe<CartItem_Cart_Operator>;
  createdAt?: InputMaybe<CartItem_CreatedAt_Operator>;
  id?: InputMaybe<CartItem_Id_Operator>;
  product?: InputMaybe<CartItem_Product_Operator>;
  quantity?: InputMaybe<CartItem_Quantity_Operator>;
  updatedAt?: InputMaybe<CartItem_UpdatedAt_Operator>;
};

export type CartItems = {
  __typename?: 'CartItems';
  docs: Array<CartItem>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CartItemsCreateAccess = {
  __typename?: 'CartItemsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartItemsCreateDocAccess = {
  __typename?: 'CartItemsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartItemsDeleteAccess = {
  __typename?: 'CartItemsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartItemsDeleteDocAccess = {
  __typename?: 'CartItemsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartItemsDocAccessFields = {
  __typename?: 'CartItemsDocAccessFields';
  cart?: Maybe<CartItemsDocAccessFields_Cart>;
  createdAt?: Maybe<CartItemsDocAccessFields_CreatedAt>;
  product?: Maybe<CartItemsDocAccessFields_Product>;
  quantity?: Maybe<CartItemsDocAccessFields_Quantity>;
  updatedAt?: Maybe<CartItemsDocAccessFields_UpdatedAt>;
};

export type CartItemsDocAccessFields_Cart = {
  __typename?: 'CartItemsDocAccessFields_cart';
  create?: Maybe<CartItemsDocAccessFields_Cart_Create>;
  delete?: Maybe<CartItemsDocAccessFields_Cart_Delete>;
  read?: Maybe<CartItemsDocAccessFields_Cart_Read>;
  update?: Maybe<CartItemsDocAccessFields_Cart_Update>;
};

export type CartItemsDocAccessFields_Cart_Create = {
  __typename?: 'CartItemsDocAccessFields_cart_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Cart_Delete = {
  __typename?: 'CartItemsDocAccessFields_cart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Cart_Read = {
  __typename?: 'CartItemsDocAccessFields_cart_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Cart_Update = {
  __typename?: 'CartItemsDocAccessFields_cart_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_CreatedAt = {
  __typename?: 'CartItemsDocAccessFields_createdAt';
  create?: Maybe<CartItemsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CartItemsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CartItemsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CartItemsDocAccessFields_CreatedAt_Update>;
};

export type CartItemsDocAccessFields_CreatedAt_Create = {
  __typename?: 'CartItemsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CartItemsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_CreatedAt_Read = {
  __typename?: 'CartItemsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_CreatedAt_Update = {
  __typename?: 'CartItemsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Product = {
  __typename?: 'CartItemsDocAccessFields_product';
  create?: Maybe<CartItemsDocAccessFields_Product_Create>;
  delete?: Maybe<CartItemsDocAccessFields_Product_Delete>;
  read?: Maybe<CartItemsDocAccessFields_Product_Read>;
  update?: Maybe<CartItemsDocAccessFields_Product_Update>;
};

export type CartItemsDocAccessFields_Product_Create = {
  __typename?: 'CartItemsDocAccessFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Product_Delete = {
  __typename?: 'CartItemsDocAccessFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Product_Read = {
  __typename?: 'CartItemsDocAccessFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Product_Update = {
  __typename?: 'CartItemsDocAccessFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Quantity = {
  __typename?: 'CartItemsDocAccessFields_quantity';
  create?: Maybe<CartItemsDocAccessFields_Quantity_Create>;
  delete?: Maybe<CartItemsDocAccessFields_Quantity_Delete>;
  read?: Maybe<CartItemsDocAccessFields_Quantity_Read>;
  update?: Maybe<CartItemsDocAccessFields_Quantity_Update>;
};

export type CartItemsDocAccessFields_Quantity_Create = {
  __typename?: 'CartItemsDocAccessFields_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Quantity_Delete = {
  __typename?: 'CartItemsDocAccessFields_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Quantity_Read = {
  __typename?: 'CartItemsDocAccessFields_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_Quantity_Update = {
  __typename?: 'CartItemsDocAccessFields_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_UpdatedAt = {
  __typename?: 'CartItemsDocAccessFields_updatedAt';
  create?: Maybe<CartItemsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CartItemsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CartItemsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CartItemsDocAccessFields_UpdatedAt_Update>;
};

export type CartItemsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CartItemsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CartItemsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CartItemsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CartItemsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields = {
  __typename?: 'CartItemsFields';
  cart?: Maybe<CartItemsFields_Cart>;
  createdAt?: Maybe<CartItemsFields_CreatedAt>;
  product?: Maybe<CartItemsFields_Product>;
  quantity?: Maybe<CartItemsFields_Quantity>;
  updatedAt?: Maybe<CartItemsFields_UpdatedAt>;
};

export type CartItemsFields_Cart = {
  __typename?: 'CartItemsFields_cart';
  create?: Maybe<CartItemsFields_Cart_Create>;
  delete?: Maybe<CartItemsFields_Cart_Delete>;
  read?: Maybe<CartItemsFields_Cart_Read>;
  update?: Maybe<CartItemsFields_Cart_Update>;
};

export type CartItemsFields_Cart_Create = {
  __typename?: 'CartItemsFields_cart_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Cart_Delete = {
  __typename?: 'CartItemsFields_cart_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Cart_Read = {
  __typename?: 'CartItemsFields_cart_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Cart_Update = {
  __typename?: 'CartItemsFields_cart_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_CreatedAt = {
  __typename?: 'CartItemsFields_createdAt';
  create?: Maybe<CartItemsFields_CreatedAt_Create>;
  delete?: Maybe<CartItemsFields_CreatedAt_Delete>;
  read?: Maybe<CartItemsFields_CreatedAt_Read>;
  update?: Maybe<CartItemsFields_CreatedAt_Update>;
};

export type CartItemsFields_CreatedAt_Create = {
  __typename?: 'CartItemsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_CreatedAt_Delete = {
  __typename?: 'CartItemsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_CreatedAt_Read = {
  __typename?: 'CartItemsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_CreatedAt_Update = {
  __typename?: 'CartItemsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Product = {
  __typename?: 'CartItemsFields_product';
  create?: Maybe<CartItemsFields_Product_Create>;
  delete?: Maybe<CartItemsFields_Product_Delete>;
  read?: Maybe<CartItemsFields_Product_Read>;
  update?: Maybe<CartItemsFields_Product_Update>;
};

export type CartItemsFields_Product_Create = {
  __typename?: 'CartItemsFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Product_Delete = {
  __typename?: 'CartItemsFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Product_Read = {
  __typename?: 'CartItemsFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Product_Update = {
  __typename?: 'CartItemsFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Quantity = {
  __typename?: 'CartItemsFields_quantity';
  create?: Maybe<CartItemsFields_Quantity_Create>;
  delete?: Maybe<CartItemsFields_Quantity_Delete>;
  read?: Maybe<CartItemsFields_Quantity_Read>;
  update?: Maybe<CartItemsFields_Quantity_Update>;
};

export type CartItemsFields_Quantity_Create = {
  __typename?: 'CartItemsFields_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Quantity_Delete = {
  __typename?: 'CartItemsFields_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Quantity_Read = {
  __typename?: 'CartItemsFields_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_Quantity_Update = {
  __typename?: 'CartItemsFields_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_UpdatedAt = {
  __typename?: 'CartItemsFields_updatedAt';
  create?: Maybe<CartItemsFields_UpdatedAt_Create>;
  delete?: Maybe<CartItemsFields_UpdatedAt_Delete>;
  read?: Maybe<CartItemsFields_UpdatedAt_Read>;
  update?: Maybe<CartItemsFields_UpdatedAt_Update>;
};

export type CartItemsFields_UpdatedAt_Create = {
  __typename?: 'CartItemsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_UpdatedAt_Delete = {
  __typename?: 'CartItemsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_UpdatedAt_Read = {
  __typename?: 'CartItemsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsFields_UpdatedAt_Update = {
  __typename?: 'CartItemsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartItemsReadAccess = {
  __typename?: 'CartItemsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartItemsReadDocAccess = {
  __typename?: 'CartItemsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartItemsUpdateAccess = {
  __typename?: 'CartItemsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartItemsUpdateDocAccess = {
  __typename?: 'CartItemsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum CartUpdate_Status_MutationInput {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Saved = 'SAVED'
}

export type Cart_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Cart_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cart_Items_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum Cart_Status {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Saved = 'SAVED'
}

export enum Cart_Status_Input {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Saved = 'SAVED'
}

export enum Cart_Status_MutationInput {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Saved = 'SAVED'
}

export type Cart_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Cart_Status_Input>>>;
  equals?: InputMaybe<Cart_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Cart_Status_Input>>>;
  not_equals?: InputMaybe<Cart_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Cart_Status_Input>>>;
};

export type Cart_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Cart_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Cart_Where = {
  AND?: InputMaybe<Array<InputMaybe<Cart_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Cart_Where_Or>>>;
  createdAt?: InputMaybe<Cart_CreatedAt_Operator>;
  id?: InputMaybe<Cart_Id_Operator>;
  items?: InputMaybe<Cart_Items_Operator>;
  status?: InputMaybe<Cart_Status_Operator>;
  updatedAt?: InputMaybe<Cart_UpdatedAt_Operator>;
  user?: InputMaybe<Cart_User_Operator>;
};

export type Cart_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Cart_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Cart_Where_Or>>>;
  createdAt?: InputMaybe<Cart_CreatedAt_Operator>;
  id?: InputMaybe<Cart_Id_Operator>;
  items?: InputMaybe<Cart_Items_Operator>;
  status?: InputMaybe<Cart_Status_Operator>;
  updatedAt?: InputMaybe<Cart_UpdatedAt_Operator>;
  user?: InputMaybe<Cart_User_Operator>;
};

export type Cart_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Cart_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Cart_Where_Or>>>;
  createdAt?: InputMaybe<Cart_CreatedAt_Operator>;
  id?: InputMaybe<Cart_Id_Operator>;
  items?: InputMaybe<Cart_Items_Operator>;
  status?: InputMaybe<Cart_Status_Operator>;
  updatedAt?: InputMaybe<Cart_UpdatedAt_Operator>;
  user?: InputMaybe<Cart_User_Operator>;
};

export type Carts = {
  __typename?: 'Carts';
  docs: Array<Cart>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CartsCreateAccess = {
  __typename?: 'CartsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsCreateDocAccess = {
  __typename?: 'CartsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDeleteAccess = {
  __typename?: 'CartsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDeleteDocAccess = {
  __typename?: 'CartsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsDocAccessFields = {
  __typename?: 'CartsDocAccessFields';
  createdAt?: Maybe<CartsDocAccessFields_CreatedAt>;
  items?: Maybe<CartsDocAccessFields_Items>;
  status?: Maybe<CartsDocAccessFields_Status>;
  updatedAt?: Maybe<CartsDocAccessFields_UpdatedAt>;
  user?: Maybe<CartsDocAccessFields_User>;
};

export type CartsDocAccessFields_CreatedAt = {
  __typename?: 'CartsDocAccessFields_createdAt';
  create?: Maybe<CartsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CartsDocAccessFields_CreatedAt_Update>;
};

export type CartsDocAccessFields_CreatedAt_Create = {
  __typename?: 'CartsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CartsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Read = {
  __typename?: 'CartsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_CreatedAt_Update = {
  __typename?: 'CartsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items = {
  __typename?: 'CartsDocAccessFields_items';
  create?: Maybe<CartsDocAccessFields_Items_Create>;
  delete?: Maybe<CartsDocAccessFields_Items_Delete>;
  read?: Maybe<CartsDocAccessFields_Items_Read>;
  update?: Maybe<CartsDocAccessFields_Items_Update>;
};

export type CartsDocAccessFields_Items_Create = {
  __typename?: 'CartsDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Delete = {
  __typename?: 'CartsDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Read = {
  __typename?: 'CartsDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Items_Update = {
  __typename?: 'CartsDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status = {
  __typename?: 'CartsDocAccessFields_status';
  create?: Maybe<CartsDocAccessFields_Status_Create>;
  delete?: Maybe<CartsDocAccessFields_Status_Delete>;
  read?: Maybe<CartsDocAccessFields_Status_Read>;
  update?: Maybe<CartsDocAccessFields_Status_Update>;
};

export type CartsDocAccessFields_Status_Create = {
  __typename?: 'CartsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Delete = {
  __typename?: 'CartsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Read = {
  __typename?: 'CartsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_Status_Update = {
  __typename?: 'CartsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt = {
  __typename?: 'CartsDocAccessFields_updatedAt';
  create?: Maybe<CartsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CartsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CartsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CartsDocAccessFields_UpdatedAt_Update>;
};

export type CartsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CartsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CartsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CartsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CartsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_User = {
  __typename?: 'CartsDocAccessFields_user';
  create?: Maybe<CartsDocAccessFields_User_Create>;
  delete?: Maybe<CartsDocAccessFields_User_Delete>;
  read?: Maybe<CartsDocAccessFields_User_Read>;
  update?: Maybe<CartsDocAccessFields_User_Update>;
};

export type CartsDocAccessFields_User_Create = {
  __typename?: 'CartsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_User_Delete = {
  __typename?: 'CartsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_User_Read = {
  __typename?: 'CartsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsDocAccessFields_User_Update = {
  __typename?: 'CartsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields = {
  __typename?: 'CartsFields';
  createdAt?: Maybe<CartsFields_CreatedAt>;
  items?: Maybe<CartsFields_Items>;
  status?: Maybe<CartsFields_Status>;
  updatedAt?: Maybe<CartsFields_UpdatedAt>;
  user?: Maybe<CartsFields_User>;
};

export type CartsFields_CreatedAt = {
  __typename?: 'CartsFields_createdAt';
  create?: Maybe<CartsFields_CreatedAt_Create>;
  delete?: Maybe<CartsFields_CreatedAt_Delete>;
  read?: Maybe<CartsFields_CreatedAt_Read>;
  update?: Maybe<CartsFields_CreatedAt_Update>;
};

export type CartsFields_CreatedAt_Create = {
  __typename?: 'CartsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Delete = {
  __typename?: 'CartsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Read = {
  __typename?: 'CartsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_CreatedAt_Update = {
  __typename?: 'CartsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items = {
  __typename?: 'CartsFields_items';
  create?: Maybe<CartsFields_Items_Create>;
  delete?: Maybe<CartsFields_Items_Delete>;
  read?: Maybe<CartsFields_Items_Read>;
  update?: Maybe<CartsFields_Items_Update>;
};

export type CartsFields_Items_Create = {
  __typename?: 'CartsFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Delete = {
  __typename?: 'CartsFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Read = {
  __typename?: 'CartsFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Items_Update = {
  __typename?: 'CartsFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status = {
  __typename?: 'CartsFields_status';
  create?: Maybe<CartsFields_Status_Create>;
  delete?: Maybe<CartsFields_Status_Delete>;
  read?: Maybe<CartsFields_Status_Read>;
  update?: Maybe<CartsFields_Status_Update>;
};

export type CartsFields_Status_Create = {
  __typename?: 'CartsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Delete = {
  __typename?: 'CartsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Read = {
  __typename?: 'CartsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_Status_Update = {
  __typename?: 'CartsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt = {
  __typename?: 'CartsFields_updatedAt';
  create?: Maybe<CartsFields_UpdatedAt_Create>;
  delete?: Maybe<CartsFields_UpdatedAt_Delete>;
  read?: Maybe<CartsFields_UpdatedAt_Read>;
  update?: Maybe<CartsFields_UpdatedAt_Update>;
};

export type CartsFields_UpdatedAt_Create = {
  __typename?: 'CartsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Delete = {
  __typename?: 'CartsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Read = {
  __typename?: 'CartsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_UpdatedAt_Update = {
  __typename?: 'CartsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_User = {
  __typename?: 'CartsFields_user';
  create?: Maybe<CartsFields_User_Create>;
  delete?: Maybe<CartsFields_User_Delete>;
  read?: Maybe<CartsFields_User_Read>;
  update?: Maybe<CartsFields_User_Update>;
};

export type CartsFields_User_Create = {
  __typename?: 'CartsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_User_Delete = {
  __typename?: 'CartsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_User_Read = {
  __typename?: 'CartsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type CartsFields_User_Update = {
  __typename?: 'CartsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type CartsReadAccess = {
  __typename?: 'CartsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsReadDocAccess = {
  __typename?: 'CartsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsUpdateAccess = {
  __typename?: 'CartsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CartsUpdateDocAccess = {
  __typename?: 'CartsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ExternalMedia = {
  __typename?: 'ExternalMedia';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Faq = {
  __typename?: 'Faq';
  answer?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  question: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FaqAnswerArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Faq_Answer_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Faq_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Faq_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Faq_Question_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Faq_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Faq_Where = {
  AND?: InputMaybe<Array<InputMaybe<Faq_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Faq_Where_Or>>>;
  answer?: InputMaybe<Faq_Answer_Operator>;
  createdAt?: InputMaybe<Faq_CreatedAt_Operator>;
  id?: InputMaybe<Faq_Id_Operator>;
  question?: InputMaybe<Faq_Question_Operator>;
  updatedAt?: InputMaybe<Faq_UpdatedAt_Operator>;
};

export type Faq_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Faq_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Faq_Where_Or>>>;
  answer?: InputMaybe<Faq_Answer_Operator>;
  createdAt?: InputMaybe<Faq_CreatedAt_Operator>;
  id?: InputMaybe<Faq_Id_Operator>;
  question?: InputMaybe<Faq_Question_Operator>;
  updatedAt?: InputMaybe<Faq_UpdatedAt_Operator>;
};

export type Faq_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Faq_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Faq_Where_Or>>>;
  answer?: InputMaybe<Faq_Answer_Operator>;
  createdAt?: InputMaybe<Faq_CreatedAt_Operator>;
  id?: InputMaybe<Faq_Id_Operator>;
  question?: InputMaybe<Faq_Question_Operator>;
  updatedAt?: InputMaybe<Faq_UpdatedAt_Operator>;
};

export type Faqs = {
  __typename?: 'Faqs';
  docs: Array<Faq>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type FaqsCreateAccess = {
  __typename?: 'FaqsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsCreateDocAccess = {
  __typename?: 'FaqsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsDeleteAccess = {
  __typename?: 'FaqsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsDeleteDocAccess = {
  __typename?: 'FaqsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsDocAccessFields = {
  __typename?: 'FaqsDocAccessFields';
  answer?: Maybe<FaqsDocAccessFields_Answer>;
  createdAt?: Maybe<FaqsDocAccessFields_CreatedAt>;
  question?: Maybe<FaqsDocAccessFields_Question>;
  updatedAt?: Maybe<FaqsDocAccessFields_UpdatedAt>;
};

export type FaqsDocAccessFields_Answer = {
  __typename?: 'FaqsDocAccessFields_answer';
  create?: Maybe<FaqsDocAccessFields_Answer_Create>;
  delete?: Maybe<FaqsDocAccessFields_Answer_Delete>;
  read?: Maybe<FaqsDocAccessFields_Answer_Read>;
  update?: Maybe<FaqsDocAccessFields_Answer_Update>;
};

export type FaqsDocAccessFields_Answer_Create = {
  __typename?: 'FaqsDocAccessFields_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Answer_Delete = {
  __typename?: 'FaqsDocAccessFields_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Answer_Read = {
  __typename?: 'FaqsDocAccessFields_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Answer_Update = {
  __typename?: 'FaqsDocAccessFields_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt = {
  __typename?: 'FaqsDocAccessFields_createdAt';
  create?: Maybe<FaqsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FaqsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FaqsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FaqsDocAccessFields_CreatedAt_Update>;
};

export type FaqsDocAccessFields_CreatedAt_Create = {
  __typename?: 'FaqsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FaqsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt_Read = {
  __typename?: 'FaqsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_CreatedAt_Update = {
  __typename?: 'FaqsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question = {
  __typename?: 'FaqsDocAccessFields_question';
  create?: Maybe<FaqsDocAccessFields_Question_Create>;
  delete?: Maybe<FaqsDocAccessFields_Question_Delete>;
  read?: Maybe<FaqsDocAccessFields_Question_Read>;
  update?: Maybe<FaqsDocAccessFields_Question_Update>;
};

export type FaqsDocAccessFields_Question_Create = {
  __typename?: 'FaqsDocAccessFields_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question_Delete = {
  __typename?: 'FaqsDocAccessFields_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question_Read = {
  __typename?: 'FaqsDocAccessFields_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_Question_Update = {
  __typename?: 'FaqsDocAccessFields_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt = {
  __typename?: 'FaqsDocAccessFields_updatedAt';
  create?: Maybe<FaqsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FaqsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FaqsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FaqsDocAccessFields_UpdatedAt_Update>;
};

export type FaqsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FaqsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FaqsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FaqsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FaqsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields = {
  __typename?: 'FaqsFields';
  answer?: Maybe<FaqsFields_Answer>;
  createdAt?: Maybe<FaqsFields_CreatedAt>;
  question?: Maybe<FaqsFields_Question>;
  updatedAt?: Maybe<FaqsFields_UpdatedAt>;
};

export type FaqsFields_Answer = {
  __typename?: 'FaqsFields_answer';
  create?: Maybe<FaqsFields_Answer_Create>;
  delete?: Maybe<FaqsFields_Answer_Delete>;
  read?: Maybe<FaqsFields_Answer_Read>;
  update?: Maybe<FaqsFields_Answer_Update>;
};

export type FaqsFields_Answer_Create = {
  __typename?: 'FaqsFields_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Answer_Delete = {
  __typename?: 'FaqsFields_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Answer_Read = {
  __typename?: 'FaqsFields_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Answer_Update = {
  __typename?: 'FaqsFields_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt = {
  __typename?: 'FaqsFields_createdAt';
  create?: Maybe<FaqsFields_CreatedAt_Create>;
  delete?: Maybe<FaqsFields_CreatedAt_Delete>;
  read?: Maybe<FaqsFields_CreatedAt_Read>;
  update?: Maybe<FaqsFields_CreatedAt_Update>;
};

export type FaqsFields_CreatedAt_Create = {
  __typename?: 'FaqsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt_Delete = {
  __typename?: 'FaqsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt_Read = {
  __typename?: 'FaqsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_CreatedAt_Update = {
  __typename?: 'FaqsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question = {
  __typename?: 'FaqsFields_question';
  create?: Maybe<FaqsFields_Question_Create>;
  delete?: Maybe<FaqsFields_Question_Delete>;
  read?: Maybe<FaqsFields_Question_Read>;
  update?: Maybe<FaqsFields_Question_Update>;
};

export type FaqsFields_Question_Create = {
  __typename?: 'FaqsFields_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question_Delete = {
  __typename?: 'FaqsFields_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question_Read = {
  __typename?: 'FaqsFields_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_Question_Update = {
  __typename?: 'FaqsFields_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt = {
  __typename?: 'FaqsFields_updatedAt';
  create?: Maybe<FaqsFields_UpdatedAt_Create>;
  delete?: Maybe<FaqsFields_UpdatedAt_Delete>;
  read?: Maybe<FaqsFields_UpdatedAt_Read>;
  update?: Maybe<FaqsFields_UpdatedAt_Update>;
};

export type FaqsFields_UpdatedAt_Create = {
  __typename?: 'FaqsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt_Delete = {
  __typename?: 'FaqsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt_Read = {
  __typename?: 'FaqsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FaqsFields_UpdatedAt_Update = {
  __typename?: 'FaqsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FaqsReadAccess = {
  __typename?: 'FaqsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsReadDocAccess = {
  __typename?: 'FaqsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsUpdateAccess = {
  __typename?: 'FaqsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FaqsUpdateDocAccess = {
  __typename?: 'FaqsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type InternalMedia = {
  __typename?: 'InternalMedia';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Media>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Media = {
  __typename?: 'Media';
  altText?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  altText?: Maybe<MediaDocAccessFields_AltText>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  name?: Maybe<MediaDocAccessFields_Name>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_AltText = {
  __typename?: 'MediaDocAccessFields_altText';
  create?: Maybe<MediaDocAccessFields_AltText_Create>;
  delete?: Maybe<MediaDocAccessFields_AltText_Delete>;
  read?: Maybe<MediaDocAccessFields_AltText_Read>;
  update?: Maybe<MediaDocAccessFields_AltText_Update>;
};

export type MediaDocAccessFields_AltText_Create = {
  __typename?: 'MediaDocAccessFields_altText_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_AltText_Delete = {
  __typename?: 'MediaDocAccessFields_altText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_AltText_Read = {
  __typename?: 'MediaDocAccessFields_altText_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_AltText_Update = {
  __typename?: 'MediaDocAccessFields_altText_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Name = {
  __typename?: 'MediaDocAccessFields_name';
  create?: Maybe<MediaDocAccessFields_Name_Create>;
  delete?: Maybe<MediaDocAccessFields_Name_Delete>;
  read?: Maybe<MediaDocAccessFields_Name_Read>;
  update?: Maybe<MediaDocAccessFields_Name_Update>;
};

export type MediaDocAccessFields_Name_Create = {
  __typename?: 'MediaDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Name_Delete = {
  __typename?: 'MediaDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Name_Read = {
  __typename?: 'MediaDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Name_Update = {
  __typename?: 'MediaDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  altText?: Maybe<MediaFields_AltText>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  name?: Maybe<MediaFields_Name>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_AltText = {
  __typename?: 'MediaFields_altText';
  create?: Maybe<MediaFields_AltText_Create>;
  delete?: Maybe<MediaFields_AltText_Delete>;
  read?: Maybe<MediaFields_AltText_Read>;
  update?: Maybe<MediaFields_AltText_Update>;
};

export type MediaFields_AltText_Create = {
  __typename?: 'MediaFields_altText_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_AltText_Delete = {
  __typename?: 'MediaFields_altText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_AltText_Read = {
  __typename?: 'MediaFields_altText_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_AltText_Update = {
  __typename?: 'MediaFields_altText_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Name = {
  __typename?: 'MediaFields_name';
  create?: Maybe<MediaFields_Name_Create>;
  delete?: Maybe<MediaFields_Name_Delete>;
  read?: Maybe<MediaFields_Name_Read>;
  update?: Maybe<MediaFields_Name_Update>;
};

export type MediaFields_Name_Create = {
  __typename?: 'MediaFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Name_Delete = {
  __typename?: 'MediaFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Name_Read = {
  __typename?: 'MediaFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Name_Update = {
  __typename?: 'MediaFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_AltText_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  altText?: InputMaybe<Media_AltText_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  name?: InputMaybe<Media_Name_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  altText?: InputMaybe<Media_AltText_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  name?: InputMaybe<Media_Name_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  altText?: InputMaybe<Media_AltText_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  name?: InputMaybe<Media_Name_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<Account>;
  createCart?: Maybe<Cart>;
  createCartItem?: Maybe<CartItem>;
  createFaq?: Maybe<Faq>;
  createMedia?: Maybe<Media>;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createPayloadKv?: Maybe<PayloadKv>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createPointTransaction?: Maybe<PointTransaction>;
  createPost?: Maybe<Post>;
  createPrice?: Maybe<Price>;
  createProduct?: Maybe<Product>;
  createProductPromotion?: Maybe<ProductPromotion>;
  createPromotion?: Maybe<Promotion>;
  createRating?: Maybe<Rating>;
  createStock?: Maybe<Stock>;
  createSupplier?: Maybe<Supplier>;
  createTag?: Maybe<Tag>;
  createUser?: Maybe<User>;
  createUserItem?: Maybe<UserItem>;
  createUserPoint?: Maybe<UserPoint>;
  createUserPreference?: Maybe<UserPreference>;
  deleteAccount?: Maybe<Account>;
  deleteCart?: Maybe<Cart>;
  deleteCartItem?: Maybe<CartItem>;
  deleteFaq?: Maybe<Faq>;
  deleteMedia?: Maybe<Media>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deletePayloadKv?: Maybe<PayloadKv>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deletePointTransaction?: Maybe<PointTransaction>;
  deletePost?: Maybe<Post>;
  deletePrice?: Maybe<Price>;
  deleteProduct?: Maybe<Product>;
  deleteProductPromotion?: Maybe<ProductPromotion>;
  deletePromotion?: Maybe<Promotion>;
  deleteRating?: Maybe<Rating>;
  deleteStock?: Maybe<Stock>;
  deleteSupplier?: Maybe<Supplier>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  deleteUserItem?: Maybe<UserItem>;
  deleteUserPoint?: Maybe<UserPoint>;
  deleteUserPreference?: Maybe<UserPreference>;
  duplicateAccount?: Maybe<Account>;
  duplicateCart?: Maybe<Cart>;
  duplicateCartItem?: Maybe<CartItem>;
  duplicateFaq?: Maybe<Faq>;
  duplicateMedia?: Maybe<Media>;
  duplicateOrder?: Maybe<Order>;
  duplicateOrderItem?: Maybe<OrderItem>;
  duplicatePayloadKv?: Maybe<PayloadKv>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicatePointTransaction?: Maybe<PointTransaction>;
  duplicatePost?: Maybe<Post>;
  duplicatePrice?: Maybe<Price>;
  duplicateProduct?: Maybe<Product>;
  duplicateProductPromotion?: Maybe<ProductPromotion>;
  duplicatePromotion?: Maybe<Promotion>;
  duplicateRating?: Maybe<Rating>;
  duplicateStock?: Maybe<Stock>;
  duplicateSupplier?: Maybe<Supplier>;
  duplicateTag?: Maybe<Tag>;
  duplicateUserItem?: Maybe<UserItem>;
  duplicateUserPoint?: Maybe<UserPoint>;
  duplicateUserPreference?: Maybe<UserPreference>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateAccount?: Maybe<Account>;
  updateCart?: Maybe<Cart>;
  updateCartItem?: Maybe<CartItem>;
  updateFaq?: Maybe<Faq>;
  updateMedia?: Maybe<Media>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updatePayloadKv?: Maybe<PayloadKv>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updatePointTransaction?: Maybe<PointTransaction>;
  updatePost?: Maybe<Post>;
  updatePrice?: Maybe<Price>;
  updateProduct?: Maybe<Product>;
  updateProductPromotion?: Maybe<ProductPromotion>;
  updatePromotion?: Maybe<Promotion>;
  updateRating?: Maybe<Rating>;
  updateSetting?: Maybe<Setting>;
  updateStock?: Maybe<Stock>;
  updateSupplier?: Maybe<Supplier>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  updateUserItem?: Maybe<UserItem>;
  updateUserPoint?: Maybe<UserPoint>;
  updateUserPreference?: Maybe<UserPreference>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateAccountArgs = {
  data: MutationAccountInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateCartArgs = {
  data: MutationCartInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateCartItemArgs = {
  data: MutationCartItemInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateFaqArgs = {
  data: MutationFaqInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOrderArgs = {
  data: MutationOrderInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOrderItemArgs = {
  data: MutationOrderItemInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePointTransactionArgs = {
  data: MutationPointTransactionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePostArgs = {
  data: MutationPostInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePriceArgs = {
  data: MutationPriceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateProductArgs = {
  data: MutationProductInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateProductPromotionArgs = {
  data: MutationProductPromotionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePromotionArgs = {
  data: MutationPromotionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateRatingArgs = {
  data: MutationRatingInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateStockArgs = {
  data: MutationStockInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateSupplierArgs = {
  data: MutationSupplierInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateTagArgs = {
  data: MutationTagInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserItemArgs = {
  data: MutationUserItemInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserPointArgs = {
  data: MutationUserPointInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserPreferenceArgs = {
  data: MutationUserPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteCartArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteCartItemArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteFaqArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadKvArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePointTransactionArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePriceArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteProductPromotionArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePromotionArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteRatingArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteStockArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserItemArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserPointArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserPreferenceArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateAccountArgs = {
  data: MutationAccountInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateCartArgs = {
  data: MutationCartInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateCartItemArgs = {
  data: MutationCartItemInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateFaqArgs = {
  data: MutationFaqInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateOrderArgs = {
  data: MutationOrderInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateOrderItemArgs = {
  data: MutationOrderItemInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePointTransactionArgs = {
  data: MutationPointTransactionInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePostArgs = {
  data: MutationPostInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePriceArgs = {
  data: MutationPriceInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateProductArgs = {
  data: MutationProductInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateProductPromotionArgs = {
  data: MutationProductPromotionInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePromotionArgs = {
  data: MutationPromotionInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateRatingArgs = {
  data: MutationRatingInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateStockArgs = {
  data: MutationStockInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateSupplierArgs = {
  data: MutationSupplierInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateTagArgs = {
  data: MutationTagInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateUserItemArgs = {
  data: MutationUserItemInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateUserPointArgs = {
  data: MutationUserPointInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicateUserPreferenceArgs = {
  data: MutationUserPreferenceInput;
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationAccountUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCartArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCartUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCartItemArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCartItemUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateFaqArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationFaqUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateOrderArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationOrderUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateOrderItemArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationOrderItemUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadKvArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePointTransactionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPointTransactionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePriceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPriceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateProductArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationProductUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateProductPromotionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationProductPromotionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePromotionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPromotionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateRatingArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationRatingUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateSettingArgs = {
  data: MutationSettingInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateStockArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationStockUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateSupplierArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationSupplierUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserItemArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserItemUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserPointArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserPointUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  items?: Maybe<Array<OrderItem>>;
  status: Order_Status;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userItem?: Maybe<UserItem>;
};

export type OrderItem_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderItem_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderItem_Order_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type OrderItem_Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type OrderItem_UnitPrice_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItem_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderItem_UserItem_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type OrderItem_Where = {
  AND?: InputMaybe<Array<InputMaybe<OrderItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderItem_Where_Or>>>;
  createdAt?: InputMaybe<OrderItem_CreatedAt_Operator>;
  id?: InputMaybe<OrderItem_Id_Operator>;
  order?: InputMaybe<OrderItem_Order_Operator>;
  product?: InputMaybe<OrderItem_Product_Operator>;
  unitPrice?: InputMaybe<OrderItem_UnitPrice_Operator>;
  updatedAt?: InputMaybe<OrderItem_UpdatedAt_Operator>;
  userItem?: InputMaybe<OrderItem_UserItem_Operator>;
};

export type OrderItem_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<OrderItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderItem_Where_Or>>>;
  createdAt?: InputMaybe<OrderItem_CreatedAt_Operator>;
  id?: InputMaybe<OrderItem_Id_Operator>;
  order?: InputMaybe<OrderItem_Order_Operator>;
  product?: InputMaybe<OrderItem_Product_Operator>;
  unitPrice?: InputMaybe<OrderItem_UnitPrice_Operator>;
  updatedAt?: InputMaybe<OrderItem_UpdatedAt_Operator>;
  userItem?: InputMaybe<OrderItem_UserItem_Operator>;
};

export type OrderItem_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<OrderItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderItem_Where_Or>>>;
  createdAt?: InputMaybe<OrderItem_CreatedAt_Operator>;
  id?: InputMaybe<OrderItem_Id_Operator>;
  order?: InputMaybe<OrderItem_Order_Operator>;
  product?: InputMaybe<OrderItem_Product_Operator>;
  unitPrice?: InputMaybe<OrderItem_UnitPrice_Operator>;
  updatedAt?: InputMaybe<OrderItem_UpdatedAt_Operator>;
  userItem?: InputMaybe<OrderItem_UserItem_Operator>;
};

export type OrderItems = {
  __typename?: 'OrderItems';
  docs: Array<OrderItem>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type OrderItemsCreateAccess = {
  __typename?: 'OrderItemsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsCreateDocAccess = {
  __typename?: 'OrderItemsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsDeleteAccess = {
  __typename?: 'OrderItemsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsDeleteDocAccess = {
  __typename?: 'OrderItemsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsDocAccessFields = {
  __typename?: 'OrderItemsDocAccessFields';
  createdAt?: Maybe<OrderItemsDocAccessFields_CreatedAt>;
  order?: Maybe<OrderItemsDocAccessFields_Order>;
  product?: Maybe<OrderItemsDocAccessFields_Product>;
  unitPrice?: Maybe<OrderItemsDocAccessFields_UnitPrice>;
  updatedAt?: Maybe<OrderItemsDocAccessFields_UpdatedAt>;
  userItem?: Maybe<OrderItemsDocAccessFields_UserItem>;
};

export type OrderItemsDocAccessFields_CreatedAt = {
  __typename?: 'OrderItemsDocAccessFields_createdAt';
  create?: Maybe<OrderItemsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrderItemsDocAccessFields_CreatedAt_Update>;
};

export type OrderItemsDocAccessFields_CreatedAt_Create = {
  __typename?: 'OrderItemsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'OrderItemsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_CreatedAt_Read = {
  __typename?: 'OrderItemsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_CreatedAt_Update = {
  __typename?: 'OrderItemsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order = {
  __typename?: 'OrderItemsDocAccessFields_order';
  create?: Maybe<OrderItemsDocAccessFields_Order_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_Order_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_Order_Read>;
  update?: Maybe<OrderItemsDocAccessFields_Order_Update>;
};

export type OrderItemsDocAccessFields_Order_Create = {
  __typename?: 'OrderItemsDocAccessFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order_Delete = {
  __typename?: 'OrderItemsDocAccessFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order_Read = {
  __typename?: 'OrderItemsDocAccessFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order_Update = {
  __typename?: 'OrderItemsDocAccessFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product = {
  __typename?: 'OrderItemsDocAccessFields_product';
  create?: Maybe<OrderItemsDocAccessFields_Product_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_Product_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_Product_Read>;
  update?: Maybe<OrderItemsDocAccessFields_Product_Update>;
};

export type OrderItemsDocAccessFields_Product_Create = {
  __typename?: 'OrderItemsDocAccessFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product_Delete = {
  __typename?: 'OrderItemsDocAccessFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product_Read = {
  __typename?: 'OrderItemsDocAccessFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product_Update = {
  __typename?: 'OrderItemsDocAccessFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UnitPrice = {
  __typename?: 'OrderItemsDocAccessFields_unitPrice';
  create?: Maybe<OrderItemsDocAccessFields_UnitPrice_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_UnitPrice_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_UnitPrice_Read>;
  update?: Maybe<OrderItemsDocAccessFields_UnitPrice_Update>;
};

export type OrderItemsDocAccessFields_UnitPrice_Create = {
  __typename?: 'OrderItemsDocAccessFields_unitPrice_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UnitPrice_Delete = {
  __typename?: 'OrderItemsDocAccessFields_unitPrice_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UnitPrice_Read = {
  __typename?: 'OrderItemsDocAccessFields_unitPrice_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UnitPrice_Update = {
  __typename?: 'OrderItemsDocAccessFields_unitPrice_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt = {
  __typename?: 'OrderItemsDocAccessFields_updatedAt';
  create?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Update>;
};

export type OrderItemsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'OrderItemsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'OrderItemsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'OrderItemsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'OrderItemsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UserItem = {
  __typename?: 'OrderItemsDocAccessFields_userItem';
  create?: Maybe<OrderItemsDocAccessFields_UserItem_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_UserItem_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_UserItem_Read>;
  update?: Maybe<OrderItemsDocAccessFields_UserItem_Update>;
};

export type OrderItemsDocAccessFields_UserItem_Create = {
  __typename?: 'OrderItemsDocAccessFields_userItem_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UserItem_Delete = {
  __typename?: 'OrderItemsDocAccessFields_userItem_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UserItem_Read = {
  __typename?: 'OrderItemsDocAccessFields_userItem_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UserItem_Update = {
  __typename?: 'OrderItemsDocAccessFields_userItem_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields = {
  __typename?: 'OrderItemsFields';
  createdAt?: Maybe<OrderItemsFields_CreatedAt>;
  order?: Maybe<OrderItemsFields_Order>;
  product?: Maybe<OrderItemsFields_Product>;
  unitPrice?: Maybe<OrderItemsFields_UnitPrice>;
  updatedAt?: Maybe<OrderItemsFields_UpdatedAt>;
  userItem?: Maybe<OrderItemsFields_UserItem>;
};

export type OrderItemsFields_CreatedAt = {
  __typename?: 'OrderItemsFields_createdAt';
  create?: Maybe<OrderItemsFields_CreatedAt_Create>;
  delete?: Maybe<OrderItemsFields_CreatedAt_Delete>;
  read?: Maybe<OrderItemsFields_CreatedAt_Read>;
  update?: Maybe<OrderItemsFields_CreatedAt_Update>;
};

export type OrderItemsFields_CreatedAt_Create = {
  __typename?: 'OrderItemsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_CreatedAt_Delete = {
  __typename?: 'OrderItemsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_CreatedAt_Read = {
  __typename?: 'OrderItemsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_CreatedAt_Update = {
  __typename?: 'OrderItemsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order = {
  __typename?: 'OrderItemsFields_order';
  create?: Maybe<OrderItemsFields_Order_Create>;
  delete?: Maybe<OrderItemsFields_Order_Delete>;
  read?: Maybe<OrderItemsFields_Order_Read>;
  update?: Maybe<OrderItemsFields_Order_Update>;
};

export type OrderItemsFields_Order_Create = {
  __typename?: 'OrderItemsFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order_Delete = {
  __typename?: 'OrderItemsFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order_Read = {
  __typename?: 'OrderItemsFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order_Update = {
  __typename?: 'OrderItemsFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product = {
  __typename?: 'OrderItemsFields_product';
  create?: Maybe<OrderItemsFields_Product_Create>;
  delete?: Maybe<OrderItemsFields_Product_Delete>;
  read?: Maybe<OrderItemsFields_Product_Read>;
  update?: Maybe<OrderItemsFields_Product_Update>;
};

export type OrderItemsFields_Product_Create = {
  __typename?: 'OrderItemsFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product_Delete = {
  __typename?: 'OrderItemsFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product_Read = {
  __typename?: 'OrderItemsFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product_Update = {
  __typename?: 'OrderItemsFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UnitPrice = {
  __typename?: 'OrderItemsFields_unitPrice';
  create?: Maybe<OrderItemsFields_UnitPrice_Create>;
  delete?: Maybe<OrderItemsFields_UnitPrice_Delete>;
  read?: Maybe<OrderItemsFields_UnitPrice_Read>;
  update?: Maybe<OrderItemsFields_UnitPrice_Update>;
};

export type OrderItemsFields_UnitPrice_Create = {
  __typename?: 'OrderItemsFields_unitPrice_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UnitPrice_Delete = {
  __typename?: 'OrderItemsFields_unitPrice_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UnitPrice_Read = {
  __typename?: 'OrderItemsFields_unitPrice_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UnitPrice_Update = {
  __typename?: 'OrderItemsFields_unitPrice_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt = {
  __typename?: 'OrderItemsFields_updatedAt';
  create?: Maybe<OrderItemsFields_UpdatedAt_Create>;
  delete?: Maybe<OrderItemsFields_UpdatedAt_Delete>;
  read?: Maybe<OrderItemsFields_UpdatedAt_Read>;
  update?: Maybe<OrderItemsFields_UpdatedAt_Update>;
};

export type OrderItemsFields_UpdatedAt_Create = {
  __typename?: 'OrderItemsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt_Delete = {
  __typename?: 'OrderItemsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt_Read = {
  __typename?: 'OrderItemsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt_Update = {
  __typename?: 'OrderItemsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UserItem = {
  __typename?: 'OrderItemsFields_userItem';
  create?: Maybe<OrderItemsFields_UserItem_Create>;
  delete?: Maybe<OrderItemsFields_UserItem_Delete>;
  read?: Maybe<OrderItemsFields_UserItem_Read>;
  update?: Maybe<OrderItemsFields_UserItem_Update>;
};

export type OrderItemsFields_UserItem_Create = {
  __typename?: 'OrderItemsFields_userItem_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UserItem_Delete = {
  __typename?: 'OrderItemsFields_userItem_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UserItem_Read = {
  __typename?: 'OrderItemsFields_userItem_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UserItem_Update = {
  __typename?: 'OrderItemsFields_userItem_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsReadAccess = {
  __typename?: 'OrderItemsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsReadDocAccess = {
  __typename?: 'OrderItemsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsUpdateAccess = {
  __typename?: 'OrderItemsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsUpdateDocAccess = {
  __typename?: 'OrderItemsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum OrderUpdate_Status_MutationInput {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Shipped = 'SHIPPED'
}

export type Order_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Order_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_Items_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum Order_Status {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Shipped = 'SHIPPED'
}

export enum Order_Status_Input {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Shipped = 'SHIPPED'
}

export enum Order_Status_MutationInput {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Shipped = 'SHIPPED'
}

export type Order_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Order_Status_Input>>>;
  equals?: InputMaybe<Order_Status_Input>;
  in?: InputMaybe<Array<InputMaybe<Order_Status_Input>>>;
  not_equals?: InputMaybe<Order_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Order_Status_Input>>>;
};

export type Order_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Order_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Order_Where = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  items?: InputMaybe<Order_Items_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
  user?: InputMaybe<Order_User_Operator>;
};

export type Order_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  items?: InputMaybe<Order_Items_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
  user?: InputMaybe<Order_User_Operator>;
};

export type Order_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  items?: InputMaybe<Order_Items_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
  user?: InputMaybe<Order_User_Operator>;
};

export type Orders = {
  __typename?: 'Orders';
  docs: Array<Order>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type OrdersCreateAccess = {
  __typename?: 'OrdersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersCreateDocAccess = {
  __typename?: 'OrdersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteAccess = {
  __typename?: 'OrdersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteDocAccess = {
  __typename?: 'OrdersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDocAccessFields = {
  __typename?: 'OrdersDocAccessFields';
  createdAt?: Maybe<OrdersDocAccessFields_CreatedAt>;
  items?: Maybe<OrdersDocAccessFields_Items>;
  status?: Maybe<OrdersDocAccessFields_Status>;
  updatedAt?: Maybe<OrdersDocAccessFields_UpdatedAt>;
  user?: Maybe<OrdersDocAccessFields_User>;
};

export type OrdersDocAccessFields_CreatedAt = {
  __typename?: 'OrdersDocAccessFields_createdAt';
  create?: Maybe<OrdersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_CreatedAt_Update>;
};

export type OrdersDocAccessFields_CreatedAt_Create = {
  __typename?: 'OrdersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'OrdersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Read = {
  __typename?: 'OrdersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Update = {
  __typename?: 'OrdersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items = {
  __typename?: 'OrdersDocAccessFields_items';
  create?: Maybe<OrdersDocAccessFields_Items_Create>;
  delete?: Maybe<OrdersDocAccessFields_Items_Delete>;
  read?: Maybe<OrdersDocAccessFields_Items_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Update>;
};

export type OrdersDocAccessFields_Items_Create = {
  __typename?: 'OrdersDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Delete = {
  __typename?: 'OrdersDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Read = {
  __typename?: 'OrdersDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Update = {
  __typename?: 'OrdersDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status = {
  __typename?: 'OrdersDocAccessFields_status';
  create?: Maybe<OrdersDocAccessFields_Status_Create>;
  delete?: Maybe<OrdersDocAccessFields_Status_Delete>;
  read?: Maybe<OrdersDocAccessFields_Status_Read>;
  update?: Maybe<OrdersDocAccessFields_Status_Update>;
};

export type OrdersDocAccessFields_Status_Create = {
  __typename?: 'OrdersDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Delete = {
  __typename?: 'OrdersDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Read = {
  __typename?: 'OrdersDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Update = {
  __typename?: 'OrdersDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt = {
  __typename?: 'OrdersDocAccessFields_updatedAt';
  create?: Maybe<OrdersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_UpdatedAt_Update>;
};

export type OrdersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_User = {
  __typename?: 'OrdersDocAccessFields_user';
  create?: Maybe<OrdersDocAccessFields_User_Create>;
  delete?: Maybe<OrdersDocAccessFields_User_Delete>;
  read?: Maybe<OrdersDocAccessFields_User_Read>;
  update?: Maybe<OrdersDocAccessFields_User_Update>;
};

export type OrdersDocAccessFields_User_Create = {
  __typename?: 'OrdersDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_User_Delete = {
  __typename?: 'OrdersDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_User_Read = {
  __typename?: 'OrdersDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_User_Update = {
  __typename?: 'OrdersDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields = {
  __typename?: 'OrdersFields';
  createdAt?: Maybe<OrdersFields_CreatedAt>;
  items?: Maybe<OrdersFields_Items>;
  status?: Maybe<OrdersFields_Status>;
  updatedAt?: Maybe<OrdersFields_UpdatedAt>;
  user?: Maybe<OrdersFields_User>;
};

export type OrdersFields_CreatedAt = {
  __typename?: 'OrdersFields_createdAt';
  create?: Maybe<OrdersFields_CreatedAt_Create>;
  delete?: Maybe<OrdersFields_CreatedAt_Delete>;
  read?: Maybe<OrdersFields_CreatedAt_Read>;
  update?: Maybe<OrdersFields_CreatedAt_Update>;
};

export type OrdersFields_CreatedAt_Create = {
  __typename?: 'OrdersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Delete = {
  __typename?: 'OrdersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Read = {
  __typename?: 'OrdersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Update = {
  __typename?: 'OrdersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items = {
  __typename?: 'OrdersFields_items';
  create?: Maybe<OrdersFields_Items_Create>;
  delete?: Maybe<OrdersFields_Items_Delete>;
  read?: Maybe<OrdersFields_Items_Read>;
  update?: Maybe<OrdersFields_Items_Update>;
};

export type OrdersFields_Items_Create = {
  __typename?: 'OrdersFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Delete = {
  __typename?: 'OrdersFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Read = {
  __typename?: 'OrdersFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Update = {
  __typename?: 'OrdersFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status = {
  __typename?: 'OrdersFields_status';
  create?: Maybe<OrdersFields_Status_Create>;
  delete?: Maybe<OrdersFields_Status_Delete>;
  read?: Maybe<OrdersFields_Status_Read>;
  update?: Maybe<OrdersFields_Status_Update>;
};

export type OrdersFields_Status_Create = {
  __typename?: 'OrdersFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Delete = {
  __typename?: 'OrdersFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Read = {
  __typename?: 'OrdersFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Update = {
  __typename?: 'OrdersFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt = {
  __typename?: 'OrdersFields_updatedAt';
  create?: Maybe<OrdersFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersFields_UpdatedAt_Read>;
  update?: Maybe<OrdersFields_UpdatedAt_Update>;
};

export type OrdersFields_UpdatedAt_Create = {
  __typename?: 'OrdersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Delete = {
  __typename?: 'OrdersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Read = {
  __typename?: 'OrdersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Update = {
  __typename?: 'OrdersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_User = {
  __typename?: 'OrdersFields_user';
  create?: Maybe<OrdersFields_User_Create>;
  delete?: Maybe<OrdersFields_User_Delete>;
  read?: Maybe<OrdersFields_User_Read>;
  update?: Maybe<OrdersFields_User_Update>;
};

export type OrdersFields_User_Create = {
  __typename?: 'OrdersFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_User_Delete = {
  __typename?: 'OrdersFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_User_Read = {
  __typename?: 'OrdersFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_User_Update = {
  __typename?: 'OrdersFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersReadAccess = {
  __typename?: 'OrdersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersReadDocAccess = {
  __typename?: 'OrdersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateAccess = {
  __typename?: 'OrdersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateDocAccess = {
  __typename?: 'OrdersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKv = {
  __typename?: 'PayloadKv';
  data: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
};

export type PayloadKvCreateAccess = {
  __typename?: 'PayloadKvCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvCreateDocAccess = {
  __typename?: 'PayloadKvCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteAccess = {
  __typename?: 'PayloadKvDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteDocAccess = {
  __typename?: 'PayloadKvDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDocAccessFields = {
  __typename?: 'PayloadKvDocAccessFields';
  data?: Maybe<PayloadKvDocAccessFields_Data>;
  key?: Maybe<PayloadKvDocAccessFields_Key>;
};

export type PayloadKvDocAccessFields_Data = {
  __typename?: 'PayloadKvDocAccessFields_data';
  create?: Maybe<PayloadKvDocAccessFields_Data_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Data_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Data_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Data_Update>;
};

export type PayloadKvDocAccessFields_Data_Create = {
  __typename?: 'PayloadKvDocAccessFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Delete = {
  __typename?: 'PayloadKvDocAccessFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Read = {
  __typename?: 'PayloadKvDocAccessFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Update = {
  __typename?: 'PayloadKvDocAccessFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key = {
  __typename?: 'PayloadKvDocAccessFields_key';
  create?: Maybe<PayloadKvDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Key_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Key_Update>;
};

export type PayloadKvDocAccessFields_Key_Create = {
  __typename?: 'PayloadKvDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Delete = {
  __typename?: 'PayloadKvDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Read = {
  __typename?: 'PayloadKvDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Update = {
  __typename?: 'PayloadKvDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields = {
  __typename?: 'PayloadKvFields';
  data?: Maybe<PayloadKvFields_Data>;
  key?: Maybe<PayloadKvFields_Key>;
};

export type PayloadKvFields_Data = {
  __typename?: 'PayloadKvFields_data';
  create?: Maybe<PayloadKvFields_Data_Create>;
  delete?: Maybe<PayloadKvFields_Data_Delete>;
  read?: Maybe<PayloadKvFields_Data_Read>;
  update?: Maybe<PayloadKvFields_Data_Update>;
};

export type PayloadKvFields_Data_Create = {
  __typename?: 'PayloadKvFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Delete = {
  __typename?: 'PayloadKvFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Read = {
  __typename?: 'PayloadKvFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Update = {
  __typename?: 'PayloadKvFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key = {
  __typename?: 'PayloadKvFields_key';
  create?: Maybe<PayloadKvFields_Key_Create>;
  delete?: Maybe<PayloadKvFields_Key_Delete>;
  read?: Maybe<PayloadKvFields_Key_Read>;
  update?: Maybe<PayloadKvFields_Key_Update>;
};

export type PayloadKvFields_Key_Create = {
  __typename?: 'PayloadKvFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Delete = {
  __typename?: 'PayloadKvFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Read = {
  __typename?: 'PayloadKvFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Update = {
  __typename?: 'PayloadKvFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvReadAccess = {
  __typename?: 'PayloadKvReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvReadDocAccess = {
  __typename?: 'PayloadKvReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateAccess = {
  __typename?: 'PayloadKvUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateDocAccess = {
  __typename?: 'PayloadKvUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKv_Data_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadKv_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKvs = {
  __typename?: 'PayloadKvs';
  docs: Array<PayloadKv>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<PayloadLockedDocument_User_Relationship>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Accounts = 'accounts',
  CartItems = 'cart_items',
  Carts = 'carts',
  Faqs = 'faqs',
  Media = 'media',
  OrderItems = 'order_items',
  Orders = 'orders',
  PointTransactions = 'point_transactions',
  Posts = 'posts',
  Prices = 'prices',
  ProductPromotions = 'product_promotions',
  Products = 'products',
  Promotions = 'promotions',
  Ratings = 'ratings',
  Stocks = 'stocks',
  Suppliers = 'suppliers',
  Tags = 'tags',
  UserItems = 'user_items',
  UserPoints = 'user_points',
  UserPreferences = 'user_preferences',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Account | Cart | CartItem | Faq | Media | Order | OrderItem | PointTransaction | Post | Price | Product | ProductPromotion | Promotion | Rating | Stock | Supplier | Tag | User | UserItem | UserPoint | UserPreference;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Accounts = 'accounts',
  CartItems = 'cart_items',
  Carts = 'carts',
  Faqs = 'faqs',
  Media = 'media',
  OrderItems = 'order_items',
  Orders = 'orders',
  PointTransactions = 'point_transactions',
  Posts = 'posts',
  Prices = 'prices',
  ProductPromotions = 'product_promotions',
  Products = 'products',
  Promotions = 'promotions',
  Ratings = 'ratings',
  Stocks = 'stocks',
  Suppliers = 'suppliers',
  Tags = 'tags',
  UserItems = 'user_items',
  UserPoints = 'user_points',
  UserPreferences = 'user_preferences',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  Accounts = 'accounts',
  CartItems = 'cart_items',
  Carts = 'carts',
  Faqs = 'faqs',
  Media = 'media',
  OrderItems = 'order_items',
  Orders = 'orders',
  PointTransactions = 'point_transactions',
  Posts = 'posts',
  Prices = 'prices',
  ProductPromotions = 'product_promotions',
  Products = 'products',
  Promotions = 'promotions',
  Ratings = 'ratings',
  Stocks = 'stocks',
  Suppliers = 'suppliers',
  Tags = 'tags',
  UserItems = 'user_items',
  UserPoints = 'user_points',
  UserPreferences = 'user_preferences',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Accounts = 'accounts',
  CartItems = 'cart_items',
  Carts = 'carts',
  Faqs = 'faqs',
  Media = 'media',
  OrderItems = 'order_items',
  Orders = 'orders',
  PointTransactions = 'point_transactions',
  Posts = 'posts',
  Prices = 'prices',
  ProductPromotions = 'product_promotions',
  Products = 'products',
  Promotions = 'promotions',
  Ratings = 'ratings',
  Stocks = 'stocks',
  Suppliers = 'suppliers',
  Tags = 'tags',
  UserItems = 'user_items',
  UserPoints = 'user_points',
  UserPreferences = 'user_preferences',
  Users = 'users'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<PayloadPreference_User_Relationship>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransaction = {
  __typename?: 'PointTransaction';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  orders?: Maybe<Array<Order>>;
  status?: Maybe<PointTransaction_Status>;
  type: PointTransaction_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export enum PointTransactionUpdate_Status_MutationInput {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresCapture = 'requires_capture',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded'
}

export enum PointTransactionUpdate_Type_MutationInput {
  Earn = 'earn',
  Redeem = 'redeem'
}

export type PointTransaction_Amount_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PointTransaction_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PointTransaction_ExpiredAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PointTransaction_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PointTransaction_IsFavorite_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PointTransaction_MetaData_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PointTransaction_Orders_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum PointTransaction_Status {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresCapture = 'requires_capture',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded'
}

export enum PointTransaction_Status_Input {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresCapture = 'requires_capture',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded'
}

export enum PointTransaction_Status_MutationInput {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresCapture = 'requires_capture',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded'
}

export type PointTransaction_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<PointTransaction_Status_Input>>>;
  equals?: InputMaybe<PointTransaction_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<PointTransaction_Status_Input>>>;
  not_equals?: InputMaybe<PointTransaction_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PointTransaction_Status_Input>>>;
};

export enum PointTransaction_Type {
  Earn = 'earn',
  Redeem = 'redeem'
}

export enum PointTransaction_Type_Input {
  Earn = 'earn',
  Redeem = 'redeem'
}

export enum PointTransaction_Type_MutationInput {
  Earn = 'earn',
  Redeem = 'redeem'
}

export type PointTransaction_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<PointTransaction_Type_Input>>>;
  equals?: InputMaybe<PointTransaction_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<PointTransaction_Type_Input>>>;
  not_equals?: InputMaybe<PointTransaction_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PointTransaction_Type_Input>>>;
};

export type PointTransaction_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PointTransaction_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type PointTransaction_Where = {
  AND?: InputMaybe<Array<InputMaybe<PointTransaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PointTransaction_Where_Or>>>;
  amount?: InputMaybe<PointTransaction_Amount_Operator>;
  createdAt?: InputMaybe<PointTransaction_CreatedAt_Operator>;
  expiredAt?: InputMaybe<PointTransaction_ExpiredAt_Operator>;
  id?: InputMaybe<PointTransaction_Id_Operator>;
  isFavorite?: InputMaybe<PointTransaction_IsFavorite_Operator>;
  metaData?: InputMaybe<PointTransaction_MetaData_Operator>;
  orders?: InputMaybe<PointTransaction_Orders_Operator>;
  status?: InputMaybe<PointTransaction_Status_Operator>;
  type?: InputMaybe<PointTransaction_Type_Operator>;
  updatedAt?: InputMaybe<PointTransaction_UpdatedAt_Operator>;
  user?: InputMaybe<PointTransaction_User_Operator>;
};

export type PointTransaction_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PointTransaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PointTransaction_Where_Or>>>;
  amount?: InputMaybe<PointTransaction_Amount_Operator>;
  createdAt?: InputMaybe<PointTransaction_CreatedAt_Operator>;
  expiredAt?: InputMaybe<PointTransaction_ExpiredAt_Operator>;
  id?: InputMaybe<PointTransaction_Id_Operator>;
  isFavorite?: InputMaybe<PointTransaction_IsFavorite_Operator>;
  metaData?: InputMaybe<PointTransaction_MetaData_Operator>;
  orders?: InputMaybe<PointTransaction_Orders_Operator>;
  status?: InputMaybe<PointTransaction_Status_Operator>;
  type?: InputMaybe<PointTransaction_Type_Operator>;
  updatedAt?: InputMaybe<PointTransaction_UpdatedAt_Operator>;
  user?: InputMaybe<PointTransaction_User_Operator>;
};

export type PointTransaction_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PointTransaction_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PointTransaction_Where_Or>>>;
  amount?: InputMaybe<PointTransaction_Amount_Operator>;
  createdAt?: InputMaybe<PointTransaction_CreatedAt_Operator>;
  expiredAt?: InputMaybe<PointTransaction_ExpiredAt_Operator>;
  id?: InputMaybe<PointTransaction_Id_Operator>;
  isFavorite?: InputMaybe<PointTransaction_IsFavorite_Operator>;
  metaData?: InputMaybe<PointTransaction_MetaData_Operator>;
  orders?: InputMaybe<PointTransaction_Orders_Operator>;
  status?: InputMaybe<PointTransaction_Status_Operator>;
  type?: InputMaybe<PointTransaction_Type_Operator>;
  updatedAt?: InputMaybe<PointTransaction_UpdatedAt_Operator>;
  user?: InputMaybe<PointTransaction_User_Operator>;
};

export type PointTransactions = {
  __typename?: 'PointTransactions';
  docs: Array<PointTransaction>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PointTransactionsCreateAccess = {
  __typename?: 'PointTransactionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransactionsCreateDocAccess = {
  __typename?: 'PointTransactionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransactionsDeleteAccess = {
  __typename?: 'PointTransactionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransactionsDeleteDocAccess = {
  __typename?: 'PointTransactionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransactionsDocAccessFields = {
  __typename?: 'PointTransactionsDocAccessFields';
  amount?: Maybe<PointTransactionsDocAccessFields_Amount>;
  createdAt?: Maybe<PointTransactionsDocAccessFields_CreatedAt>;
  expiredAt?: Maybe<PointTransactionsDocAccessFields_ExpiredAt>;
  isFavorite?: Maybe<PointTransactionsDocAccessFields_IsFavorite>;
  metaData?: Maybe<PointTransactionsDocAccessFields_MetaData>;
  orders?: Maybe<PointTransactionsDocAccessFields_Orders>;
  status?: Maybe<PointTransactionsDocAccessFields_Status>;
  type?: Maybe<PointTransactionsDocAccessFields_Type>;
  updatedAt?: Maybe<PointTransactionsDocAccessFields_UpdatedAt>;
  user?: Maybe<PointTransactionsDocAccessFields_User>;
};

export type PointTransactionsDocAccessFields_Amount = {
  __typename?: 'PointTransactionsDocAccessFields_amount';
  create?: Maybe<PointTransactionsDocAccessFields_Amount_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_Amount_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_Amount_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_Amount_Update>;
};

export type PointTransactionsDocAccessFields_Amount_Create = {
  __typename?: 'PointTransactionsDocAccessFields_amount_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Amount_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_amount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Amount_Read = {
  __typename?: 'PointTransactionsDocAccessFields_amount_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Amount_Update = {
  __typename?: 'PointTransactionsDocAccessFields_amount_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_CreatedAt = {
  __typename?: 'PointTransactionsDocAccessFields_createdAt';
  create?: Maybe<PointTransactionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_CreatedAt_Update>;
};

export type PointTransactionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PointTransactionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PointTransactionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PointTransactionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_ExpiredAt = {
  __typename?: 'PointTransactionsDocAccessFields_expiredAt';
  create?: Maybe<PointTransactionsDocAccessFields_ExpiredAt_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_ExpiredAt_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_ExpiredAt_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_ExpiredAt_Update>;
};

export type PointTransactionsDocAccessFields_ExpiredAt_Create = {
  __typename?: 'PointTransactionsDocAccessFields_expiredAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_ExpiredAt_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_expiredAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_ExpiredAt_Read = {
  __typename?: 'PointTransactionsDocAccessFields_expiredAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_ExpiredAt_Update = {
  __typename?: 'PointTransactionsDocAccessFields_expiredAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_IsFavorite = {
  __typename?: 'PointTransactionsDocAccessFields_isFavorite';
  create?: Maybe<PointTransactionsDocAccessFields_IsFavorite_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_IsFavorite_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_IsFavorite_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_IsFavorite_Update>;
};

export type PointTransactionsDocAccessFields_IsFavorite_Create = {
  __typename?: 'PointTransactionsDocAccessFields_isFavorite_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_IsFavorite_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_isFavorite_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_IsFavorite_Read = {
  __typename?: 'PointTransactionsDocAccessFields_isFavorite_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_IsFavorite_Update = {
  __typename?: 'PointTransactionsDocAccessFields_isFavorite_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_MetaData = {
  __typename?: 'PointTransactionsDocAccessFields_metaData';
  create?: Maybe<PointTransactionsDocAccessFields_MetaData_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_MetaData_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_MetaData_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_MetaData_Update>;
};

export type PointTransactionsDocAccessFields_MetaData_Create = {
  __typename?: 'PointTransactionsDocAccessFields_metaData_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_MetaData_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_metaData_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_MetaData_Read = {
  __typename?: 'PointTransactionsDocAccessFields_metaData_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_MetaData_Update = {
  __typename?: 'PointTransactionsDocAccessFields_metaData_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Orders = {
  __typename?: 'PointTransactionsDocAccessFields_orders';
  create?: Maybe<PointTransactionsDocAccessFields_Orders_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_Orders_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_Orders_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_Orders_Update>;
};

export type PointTransactionsDocAccessFields_Orders_Create = {
  __typename?: 'PointTransactionsDocAccessFields_orders_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Orders_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_orders_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Orders_Read = {
  __typename?: 'PointTransactionsDocAccessFields_orders_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Orders_Update = {
  __typename?: 'PointTransactionsDocAccessFields_orders_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Status = {
  __typename?: 'PointTransactionsDocAccessFields_status';
  create?: Maybe<PointTransactionsDocAccessFields_Status_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_Status_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_Status_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_Status_Update>;
};

export type PointTransactionsDocAccessFields_Status_Create = {
  __typename?: 'PointTransactionsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Status_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Status_Read = {
  __typename?: 'PointTransactionsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Status_Update = {
  __typename?: 'PointTransactionsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Type = {
  __typename?: 'PointTransactionsDocAccessFields_type';
  create?: Maybe<PointTransactionsDocAccessFields_Type_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_Type_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_Type_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_Type_Update>;
};

export type PointTransactionsDocAccessFields_Type_Create = {
  __typename?: 'PointTransactionsDocAccessFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Type_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Type_Read = {
  __typename?: 'PointTransactionsDocAccessFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_Type_Update = {
  __typename?: 'PointTransactionsDocAccessFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_UpdatedAt = {
  __typename?: 'PointTransactionsDocAccessFields_updatedAt';
  create?: Maybe<PointTransactionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_UpdatedAt_Update>;
};

export type PointTransactionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PointTransactionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PointTransactionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PointTransactionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_User = {
  __typename?: 'PointTransactionsDocAccessFields_user';
  create?: Maybe<PointTransactionsDocAccessFields_User_Create>;
  delete?: Maybe<PointTransactionsDocAccessFields_User_Delete>;
  read?: Maybe<PointTransactionsDocAccessFields_User_Read>;
  update?: Maybe<PointTransactionsDocAccessFields_User_Update>;
};

export type PointTransactionsDocAccessFields_User_Create = {
  __typename?: 'PointTransactionsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_User_Delete = {
  __typename?: 'PointTransactionsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_User_Read = {
  __typename?: 'PointTransactionsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsDocAccessFields_User_Update = {
  __typename?: 'PointTransactionsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields = {
  __typename?: 'PointTransactionsFields';
  amount?: Maybe<PointTransactionsFields_Amount>;
  createdAt?: Maybe<PointTransactionsFields_CreatedAt>;
  expiredAt?: Maybe<PointTransactionsFields_ExpiredAt>;
  isFavorite?: Maybe<PointTransactionsFields_IsFavorite>;
  metaData?: Maybe<PointTransactionsFields_MetaData>;
  orders?: Maybe<PointTransactionsFields_Orders>;
  status?: Maybe<PointTransactionsFields_Status>;
  type?: Maybe<PointTransactionsFields_Type>;
  updatedAt?: Maybe<PointTransactionsFields_UpdatedAt>;
  user?: Maybe<PointTransactionsFields_User>;
};

export type PointTransactionsFields_Amount = {
  __typename?: 'PointTransactionsFields_amount';
  create?: Maybe<PointTransactionsFields_Amount_Create>;
  delete?: Maybe<PointTransactionsFields_Amount_Delete>;
  read?: Maybe<PointTransactionsFields_Amount_Read>;
  update?: Maybe<PointTransactionsFields_Amount_Update>;
};

export type PointTransactionsFields_Amount_Create = {
  __typename?: 'PointTransactionsFields_amount_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Amount_Delete = {
  __typename?: 'PointTransactionsFields_amount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Amount_Read = {
  __typename?: 'PointTransactionsFields_amount_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Amount_Update = {
  __typename?: 'PointTransactionsFields_amount_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_CreatedAt = {
  __typename?: 'PointTransactionsFields_createdAt';
  create?: Maybe<PointTransactionsFields_CreatedAt_Create>;
  delete?: Maybe<PointTransactionsFields_CreatedAt_Delete>;
  read?: Maybe<PointTransactionsFields_CreatedAt_Read>;
  update?: Maybe<PointTransactionsFields_CreatedAt_Update>;
};

export type PointTransactionsFields_CreatedAt_Create = {
  __typename?: 'PointTransactionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_CreatedAt_Delete = {
  __typename?: 'PointTransactionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_CreatedAt_Read = {
  __typename?: 'PointTransactionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_CreatedAt_Update = {
  __typename?: 'PointTransactionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_ExpiredAt = {
  __typename?: 'PointTransactionsFields_expiredAt';
  create?: Maybe<PointTransactionsFields_ExpiredAt_Create>;
  delete?: Maybe<PointTransactionsFields_ExpiredAt_Delete>;
  read?: Maybe<PointTransactionsFields_ExpiredAt_Read>;
  update?: Maybe<PointTransactionsFields_ExpiredAt_Update>;
};

export type PointTransactionsFields_ExpiredAt_Create = {
  __typename?: 'PointTransactionsFields_expiredAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_ExpiredAt_Delete = {
  __typename?: 'PointTransactionsFields_expiredAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_ExpiredAt_Read = {
  __typename?: 'PointTransactionsFields_expiredAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_ExpiredAt_Update = {
  __typename?: 'PointTransactionsFields_expiredAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_IsFavorite = {
  __typename?: 'PointTransactionsFields_isFavorite';
  create?: Maybe<PointTransactionsFields_IsFavorite_Create>;
  delete?: Maybe<PointTransactionsFields_IsFavorite_Delete>;
  read?: Maybe<PointTransactionsFields_IsFavorite_Read>;
  update?: Maybe<PointTransactionsFields_IsFavorite_Update>;
};

export type PointTransactionsFields_IsFavorite_Create = {
  __typename?: 'PointTransactionsFields_isFavorite_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_IsFavorite_Delete = {
  __typename?: 'PointTransactionsFields_isFavorite_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_IsFavorite_Read = {
  __typename?: 'PointTransactionsFields_isFavorite_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_IsFavorite_Update = {
  __typename?: 'PointTransactionsFields_isFavorite_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_MetaData = {
  __typename?: 'PointTransactionsFields_metaData';
  create?: Maybe<PointTransactionsFields_MetaData_Create>;
  delete?: Maybe<PointTransactionsFields_MetaData_Delete>;
  read?: Maybe<PointTransactionsFields_MetaData_Read>;
  update?: Maybe<PointTransactionsFields_MetaData_Update>;
};

export type PointTransactionsFields_MetaData_Create = {
  __typename?: 'PointTransactionsFields_metaData_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_MetaData_Delete = {
  __typename?: 'PointTransactionsFields_metaData_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_MetaData_Read = {
  __typename?: 'PointTransactionsFields_metaData_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_MetaData_Update = {
  __typename?: 'PointTransactionsFields_metaData_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Orders = {
  __typename?: 'PointTransactionsFields_orders';
  create?: Maybe<PointTransactionsFields_Orders_Create>;
  delete?: Maybe<PointTransactionsFields_Orders_Delete>;
  read?: Maybe<PointTransactionsFields_Orders_Read>;
  update?: Maybe<PointTransactionsFields_Orders_Update>;
};

export type PointTransactionsFields_Orders_Create = {
  __typename?: 'PointTransactionsFields_orders_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Orders_Delete = {
  __typename?: 'PointTransactionsFields_orders_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Orders_Read = {
  __typename?: 'PointTransactionsFields_orders_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Orders_Update = {
  __typename?: 'PointTransactionsFields_orders_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Status = {
  __typename?: 'PointTransactionsFields_status';
  create?: Maybe<PointTransactionsFields_Status_Create>;
  delete?: Maybe<PointTransactionsFields_Status_Delete>;
  read?: Maybe<PointTransactionsFields_Status_Read>;
  update?: Maybe<PointTransactionsFields_Status_Update>;
};

export type PointTransactionsFields_Status_Create = {
  __typename?: 'PointTransactionsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Status_Delete = {
  __typename?: 'PointTransactionsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Status_Read = {
  __typename?: 'PointTransactionsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Status_Update = {
  __typename?: 'PointTransactionsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Type = {
  __typename?: 'PointTransactionsFields_type';
  create?: Maybe<PointTransactionsFields_Type_Create>;
  delete?: Maybe<PointTransactionsFields_Type_Delete>;
  read?: Maybe<PointTransactionsFields_Type_Read>;
  update?: Maybe<PointTransactionsFields_Type_Update>;
};

export type PointTransactionsFields_Type_Create = {
  __typename?: 'PointTransactionsFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Type_Delete = {
  __typename?: 'PointTransactionsFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Type_Read = {
  __typename?: 'PointTransactionsFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_Type_Update = {
  __typename?: 'PointTransactionsFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_UpdatedAt = {
  __typename?: 'PointTransactionsFields_updatedAt';
  create?: Maybe<PointTransactionsFields_UpdatedAt_Create>;
  delete?: Maybe<PointTransactionsFields_UpdatedAt_Delete>;
  read?: Maybe<PointTransactionsFields_UpdatedAt_Read>;
  update?: Maybe<PointTransactionsFields_UpdatedAt_Update>;
};

export type PointTransactionsFields_UpdatedAt_Create = {
  __typename?: 'PointTransactionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_UpdatedAt_Delete = {
  __typename?: 'PointTransactionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_UpdatedAt_Read = {
  __typename?: 'PointTransactionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_UpdatedAt_Update = {
  __typename?: 'PointTransactionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_User = {
  __typename?: 'PointTransactionsFields_user';
  create?: Maybe<PointTransactionsFields_User_Create>;
  delete?: Maybe<PointTransactionsFields_User_Delete>;
  read?: Maybe<PointTransactionsFields_User_Read>;
  update?: Maybe<PointTransactionsFields_User_Update>;
};

export type PointTransactionsFields_User_Create = {
  __typename?: 'PointTransactionsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_User_Delete = {
  __typename?: 'PointTransactionsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_User_Read = {
  __typename?: 'PointTransactionsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsFields_User_Update = {
  __typename?: 'PointTransactionsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PointTransactionsReadAccess = {
  __typename?: 'PointTransactionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransactionsReadDocAccess = {
  __typename?: 'PointTransactionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransactionsUpdateAccess = {
  __typename?: 'PointTransactionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PointTransactionsUpdateDocAccess = {
  __typename?: 'PointTransactionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Post_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Post_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Where = {
  AND?: InputMaybe<Array<InputMaybe<Post_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_Where_Or>>>;
  author?: InputMaybe<Post_Author_Operator>;
  content?: InputMaybe<Post_Content_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  tags?: InputMaybe<Post_Tags_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Post_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_Where_Or>>>;
  author?: InputMaybe<Post_Author_Operator>;
  content?: InputMaybe<Post_Content_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  tags?: InputMaybe<Post_Tags_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Post_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_Where_Or>>>;
  author?: InputMaybe<Post_Author_Operator>;
  content?: InputMaybe<Post_Content_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  tags?: InputMaybe<Post_Tags_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Posts = {
  __typename?: 'Posts';
  docs: Array<Post>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PostsCreateAccess = {
  __typename?: 'PostsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsCreateDocAccess = {
  __typename?: 'PostsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteAccess = {
  __typename?: 'PostsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteDocAccess = {
  __typename?: 'PostsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDocAccessFields = {
  __typename?: 'PostsDocAccessFields';
  author?: Maybe<PostsDocAccessFields_Author>;
  content?: Maybe<PostsDocAccessFields_Content>;
  createdAt?: Maybe<PostsDocAccessFields_CreatedAt>;
  tags?: Maybe<PostsDocAccessFields_Tags>;
  title?: Maybe<PostsDocAccessFields_Title>;
  updatedAt?: Maybe<PostsDocAccessFields_UpdatedAt>;
};

export type PostsDocAccessFields_Author = {
  __typename?: 'PostsDocAccessFields_author';
  create?: Maybe<PostsDocAccessFields_Author_Create>;
  delete?: Maybe<PostsDocAccessFields_Author_Delete>;
  read?: Maybe<PostsDocAccessFields_Author_Read>;
  update?: Maybe<PostsDocAccessFields_Author_Update>;
};

export type PostsDocAccessFields_Author_Create = {
  __typename?: 'PostsDocAccessFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Author_Delete = {
  __typename?: 'PostsDocAccessFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Author_Read = {
  __typename?: 'PostsDocAccessFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Author_Update = {
  __typename?: 'PostsDocAccessFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content = {
  __typename?: 'PostsDocAccessFields_content';
  create?: Maybe<PostsDocAccessFields_Content_Create>;
  delete?: Maybe<PostsDocAccessFields_Content_Delete>;
  read?: Maybe<PostsDocAccessFields_Content_Read>;
  update?: Maybe<PostsDocAccessFields_Content_Update>;
};

export type PostsDocAccessFields_Content_Create = {
  __typename?: 'PostsDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content_Delete = {
  __typename?: 'PostsDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content_Read = {
  __typename?: 'PostsDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Content_Update = {
  __typename?: 'PostsDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt = {
  __typename?: 'PostsDocAccessFields_createdAt';
  create?: Maybe<PostsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PostsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PostsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PostsDocAccessFields_CreatedAt_Update>;
};

export type PostsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PostsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PostsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PostsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PostsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Tags = {
  __typename?: 'PostsDocAccessFields_tags';
  create?: Maybe<PostsDocAccessFields_Tags_Create>;
  delete?: Maybe<PostsDocAccessFields_Tags_Delete>;
  read?: Maybe<PostsDocAccessFields_Tags_Read>;
  update?: Maybe<PostsDocAccessFields_Tags_Update>;
};

export type PostsDocAccessFields_Tags_Create = {
  __typename?: 'PostsDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Tags_Delete = {
  __typename?: 'PostsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Tags_Read = {
  __typename?: 'PostsDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Tags_Update = {
  __typename?: 'PostsDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title = {
  __typename?: 'PostsDocAccessFields_title';
  create?: Maybe<PostsDocAccessFields_Title_Create>;
  delete?: Maybe<PostsDocAccessFields_Title_Delete>;
  read?: Maybe<PostsDocAccessFields_Title_Read>;
  update?: Maybe<PostsDocAccessFields_Title_Update>;
};

export type PostsDocAccessFields_Title_Create = {
  __typename?: 'PostsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Delete = {
  __typename?: 'PostsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Read = {
  __typename?: 'PostsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Update = {
  __typename?: 'PostsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt = {
  __typename?: 'PostsDocAccessFields_updatedAt';
  create?: Maybe<PostsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PostsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PostsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PostsDocAccessFields_UpdatedAt_Update>;
};

export type PostsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PostsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PostsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PostsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PostsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields = {
  __typename?: 'PostsFields';
  author?: Maybe<PostsFields_Author>;
  content?: Maybe<PostsFields_Content>;
  createdAt?: Maybe<PostsFields_CreatedAt>;
  tags?: Maybe<PostsFields_Tags>;
  title?: Maybe<PostsFields_Title>;
  updatedAt?: Maybe<PostsFields_UpdatedAt>;
};

export type PostsFields_Author = {
  __typename?: 'PostsFields_author';
  create?: Maybe<PostsFields_Author_Create>;
  delete?: Maybe<PostsFields_Author_Delete>;
  read?: Maybe<PostsFields_Author_Read>;
  update?: Maybe<PostsFields_Author_Update>;
};

export type PostsFields_Author_Create = {
  __typename?: 'PostsFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Author_Delete = {
  __typename?: 'PostsFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Author_Read = {
  __typename?: 'PostsFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Author_Update = {
  __typename?: 'PostsFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content = {
  __typename?: 'PostsFields_content';
  create?: Maybe<PostsFields_Content_Create>;
  delete?: Maybe<PostsFields_Content_Delete>;
  read?: Maybe<PostsFields_Content_Read>;
  update?: Maybe<PostsFields_Content_Update>;
};

export type PostsFields_Content_Create = {
  __typename?: 'PostsFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content_Delete = {
  __typename?: 'PostsFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content_Read = {
  __typename?: 'PostsFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Content_Update = {
  __typename?: 'PostsFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt = {
  __typename?: 'PostsFields_createdAt';
  create?: Maybe<PostsFields_CreatedAt_Create>;
  delete?: Maybe<PostsFields_CreatedAt_Delete>;
  read?: Maybe<PostsFields_CreatedAt_Read>;
  update?: Maybe<PostsFields_CreatedAt_Update>;
};

export type PostsFields_CreatedAt_Create = {
  __typename?: 'PostsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Delete = {
  __typename?: 'PostsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Read = {
  __typename?: 'PostsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Update = {
  __typename?: 'PostsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Tags = {
  __typename?: 'PostsFields_tags';
  create?: Maybe<PostsFields_Tags_Create>;
  delete?: Maybe<PostsFields_Tags_Delete>;
  read?: Maybe<PostsFields_Tags_Read>;
  update?: Maybe<PostsFields_Tags_Update>;
};

export type PostsFields_Tags_Create = {
  __typename?: 'PostsFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Tags_Delete = {
  __typename?: 'PostsFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Tags_Read = {
  __typename?: 'PostsFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Tags_Update = {
  __typename?: 'PostsFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title = {
  __typename?: 'PostsFields_title';
  create?: Maybe<PostsFields_Title_Create>;
  delete?: Maybe<PostsFields_Title_Delete>;
  read?: Maybe<PostsFields_Title_Read>;
  update?: Maybe<PostsFields_Title_Update>;
};

export type PostsFields_Title_Create = {
  __typename?: 'PostsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Delete = {
  __typename?: 'PostsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Read = {
  __typename?: 'PostsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Update = {
  __typename?: 'PostsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt = {
  __typename?: 'PostsFields_updatedAt';
  create?: Maybe<PostsFields_UpdatedAt_Create>;
  delete?: Maybe<PostsFields_UpdatedAt_Delete>;
  read?: Maybe<PostsFields_UpdatedAt_Read>;
  update?: Maybe<PostsFields_UpdatedAt_Update>;
};

export type PostsFields_UpdatedAt_Create = {
  __typename?: 'PostsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Delete = {
  __typename?: 'PostsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Read = {
  __typename?: 'PostsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Update = {
  __typename?: 'PostsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsReadAccess = {
  __typename?: 'PostsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadDocAccess = {
  __typename?: 'PostsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateAccess = {
  __typename?: 'PostsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateDocAccess = {
  __typename?: 'PostsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Price = {
  __typename?: 'Price';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  price_type?: Maybe<Price_Price_Type>;
  product?: Maybe<Array<Product>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PriceUpdate_Price_Type_MutationInput {
  Base = 'base',
  Retail = 'retail',
  Wholesale = 'wholesale'
}

export type Price_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Price_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Price_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Price_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum Price_Price_Type {
  Base = 'base',
  Retail = 'retail',
  Wholesale = 'wholesale'
}

export enum Price_Price_Type_Input {
  Base = 'base',
  Retail = 'retail',
  Wholesale = 'wholesale'
}

export enum Price_Price_Type_MutationInput {
  Base = 'base',
  Retail = 'retail',
  Wholesale = 'wholesale'
}

export type Price_Price_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Price_Price_Type_Input>>>;
  equals?: InputMaybe<Price_Price_Type_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Price_Price_Type_Input>>>;
  not_equals?: InputMaybe<Price_Price_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Price_Price_Type_Input>>>;
};

export type Price_Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Price_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Price_Where = {
  AND?: InputMaybe<Array<InputMaybe<Price_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Price_Where_Or>>>;
  createdAt?: InputMaybe<Price_CreatedAt_Operator>;
  description?: InputMaybe<Price_Description_Operator>;
  id?: InputMaybe<Price_Id_Operator>;
  price?: InputMaybe<Price_Price_Operator>;
  price_type?: InputMaybe<Price_Price_Type_Operator>;
  product?: InputMaybe<Price_Product_Operator>;
  updatedAt?: InputMaybe<Price_UpdatedAt_Operator>;
};

export type Price_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Price_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Price_Where_Or>>>;
  createdAt?: InputMaybe<Price_CreatedAt_Operator>;
  description?: InputMaybe<Price_Description_Operator>;
  id?: InputMaybe<Price_Id_Operator>;
  price?: InputMaybe<Price_Price_Operator>;
  price_type?: InputMaybe<Price_Price_Type_Operator>;
  product?: InputMaybe<Price_Product_Operator>;
  updatedAt?: InputMaybe<Price_UpdatedAt_Operator>;
};

export type Price_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Price_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Price_Where_Or>>>;
  createdAt?: InputMaybe<Price_CreatedAt_Operator>;
  description?: InputMaybe<Price_Description_Operator>;
  id?: InputMaybe<Price_Id_Operator>;
  price?: InputMaybe<Price_Price_Operator>;
  price_type?: InputMaybe<Price_Price_Type_Operator>;
  product?: InputMaybe<Price_Product_Operator>;
  updatedAt?: InputMaybe<Price_UpdatedAt_Operator>;
};

export type Prices = {
  __typename?: 'Prices';
  docs: Array<Price>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PricesCreateAccess = {
  __typename?: 'PricesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PricesCreateDocAccess = {
  __typename?: 'PricesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PricesDeleteAccess = {
  __typename?: 'PricesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PricesDeleteDocAccess = {
  __typename?: 'PricesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PricesDocAccessFields = {
  __typename?: 'PricesDocAccessFields';
  createdAt?: Maybe<PricesDocAccessFields_CreatedAt>;
  description?: Maybe<PricesDocAccessFields_Description>;
  price?: Maybe<PricesDocAccessFields_Price>;
  price_type?: Maybe<PricesDocAccessFields_Price_Type>;
  product?: Maybe<PricesDocAccessFields_Product>;
  updatedAt?: Maybe<PricesDocAccessFields_UpdatedAt>;
};

export type PricesDocAccessFields_CreatedAt = {
  __typename?: 'PricesDocAccessFields_createdAt';
  create?: Maybe<PricesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PricesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PricesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PricesDocAccessFields_CreatedAt_Update>;
};

export type PricesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PricesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PricesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PricesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PricesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Description = {
  __typename?: 'PricesDocAccessFields_description';
  create?: Maybe<PricesDocAccessFields_Description_Create>;
  delete?: Maybe<PricesDocAccessFields_Description_Delete>;
  read?: Maybe<PricesDocAccessFields_Description_Read>;
  update?: Maybe<PricesDocAccessFields_Description_Update>;
};

export type PricesDocAccessFields_Description_Create = {
  __typename?: 'PricesDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Description_Delete = {
  __typename?: 'PricesDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Description_Read = {
  __typename?: 'PricesDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Description_Update = {
  __typename?: 'PricesDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price = {
  __typename?: 'PricesDocAccessFields_price';
  create?: Maybe<PricesDocAccessFields_Price_Create>;
  delete?: Maybe<PricesDocAccessFields_Price_Delete>;
  read?: Maybe<PricesDocAccessFields_Price_Read>;
  update?: Maybe<PricesDocAccessFields_Price_Update>;
};

export type PricesDocAccessFields_Price_Create = {
  __typename?: 'PricesDocAccessFields_price_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price_Delete = {
  __typename?: 'PricesDocAccessFields_price_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price_Read = {
  __typename?: 'PricesDocAccessFields_price_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price_Update = {
  __typename?: 'PricesDocAccessFields_price_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price_Type = {
  __typename?: 'PricesDocAccessFields_price_type';
  create?: Maybe<PricesDocAccessFields_Price_Type_Create>;
  delete?: Maybe<PricesDocAccessFields_Price_Type_Delete>;
  read?: Maybe<PricesDocAccessFields_Price_Type_Read>;
  update?: Maybe<PricesDocAccessFields_Price_Type_Update>;
};

export type PricesDocAccessFields_Price_Type_Create = {
  __typename?: 'PricesDocAccessFields_price_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price_Type_Delete = {
  __typename?: 'PricesDocAccessFields_price_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price_Type_Read = {
  __typename?: 'PricesDocAccessFields_price_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Price_Type_Update = {
  __typename?: 'PricesDocAccessFields_price_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Product = {
  __typename?: 'PricesDocAccessFields_product';
  create?: Maybe<PricesDocAccessFields_Product_Create>;
  delete?: Maybe<PricesDocAccessFields_Product_Delete>;
  read?: Maybe<PricesDocAccessFields_Product_Read>;
  update?: Maybe<PricesDocAccessFields_Product_Update>;
};

export type PricesDocAccessFields_Product_Create = {
  __typename?: 'PricesDocAccessFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Product_Delete = {
  __typename?: 'PricesDocAccessFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Product_Read = {
  __typename?: 'PricesDocAccessFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_Product_Update = {
  __typename?: 'PricesDocAccessFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_UpdatedAt = {
  __typename?: 'PricesDocAccessFields_updatedAt';
  create?: Maybe<PricesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PricesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PricesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PricesDocAccessFields_UpdatedAt_Update>;
};

export type PricesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PricesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PricesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PricesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PricesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields = {
  __typename?: 'PricesFields';
  createdAt?: Maybe<PricesFields_CreatedAt>;
  description?: Maybe<PricesFields_Description>;
  price?: Maybe<PricesFields_Price>;
  price_type?: Maybe<PricesFields_Price_Type>;
  product?: Maybe<PricesFields_Product>;
  updatedAt?: Maybe<PricesFields_UpdatedAt>;
};

export type PricesFields_CreatedAt = {
  __typename?: 'PricesFields_createdAt';
  create?: Maybe<PricesFields_CreatedAt_Create>;
  delete?: Maybe<PricesFields_CreatedAt_Delete>;
  read?: Maybe<PricesFields_CreatedAt_Read>;
  update?: Maybe<PricesFields_CreatedAt_Update>;
};

export type PricesFields_CreatedAt_Create = {
  __typename?: 'PricesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_CreatedAt_Delete = {
  __typename?: 'PricesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_CreatedAt_Read = {
  __typename?: 'PricesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_CreatedAt_Update = {
  __typename?: 'PricesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Description = {
  __typename?: 'PricesFields_description';
  create?: Maybe<PricesFields_Description_Create>;
  delete?: Maybe<PricesFields_Description_Delete>;
  read?: Maybe<PricesFields_Description_Read>;
  update?: Maybe<PricesFields_Description_Update>;
};

export type PricesFields_Description_Create = {
  __typename?: 'PricesFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Description_Delete = {
  __typename?: 'PricesFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Description_Read = {
  __typename?: 'PricesFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Description_Update = {
  __typename?: 'PricesFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price = {
  __typename?: 'PricesFields_price';
  create?: Maybe<PricesFields_Price_Create>;
  delete?: Maybe<PricesFields_Price_Delete>;
  read?: Maybe<PricesFields_Price_Read>;
  update?: Maybe<PricesFields_Price_Update>;
};

export type PricesFields_Price_Create = {
  __typename?: 'PricesFields_price_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price_Delete = {
  __typename?: 'PricesFields_price_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price_Read = {
  __typename?: 'PricesFields_price_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price_Update = {
  __typename?: 'PricesFields_price_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price_Type = {
  __typename?: 'PricesFields_price_type';
  create?: Maybe<PricesFields_Price_Type_Create>;
  delete?: Maybe<PricesFields_Price_Type_Delete>;
  read?: Maybe<PricesFields_Price_Type_Read>;
  update?: Maybe<PricesFields_Price_Type_Update>;
};

export type PricesFields_Price_Type_Create = {
  __typename?: 'PricesFields_price_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price_Type_Delete = {
  __typename?: 'PricesFields_price_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price_Type_Read = {
  __typename?: 'PricesFields_price_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Price_Type_Update = {
  __typename?: 'PricesFields_price_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Product = {
  __typename?: 'PricesFields_product';
  create?: Maybe<PricesFields_Product_Create>;
  delete?: Maybe<PricesFields_Product_Delete>;
  read?: Maybe<PricesFields_Product_Read>;
  update?: Maybe<PricesFields_Product_Update>;
};

export type PricesFields_Product_Create = {
  __typename?: 'PricesFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Product_Delete = {
  __typename?: 'PricesFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Product_Read = {
  __typename?: 'PricesFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_Product_Update = {
  __typename?: 'PricesFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_UpdatedAt = {
  __typename?: 'PricesFields_updatedAt';
  create?: Maybe<PricesFields_UpdatedAt_Create>;
  delete?: Maybe<PricesFields_UpdatedAt_Delete>;
  read?: Maybe<PricesFields_UpdatedAt_Read>;
  update?: Maybe<PricesFields_UpdatedAt_Update>;
};

export type PricesFields_UpdatedAt_Create = {
  __typename?: 'PricesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_UpdatedAt_Delete = {
  __typename?: 'PricesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_UpdatedAt_Read = {
  __typename?: 'PricesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PricesFields_UpdatedAt_Update = {
  __typename?: 'PricesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PricesReadAccess = {
  __typename?: 'PricesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PricesReadDocAccess = {
  __typename?: 'PricesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PricesUpdateAccess = {
  __typename?: 'PricesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PricesUpdateDocAccess = {
  __typename?: 'PricesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Product = {
  __typename?: 'Product';
  averageScore?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  media?: Maybe<Array<Product_Media>>;
  name: Scalars['String']['output'];
  previewImage?: Maybe<Media>;
  price?: Maybe<Price>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  ratings?: Maybe<Array<Rating>>;
  status: Product_Status;
  stock?: Maybe<Stock>;
  supplier?: Maybe<Supplier>;
  tags?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ProductDetailsArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductPromotion = {
  __typename?: 'ProductPromotion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Media>>;
  productId?: Maybe<Product>;
  promotionId?: Maybe<Array<Promotion>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPromotion_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductPromotion_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductPromotion_Images_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type ProductPromotion_ProductId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type ProductPromotion_PromotionId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type ProductPromotion_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductPromotion_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductPromotion_Where = {
  AND?: InputMaybe<Array<InputMaybe<ProductPromotion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductPromotion_Where_Or>>>;
  createdAt?: InputMaybe<ProductPromotion_CreatedAt_Operator>;
  id?: InputMaybe<ProductPromotion_Id_Operator>;
  images?: InputMaybe<ProductPromotion_Images_Operator>;
  productId?: InputMaybe<ProductPromotion_ProductId_Operator>;
  promotionId?: InputMaybe<ProductPromotion_PromotionId_Operator>;
  publishedAt?: InputMaybe<ProductPromotion_PublishedAt_Operator>;
  updatedAt?: InputMaybe<ProductPromotion_UpdatedAt_Operator>;
};

export type ProductPromotion_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<ProductPromotion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductPromotion_Where_Or>>>;
  createdAt?: InputMaybe<ProductPromotion_CreatedAt_Operator>;
  id?: InputMaybe<ProductPromotion_Id_Operator>;
  images?: InputMaybe<ProductPromotion_Images_Operator>;
  productId?: InputMaybe<ProductPromotion_ProductId_Operator>;
  promotionId?: InputMaybe<ProductPromotion_PromotionId_Operator>;
  publishedAt?: InputMaybe<ProductPromotion_PublishedAt_Operator>;
  updatedAt?: InputMaybe<ProductPromotion_UpdatedAt_Operator>;
};

export type ProductPromotion_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<ProductPromotion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductPromotion_Where_Or>>>;
  createdAt?: InputMaybe<ProductPromotion_CreatedAt_Operator>;
  id?: InputMaybe<ProductPromotion_Id_Operator>;
  images?: InputMaybe<ProductPromotion_Images_Operator>;
  productId?: InputMaybe<ProductPromotion_ProductId_Operator>;
  promotionId?: InputMaybe<ProductPromotion_PromotionId_Operator>;
  publishedAt?: InputMaybe<ProductPromotion_PublishedAt_Operator>;
  updatedAt?: InputMaybe<ProductPromotion_UpdatedAt_Operator>;
};

export type ProductPromotions = {
  __typename?: 'ProductPromotions';
  docs: Array<ProductPromotion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ProductPromotionsCreateAccess = {
  __typename?: 'ProductPromotionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductPromotionsCreateDocAccess = {
  __typename?: 'ProductPromotionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductPromotionsDeleteAccess = {
  __typename?: 'ProductPromotionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductPromotionsDeleteDocAccess = {
  __typename?: 'ProductPromotionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductPromotionsDocAccessFields = {
  __typename?: 'ProductPromotionsDocAccessFields';
  createdAt?: Maybe<ProductPromotionsDocAccessFields_CreatedAt>;
  images?: Maybe<ProductPromotionsDocAccessFields_Images>;
  productId?: Maybe<ProductPromotionsDocAccessFields_ProductId>;
  promotionId?: Maybe<ProductPromotionsDocAccessFields_PromotionId>;
  publishedAt?: Maybe<ProductPromotionsDocAccessFields_PublishedAt>;
  updatedAt?: Maybe<ProductPromotionsDocAccessFields_UpdatedAt>;
};

export type ProductPromotionsDocAccessFields_CreatedAt = {
  __typename?: 'ProductPromotionsDocAccessFields_createdAt';
  create?: Maybe<ProductPromotionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ProductPromotionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ProductPromotionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProductPromotionsDocAccessFields_CreatedAt_Update>;
};

export type ProductPromotionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ProductPromotionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ProductPromotionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ProductPromotionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ProductPromotionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_Images = {
  __typename?: 'ProductPromotionsDocAccessFields_images';
  create?: Maybe<ProductPromotionsDocAccessFields_Images_Create>;
  delete?: Maybe<ProductPromotionsDocAccessFields_Images_Delete>;
  read?: Maybe<ProductPromotionsDocAccessFields_Images_Read>;
  update?: Maybe<ProductPromotionsDocAccessFields_Images_Update>;
};

export type ProductPromotionsDocAccessFields_Images_Create = {
  __typename?: 'ProductPromotionsDocAccessFields_images_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_Images_Delete = {
  __typename?: 'ProductPromotionsDocAccessFields_images_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_Images_Read = {
  __typename?: 'ProductPromotionsDocAccessFields_images_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_Images_Update = {
  __typename?: 'ProductPromotionsDocAccessFields_images_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_ProductId = {
  __typename?: 'ProductPromotionsDocAccessFields_productId';
  create?: Maybe<ProductPromotionsDocAccessFields_ProductId_Create>;
  delete?: Maybe<ProductPromotionsDocAccessFields_ProductId_Delete>;
  read?: Maybe<ProductPromotionsDocAccessFields_ProductId_Read>;
  update?: Maybe<ProductPromotionsDocAccessFields_ProductId_Update>;
};

export type ProductPromotionsDocAccessFields_ProductId_Create = {
  __typename?: 'ProductPromotionsDocAccessFields_productId_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_ProductId_Delete = {
  __typename?: 'ProductPromotionsDocAccessFields_productId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_ProductId_Read = {
  __typename?: 'ProductPromotionsDocAccessFields_productId_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_ProductId_Update = {
  __typename?: 'ProductPromotionsDocAccessFields_productId_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PromotionId = {
  __typename?: 'ProductPromotionsDocAccessFields_promotionId';
  create?: Maybe<ProductPromotionsDocAccessFields_PromotionId_Create>;
  delete?: Maybe<ProductPromotionsDocAccessFields_PromotionId_Delete>;
  read?: Maybe<ProductPromotionsDocAccessFields_PromotionId_Read>;
  update?: Maybe<ProductPromotionsDocAccessFields_PromotionId_Update>;
};

export type ProductPromotionsDocAccessFields_PromotionId_Create = {
  __typename?: 'ProductPromotionsDocAccessFields_promotionId_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PromotionId_Delete = {
  __typename?: 'ProductPromotionsDocAccessFields_promotionId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PromotionId_Read = {
  __typename?: 'ProductPromotionsDocAccessFields_promotionId_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PromotionId_Update = {
  __typename?: 'ProductPromotionsDocAccessFields_promotionId_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PublishedAt = {
  __typename?: 'ProductPromotionsDocAccessFields_publishedAt';
  create?: Maybe<ProductPromotionsDocAccessFields_PublishedAt_Create>;
  delete?: Maybe<ProductPromotionsDocAccessFields_PublishedAt_Delete>;
  read?: Maybe<ProductPromotionsDocAccessFields_PublishedAt_Read>;
  update?: Maybe<ProductPromotionsDocAccessFields_PublishedAt_Update>;
};

export type ProductPromotionsDocAccessFields_PublishedAt_Create = {
  __typename?: 'ProductPromotionsDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PublishedAt_Delete = {
  __typename?: 'ProductPromotionsDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PublishedAt_Read = {
  __typename?: 'ProductPromotionsDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_PublishedAt_Update = {
  __typename?: 'ProductPromotionsDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_UpdatedAt = {
  __typename?: 'ProductPromotionsDocAccessFields_updatedAt';
  create?: Maybe<ProductPromotionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ProductPromotionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ProductPromotionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProductPromotionsDocAccessFields_UpdatedAt_Update>;
};

export type ProductPromotionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ProductPromotionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ProductPromotionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ProductPromotionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ProductPromotionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields = {
  __typename?: 'ProductPromotionsFields';
  createdAt?: Maybe<ProductPromotionsFields_CreatedAt>;
  images?: Maybe<ProductPromotionsFields_Images>;
  productId?: Maybe<ProductPromotionsFields_ProductId>;
  promotionId?: Maybe<ProductPromotionsFields_PromotionId>;
  publishedAt?: Maybe<ProductPromotionsFields_PublishedAt>;
  updatedAt?: Maybe<ProductPromotionsFields_UpdatedAt>;
};

export type ProductPromotionsFields_CreatedAt = {
  __typename?: 'ProductPromotionsFields_createdAt';
  create?: Maybe<ProductPromotionsFields_CreatedAt_Create>;
  delete?: Maybe<ProductPromotionsFields_CreatedAt_Delete>;
  read?: Maybe<ProductPromotionsFields_CreatedAt_Read>;
  update?: Maybe<ProductPromotionsFields_CreatedAt_Update>;
};

export type ProductPromotionsFields_CreatedAt_Create = {
  __typename?: 'ProductPromotionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_CreatedAt_Delete = {
  __typename?: 'ProductPromotionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_CreatedAt_Read = {
  __typename?: 'ProductPromotionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_CreatedAt_Update = {
  __typename?: 'ProductPromotionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_Images = {
  __typename?: 'ProductPromotionsFields_images';
  create?: Maybe<ProductPromotionsFields_Images_Create>;
  delete?: Maybe<ProductPromotionsFields_Images_Delete>;
  read?: Maybe<ProductPromotionsFields_Images_Read>;
  update?: Maybe<ProductPromotionsFields_Images_Update>;
};

export type ProductPromotionsFields_Images_Create = {
  __typename?: 'ProductPromotionsFields_images_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_Images_Delete = {
  __typename?: 'ProductPromotionsFields_images_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_Images_Read = {
  __typename?: 'ProductPromotionsFields_images_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_Images_Update = {
  __typename?: 'ProductPromotionsFields_images_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_ProductId = {
  __typename?: 'ProductPromotionsFields_productId';
  create?: Maybe<ProductPromotionsFields_ProductId_Create>;
  delete?: Maybe<ProductPromotionsFields_ProductId_Delete>;
  read?: Maybe<ProductPromotionsFields_ProductId_Read>;
  update?: Maybe<ProductPromotionsFields_ProductId_Update>;
};

export type ProductPromotionsFields_ProductId_Create = {
  __typename?: 'ProductPromotionsFields_productId_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_ProductId_Delete = {
  __typename?: 'ProductPromotionsFields_productId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_ProductId_Read = {
  __typename?: 'ProductPromotionsFields_productId_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_ProductId_Update = {
  __typename?: 'ProductPromotionsFields_productId_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PromotionId = {
  __typename?: 'ProductPromotionsFields_promotionId';
  create?: Maybe<ProductPromotionsFields_PromotionId_Create>;
  delete?: Maybe<ProductPromotionsFields_PromotionId_Delete>;
  read?: Maybe<ProductPromotionsFields_PromotionId_Read>;
  update?: Maybe<ProductPromotionsFields_PromotionId_Update>;
};

export type ProductPromotionsFields_PromotionId_Create = {
  __typename?: 'ProductPromotionsFields_promotionId_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PromotionId_Delete = {
  __typename?: 'ProductPromotionsFields_promotionId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PromotionId_Read = {
  __typename?: 'ProductPromotionsFields_promotionId_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PromotionId_Update = {
  __typename?: 'ProductPromotionsFields_promotionId_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PublishedAt = {
  __typename?: 'ProductPromotionsFields_publishedAt';
  create?: Maybe<ProductPromotionsFields_PublishedAt_Create>;
  delete?: Maybe<ProductPromotionsFields_PublishedAt_Delete>;
  read?: Maybe<ProductPromotionsFields_PublishedAt_Read>;
  update?: Maybe<ProductPromotionsFields_PublishedAt_Update>;
};

export type ProductPromotionsFields_PublishedAt_Create = {
  __typename?: 'ProductPromotionsFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PublishedAt_Delete = {
  __typename?: 'ProductPromotionsFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PublishedAt_Read = {
  __typename?: 'ProductPromotionsFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_PublishedAt_Update = {
  __typename?: 'ProductPromotionsFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_UpdatedAt = {
  __typename?: 'ProductPromotionsFields_updatedAt';
  create?: Maybe<ProductPromotionsFields_UpdatedAt_Create>;
  delete?: Maybe<ProductPromotionsFields_UpdatedAt_Delete>;
  read?: Maybe<ProductPromotionsFields_UpdatedAt_Read>;
  update?: Maybe<ProductPromotionsFields_UpdatedAt_Update>;
};

export type ProductPromotionsFields_UpdatedAt_Create = {
  __typename?: 'ProductPromotionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_UpdatedAt_Delete = {
  __typename?: 'ProductPromotionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_UpdatedAt_Read = {
  __typename?: 'ProductPromotionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsFields_UpdatedAt_Update = {
  __typename?: 'ProductPromotionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductPromotionsReadAccess = {
  __typename?: 'ProductPromotionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductPromotionsReadDocAccess = {
  __typename?: 'ProductPromotionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductPromotionsUpdateAccess = {
  __typename?: 'ProductPromotionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductPromotionsUpdateDocAccess = {
  __typename?: 'ProductPromotionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum ProductUpdate_Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Product_Media = ExternalMedia | InternalMedia;

export type Product_AverageScore_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Product_Details_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Product_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_PreviewImage_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_Price_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Ratings_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum Product_Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Product_Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Product_Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Product_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Product_Status_Input>>>;
  equals?: InputMaybe<Product_Status_Input>;
  in?: InputMaybe<Array<InputMaybe<Product_Status_Input>>>;
  not_equals?: InputMaybe<Product_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Product_Status_Input>>>;
};

export type Product_Stock_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_Supplier_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Product_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Version_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Where = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  averageScore?: InputMaybe<Product_AverageScore_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  name?: InputMaybe<Product_Name_Operator>;
  previewImage?: InputMaybe<Product_PreviewImage_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  publishedAt?: InputMaybe<Product_PublishedAt_Operator>;
  ratings?: InputMaybe<Product_Ratings_Operator>;
  status?: InputMaybe<Product_Status_Operator>;
  stock?: InputMaybe<Product_Stock_Operator>;
  supplier?: InputMaybe<Product_Supplier_Operator>;
  tags?: InputMaybe<Product_Tags_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  version?: InputMaybe<Product_Version_Operator>;
};

export type Product_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  averageScore?: InputMaybe<Product_AverageScore_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  name?: InputMaybe<Product_Name_Operator>;
  previewImage?: InputMaybe<Product_PreviewImage_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  publishedAt?: InputMaybe<Product_PublishedAt_Operator>;
  ratings?: InputMaybe<Product_Ratings_Operator>;
  status?: InputMaybe<Product_Status_Operator>;
  stock?: InputMaybe<Product_Stock_Operator>;
  supplier?: InputMaybe<Product_Supplier_Operator>;
  tags?: InputMaybe<Product_Tags_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  version?: InputMaybe<Product_Version_Operator>;
};

export type Product_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  averageScore?: InputMaybe<Product_AverageScore_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  name?: InputMaybe<Product_Name_Operator>;
  previewImage?: InputMaybe<Product_PreviewImage_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  publishedAt?: InputMaybe<Product_PublishedAt_Operator>;
  ratings?: InputMaybe<Product_Ratings_Operator>;
  status?: InputMaybe<Product_Status_Operator>;
  stock?: InputMaybe<Product_Stock_Operator>;
  supplier?: InputMaybe<Product_Supplier_Operator>;
  tags?: InputMaybe<Product_Tags_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  version?: InputMaybe<Product_Version_Operator>;
};

export type Products = {
  __typename?: 'Products';
  docs: Array<Product>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ProductsCreateAccess = {
  __typename?: 'ProductsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsCreateDocAccess = {
  __typename?: 'ProductsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteAccess = {
  __typename?: 'ProductsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteDocAccess = {
  __typename?: 'ProductsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDocAccessFields = {
  __typename?: 'ProductsDocAccessFields';
  averageScore?: Maybe<ProductsDocAccessFields_AverageScore>;
  createdAt?: Maybe<ProductsDocAccessFields_CreatedAt>;
  description?: Maybe<ProductsDocAccessFields_Description>;
  details?: Maybe<ProductsDocAccessFields_Details>;
  media?: Maybe<ProductsDocAccessFields_Media>;
  name?: Maybe<ProductsDocAccessFields_Name>;
  previewImage?: Maybe<ProductsDocAccessFields_PreviewImage>;
  price?: Maybe<ProductsDocAccessFields_Price>;
  publishedAt?: Maybe<ProductsDocAccessFields_PublishedAt>;
  ratings?: Maybe<ProductsDocAccessFields_Ratings>;
  status?: Maybe<ProductsDocAccessFields_Status>;
  stock?: Maybe<ProductsDocAccessFields_Stock>;
  supplier?: Maybe<ProductsDocAccessFields_Supplier>;
  tags?: Maybe<ProductsDocAccessFields_Tags>;
  updatedAt?: Maybe<ProductsDocAccessFields_UpdatedAt>;
  version?: Maybe<ProductsDocAccessFields_Version>;
};

export type ProductsDocAccessFields_AverageScore = {
  __typename?: 'ProductsDocAccessFields_averageScore';
  create?: Maybe<ProductsDocAccessFields_AverageScore_Create>;
  delete?: Maybe<ProductsDocAccessFields_AverageScore_Delete>;
  read?: Maybe<ProductsDocAccessFields_AverageScore_Read>;
  update?: Maybe<ProductsDocAccessFields_AverageScore_Update>;
};

export type ProductsDocAccessFields_AverageScore_Create = {
  __typename?: 'ProductsDocAccessFields_averageScore_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_AverageScore_Delete = {
  __typename?: 'ProductsDocAccessFields_averageScore_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_AverageScore_Read = {
  __typename?: 'ProductsDocAccessFields_averageScore_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_AverageScore_Update = {
  __typename?: 'ProductsDocAccessFields_averageScore_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt = {
  __typename?: 'ProductsDocAccessFields_createdAt';
  create?: Maybe<ProductsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_CreatedAt_Update>;
};

export type ProductsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description = {
  __typename?: 'ProductsDocAccessFields_description';
  create?: Maybe<ProductsDocAccessFields_Description_Create>;
  delete?: Maybe<ProductsDocAccessFields_Description_Delete>;
  read?: Maybe<ProductsDocAccessFields_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Description_Update>;
};

export type ProductsDocAccessFields_Description_Create = {
  __typename?: 'ProductsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Delete = {
  __typename?: 'ProductsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Read = {
  __typename?: 'ProductsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Update = {
  __typename?: 'ProductsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details = {
  __typename?: 'ProductsDocAccessFields_details';
  create?: Maybe<ProductsDocAccessFields_Details_Create>;
  delete?: Maybe<ProductsDocAccessFields_Details_Delete>;
  read?: Maybe<ProductsDocAccessFields_Details_Read>;
  update?: Maybe<ProductsDocAccessFields_Details_Update>;
};

export type ProductsDocAccessFields_Details_Create = {
  __typename?: 'ProductsDocAccessFields_details_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details_Delete = {
  __typename?: 'ProductsDocAccessFields_details_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details_Read = {
  __typename?: 'ProductsDocAccessFields_details_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details_Update = {
  __typename?: 'ProductsDocAccessFields_details_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Media = {
  __typename?: 'ProductsDocAccessFields_media';
  create?: Maybe<ProductsDocAccessFields_Media_Create>;
  delete?: Maybe<ProductsDocAccessFields_Media_Delete>;
  read?: Maybe<ProductsDocAccessFields_Media_Read>;
  update?: Maybe<ProductsDocAccessFields_Media_Update>;
};

export type ProductsDocAccessFields_Media_Create = {
  __typename?: 'ProductsDocAccessFields_media_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Media_Delete = {
  __typename?: 'ProductsDocAccessFields_media_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Media_Read = {
  __typename?: 'ProductsDocAccessFields_media_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Media_Update = {
  __typename?: 'ProductsDocAccessFields_media_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name = {
  __typename?: 'ProductsDocAccessFields_name';
  create?: Maybe<ProductsDocAccessFields_Name_Create>;
  delete?: Maybe<ProductsDocAccessFields_Name_Delete>;
  read?: Maybe<ProductsDocAccessFields_Name_Read>;
  update?: Maybe<ProductsDocAccessFields_Name_Update>;
};

export type ProductsDocAccessFields_Name_Create = {
  __typename?: 'ProductsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name_Delete = {
  __typename?: 'ProductsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name_Read = {
  __typename?: 'ProductsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name_Update = {
  __typename?: 'ProductsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PreviewImage = {
  __typename?: 'ProductsDocAccessFields_previewImage';
  create?: Maybe<ProductsDocAccessFields_PreviewImage_Create>;
  delete?: Maybe<ProductsDocAccessFields_PreviewImage_Delete>;
  read?: Maybe<ProductsDocAccessFields_PreviewImage_Read>;
  update?: Maybe<ProductsDocAccessFields_PreviewImage_Update>;
};

export type ProductsDocAccessFields_PreviewImage_Create = {
  __typename?: 'ProductsDocAccessFields_previewImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PreviewImage_Delete = {
  __typename?: 'ProductsDocAccessFields_previewImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PreviewImage_Read = {
  __typename?: 'ProductsDocAccessFields_previewImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PreviewImage_Update = {
  __typename?: 'ProductsDocAccessFields_previewImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price = {
  __typename?: 'ProductsDocAccessFields_price';
  create?: Maybe<ProductsDocAccessFields_Price_Create>;
  delete?: Maybe<ProductsDocAccessFields_Price_Delete>;
  read?: Maybe<ProductsDocAccessFields_Price_Read>;
  update?: Maybe<ProductsDocAccessFields_Price_Update>;
};

export type ProductsDocAccessFields_Price_Create = {
  __typename?: 'ProductsDocAccessFields_price_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Delete = {
  __typename?: 'ProductsDocAccessFields_price_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Read = {
  __typename?: 'ProductsDocAccessFields_price_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Update = {
  __typename?: 'ProductsDocAccessFields_price_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PublishedAt = {
  __typename?: 'ProductsDocAccessFields_publishedAt';
  create?: Maybe<ProductsDocAccessFields_PublishedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_PublishedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_PublishedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_PublishedAt_Update>;
};

export type ProductsDocAccessFields_PublishedAt_Create = {
  __typename?: 'ProductsDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PublishedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PublishedAt_Read = {
  __typename?: 'ProductsDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PublishedAt_Update = {
  __typename?: 'ProductsDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Ratings = {
  __typename?: 'ProductsDocAccessFields_ratings';
  create?: Maybe<ProductsDocAccessFields_Ratings_Create>;
  delete?: Maybe<ProductsDocAccessFields_Ratings_Delete>;
  read?: Maybe<ProductsDocAccessFields_Ratings_Read>;
  update?: Maybe<ProductsDocAccessFields_Ratings_Update>;
};

export type ProductsDocAccessFields_Ratings_Create = {
  __typename?: 'ProductsDocAccessFields_ratings_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Ratings_Delete = {
  __typename?: 'ProductsDocAccessFields_ratings_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Ratings_Read = {
  __typename?: 'ProductsDocAccessFields_ratings_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Ratings_Update = {
  __typename?: 'ProductsDocAccessFields_ratings_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Status = {
  __typename?: 'ProductsDocAccessFields_status';
  create?: Maybe<ProductsDocAccessFields_Status_Create>;
  delete?: Maybe<ProductsDocAccessFields_Status_Delete>;
  read?: Maybe<ProductsDocAccessFields_Status_Read>;
  update?: Maybe<ProductsDocAccessFields_Status_Update>;
};

export type ProductsDocAccessFields_Status_Create = {
  __typename?: 'ProductsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Status_Delete = {
  __typename?: 'ProductsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Status_Read = {
  __typename?: 'ProductsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Status_Update = {
  __typename?: 'ProductsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Stock = {
  __typename?: 'ProductsDocAccessFields_stock';
  create?: Maybe<ProductsDocAccessFields_Stock_Create>;
  delete?: Maybe<ProductsDocAccessFields_Stock_Delete>;
  read?: Maybe<ProductsDocAccessFields_Stock_Read>;
  update?: Maybe<ProductsDocAccessFields_Stock_Update>;
};

export type ProductsDocAccessFields_Stock_Create = {
  __typename?: 'ProductsDocAccessFields_stock_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Stock_Delete = {
  __typename?: 'ProductsDocAccessFields_stock_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Stock_Read = {
  __typename?: 'ProductsDocAccessFields_stock_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Stock_Update = {
  __typename?: 'ProductsDocAccessFields_stock_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Supplier = {
  __typename?: 'ProductsDocAccessFields_supplier';
  create?: Maybe<ProductsDocAccessFields_Supplier_Create>;
  delete?: Maybe<ProductsDocAccessFields_Supplier_Delete>;
  read?: Maybe<ProductsDocAccessFields_Supplier_Read>;
  update?: Maybe<ProductsDocAccessFields_Supplier_Update>;
};

export type ProductsDocAccessFields_Supplier_Create = {
  __typename?: 'ProductsDocAccessFields_supplier_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Supplier_Delete = {
  __typename?: 'ProductsDocAccessFields_supplier_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Supplier_Read = {
  __typename?: 'ProductsDocAccessFields_supplier_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Supplier_Update = {
  __typename?: 'ProductsDocAccessFields_supplier_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Tags = {
  __typename?: 'ProductsDocAccessFields_tags';
  create?: Maybe<ProductsDocAccessFields_Tags_Create>;
  delete?: Maybe<ProductsDocAccessFields_Tags_Delete>;
  read?: Maybe<ProductsDocAccessFields_Tags_Read>;
  update?: Maybe<ProductsDocAccessFields_Tags_Update>;
};

export type ProductsDocAccessFields_Tags_Create = {
  __typename?: 'ProductsDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Tags_Delete = {
  __typename?: 'ProductsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Tags_Read = {
  __typename?: 'ProductsDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Tags_Update = {
  __typename?: 'ProductsDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt = {
  __typename?: 'ProductsDocAccessFields_updatedAt';
  create?: Maybe<ProductsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_UpdatedAt_Update>;
};

export type ProductsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Version = {
  __typename?: 'ProductsDocAccessFields_version';
  create?: Maybe<ProductsDocAccessFields_Version_Create>;
  delete?: Maybe<ProductsDocAccessFields_Version_Delete>;
  read?: Maybe<ProductsDocAccessFields_Version_Read>;
  update?: Maybe<ProductsDocAccessFields_Version_Update>;
};

export type ProductsDocAccessFields_Version_Create = {
  __typename?: 'ProductsDocAccessFields_version_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Version_Delete = {
  __typename?: 'ProductsDocAccessFields_version_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Version_Read = {
  __typename?: 'ProductsDocAccessFields_version_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Version_Update = {
  __typename?: 'ProductsDocAccessFields_version_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields = {
  __typename?: 'ProductsFields';
  averageScore?: Maybe<ProductsFields_AverageScore>;
  createdAt?: Maybe<ProductsFields_CreatedAt>;
  description?: Maybe<ProductsFields_Description>;
  details?: Maybe<ProductsFields_Details>;
  media?: Maybe<ProductsFields_Media>;
  name?: Maybe<ProductsFields_Name>;
  previewImage?: Maybe<ProductsFields_PreviewImage>;
  price?: Maybe<ProductsFields_Price>;
  publishedAt?: Maybe<ProductsFields_PublishedAt>;
  ratings?: Maybe<ProductsFields_Ratings>;
  status?: Maybe<ProductsFields_Status>;
  stock?: Maybe<ProductsFields_Stock>;
  supplier?: Maybe<ProductsFields_Supplier>;
  tags?: Maybe<ProductsFields_Tags>;
  updatedAt?: Maybe<ProductsFields_UpdatedAt>;
  version?: Maybe<ProductsFields_Version>;
};

export type ProductsFields_AverageScore = {
  __typename?: 'ProductsFields_averageScore';
  create?: Maybe<ProductsFields_AverageScore_Create>;
  delete?: Maybe<ProductsFields_AverageScore_Delete>;
  read?: Maybe<ProductsFields_AverageScore_Read>;
  update?: Maybe<ProductsFields_AverageScore_Update>;
};

export type ProductsFields_AverageScore_Create = {
  __typename?: 'ProductsFields_averageScore_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_AverageScore_Delete = {
  __typename?: 'ProductsFields_averageScore_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_AverageScore_Read = {
  __typename?: 'ProductsFields_averageScore_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_AverageScore_Update = {
  __typename?: 'ProductsFields_averageScore_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt = {
  __typename?: 'ProductsFields_createdAt';
  create?: Maybe<ProductsFields_CreatedAt_Create>;
  delete?: Maybe<ProductsFields_CreatedAt_Delete>;
  read?: Maybe<ProductsFields_CreatedAt_Read>;
  update?: Maybe<ProductsFields_CreatedAt_Update>;
};

export type ProductsFields_CreatedAt_Create = {
  __typename?: 'ProductsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Delete = {
  __typename?: 'ProductsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Read = {
  __typename?: 'ProductsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Update = {
  __typename?: 'ProductsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description = {
  __typename?: 'ProductsFields_description';
  create?: Maybe<ProductsFields_Description_Create>;
  delete?: Maybe<ProductsFields_Description_Delete>;
  read?: Maybe<ProductsFields_Description_Read>;
  update?: Maybe<ProductsFields_Description_Update>;
};

export type ProductsFields_Description_Create = {
  __typename?: 'ProductsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Delete = {
  __typename?: 'ProductsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Read = {
  __typename?: 'ProductsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Update = {
  __typename?: 'ProductsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details = {
  __typename?: 'ProductsFields_details';
  create?: Maybe<ProductsFields_Details_Create>;
  delete?: Maybe<ProductsFields_Details_Delete>;
  read?: Maybe<ProductsFields_Details_Read>;
  update?: Maybe<ProductsFields_Details_Update>;
};

export type ProductsFields_Details_Create = {
  __typename?: 'ProductsFields_details_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details_Delete = {
  __typename?: 'ProductsFields_details_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details_Read = {
  __typename?: 'ProductsFields_details_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details_Update = {
  __typename?: 'ProductsFields_details_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Media = {
  __typename?: 'ProductsFields_media';
  create?: Maybe<ProductsFields_Media_Create>;
  delete?: Maybe<ProductsFields_Media_Delete>;
  read?: Maybe<ProductsFields_Media_Read>;
  update?: Maybe<ProductsFields_Media_Update>;
};

export type ProductsFields_Media_Create = {
  __typename?: 'ProductsFields_media_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Media_Delete = {
  __typename?: 'ProductsFields_media_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Media_Read = {
  __typename?: 'ProductsFields_media_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Media_Update = {
  __typename?: 'ProductsFields_media_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name = {
  __typename?: 'ProductsFields_name';
  create?: Maybe<ProductsFields_Name_Create>;
  delete?: Maybe<ProductsFields_Name_Delete>;
  read?: Maybe<ProductsFields_Name_Read>;
  update?: Maybe<ProductsFields_Name_Update>;
};

export type ProductsFields_Name_Create = {
  __typename?: 'ProductsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name_Delete = {
  __typename?: 'ProductsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name_Read = {
  __typename?: 'ProductsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name_Update = {
  __typename?: 'ProductsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PreviewImage = {
  __typename?: 'ProductsFields_previewImage';
  create?: Maybe<ProductsFields_PreviewImage_Create>;
  delete?: Maybe<ProductsFields_PreviewImage_Delete>;
  read?: Maybe<ProductsFields_PreviewImage_Read>;
  update?: Maybe<ProductsFields_PreviewImage_Update>;
};

export type ProductsFields_PreviewImage_Create = {
  __typename?: 'ProductsFields_previewImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PreviewImage_Delete = {
  __typename?: 'ProductsFields_previewImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PreviewImage_Read = {
  __typename?: 'ProductsFields_previewImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PreviewImage_Update = {
  __typename?: 'ProductsFields_previewImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price = {
  __typename?: 'ProductsFields_price';
  create?: Maybe<ProductsFields_Price_Create>;
  delete?: Maybe<ProductsFields_Price_Delete>;
  read?: Maybe<ProductsFields_Price_Read>;
  update?: Maybe<ProductsFields_Price_Update>;
};

export type ProductsFields_Price_Create = {
  __typename?: 'ProductsFields_price_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Delete = {
  __typename?: 'ProductsFields_price_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Read = {
  __typename?: 'ProductsFields_price_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Update = {
  __typename?: 'ProductsFields_price_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PublishedAt = {
  __typename?: 'ProductsFields_publishedAt';
  create?: Maybe<ProductsFields_PublishedAt_Create>;
  delete?: Maybe<ProductsFields_PublishedAt_Delete>;
  read?: Maybe<ProductsFields_PublishedAt_Read>;
  update?: Maybe<ProductsFields_PublishedAt_Update>;
};

export type ProductsFields_PublishedAt_Create = {
  __typename?: 'ProductsFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PublishedAt_Delete = {
  __typename?: 'ProductsFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PublishedAt_Read = {
  __typename?: 'ProductsFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PublishedAt_Update = {
  __typename?: 'ProductsFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Ratings = {
  __typename?: 'ProductsFields_ratings';
  create?: Maybe<ProductsFields_Ratings_Create>;
  delete?: Maybe<ProductsFields_Ratings_Delete>;
  read?: Maybe<ProductsFields_Ratings_Read>;
  update?: Maybe<ProductsFields_Ratings_Update>;
};

export type ProductsFields_Ratings_Create = {
  __typename?: 'ProductsFields_ratings_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Ratings_Delete = {
  __typename?: 'ProductsFields_ratings_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Ratings_Read = {
  __typename?: 'ProductsFields_ratings_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Ratings_Update = {
  __typename?: 'ProductsFields_ratings_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Status = {
  __typename?: 'ProductsFields_status';
  create?: Maybe<ProductsFields_Status_Create>;
  delete?: Maybe<ProductsFields_Status_Delete>;
  read?: Maybe<ProductsFields_Status_Read>;
  update?: Maybe<ProductsFields_Status_Update>;
};

export type ProductsFields_Status_Create = {
  __typename?: 'ProductsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Status_Delete = {
  __typename?: 'ProductsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Status_Read = {
  __typename?: 'ProductsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Status_Update = {
  __typename?: 'ProductsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Stock = {
  __typename?: 'ProductsFields_stock';
  create?: Maybe<ProductsFields_Stock_Create>;
  delete?: Maybe<ProductsFields_Stock_Delete>;
  read?: Maybe<ProductsFields_Stock_Read>;
  update?: Maybe<ProductsFields_Stock_Update>;
};

export type ProductsFields_Stock_Create = {
  __typename?: 'ProductsFields_stock_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Stock_Delete = {
  __typename?: 'ProductsFields_stock_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Stock_Read = {
  __typename?: 'ProductsFields_stock_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Stock_Update = {
  __typename?: 'ProductsFields_stock_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Supplier = {
  __typename?: 'ProductsFields_supplier';
  create?: Maybe<ProductsFields_Supplier_Create>;
  delete?: Maybe<ProductsFields_Supplier_Delete>;
  read?: Maybe<ProductsFields_Supplier_Read>;
  update?: Maybe<ProductsFields_Supplier_Update>;
};

export type ProductsFields_Supplier_Create = {
  __typename?: 'ProductsFields_supplier_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Supplier_Delete = {
  __typename?: 'ProductsFields_supplier_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Supplier_Read = {
  __typename?: 'ProductsFields_supplier_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Supplier_Update = {
  __typename?: 'ProductsFields_supplier_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Tags = {
  __typename?: 'ProductsFields_tags';
  create?: Maybe<ProductsFields_Tags_Create>;
  delete?: Maybe<ProductsFields_Tags_Delete>;
  read?: Maybe<ProductsFields_Tags_Read>;
  update?: Maybe<ProductsFields_Tags_Update>;
};

export type ProductsFields_Tags_Create = {
  __typename?: 'ProductsFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Tags_Delete = {
  __typename?: 'ProductsFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Tags_Read = {
  __typename?: 'ProductsFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Tags_Update = {
  __typename?: 'ProductsFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt = {
  __typename?: 'ProductsFields_updatedAt';
  create?: Maybe<ProductsFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsFields_UpdatedAt_Read>;
  update?: Maybe<ProductsFields_UpdatedAt_Update>;
};

export type ProductsFields_UpdatedAt_Create = {
  __typename?: 'ProductsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Delete = {
  __typename?: 'ProductsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Read = {
  __typename?: 'ProductsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Update = {
  __typename?: 'ProductsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Version = {
  __typename?: 'ProductsFields_version';
  create?: Maybe<ProductsFields_Version_Create>;
  delete?: Maybe<ProductsFields_Version_Delete>;
  read?: Maybe<ProductsFields_Version_Read>;
  update?: Maybe<ProductsFields_Version_Update>;
};

export type ProductsFields_Version_Create = {
  __typename?: 'ProductsFields_version_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Version_Delete = {
  __typename?: 'ProductsFields_version_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Version_Read = {
  __typename?: 'ProductsFields_version_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Version_Update = {
  __typename?: 'ProductsFields_version_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsReadAccess = {
  __typename?: 'ProductsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadDocAccess = {
  __typename?: 'ProductsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateAccess = {
  __typename?: 'ProductsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateDocAccess = {
  __typename?: 'ProductsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Promotion = {
  __typename?: 'Promotion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  discountType?: Maybe<Promotion_DiscountType>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PromotionUpdate_DiscountType_MutationInput {
  Bogo = 'bogo',
  Fixed = 'fixed',
  Percent = 'percent'
}

export type Promotion_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Promotion_DiscountType {
  Bogo = 'bogo',
  Fixed = 'fixed',
  Percent = 'percent'
}

export enum Promotion_DiscountType_Input {
  Bogo = 'bogo',
  Fixed = 'fixed',
  Percent = 'percent'
}

export enum Promotion_DiscountType_MutationInput {
  Bogo = 'bogo',
  Fixed = 'fixed',
  Percent = 'percent'
}

export type Promotion_DiscountType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Promotion_DiscountType_Input>>>;
  equals?: InputMaybe<Promotion_DiscountType_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Promotion_DiscountType_Input>>>;
  not_equals?: InputMaybe<Promotion_DiscountType_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Promotion_DiscountType_Input>>>;
};

export type Promotion_DiscountValue_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Promotion_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Promotion_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Promotion_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Promotion_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Promotion_Where = {
  AND?: InputMaybe<Array<InputMaybe<Promotion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Promotion_Where_Or>>>;
  createdAt?: InputMaybe<Promotion_CreatedAt_Operator>;
  discountType?: InputMaybe<Promotion_DiscountType_Operator>;
  discountValue?: InputMaybe<Promotion_DiscountValue_Operator>;
  id?: InputMaybe<Promotion_Id_Operator>;
  name?: InputMaybe<Promotion_Name_Operator>;
  publishedAt?: InputMaybe<Promotion_PublishedAt_Operator>;
  updatedAt?: InputMaybe<Promotion_UpdatedAt_Operator>;
};

export type Promotion_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Promotion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Promotion_Where_Or>>>;
  createdAt?: InputMaybe<Promotion_CreatedAt_Operator>;
  discountType?: InputMaybe<Promotion_DiscountType_Operator>;
  discountValue?: InputMaybe<Promotion_DiscountValue_Operator>;
  id?: InputMaybe<Promotion_Id_Operator>;
  name?: InputMaybe<Promotion_Name_Operator>;
  publishedAt?: InputMaybe<Promotion_PublishedAt_Operator>;
  updatedAt?: InputMaybe<Promotion_UpdatedAt_Operator>;
};

export type Promotion_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Promotion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Promotion_Where_Or>>>;
  createdAt?: InputMaybe<Promotion_CreatedAt_Operator>;
  discountType?: InputMaybe<Promotion_DiscountType_Operator>;
  discountValue?: InputMaybe<Promotion_DiscountValue_Operator>;
  id?: InputMaybe<Promotion_Id_Operator>;
  name?: InputMaybe<Promotion_Name_Operator>;
  publishedAt?: InputMaybe<Promotion_PublishedAt_Operator>;
  updatedAt?: InputMaybe<Promotion_UpdatedAt_Operator>;
};

export type Promotions = {
  __typename?: 'Promotions';
  docs: Array<Promotion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PromotionsCreateAccess = {
  __typename?: 'PromotionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PromotionsCreateDocAccess = {
  __typename?: 'PromotionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PromotionsDeleteAccess = {
  __typename?: 'PromotionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PromotionsDeleteDocAccess = {
  __typename?: 'PromotionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PromotionsDocAccessFields = {
  __typename?: 'PromotionsDocAccessFields';
  createdAt?: Maybe<PromotionsDocAccessFields_CreatedAt>;
  discountType?: Maybe<PromotionsDocAccessFields_DiscountType>;
  discountValue?: Maybe<PromotionsDocAccessFields_DiscountValue>;
  name?: Maybe<PromotionsDocAccessFields_Name>;
  publishedAt?: Maybe<PromotionsDocAccessFields_PublishedAt>;
  updatedAt?: Maybe<PromotionsDocAccessFields_UpdatedAt>;
};

export type PromotionsDocAccessFields_CreatedAt = {
  __typename?: 'PromotionsDocAccessFields_createdAt';
  create?: Maybe<PromotionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PromotionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PromotionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PromotionsDocAccessFields_CreatedAt_Update>;
};

export type PromotionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PromotionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PromotionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PromotionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PromotionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountType = {
  __typename?: 'PromotionsDocAccessFields_discountType';
  create?: Maybe<PromotionsDocAccessFields_DiscountType_Create>;
  delete?: Maybe<PromotionsDocAccessFields_DiscountType_Delete>;
  read?: Maybe<PromotionsDocAccessFields_DiscountType_Read>;
  update?: Maybe<PromotionsDocAccessFields_DiscountType_Update>;
};

export type PromotionsDocAccessFields_DiscountType_Create = {
  __typename?: 'PromotionsDocAccessFields_discountType_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountType_Delete = {
  __typename?: 'PromotionsDocAccessFields_discountType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountType_Read = {
  __typename?: 'PromotionsDocAccessFields_discountType_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountType_Update = {
  __typename?: 'PromotionsDocAccessFields_discountType_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountValue = {
  __typename?: 'PromotionsDocAccessFields_discountValue';
  create?: Maybe<PromotionsDocAccessFields_DiscountValue_Create>;
  delete?: Maybe<PromotionsDocAccessFields_DiscountValue_Delete>;
  read?: Maybe<PromotionsDocAccessFields_DiscountValue_Read>;
  update?: Maybe<PromotionsDocAccessFields_DiscountValue_Update>;
};

export type PromotionsDocAccessFields_DiscountValue_Create = {
  __typename?: 'PromotionsDocAccessFields_discountValue_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountValue_Delete = {
  __typename?: 'PromotionsDocAccessFields_discountValue_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountValue_Read = {
  __typename?: 'PromotionsDocAccessFields_discountValue_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_DiscountValue_Update = {
  __typename?: 'PromotionsDocAccessFields_discountValue_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_Name = {
  __typename?: 'PromotionsDocAccessFields_name';
  create?: Maybe<PromotionsDocAccessFields_Name_Create>;
  delete?: Maybe<PromotionsDocAccessFields_Name_Delete>;
  read?: Maybe<PromotionsDocAccessFields_Name_Read>;
  update?: Maybe<PromotionsDocAccessFields_Name_Update>;
};

export type PromotionsDocAccessFields_Name_Create = {
  __typename?: 'PromotionsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_Name_Delete = {
  __typename?: 'PromotionsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_Name_Read = {
  __typename?: 'PromotionsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_Name_Update = {
  __typename?: 'PromotionsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_PublishedAt = {
  __typename?: 'PromotionsDocAccessFields_publishedAt';
  create?: Maybe<PromotionsDocAccessFields_PublishedAt_Create>;
  delete?: Maybe<PromotionsDocAccessFields_PublishedAt_Delete>;
  read?: Maybe<PromotionsDocAccessFields_PublishedAt_Read>;
  update?: Maybe<PromotionsDocAccessFields_PublishedAt_Update>;
};

export type PromotionsDocAccessFields_PublishedAt_Create = {
  __typename?: 'PromotionsDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_PublishedAt_Delete = {
  __typename?: 'PromotionsDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_PublishedAt_Read = {
  __typename?: 'PromotionsDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_PublishedAt_Update = {
  __typename?: 'PromotionsDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_UpdatedAt = {
  __typename?: 'PromotionsDocAccessFields_updatedAt';
  create?: Maybe<PromotionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PromotionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PromotionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PromotionsDocAccessFields_UpdatedAt_Update>;
};

export type PromotionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PromotionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PromotionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PromotionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PromotionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields = {
  __typename?: 'PromotionsFields';
  createdAt?: Maybe<PromotionsFields_CreatedAt>;
  discountType?: Maybe<PromotionsFields_DiscountType>;
  discountValue?: Maybe<PromotionsFields_DiscountValue>;
  name?: Maybe<PromotionsFields_Name>;
  publishedAt?: Maybe<PromotionsFields_PublishedAt>;
  updatedAt?: Maybe<PromotionsFields_UpdatedAt>;
};

export type PromotionsFields_CreatedAt = {
  __typename?: 'PromotionsFields_createdAt';
  create?: Maybe<PromotionsFields_CreatedAt_Create>;
  delete?: Maybe<PromotionsFields_CreatedAt_Delete>;
  read?: Maybe<PromotionsFields_CreatedAt_Read>;
  update?: Maybe<PromotionsFields_CreatedAt_Update>;
};

export type PromotionsFields_CreatedAt_Create = {
  __typename?: 'PromotionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_CreatedAt_Delete = {
  __typename?: 'PromotionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_CreatedAt_Read = {
  __typename?: 'PromotionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_CreatedAt_Update = {
  __typename?: 'PromotionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountType = {
  __typename?: 'PromotionsFields_discountType';
  create?: Maybe<PromotionsFields_DiscountType_Create>;
  delete?: Maybe<PromotionsFields_DiscountType_Delete>;
  read?: Maybe<PromotionsFields_DiscountType_Read>;
  update?: Maybe<PromotionsFields_DiscountType_Update>;
};

export type PromotionsFields_DiscountType_Create = {
  __typename?: 'PromotionsFields_discountType_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountType_Delete = {
  __typename?: 'PromotionsFields_discountType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountType_Read = {
  __typename?: 'PromotionsFields_discountType_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountType_Update = {
  __typename?: 'PromotionsFields_discountType_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountValue = {
  __typename?: 'PromotionsFields_discountValue';
  create?: Maybe<PromotionsFields_DiscountValue_Create>;
  delete?: Maybe<PromotionsFields_DiscountValue_Delete>;
  read?: Maybe<PromotionsFields_DiscountValue_Read>;
  update?: Maybe<PromotionsFields_DiscountValue_Update>;
};

export type PromotionsFields_DiscountValue_Create = {
  __typename?: 'PromotionsFields_discountValue_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountValue_Delete = {
  __typename?: 'PromotionsFields_discountValue_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountValue_Read = {
  __typename?: 'PromotionsFields_discountValue_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_DiscountValue_Update = {
  __typename?: 'PromotionsFields_discountValue_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_Name = {
  __typename?: 'PromotionsFields_name';
  create?: Maybe<PromotionsFields_Name_Create>;
  delete?: Maybe<PromotionsFields_Name_Delete>;
  read?: Maybe<PromotionsFields_Name_Read>;
  update?: Maybe<PromotionsFields_Name_Update>;
};

export type PromotionsFields_Name_Create = {
  __typename?: 'PromotionsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_Name_Delete = {
  __typename?: 'PromotionsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_Name_Read = {
  __typename?: 'PromotionsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_Name_Update = {
  __typename?: 'PromotionsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_PublishedAt = {
  __typename?: 'PromotionsFields_publishedAt';
  create?: Maybe<PromotionsFields_PublishedAt_Create>;
  delete?: Maybe<PromotionsFields_PublishedAt_Delete>;
  read?: Maybe<PromotionsFields_PublishedAt_Read>;
  update?: Maybe<PromotionsFields_PublishedAt_Update>;
};

export type PromotionsFields_PublishedAt_Create = {
  __typename?: 'PromotionsFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_PublishedAt_Delete = {
  __typename?: 'PromotionsFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_PublishedAt_Read = {
  __typename?: 'PromotionsFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_PublishedAt_Update = {
  __typename?: 'PromotionsFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_UpdatedAt = {
  __typename?: 'PromotionsFields_updatedAt';
  create?: Maybe<PromotionsFields_UpdatedAt_Create>;
  delete?: Maybe<PromotionsFields_UpdatedAt_Delete>;
  read?: Maybe<PromotionsFields_UpdatedAt_Read>;
  update?: Maybe<PromotionsFields_UpdatedAt_Update>;
};

export type PromotionsFields_UpdatedAt_Create = {
  __typename?: 'PromotionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_UpdatedAt_Delete = {
  __typename?: 'PromotionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_UpdatedAt_Read = {
  __typename?: 'PromotionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsFields_UpdatedAt_Update = {
  __typename?: 'PromotionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PromotionsReadAccess = {
  __typename?: 'PromotionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PromotionsReadDocAccess = {
  __typename?: 'PromotionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PromotionsUpdateAccess = {
  __typename?: 'PromotionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PromotionsUpdateDocAccess = {
  __typename?: 'PromotionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Account?: Maybe<Account>;
  Accounts?: Maybe<Accounts>;
  Cart?: Maybe<Cart>;
  CartItem?: Maybe<CartItem>;
  CartItems?: Maybe<CartItems>;
  Carts?: Maybe<Carts>;
  Faq?: Maybe<Faq>;
  Faqs?: Maybe<Faqs>;
  Media?: Maybe<Media>;
  Order?: Maybe<Order>;
  OrderItem?: Maybe<OrderItem>;
  OrderItems?: Maybe<OrderItems>;
  Orders?: Maybe<Orders>;
  PayloadKv?: Maybe<PayloadKv>;
  PayloadKvs?: Maybe<PayloadKvs>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  PointTransaction?: Maybe<PointTransaction>;
  PointTransactions?: Maybe<PointTransactions>;
  Post?: Maybe<Post>;
  Posts?: Maybe<Posts>;
  Price?: Maybe<Price>;
  Prices?: Maybe<Prices>;
  Product?: Maybe<Product>;
  ProductPromotion?: Maybe<ProductPromotion>;
  ProductPromotions?: Maybe<ProductPromotions>;
  Products?: Maybe<Products>;
  Promotion?: Maybe<Promotion>;
  Promotions?: Maybe<Promotions>;
  Rating?: Maybe<Rating>;
  Ratings?: Maybe<Ratings>;
  Setting?: Maybe<Setting>;
  Stock?: Maybe<Stock>;
  Stocks?: Maybe<Stocks>;
  Supplier?: Maybe<Supplier>;
  Suppliers?: Maybe<Suppliers>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  User?: Maybe<User>;
  UserItem?: Maybe<UserItem>;
  UserItems?: Maybe<UserItems>;
  UserPoint?: Maybe<UserPoint>;
  UserPoints?: Maybe<UserPoints>;
  UserPreference?: Maybe<UserPreference>;
  UserPreferences?: Maybe<UserPreferences>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countAccounts?: Maybe<CountAccounts>;
  countCartItems?: Maybe<CountCartItems>;
  countCarts?: Maybe<CountCarts>;
  countFaqs?: Maybe<CountFaqs>;
  countOrderItems?: Maybe<CountOrderItems>;
  countOrders?: Maybe<CountOrders>;
  countPayloadKvs?: Maybe<CountPayloadKvs>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countPointTransactions?: Maybe<CountPointTransactions>;
  countPosts?: Maybe<CountPosts>;
  countPrices?: Maybe<CountPrices>;
  countProductPromotions?: Maybe<CountProductPromotions>;
  countProducts?: Maybe<CountProducts>;
  countPromotions?: Maybe<CountPromotions>;
  countRatings?: Maybe<CountRatings>;
  countStocks?: Maybe<CountStocks>;
  countSuppliers?: Maybe<CountSuppliers>;
  countTags?: Maybe<CountTags>;
  countUserItems?: Maybe<CountUserItems>;
  countUserPoints?: Maybe<CountUserPoints>;
  countUserPreferences?: Maybe<CountUserPreferences>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessAccount?: Maybe<AccountsDocAccess>;
  docAccessCart?: Maybe<CartsDocAccess>;
  docAccessCartItem?: Maybe<Cart_ItemsDocAccess>;
  docAccessFaq?: Maybe<FaqsDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessOrder?: Maybe<OrdersDocAccess>;
  docAccessOrderItem?: Maybe<Order_ItemsDocAccess>;
  docAccessPayloadKv?: Maybe<Payload_KvDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessPointTransaction?: Maybe<Point_TransactionsDocAccess>;
  docAccessPost?: Maybe<PostsDocAccess>;
  docAccessPrice?: Maybe<PricesDocAccess>;
  docAccessProduct?: Maybe<ProductsDocAccess>;
  docAccessProductPromotion?: Maybe<Product_PromotionsDocAccess>;
  docAccessPromotion?: Maybe<PromotionsDocAccess>;
  docAccessRating?: Maybe<RatingsDocAccess>;
  docAccessSetting?: Maybe<SettingsDocAccess>;
  docAccessStock?: Maybe<StocksDocAccess>;
  docAccessSupplier?: Maybe<SuppliersDocAccess>;
  docAccessTag?: Maybe<TagsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  docAccessUserItem?: Maybe<User_ItemsDocAccess>;
  docAccessUserPoint?: Maybe<User_PointsDocAccess>;
  docAccessUserPreference?: Maybe<User_PreferencesDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryAccountArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccountsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Account_Where>;
};


export type QueryCartArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCartItemArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCartItemsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CartItem_Where>;
};


export type QueryCartsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Cart_Where>;
};


export type QueryFaqArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFaqsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Faq_Where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrderArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrderItemArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrderItemsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrderItem_Where>;
};


export type QueryOrdersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Order_Where>;
};


export type QueryPayloadKvArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryPointTransactionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPointTransactionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PointTransaction_Where>;
};


export type QueryPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Post_Where>;
};


export type QueryPriceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPricesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Price_Where>;
};


export type QueryProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductPromotionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductPromotionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductPromotion_Where>;
};


export type QueryProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Product_Where>;
};


export type QueryPromotionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPromotionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Promotion_Where>;
};


export type QueryRatingArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRatingsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Rating_Where>;
};


export type QuerySettingArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStockArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStocksArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Stock_Where>;
};


export type QuerySupplierArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySuppliersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Supplier_Where>;
};


export type QueryTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserItemArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserItemsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserItem_Where>;
};


export type QueryUserPointArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserPointsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserPoint_Where>;
};


export type QueryUserPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserPreference_Where>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountAccountsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Account_Where>;
};


export type QueryCountCartItemsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CartItem_Where>;
};


export type QueryCountCartsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Cart_Where>;
};


export type QueryCountFaqsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Faq_Where>;
};


export type QueryCountOrderItemsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrderItem_Where>;
};


export type QueryCountOrdersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Order_Where>;
};


export type QueryCountPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountPointTransactionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PointTransaction_Where>;
};


export type QueryCountPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Post_Where>;
};


export type QueryCountPricesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Price_Where>;
};


export type QueryCountProductPromotionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductPromotion_Where>;
};


export type QueryCountProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Product_Where>;
};


export type QueryCountPromotionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Promotion_Where>;
};


export type QueryCountRatingsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Rating_Where>;
};


export type QueryCountStocksArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Stock_Where>;
};


export type QueryCountSuppliersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Supplier_Where>;
};


export type QueryCountTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryCountUserItemsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserItem_Where>;
};


export type QueryCountUserPointsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserPoint_Where>;
};


export type QueryCountUserPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserPreference_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessAccountArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessCartArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessCartItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessFaqArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessOrderItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadKvArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPointTransactionArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPostArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPriceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessProductArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessProductPromotionArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPromotionArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessRatingArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessStockArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessSupplierArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessTagArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserPointArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserPreferenceArgs = {
  id: Scalars['String']['input'];
};

export type Rating = {
  __typename?: 'Rating';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  score: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Rating_Comment_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Rating_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Rating_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Rating_Score_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Rating_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Rating_Where = {
  AND?: InputMaybe<Array<InputMaybe<Rating_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Rating_Where_Or>>>;
  comment?: InputMaybe<Rating_Comment_Operator>;
  createdAt?: InputMaybe<Rating_CreatedAt_Operator>;
  id?: InputMaybe<Rating_Id_Operator>;
  score?: InputMaybe<Rating_Score_Operator>;
  updatedAt?: InputMaybe<Rating_UpdatedAt_Operator>;
};

export type Rating_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Rating_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Rating_Where_Or>>>;
  comment?: InputMaybe<Rating_Comment_Operator>;
  createdAt?: InputMaybe<Rating_CreatedAt_Operator>;
  id?: InputMaybe<Rating_Id_Operator>;
  score?: InputMaybe<Rating_Score_Operator>;
  updatedAt?: InputMaybe<Rating_UpdatedAt_Operator>;
};

export type Rating_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Rating_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Rating_Where_Or>>>;
  comment?: InputMaybe<Rating_Comment_Operator>;
  createdAt?: InputMaybe<Rating_CreatedAt_Operator>;
  id?: InputMaybe<Rating_Id_Operator>;
  score?: InputMaybe<Rating_Score_Operator>;
  updatedAt?: InputMaybe<Rating_UpdatedAt_Operator>;
};

export type Ratings = {
  __typename?: 'Ratings';
  docs: Array<Rating>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type RatingsCreateAccess = {
  __typename?: 'RatingsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RatingsCreateDocAccess = {
  __typename?: 'RatingsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RatingsDeleteAccess = {
  __typename?: 'RatingsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RatingsDeleteDocAccess = {
  __typename?: 'RatingsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RatingsDocAccessFields = {
  __typename?: 'RatingsDocAccessFields';
  comment?: Maybe<RatingsDocAccessFields_Comment>;
  createdAt?: Maybe<RatingsDocAccessFields_CreatedAt>;
  score?: Maybe<RatingsDocAccessFields_Score>;
  updatedAt?: Maybe<RatingsDocAccessFields_UpdatedAt>;
};

export type RatingsDocAccessFields_Comment = {
  __typename?: 'RatingsDocAccessFields_comment';
  create?: Maybe<RatingsDocAccessFields_Comment_Create>;
  delete?: Maybe<RatingsDocAccessFields_Comment_Delete>;
  read?: Maybe<RatingsDocAccessFields_Comment_Read>;
  update?: Maybe<RatingsDocAccessFields_Comment_Update>;
};

export type RatingsDocAccessFields_Comment_Create = {
  __typename?: 'RatingsDocAccessFields_comment_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_Comment_Delete = {
  __typename?: 'RatingsDocAccessFields_comment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_Comment_Read = {
  __typename?: 'RatingsDocAccessFields_comment_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_Comment_Update = {
  __typename?: 'RatingsDocAccessFields_comment_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_CreatedAt = {
  __typename?: 'RatingsDocAccessFields_createdAt';
  create?: Maybe<RatingsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<RatingsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<RatingsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<RatingsDocAccessFields_CreatedAt_Update>;
};

export type RatingsDocAccessFields_CreatedAt_Create = {
  __typename?: 'RatingsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'RatingsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_CreatedAt_Read = {
  __typename?: 'RatingsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_CreatedAt_Update = {
  __typename?: 'RatingsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_Score = {
  __typename?: 'RatingsDocAccessFields_score';
  create?: Maybe<RatingsDocAccessFields_Score_Create>;
  delete?: Maybe<RatingsDocAccessFields_Score_Delete>;
  read?: Maybe<RatingsDocAccessFields_Score_Read>;
  update?: Maybe<RatingsDocAccessFields_Score_Update>;
};

export type RatingsDocAccessFields_Score_Create = {
  __typename?: 'RatingsDocAccessFields_score_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_Score_Delete = {
  __typename?: 'RatingsDocAccessFields_score_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_Score_Read = {
  __typename?: 'RatingsDocAccessFields_score_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_Score_Update = {
  __typename?: 'RatingsDocAccessFields_score_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_UpdatedAt = {
  __typename?: 'RatingsDocAccessFields_updatedAt';
  create?: Maybe<RatingsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<RatingsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<RatingsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<RatingsDocAccessFields_UpdatedAt_Update>;
};

export type RatingsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'RatingsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'RatingsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'RatingsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'RatingsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields = {
  __typename?: 'RatingsFields';
  comment?: Maybe<RatingsFields_Comment>;
  createdAt?: Maybe<RatingsFields_CreatedAt>;
  score?: Maybe<RatingsFields_Score>;
  updatedAt?: Maybe<RatingsFields_UpdatedAt>;
};

export type RatingsFields_Comment = {
  __typename?: 'RatingsFields_comment';
  create?: Maybe<RatingsFields_Comment_Create>;
  delete?: Maybe<RatingsFields_Comment_Delete>;
  read?: Maybe<RatingsFields_Comment_Read>;
  update?: Maybe<RatingsFields_Comment_Update>;
};

export type RatingsFields_Comment_Create = {
  __typename?: 'RatingsFields_comment_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_Comment_Delete = {
  __typename?: 'RatingsFields_comment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_Comment_Read = {
  __typename?: 'RatingsFields_comment_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_Comment_Update = {
  __typename?: 'RatingsFields_comment_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_CreatedAt = {
  __typename?: 'RatingsFields_createdAt';
  create?: Maybe<RatingsFields_CreatedAt_Create>;
  delete?: Maybe<RatingsFields_CreatedAt_Delete>;
  read?: Maybe<RatingsFields_CreatedAt_Read>;
  update?: Maybe<RatingsFields_CreatedAt_Update>;
};

export type RatingsFields_CreatedAt_Create = {
  __typename?: 'RatingsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_CreatedAt_Delete = {
  __typename?: 'RatingsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_CreatedAt_Read = {
  __typename?: 'RatingsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_CreatedAt_Update = {
  __typename?: 'RatingsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_Score = {
  __typename?: 'RatingsFields_score';
  create?: Maybe<RatingsFields_Score_Create>;
  delete?: Maybe<RatingsFields_Score_Delete>;
  read?: Maybe<RatingsFields_Score_Read>;
  update?: Maybe<RatingsFields_Score_Update>;
};

export type RatingsFields_Score_Create = {
  __typename?: 'RatingsFields_score_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_Score_Delete = {
  __typename?: 'RatingsFields_score_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_Score_Read = {
  __typename?: 'RatingsFields_score_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_Score_Update = {
  __typename?: 'RatingsFields_score_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_UpdatedAt = {
  __typename?: 'RatingsFields_updatedAt';
  create?: Maybe<RatingsFields_UpdatedAt_Create>;
  delete?: Maybe<RatingsFields_UpdatedAt_Delete>;
  read?: Maybe<RatingsFields_UpdatedAt_Read>;
  update?: Maybe<RatingsFields_UpdatedAt_Update>;
};

export type RatingsFields_UpdatedAt_Create = {
  __typename?: 'RatingsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_UpdatedAt_Delete = {
  __typename?: 'RatingsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_UpdatedAt_Read = {
  __typename?: 'RatingsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RatingsFields_UpdatedAt_Update = {
  __typename?: 'RatingsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RatingsReadAccess = {
  __typename?: 'RatingsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RatingsReadDocAccess = {
  __typename?: 'RatingsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RatingsUpdateAccess = {
  __typename?: 'RatingsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RatingsUpdateDocAccess = {
  __typename?: 'RatingsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Setting = {
  __typename?: 'Setting';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  redirect: Scalars['String']['output'];
  smtpHost: Scalars['String']['output'];
  smtpPass: Scalars['String']['output'];
  smtpPort: Scalars['String']['output'];
  smtpUser: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SettingsDocAccessFields = {
  __typename?: 'SettingsDocAccessFields';
  createdAt?: Maybe<SettingsDocAccessFields_CreatedAt>;
  redirect?: Maybe<SettingsDocAccessFields_Redirect>;
  smtpHost?: Maybe<SettingsDocAccessFields_SmtpHost>;
  smtpPass?: Maybe<SettingsDocAccessFields_SmtpPass>;
  smtpPort?: Maybe<SettingsDocAccessFields_SmtpPort>;
  smtpUser?: Maybe<SettingsDocAccessFields_SmtpUser>;
  updatedAt?: Maybe<SettingsDocAccessFields_UpdatedAt>;
};

export type SettingsDocAccessFields_CreatedAt = {
  __typename?: 'SettingsDocAccessFields_createdAt';
  create?: Maybe<SettingsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SettingsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SettingsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SettingsDocAccessFields_CreatedAt_Update>;
};

export type SettingsDocAccessFields_CreatedAt_Create = {
  __typename?: 'SettingsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SettingsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_CreatedAt_Read = {
  __typename?: 'SettingsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_CreatedAt_Update = {
  __typename?: 'SettingsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_Redirect = {
  __typename?: 'SettingsDocAccessFields_redirect';
  create?: Maybe<SettingsDocAccessFields_Redirect_Create>;
  delete?: Maybe<SettingsDocAccessFields_Redirect_Delete>;
  read?: Maybe<SettingsDocAccessFields_Redirect_Read>;
  update?: Maybe<SettingsDocAccessFields_Redirect_Update>;
};

export type SettingsDocAccessFields_Redirect_Create = {
  __typename?: 'SettingsDocAccessFields_redirect_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_Redirect_Delete = {
  __typename?: 'SettingsDocAccessFields_redirect_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_Redirect_Read = {
  __typename?: 'SettingsDocAccessFields_redirect_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_Redirect_Update = {
  __typename?: 'SettingsDocAccessFields_redirect_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpHost = {
  __typename?: 'SettingsDocAccessFields_smtpHost';
  create?: Maybe<SettingsDocAccessFields_SmtpHost_Create>;
  delete?: Maybe<SettingsDocAccessFields_SmtpHost_Delete>;
  read?: Maybe<SettingsDocAccessFields_SmtpHost_Read>;
  update?: Maybe<SettingsDocAccessFields_SmtpHost_Update>;
};

export type SettingsDocAccessFields_SmtpHost_Create = {
  __typename?: 'SettingsDocAccessFields_smtpHost_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpHost_Delete = {
  __typename?: 'SettingsDocAccessFields_smtpHost_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpHost_Read = {
  __typename?: 'SettingsDocAccessFields_smtpHost_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpHost_Update = {
  __typename?: 'SettingsDocAccessFields_smtpHost_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPass = {
  __typename?: 'SettingsDocAccessFields_smtpPass';
  create?: Maybe<SettingsDocAccessFields_SmtpPass_Create>;
  delete?: Maybe<SettingsDocAccessFields_SmtpPass_Delete>;
  read?: Maybe<SettingsDocAccessFields_SmtpPass_Read>;
  update?: Maybe<SettingsDocAccessFields_SmtpPass_Update>;
};

export type SettingsDocAccessFields_SmtpPass_Create = {
  __typename?: 'SettingsDocAccessFields_smtpPass_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPass_Delete = {
  __typename?: 'SettingsDocAccessFields_smtpPass_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPass_Read = {
  __typename?: 'SettingsDocAccessFields_smtpPass_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPass_Update = {
  __typename?: 'SettingsDocAccessFields_smtpPass_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPort = {
  __typename?: 'SettingsDocAccessFields_smtpPort';
  create?: Maybe<SettingsDocAccessFields_SmtpPort_Create>;
  delete?: Maybe<SettingsDocAccessFields_SmtpPort_Delete>;
  read?: Maybe<SettingsDocAccessFields_SmtpPort_Read>;
  update?: Maybe<SettingsDocAccessFields_SmtpPort_Update>;
};

export type SettingsDocAccessFields_SmtpPort_Create = {
  __typename?: 'SettingsDocAccessFields_smtpPort_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPort_Delete = {
  __typename?: 'SettingsDocAccessFields_smtpPort_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPort_Read = {
  __typename?: 'SettingsDocAccessFields_smtpPort_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpPort_Update = {
  __typename?: 'SettingsDocAccessFields_smtpPort_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpUser = {
  __typename?: 'SettingsDocAccessFields_smtpUser';
  create?: Maybe<SettingsDocAccessFields_SmtpUser_Create>;
  delete?: Maybe<SettingsDocAccessFields_SmtpUser_Delete>;
  read?: Maybe<SettingsDocAccessFields_SmtpUser_Read>;
  update?: Maybe<SettingsDocAccessFields_SmtpUser_Update>;
};

export type SettingsDocAccessFields_SmtpUser_Create = {
  __typename?: 'SettingsDocAccessFields_smtpUser_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpUser_Delete = {
  __typename?: 'SettingsDocAccessFields_smtpUser_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpUser_Read = {
  __typename?: 'SettingsDocAccessFields_smtpUser_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_SmtpUser_Update = {
  __typename?: 'SettingsDocAccessFields_smtpUser_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt = {
  __typename?: 'SettingsDocAccessFields_updatedAt';
  create?: Maybe<SettingsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SettingsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SettingsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SettingsDocAccessFields_UpdatedAt_Update>;
};

export type SettingsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields = {
  __typename?: 'SettingsFields';
  createdAt?: Maybe<SettingsFields_CreatedAt>;
  redirect?: Maybe<SettingsFields_Redirect>;
  smtpHost?: Maybe<SettingsFields_SmtpHost>;
  smtpPass?: Maybe<SettingsFields_SmtpPass>;
  smtpPort?: Maybe<SettingsFields_SmtpPort>;
  smtpUser?: Maybe<SettingsFields_SmtpUser>;
  updatedAt?: Maybe<SettingsFields_UpdatedAt>;
};

export type SettingsFields_CreatedAt = {
  __typename?: 'SettingsFields_createdAt';
  create?: Maybe<SettingsFields_CreatedAt_Create>;
  delete?: Maybe<SettingsFields_CreatedAt_Delete>;
  read?: Maybe<SettingsFields_CreatedAt_Read>;
  update?: Maybe<SettingsFields_CreatedAt_Update>;
};

export type SettingsFields_CreatedAt_Create = {
  __typename?: 'SettingsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_CreatedAt_Delete = {
  __typename?: 'SettingsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_CreatedAt_Read = {
  __typename?: 'SettingsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_CreatedAt_Update = {
  __typename?: 'SettingsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_Redirect = {
  __typename?: 'SettingsFields_redirect';
  create?: Maybe<SettingsFields_Redirect_Create>;
  delete?: Maybe<SettingsFields_Redirect_Delete>;
  read?: Maybe<SettingsFields_Redirect_Read>;
  update?: Maybe<SettingsFields_Redirect_Update>;
};

export type SettingsFields_Redirect_Create = {
  __typename?: 'SettingsFields_redirect_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_Redirect_Delete = {
  __typename?: 'SettingsFields_redirect_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_Redirect_Read = {
  __typename?: 'SettingsFields_redirect_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_Redirect_Update = {
  __typename?: 'SettingsFields_redirect_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpHost = {
  __typename?: 'SettingsFields_smtpHost';
  create?: Maybe<SettingsFields_SmtpHost_Create>;
  delete?: Maybe<SettingsFields_SmtpHost_Delete>;
  read?: Maybe<SettingsFields_SmtpHost_Read>;
  update?: Maybe<SettingsFields_SmtpHost_Update>;
};

export type SettingsFields_SmtpHost_Create = {
  __typename?: 'SettingsFields_smtpHost_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpHost_Delete = {
  __typename?: 'SettingsFields_smtpHost_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpHost_Read = {
  __typename?: 'SettingsFields_smtpHost_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpHost_Update = {
  __typename?: 'SettingsFields_smtpHost_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPass = {
  __typename?: 'SettingsFields_smtpPass';
  create?: Maybe<SettingsFields_SmtpPass_Create>;
  delete?: Maybe<SettingsFields_SmtpPass_Delete>;
  read?: Maybe<SettingsFields_SmtpPass_Read>;
  update?: Maybe<SettingsFields_SmtpPass_Update>;
};

export type SettingsFields_SmtpPass_Create = {
  __typename?: 'SettingsFields_smtpPass_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPass_Delete = {
  __typename?: 'SettingsFields_smtpPass_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPass_Read = {
  __typename?: 'SettingsFields_smtpPass_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPass_Update = {
  __typename?: 'SettingsFields_smtpPass_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPort = {
  __typename?: 'SettingsFields_smtpPort';
  create?: Maybe<SettingsFields_SmtpPort_Create>;
  delete?: Maybe<SettingsFields_SmtpPort_Delete>;
  read?: Maybe<SettingsFields_SmtpPort_Read>;
  update?: Maybe<SettingsFields_SmtpPort_Update>;
};

export type SettingsFields_SmtpPort_Create = {
  __typename?: 'SettingsFields_smtpPort_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPort_Delete = {
  __typename?: 'SettingsFields_smtpPort_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPort_Read = {
  __typename?: 'SettingsFields_smtpPort_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpPort_Update = {
  __typename?: 'SettingsFields_smtpPort_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpUser = {
  __typename?: 'SettingsFields_smtpUser';
  create?: Maybe<SettingsFields_SmtpUser_Create>;
  delete?: Maybe<SettingsFields_SmtpUser_Delete>;
  read?: Maybe<SettingsFields_SmtpUser_Read>;
  update?: Maybe<SettingsFields_SmtpUser_Update>;
};

export type SettingsFields_SmtpUser_Create = {
  __typename?: 'SettingsFields_smtpUser_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpUser_Delete = {
  __typename?: 'SettingsFields_smtpUser_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpUser_Read = {
  __typename?: 'SettingsFields_smtpUser_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_SmtpUser_Update = {
  __typename?: 'SettingsFields_smtpUser_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt = {
  __typename?: 'SettingsFields_updatedAt';
  create?: Maybe<SettingsFields_UpdatedAt_Create>;
  delete?: Maybe<SettingsFields_UpdatedAt_Delete>;
  read?: Maybe<SettingsFields_UpdatedAt_Read>;
  update?: Maybe<SettingsFields_UpdatedAt_Update>;
};

export type SettingsFields_UpdatedAt_Create = {
  __typename?: 'SettingsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt_Delete = {
  __typename?: 'SettingsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt_Read = {
  __typename?: 'SettingsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt_Update = {
  __typename?: 'SettingsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsReadAccess = {
  __typename?: 'SettingsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SettingsReadDocAccess = {
  __typename?: 'SettingsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SettingsUpdateAccess = {
  __typename?: 'SettingsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SettingsUpdateDocAccess = {
  __typename?: 'SettingsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Stock = {
  __typename?: 'Stock';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  product?: Maybe<Product>;
  quantity: Scalars['Float']['output'];
  type: Stock_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum StockUpdate_Type_MutationInput {
  ByStock = 'by_stock',
  OnePerUser = 'one_per_user'
}

export type Stock_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Stock_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Stock_Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Stock_Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum Stock_Type {
  ByStock = 'by_stock',
  OnePerUser = 'one_per_user'
}

export enum Stock_Type_Input {
  ByStock = 'by_stock',
  OnePerUser = 'one_per_user'
}

export enum Stock_Type_MutationInput {
  ByStock = 'by_stock',
  OnePerUser = 'one_per_user'
}

export type Stock_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Stock_Type_Input>>>;
  equals?: InputMaybe<Stock_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<Stock_Type_Input>>>;
  not_equals?: InputMaybe<Stock_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Stock_Type_Input>>>;
};

export type Stock_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Stock_Where = {
  AND?: InputMaybe<Array<InputMaybe<Stock_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Stock_Where_Or>>>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  product?: InputMaybe<Stock_Product_Operator>;
  quantity?: InputMaybe<Stock_Quantity_Operator>;
  type?: InputMaybe<Stock_Type_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
};

export type Stock_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Stock_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Stock_Where_Or>>>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  product?: InputMaybe<Stock_Product_Operator>;
  quantity?: InputMaybe<Stock_Quantity_Operator>;
  type?: InputMaybe<Stock_Type_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
};

export type Stock_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Stock_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Stock_Where_Or>>>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  product?: InputMaybe<Stock_Product_Operator>;
  quantity?: InputMaybe<Stock_Quantity_Operator>;
  type?: InputMaybe<Stock_Type_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
};

export type Stocks = {
  __typename?: 'Stocks';
  docs: Array<Stock>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type StocksCreateAccess = {
  __typename?: 'StocksCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StocksCreateDocAccess = {
  __typename?: 'StocksCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StocksDeleteAccess = {
  __typename?: 'StocksDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StocksDeleteDocAccess = {
  __typename?: 'StocksDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StocksDocAccessFields = {
  __typename?: 'StocksDocAccessFields';
  createdAt?: Maybe<StocksDocAccessFields_CreatedAt>;
  product?: Maybe<StocksDocAccessFields_Product>;
  quantity?: Maybe<StocksDocAccessFields_Quantity>;
  type?: Maybe<StocksDocAccessFields_Type>;
  updatedAt?: Maybe<StocksDocAccessFields_UpdatedAt>;
};

export type StocksDocAccessFields_CreatedAt = {
  __typename?: 'StocksDocAccessFields_createdAt';
  create?: Maybe<StocksDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<StocksDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<StocksDocAccessFields_CreatedAt_Read>;
  update?: Maybe<StocksDocAccessFields_CreatedAt_Update>;
};

export type StocksDocAccessFields_CreatedAt_Create = {
  __typename?: 'StocksDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_CreatedAt_Delete = {
  __typename?: 'StocksDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_CreatedAt_Read = {
  __typename?: 'StocksDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_CreatedAt_Update = {
  __typename?: 'StocksDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Product = {
  __typename?: 'StocksDocAccessFields_product';
  create?: Maybe<StocksDocAccessFields_Product_Create>;
  delete?: Maybe<StocksDocAccessFields_Product_Delete>;
  read?: Maybe<StocksDocAccessFields_Product_Read>;
  update?: Maybe<StocksDocAccessFields_Product_Update>;
};

export type StocksDocAccessFields_Product_Create = {
  __typename?: 'StocksDocAccessFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Product_Delete = {
  __typename?: 'StocksDocAccessFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Product_Read = {
  __typename?: 'StocksDocAccessFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Product_Update = {
  __typename?: 'StocksDocAccessFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Quantity = {
  __typename?: 'StocksDocAccessFields_quantity';
  create?: Maybe<StocksDocAccessFields_Quantity_Create>;
  delete?: Maybe<StocksDocAccessFields_Quantity_Delete>;
  read?: Maybe<StocksDocAccessFields_Quantity_Read>;
  update?: Maybe<StocksDocAccessFields_Quantity_Update>;
};

export type StocksDocAccessFields_Quantity_Create = {
  __typename?: 'StocksDocAccessFields_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Quantity_Delete = {
  __typename?: 'StocksDocAccessFields_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Quantity_Read = {
  __typename?: 'StocksDocAccessFields_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Quantity_Update = {
  __typename?: 'StocksDocAccessFields_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Type = {
  __typename?: 'StocksDocAccessFields_type';
  create?: Maybe<StocksDocAccessFields_Type_Create>;
  delete?: Maybe<StocksDocAccessFields_Type_Delete>;
  read?: Maybe<StocksDocAccessFields_Type_Read>;
  update?: Maybe<StocksDocAccessFields_Type_Update>;
};

export type StocksDocAccessFields_Type_Create = {
  __typename?: 'StocksDocAccessFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Type_Delete = {
  __typename?: 'StocksDocAccessFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Type_Read = {
  __typename?: 'StocksDocAccessFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_Type_Update = {
  __typename?: 'StocksDocAccessFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_UpdatedAt = {
  __typename?: 'StocksDocAccessFields_updatedAt';
  create?: Maybe<StocksDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<StocksDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<StocksDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<StocksDocAccessFields_UpdatedAt_Update>;
};

export type StocksDocAccessFields_UpdatedAt_Create = {
  __typename?: 'StocksDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'StocksDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_UpdatedAt_Read = {
  __typename?: 'StocksDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksDocAccessFields_UpdatedAt_Update = {
  __typename?: 'StocksDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields = {
  __typename?: 'StocksFields';
  createdAt?: Maybe<StocksFields_CreatedAt>;
  product?: Maybe<StocksFields_Product>;
  quantity?: Maybe<StocksFields_Quantity>;
  type?: Maybe<StocksFields_Type>;
  updatedAt?: Maybe<StocksFields_UpdatedAt>;
};

export type StocksFields_CreatedAt = {
  __typename?: 'StocksFields_createdAt';
  create?: Maybe<StocksFields_CreatedAt_Create>;
  delete?: Maybe<StocksFields_CreatedAt_Delete>;
  read?: Maybe<StocksFields_CreatedAt_Read>;
  update?: Maybe<StocksFields_CreatedAt_Update>;
};

export type StocksFields_CreatedAt_Create = {
  __typename?: 'StocksFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_CreatedAt_Delete = {
  __typename?: 'StocksFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_CreatedAt_Read = {
  __typename?: 'StocksFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_CreatedAt_Update = {
  __typename?: 'StocksFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Product = {
  __typename?: 'StocksFields_product';
  create?: Maybe<StocksFields_Product_Create>;
  delete?: Maybe<StocksFields_Product_Delete>;
  read?: Maybe<StocksFields_Product_Read>;
  update?: Maybe<StocksFields_Product_Update>;
};

export type StocksFields_Product_Create = {
  __typename?: 'StocksFields_product_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Product_Delete = {
  __typename?: 'StocksFields_product_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Product_Read = {
  __typename?: 'StocksFields_product_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Product_Update = {
  __typename?: 'StocksFields_product_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Quantity = {
  __typename?: 'StocksFields_quantity';
  create?: Maybe<StocksFields_Quantity_Create>;
  delete?: Maybe<StocksFields_Quantity_Delete>;
  read?: Maybe<StocksFields_Quantity_Read>;
  update?: Maybe<StocksFields_Quantity_Update>;
};

export type StocksFields_Quantity_Create = {
  __typename?: 'StocksFields_quantity_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Quantity_Delete = {
  __typename?: 'StocksFields_quantity_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Quantity_Read = {
  __typename?: 'StocksFields_quantity_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Quantity_Update = {
  __typename?: 'StocksFields_quantity_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Type = {
  __typename?: 'StocksFields_type';
  create?: Maybe<StocksFields_Type_Create>;
  delete?: Maybe<StocksFields_Type_Delete>;
  read?: Maybe<StocksFields_Type_Read>;
  update?: Maybe<StocksFields_Type_Update>;
};

export type StocksFields_Type_Create = {
  __typename?: 'StocksFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Type_Delete = {
  __typename?: 'StocksFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Type_Read = {
  __typename?: 'StocksFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_Type_Update = {
  __typename?: 'StocksFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_UpdatedAt = {
  __typename?: 'StocksFields_updatedAt';
  create?: Maybe<StocksFields_UpdatedAt_Create>;
  delete?: Maybe<StocksFields_UpdatedAt_Delete>;
  read?: Maybe<StocksFields_UpdatedAt_Read>;
  update?: Maybe<StocksFields_UpdatedAt_Update>;
};

export type StocksFields_UpdatedAt_Create = {
  __typename?: 'StocksFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_UpdatedAt_Delete = {
  __typename?: 'StocksFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_UpdatedAt_Read = {
  __typename?: 'StocksFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StocksFields_UpdatedAt_Update = {
  __typename?: 'StocksFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StocksReadAccess = {
  __typename?: 'StocksReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StocksReadDocAccess = {
  __typename?: 'StocksReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StocksUpdateAccess = {
  __typename?: 'StocksUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StocksUpdateDocAccess = {
  __typename?: 'StocksUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<Product>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type Supplier_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Supplier_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Supplier_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Supplier_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Supplier_Products_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Supplier_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Supplier_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Supplier_Where = {
  AND?: InputMaybe<Array<InputMaybe<Supplier_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Supplier_Where_Or>>>;
  createdAt?: InputMaybe<Supplier_CreatedAt_Operator>;
  description?: InputMaybe<Supplier_Description_Operator>;
  id?: InputMaybe<Supplier_Id_Operator>;
  name?: InputMaybe<Supplier_Name_Operator>;
  products?: InputMaybe<Supplier_Products_Operator>;
  updatedAt?: InputMaybe<Supplier_UpdatedAt_Operator>;
  user?: InputMaybe<Supplier_User_Operator>;
};

export type Supplier_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Supplier_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Supplier_Where_Or>>>;
  createdAt?: InputMaybe<Supplier_CreatedAt_Operator>;
  description?: InputMaybe<Supplier_Description_Operator>;
  id?: InputMaybe<Supplier_Id_Operator>;
  name?: InputMaybe<Supplier_Name_Operator>;
  products?: InputMaybe<Supplier_Products_Operator>;
  updatedAt?: InputMaybe<Supplier_UpdatedAt_Operator>;
  user?: InputMaybe<Supplier_User_Operator>;
};

export type Supplier_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Supplier_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Supplier_Where_Or>>>;
  createdAt?: InputMaybe<Supplier_CreatedAt_Operator>;
  description?: InputMaybe<Supplier_Description_Operator>;
  id?: InputMaybe<Supplier_Id_Operator>;
  name?: InputMaybe<Supplier_Name_Operator>;
  products?: InputMaybe<Supplier_Products_Operator>;
  updatedAt?: InputMaybe<Supplier_UpdatedAt_Operator>;
  user?: InputMaybe<Supplier_User_Operator>;
};

export type Suppliers = {
  __typename?: 'Suppliers';
  docs: Array<Supplier>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type SuppliersCreateAccess = {
  __typename?: 'SuppliersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SuppliersCreateDocAccess = {
  __typename?: 'SuppliersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SuppliersDeleteAccess = {
  __typename?: 'SuppliersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SuppliersDeleteDocAccess = {
  __typename?: 'SuppliersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SuppliersDocAccessFields = {
  __typename?: 'SuppliersDocAccessFields';
  createdAt?: Maybe<SuppliersDocAccessFields_CreatedAt>;
  description?: Maybe<SuppliersDocAccessFields_Description>;
  name?: Maybe<SuppliersDocAccessFields_Name>;
  products?: Maybe<SuppliersDocAccessFields_Products>;
  updatedAt?: Maybe<SuppliersDocAccessFields_UpdatedAt>;
  user?: Maybe<SuppliersDocAccessFields_User>;
};

export type SuppliersDocAccessFields_CreatedAt = {
  __typename?: 'SuppliersDocAccessFields_createdAt';
  create?: Maybe<SuppliersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SuppliersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SuppliersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SuppliersDocAccessFields_CreatedAt_Update>;
};

export type SuppliersDocAccessFields_CreatedAt_Create = {
  __typename?: 'SuppliersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SuppliersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_CreatedAt_Read = {
  __typename?: 'SuppliersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_CreatedAt_Update = {
  __typename?: 'SuppliersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Description = {
  __typename?: 'SuppliersDocAccessFields_description';
  create?: Maybe<SuppliersDocAccessFields_Description_Create>;
  delete?: Maybe<SuppliersDocAccessFields_Description_Delete>;
  read?: Maybe<SuppliersDocAccessFields_Description_Read>;
  update?: Maybe<SuppliersDocAccessFields_Description_Update>;
};

export type SuppliersDocAccessFields_Description_Create = {
  __typename?: 'SuppliersDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Description_Delete = {
  __typename?: 'SuppliersDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Description_Read = {
  __typename?: 'SuppliersDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Description_Update = {
  __typename?: 'SuppliersDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Name = {
  __typename?: 'SuppliersDocAccessFields_name';
  create?: Maybe<SuppliersDocAccessFields_Name_Create>;
  delete?: Maybe<SuppliersDocAccessFields_Name_Delete>;
  read?: Maybe<SuppliersDocAccessFields_Name_Read>;
  update?: Maybe<SuppliersDocAccessFields_Name_Update>;
};

export type SuppliersDocAccessFields_Name_Create = {
  __typename?: 'SuppliersDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Name_Delete = {
  __typename?: 'SuppliersDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Name_Read = {
  __typename?: 'SuppliersDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Name_Update = {
  __typename?: 'SuppliersDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Products = {
  __typename?: 'SuppliersDocAccessFields_products';
  create?: Maybe<SuppliersDocAccessFields_Products_Create>;
  delete?: Maybe<SuppliersDocAccessFields_Products_Delete>;
  read?: Maybe<SuppliersDocAccessFields_Products_Read>;
  update?: Maybe<SuppliersDocAccessFields_Products_Update>;
};

export type SuppliersDocAccessFields_Products_Create = {
  __typename?: 'SuppliersDocAccessFields_products_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Products_Delete = {
  __typename?: 'SuppliersDocAccessFields_products_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Products_Read = {
  __typename?: 'SuppliersDocAccessFields_products_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_Products_Update = {
  __typename?: 'SuppliersDocAccessFields_products_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_UpdatedAt = {
  __typename?: 'SuppliersDocAccessFields_updatedAt';
  create?: Maybe<SuppliersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SuppliersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SuppliersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SuppliersDocAccessFields_UpdatedAt_Update>;
};

export type SuppliersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SuppliersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SuppliersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SuppliersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SuppliersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_User = {
  __typename?: 'SuppliersDocAccessFields_user';
  create?: Maybe<SuppliersDocAccessFields_User_Create>;
  delete?: Maybe<SuppliersDocAccessFields_User_Delete>;
  read?: Maybe<SuppliersDocAccessFields_User_Read>;
  update?: Maybe<SuppliersDocAccessFields_User_Update>;
};

export type SuppliersDocAccessFields_User_Create = {
  __typename?: 'SuppliersDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_User_Delete = {
  __typename?: 'SuppliersDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_User_Read = {
  __typename?: 'SuppliersDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersDocAccessFields_User_Update = {
  __typename?: 'SuppliersDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields = {
  __typename?: 'SuppliersFields';
  createdAt?: Maybe<SuppliersFields_CreatedAt>;
  description?: Maybe<SuppliersFields_Description>;
  name?: Maybe<SuppliersFields_Name>;
  products?: Maybe<SuppliersFields_Products>;
  updatedAt?: Maybe<SuppliersFields_UpdatedAt>;
  user?: Maybe<SuppliersFields_User>;
};

export type SuppliersFields_CreatedAt = {
  __typename?: 'SuppliersFields_createdAt';
  create?: Maybe<SuppliersFields_CreatedAt_Create>;
  delete?: Maybe<SuppliersFields_CreatedAt_Delete>;
  read?: Maybe<SuppliersFields_CreatedAt_Read>;
  update?: Maybe<SuppliersFields_CreatedAt_Update>;
};

export type SuppliersFields_CreatedAt_Create = {
  __typename?: 'SuppliersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_CreatedAt_Delete = {
  __typename?: 'SuppliersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_CreatedAt_Read = {
  __typename?: 'SuppliersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_CreatedAt_Update = {
  __typename?: 'SuppliersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Description = {
  __typename?: 'SuppliersFields_description';
  create?: Maybe<SuppliersFields_Description_Create>;
  delete?: Maybe<SuppliersFields_Description_Delete>;
  read?: Maybe<SuppliersFields_Description_Read>;
  update?: Maybe<SuppliersFields_Description_Update>;
};

export type SuppliersFields_Description_Create = {
  __typename?: 'SuppliersFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Description_Delete = {
  __typename?: 'SuppliersFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Description_Read = {
  __typename?: 'SuppliersFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Description_Update = {
  __typename?: 'SuppliersFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Name = {
  __typename?: 'SuppliersFields_name';
  create?: Maybe<SuppliersFields_Name_Create>;
  delete?: Maybe<SuppliersFields_Name_Delete>;
  read?: Maybe<SuppliersFields_Name_Read>;
  update?: Maybe<SuppliersFields_Name_Update>;
};

export type SuppliersFields_Name_Create = {
  __typename?: 'SuppliersFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Name_Delete = {
  __typename?: 'SuppliersFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Name_Read = {
  __typename?: 'SuppliersFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Name_Update = {
  __typename?: 'SuppliersFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Products = {
  __typename?: 'SuppliersFields_products';
  create?: Maybe<SuppliersFields_Products_Create>;
  delete?: Maybe<SuppliersFields_Products_Delete>;
  read?: Maybe<SuppliersFields_Products_Read>;
  update?: Maybe<SuppliersFields_Products_Update>;
};

export type SuppliersFields_Products_Create = {
  __typename?: 'SuppliersFields_products_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Products_Delete = {
  __typename?: 'SuppliersFields_products_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Products_Read = {
  __typename?: 'SuppliersFields_products_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_Products_Update = {
  __typename?: 'SuppliersFields_products_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_UpdatedAt = {
  __typename?: 'SuppliersFields_updatedAt';
  create?: Maybe<SuppliersFields_UpdatedAt_Create>;
  delete?: Maybe<SuppliersFields_UpdatedAt_Delete>;
  read?: Maybe<SuppliersFields_UpdatedAt_Read>;
  update?: Maybe<SuppliersFields_UpdatedAt_Update>;
};

export type SuppliersFields_UpdatedAt_Create = {
  __typename?: 'SuppliersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_UpdatedAt_Delete = {
  __typename?: 'SuppliersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_UpdatedAt_Read = {
  __typename?: 'SuppliersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_UpdatedAt_Update = {
  __typename?: 'SuppliersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_User = {
  __typename?: 'SuppliersFields_user';
  create?: Maybe<SuppliersFields_User_Create>;
  delete?: Maybe<SuppliersFields_User_Delete>;
  read?: Maybe<SuppliersFields_User_Read>;
  update?: Maybe<SuppliersFields_User_Update>;
};

export type SuppliersFields_User_Create = {
  __typename?: 'SuppliersFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_User_Delete = {
  __typename?: 'SuppliersFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_User_Read = {
  __typename?: 'SuppliersFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersFields_User_Update = {
  __typename?: 'SuppliersFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type SuppliersReadAccess = {
  __typename?: 'SuppliersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SuppliersReadDocAccess = {
  __typename?: 'SuppliersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SuppliersUpdateAccess = {
  __typename?: 'SuppliersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SuppliersUpdateDocAccess = {
  __typename?: 'SuppliersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Tag_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_Posts_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Tag_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Where = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  posts?: InputMaybe<Tag_Posts_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  posts?: InputMaybe<Tag_Posts_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  posts?: InputMaybe<Tag_Posts_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tags = {
  __typename?: 'Tags';
  docs: Array<Tag>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type TagsCreateAccess = {
  __typename?: 'TagsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsCreateDocAccess = {
  __typename?: 'TagsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteAccess = {
  __typename?: 'TagsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteDocAccess = {
  __typename?: 'TagsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDocAccessFields = {
  __typename?: 'TagsDocAccessFields';
  createdAt?: Maybe<TagsDocAccessFields_CreatedAt>;
  name?: Maybe<TagsDocAccessFields_Name>;
  posts?: Maybe<TagsDocAccessFields_Posts>;
  updatedAt?: Maybe<TagsDocAccessFields_UpdatedAt>;
};

export type TagsDocAccessFields_CreatedAt = {
  __typename?: 'TagsDocAccessFields_createdAt';
  create?: Maybe<TagsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_CreatedAt_Update>;
};

export type TagsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TagsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TagsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TagsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name = {
  __typename?: 'TagsDocAccessFields_name';
  create?: Maybe<TagsDocAccessFields_Name_Create>;
  delete?: Maybe<TagsDocAccessFields_Name_Delete>;
  read?: Maybe<TagsDocAccessFields_Name_Read>;
  update?: Maybe<TagsDocAccessFields_Name_Update>;
};

export type TagsDocAccessFields_Name_Create = {
  __typename?: 'TagsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Delete = {
  __typename?: 'TagsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Read = {
  __typename?: 'TagsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Update = {
  __typename?: 'TagsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Posts = {
  __typename?: 'TagsDocAccessFields_posts';
  create?: Maybe<TagsDocAccessFields_Posts_Create>;
  delete?: Maybe<TagsDocAccessFields_Posts_Delete>;
  read?: Maybe<TagsDocAccessFields_Posts_Read>;
  update?: Maybe<TagsDocAccessFields_Posts_Update>;
};

export type TagsDocAccessFields_Posts_Create = {
  __typename?: 'TagsDocAccessFields_posts_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Posts_Delete = {
  __typename?: 'TagsDocAccessFields_posts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Posts_Read = {
  __typename?: 'TagsDocAccessFields_posts_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Posts_Update = {
  __typename?: 'TagsDocAccessFields_posts_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt = {
  __typename?: 'TagsDocAccessFields_updatedAt';
  create?: Maybe<TagsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_UpdatedAt_Update>;
};

export type TagsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TagsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TagsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TagsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields = {
  __typename?: 'TagsFields';
  createdAt?: Maybe<TagsFields_CreatedAt>;
  name?: Maybe<TagsFields_Name>;
  posts?: Maybe<TagsFields_Posts>;
  updatedAt?: Maybe<TagsFields_UpdatedAt>;
};

export type TagsFields_CreatedAt = {
  __typename?: 'TagsFields_createdAt';
  create?: Maybe<TagsFields_CreatedAt_Create>;
  delete?: Maybe<TagsFields_CreatedAt_Delete>;
  read?: Maybe<TagsFields_CreatedAt_Read>;
  update?: Maybe<TagsFields_CreatedAt_Update>;
};

export type TagsFields_CreatedAt_Create = {
  __typename?: 'TagsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Delete = {
  __typename?: 'TagsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Read = {
  __typename?: 'TagsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Update = {
  __typename?: 'TagsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name = {
  __typename?: 'TagsFields_name';
  create?: Maybe<TagsFields_Name_Create>;
  delete?: Maybe<TagsFields_Name_Delete>;
  read?: Maybe<TagsFields_Name_Read>;
  update?: Maybe<TagsFields_Name_Update>;
};

export type TagsFields_Name_Create = {
  __typename?: 'TagsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Delete = {
  __typename?: 'TagsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Read = {
  __typename?: 'TagsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Update = {
  __typename?: 'TagsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Posts = {
  __typename?: 'TagsFields_posts';
  create?: Maybe<TagsFields_Posts_Create>;
  delete?: Maybe<TagsFields_Posts_Delete>;
  read?: Maybe<TagsFields_Posts_Read>;
  update?: Maybe<TagsFields_Posts_Update>;
};

export type TagsFields_Posts_Create = {
  __typename?: 'TagsFields_posts_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Posts_Delete = {
  __typename?: 'TagsFields_posts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Posts_Read = {
  __typename?: 'TagsFields_posts_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Posts_Update = {
  __typename?: 'TagsFields_posts_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt = {
  __typename?: 'TagsFields_updatedAt';
  create?: Maybe<TagsFields_UpdatedAt_Create>;
  delete?: Maybe<TagsFields_UpdatedAt_Delete>;
  read?: Maybe<TagsFields_UpdatedAt_Read>;
  update?: Maybe<TagsFields_UpdatedAt_Update>;
};

export type TagsFields_UpdatedAt_Create = {
  __typename?: 'TagsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Delete = {
  __typename?: 'TagsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Read = {
  __typename?: 'TagsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Update = {
  __typename?: 'TagsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsReadAccess = {
  __typename?: 'TagsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsReadDocAccess = {
  __typename?: 'TagsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateAccess = {
  __typename?: 'TagsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateDocAccess = {
  __typename?: 'TagsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<User_Accounts>;
  avatar?: Maybe<Media>;
  carts?: Maybe<User_Carts>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credit?: Maybe<Scalars['Float']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  items?: Maybe<User_Items>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  orders?: Maybe<Array<Order>>;
  point?: Maybe<User_Point>;
  preference?: Maybe<User_Preference>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  role: User_Role;
  salt?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
  supplier?: Maybe<User_Supplier>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UserAccountsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Account_Where>;
};


export type UserCartsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Cart_Where>;
};


export type UserItemsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UserItem_Where>;
};


export type UserPointArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UserPoint_Where>;
};


export type UserPreferenceArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UserPreference_Where>;
};


export type UserSupplierArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Supplier_Where>;
};

export type UserItem = {
  __typename?: 'UserItem';
  config?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  item?: Maybe<OrderItem>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type UserItem_Config_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserItem_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserItem_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserItem_Item_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type UserItem_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserItem_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type UserItem_Where = {
  AND?: InputMaybe<Array<InputMaybe<UserItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserItem_Where_Or>>>;
  config?: InputMaybe<UserItem_Config_Operator>;
  createdAt?: InputMaybe<UserItem_CreatedAt_Operator>;
  id?: InputMaybe<UserItem_Id_Operator>;
  item?: InputMaybe<UserItem_Item_Operator>;
  updatedAt?: InputMaybe<UserItem_UpdatedAt_Operator>;
  user?: InputMaybe<UserItem_User_Operator>;
};

export type UserItem_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<UserItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserItem_Where_Or>>>;
  config?: InputMaybe<UserItem_Config_Operator>;
  createdAt?: InputMaybe<UserItem_CreatedAt_Operator>;
  id?: InputMaybe<UserItem_Id_Operator>;
  item?: InputMaybe<UserItem_Item_Operator>;
  updatedAt?: InputMaybe<UserItem_UpdatedAt_Operator>;
  user?: InputMaybe<UserItem_User_Operator>;
};

export type UserItem_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<UserItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserItem_Where_Or>>>;
  config?: InputMaybe<UserItem_Config_Operator>;
  createdAt?: InputMaybe<UserItem_CreatedAt_Operator>;
  id?: InputMaybe<UserItem_Id_Operator>;
  item?: InputMaybe<UserItem_Item_Operator>;
  updatedAt?: InputMaybe<UserItem_UpdatedAt_Operator>;
  user?: InputMaybe<UserItem_User_Operator>;
};

export type UserItems = {
  __typename?: 'UserItems';
  docs: Array<UserItem>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UserItemsCreateAccess = {
  __typename?: 'UserItemsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserItemsCreateDocAccess = {
  __typename?: 'UserItemsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserItemsDeleteAccess = {
  __typename?: 'UserItemsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserItemsDeleteDocAccess = {
  __typename?: 'UserItemsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserItemsDocAccessFields = {
  __typename?: 'UserItemsDocAccessFields';
  config?: Maybe<UserItemsDocAccessFields_Config>;
  createdAt?: Maybe<UserItemsDocAccessFields_CreatedAt>;
  item?: Maybe<UserItemsDocAccessFields_Item>;
  updatedAt?: Maybe<UserItemsDocAccessFields_UpdatedAt>;
  user?: Maybe<UserItemsDocAccessFields_User>;
};

export type UserItemsDocAccessFields_Config = {
  __typename?: 'UserItemsDocAccessFields_config';
  create?: Maybe<UserItemsDocAccessFields_Config_Create>;
  delete?: Maybe<UserItemsDocAccessFields_Config_Delete>;
  read?: Maybe<UserItemsDocAccessFields_Config_Read>;
  update?: Maybe<UserItemsDocAccessFields_Config_Update>;
};

export type UserItemsDocAccessFields_Config_Create = {
  __typename?: 'UserItemsDocAccessFields_config_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_Config_Delete = {
  __typename?: 'UserItemsDocAccessFields_config_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_Config_Read = {
  __typename?: 'UserItemsDocAccessFields_config_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_Config_Update = {
  __typename?: 'UserItemsDocAccessFields_config_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_CreatedAt = {
  __typename?: 'UserItemsDocAccessFields_createdAt';
  create?: Maybe<UserItemsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UserItemsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UserItemsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UserItemsDocAccessFields_CreatedAt_Update>;
};

export type UserItemsDocAccessFields_CreatedAt_Create = {
  __typename?: 'UserItemsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UserItemsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_CreatedAt_Read = {
  __typename?: 'UserItemsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_CreatedAt_Update = {
  __typename?: 'UserItemsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_Item = {
  __typename?: 'UserItemsDocAccessFields_item';
  create?: Maybe<UserItemsDocAccessFields_Item_Create>;
  delete?: Maybe<UserItemsDocAccessFields_Item_Delete>;
  read?: Maybe<UserItemsDocAccessFields_Item_Read>;
  update?: Maybe<UserItemsDocAccessFields_Item_Update>;
};

export type UserItemsDocAccessFields_Item_Create = {
  __typename?: 'UserItemsDocAccessFields_item_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_Item_Delete = {
  __typename?: 'UserItemsDocAccessFields_item_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_Item_Read = {
  __typename?: 'UserItemsDocAccessFields_item_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_Item_Update = {
  __typename?: 'UserItemsDocAccessFields_item_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_UpdatedAt = {
  __typename?: 'UserItemsDocAccessFields_updatedAt';
  create?: Maybe<UserItemsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UserItemsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UserItemsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UserItemsDocAccessFields_UpdatedAt_Update>;
};

export type UserItemsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UserItemsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UserItemsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UserItemsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UserItemsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_User = {
  __typename?: 'UserItemsDocAccessFields_user';
  create?: Maybe<UserItemsDocAccessFields_User_Create>;
  delete?: Maybe<UserItemsDocAccessFields_User_Delete>;
  read?: Maybe<UserItemsDocAccessFields_User_Read>;
  update?: Maybe<UserItemsDocAccessFields_User_Update>;
};

export type UserItemsDocAccessFields_User_Create = {
  __typename?: 'UserItemsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_User_Delete = {
  __typename?: 'UserItemsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_User_Read = {
  __typename?: 'UserItemsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsDocAccessFields_User_Update = {
  __typename?: 'UserItemsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields = {
  __typename?: 'UserItemsFields';
  config?: Maybe<UserItemsFields_Config>;
  createdAt?: Maybe<UserItemsFields_CreatedAt>;
  item?: Maybe<UserItemsFields_Item>;
  updatedAt?: Maybe<UserItemsFields_UpdatedAt>;
  user?: Maybe<UserItemsFields_User>;
};

export type UserItemsFields_Config = {
  __typename?: 'UserItemsFields_config';
  create?: Maybe<UserItemsFields_Config_Create>;
  delete?: Maybe<UserItemsFields_Config_Delete>;
  read?: Maybe<UserItemsFields_Config_Read>;
  update?: Maybe<UserItemsFields_Config_Update>;
};

export type UserItemsFields_Config_Create = {
  __typename?: 'UserItemsFields_config_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_Config_Delete = {
  __typename?: 'UserItemsFields_config_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_Config_Read = {
  __typename?: 'UserItemsFields_config_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_Config_Update = {
  __typename?: 'UserItemsFields_config_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_CreatedAt = {
  __typename?: 'UserItemsFields_createdAt';
  create?: Maybe<UserItemsFields_CreatedAt_Create>;
  delete?: Maybe<UserItemsFields_CreatedAt_Delete>;
  read?: Maybe<UserItemsFields_CreatedAt_Read>;
  update?: Maybe<UserItemsFields_CreatedAt_Update>;
};

export type UserItemsFields_CreatedAt_Create = {
  __typename?: 'UserItemsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_CreatedAt_Delete = {
  __typename?: 'UserItemsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_CreatedAt_Read = {
  __typename?: 'UserItemsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_CreatedAt_Update = {
  __typename?: 'UserItemsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_Item = {
  __typename?: 'UserItemsFields_item';
  create?: Maybe<UserItemsFields_Item_Create>;
  delete?: Maybe<UserItemsFields_Item_Delete>;
  read?: Maybe<UserItemsFields_Item_Read>;
  update?: Maybe<UserItemsFields_Item_Update>;
};

export type UserItemsFields_Item_Create = {
  __typename?: 'UserItemsFields_item_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_Item_Delete = {
  __typename?: 'UserItemsFields_item_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_Item_Read = {
  __typename?: 'UserItemsFields_item_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_Item_Update = {
  __typename?: 'UserItemsFields_item_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_UpdatedAt = {
  __typename?: 'UserItemsFields_updatedAt';
  create?: Maybe<UserItemsFields_UpdatedAt_Create>;
  delete?: Maybe<UserItemsFields_UpdatedAt_Delete>;
  read?: Maybe<UserItemsFields_UpdatedAt_Read>;
  update?: Maybe<UserItemsFields_UpdatedAt_Update>;
};

export type UserItemsFields_UpdatedAt_Create = {
  __typename?: 'UserItemsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_UpdatedAt_Delete = {
  __typename?: 'UserItemsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_UpdatedAt_Read = {
  __typename?: 'UserItemsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_UpdatedAt_Update = {
  __typename?: 'UserItemsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_User = {
  __typename?: 'UserItemsFields_user';
  create?: Maybe<UserItemsFields_User_Create>;
  delete?: Maybe<UserItemsFields_User_Delete>;
  read?: Maybe<UserItemsFields_User_Read>;
  update?: Maybe<UserItemsFields_User_Update>;
};

export type UserItemsFields_User_Create = {
  __typename?: 'UserItemsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_User_Delete = {
  __typename?: 'UserItemsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_User_Read = {
  __typename?: 'UserItemsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsFields_User_Update = {
  __typename?: 'UserItemsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserItemsReadAccess = {
  __typename?: 'UserItemsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserItemsReadDocAccess = {
  __typename?: 'UserItemsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserItemsUpdateAccess = {
  __typename?: 'UserItemsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserItemsUpdateDocAccess = {
  __typename?: 'UserItemsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPoint = {
  __typename?: 'UserPoint';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  total_point: Scalars['Float']['output'];
  total_spent: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type UserPoint_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserPoint_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserPoint_Total_Point_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type UserPoint_Total_Spent_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type UserPoint_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserPoint_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type UserPoint_Where = {
  AND?: InputMaybe<Array<InputMaybe<UserPoint_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserPoint_Where_Or>>>;
  createdAt?: InputMaybe<UserPoint_CreatedAt_Operator>;
  id?: InputMaybe<UserPoint_Id_Operator>;
  total_point?: InputMaybe<UserPoint_Total_Point_Operator>;
  total_spent?: InputMaybe<UserPoint_Total_Spent_Operator>;
  updatedAt?: InputMaybe<UserPoint_UpdatedAt_Operator>;
  user?: InputMaybe<UserPoint_User_Operator>;
};

export type UserPoint_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<UserPoint_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserPoint_Where_Or>>>;
  createdAt?: InputMaybe<UserPoint_CreatedAt_Operator>;
  id?: InputMaybe<UserPoint_Id_Operator>;
  total_point?: InputMaybe<UserPoint_Total_Point_Operator>;
  total_spent?: InputMaybe<UserPoint_Total_Spent_Operator>;
  updatedAt?: InputMaybe<UserPoint_UpdatedAt_Operator>;
  user?: InputMaybe<UserPoint_User_Operator>;
};

export type UserPoint_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<UserPoint_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserPoint_Where_Or>>>;
  createdAt?: InputMaybe<UserPoint_CreatedAt_Operator>;
  id?: InputMaybe<UserPoint_Id_Operator>;
  total_point?: InputMaybe<UserPoint_Total_Point_Operator>;
  total_spent?: InputMaybe<UserPoint_Total_Spent_Operator>;
  updatedAt?: InputMaybe<UserPoint_UpdatedAt_Operator>;
  user?: InputMaybe<UserPoint_User_Operator>;
};

export type UserPoints = {
  __typename?: 'UserPoints';
  docs: Array<UserPoint>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UserPointsCreateAccess = {
  __typename?: 'UserPointsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPointsCreateDocAccess = {
  __typename?: 'UserPointsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPointsDeleteAccess = {
  __typename?: 'UserPointsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPointsDeleteDocAccess = {
  __typename?: 'UserPointsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPointsDocAccessFields = {
  __typename?: 'UserPointsDocAccessFields';
  createdAt?: Maybe<UserPointsDocAccessFields_CreatedAt>;
  total_point?: Maybe<UserPointsDocAccessFields_Total_Point>;
  total_spent?: Maybe<UserPointsDocAccessFields_Total_Spent>;
  updatedAt?: Maybe<UserPointsDocAccessFields_UpdatedAt>;
  user?: Maybe<UserPointsDocAccessFields_User>;
};

export type UserPointsDocAccessFields_CreatedAt = {
  __typename?: 'UserPointsDocAccessFields_createdAt';
  create?: Maybe<UserPointsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UserPointsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UserPointsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UserPointsDocAccessFields_CreatedAt_Update>;
};

export type UserPointsDocAccessFields_CreatedAt_Create = {
  __typename?: 'UserPointsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UserPointsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_CreatedAt_Read = {
  __typename?: 'UserPointsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_CreatedAt_Update = {
  __typename?: 'UserPointsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Point = {
  __typename?: 'UserPointsDocAccessFields_total_point';
  create?: Maybe<UserPointsDocAccessFields_Total_Point_Create>;
  delete?: Maybe<UserPointsDocAccessFields_Total_Point_Delete>;
  read?: Maybe<UserPointsDocAccessFields_Total_Point_Read>;
  update?: Maybe<UserPointsDocAccessFields_Total_Point_Update>;
};

export type UserPointsDocAccessFields_Total_Point_Create = {
  __typename?: 'UserPointsDocAccessFields_total_point_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Point_Delete = {
  __typename?: 'UserPointsDocAccessFields_total_point_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Point_Read = {
  __typename?: 'UserPointsDocAccessFields_total_point_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Point_Update = {
  __typename?: 'UserPointsDocAccessFields_total_point_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Spent = {
  __typename?: 'UserPointsDocAccessFields_total_spent';
  create?: Maybe<UserPointsDocAccessFields_Total_Spent_Create>;
  delete?: Maybe<UserPointsDocAccessFields_Total_Spent_Delete>;
  read?: Maybe<UserPointsDocAccessFields_Total_Spent_Read>;
  update?: Maybe<UserPointsDocAccessFields_Total_Spent_Update>;
};

export type UserPointsDocAccessFields_Total_Spent_Create = {
  __typename?: 'UserPointsDocAccessFields_total_spent_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Spent_Delete = {
  __typename?: 'UserPointsDocAccessFields_total_spent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Spent_Read = {
  __typename?: 'UserPointsDocAccessFields_total_spent_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_Total_Spent_Update = {
  __typename?: 'UserPointsDocAccessFields_total_spent_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_UpdatedAt = {
  __typename?: 'UserPointsDocAccessFields_updatedAt';
  create?: Maybe<UserPointsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UserPointsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UserPointsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UserPointsDocAccessFields_UpdatedAt_Update>;
};

export type UserPointsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UserPointsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UserPointsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UserPointsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UserPointsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_User = {
  __typename?: 'UserPointsDocAccessFields_user';
  create?: Maybe<UserPointsDocAccessFields_User_Create>;
  delete?: Maybe<UserPointsDocAccessFields_User_Delete>;
  read?: Maybe<UserPointsDocAccessFields_User_Read>;
  update?: Maybe<UserPointsDocAccessFields_User_Update>;
};

export type UserPointsDocAccessFields_User_Create = {
  __typename?: 'UserPointsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_User_Delete = {
  __typename?: 'UserPointsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_User_Read = {
  __typename?: 'UserPointsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsDocAccessFields_User_Update = {
  __typename?: 'UserPointsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields = {
  __typename?: 'UserPointsFields';
  createdAt?: Maybe<UserPointsFields_CreatedAt>;
  total_point?: Maybe<UserPointsFields_Total_Point>;
  total_spent?: Maybe<UserPointsFields_Total_Spent>;
  updatedAt?: Maybe<UserPointsFields_UpdatedAt>;
  user?: Maybe<UserPointsFields_User>;
};

export type UserPointsFields_CreatedAt = {
  __typename?: 'UserPointsFields_createdAt';
  create?: Maybe<UserPointsFields_CreatedAt_Create>;
  delete?: Maybe<UserPointsFields_CreatedAt_Delete>;
  read?: Maybe<UserPointsFields_CreatedAt_Read>;
  update?: Maybe<UserPointsFields_CreatedAt_Update>;
};

export type UserPointsFields_CreatedAt_Create = {
  __typename?: 'UserPointsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_CreatedAt_Delete = {
  __typename?: 'UserPointsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_CreatedAt_Read = {
  __typename?: 'UserPointsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_CreatedAt_Update = {
  __typename?: 'UserPointsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Point = {
  __typename?: 'UserPointsFields_total_point';
  create?: Maybe<UserPointsFields_Total_Point_Create>;
  delete?: Maybe<UserPointsFields_Total_Point_Delete>;
  read?: Maybe<UserPointsFields_Total_Point_Read>;
  update?: Maybe<UserPointsFields_Total_Point_Update>;
};

export type UserPointsFields_Total_Point_Create = {
  __typename?: 'UserPointsFields_total_point_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Point_Delete = {
  __typename?: 'UserPointsFields_total_point_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Point_Read = {
  __typename?: 'UserPointsFields_total_point_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Point_Update = {
  __typename?: 'UserPointsFields_total_point_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Spent = {
  __typename?: 'UserPointsFields_total_spent';
  create?: Maybe<UserPointsFields_Total_Spent_Create>;
  delete?: Maybe<UserPointsFields_Total_Spent_Delete>;
  read?: Maybe<UserPointsFields_Total_Spent_Read>;
  update?: Maybe<UserPointsFields_Total_Spent_Update>;
};

export type UserPointsFields_Total_Spent_Create = {
  __typename?: 'UserPointsFields_total_spent_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Spent_Delete = {
  __typename?: 'UserPointsFields_total_spent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Spent_Read = {
  __typename?: 'UserPointsFields_total_spent_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_Total_Spent_Update = {
  __typename?: 'UserPointsFields_total_spent_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_UpdatedAt = {
  __typename?: 'UserPointsFields_updatedAt';
  create?: Maybe<UserPointsFields_UpdatedAt_Create>;
  delete?: Maybe<UserPointsFields_UpdatedAt_Delete>;
  read?: Maybe<UserPointsFields_UpdatedAt_Read>;
  update?: Maybe<UserPointsFields_UpdatedAt_Update>;
};

export type UserPointsFields_UpdatedAt_Create = {
  __typename?: 'UserPointsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_UpdatedAt_Delete = {
  __typename?: 'UserPointsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_UpdatedAt_Read = {
  __typename?: 'UserPointsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_UpdatedAt_Update = {
  __typename?: 'UserPointsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_User = {
  __typename?: 'UserPointsFields_user';
  create?: Maybe<UserPointsFields_User_Create>;
  delete?: Maybe<UserPointsFields_User_Delete>;
  read?: Maybe<UserPointsFields_User_Read>;
  update?: Maybe<UserPointsFields_User_Update>;
};

export type UserPointsFields_User_Create = {
  __typename?: 'UserPointsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_User_Delete = {
  __typename?: 'UserPointsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_User_Read = {
  __typename?: 'UserPointsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsFields_User_Update = {
  __typename?: 'UserPointsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPointsReadAccess = {
  __typename?: 'UserPointsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPointsReadDocAccess = {
  __typename?: 'UserPointsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPointsUpdateAccess = {
  __typename?: 'UserPointsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPointsUpdateDocAccess = {
  __typename?: 'UserPointsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreference = {
  __typename?: 'UserPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  setting?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};


export type UserPreferenceSettingArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserPreference_Setting_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserPreference_User_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type UserPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<UserPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserPreference_Where_Or>>>;
  createdAt?: InputMaybe<UserPreference_CreatedAt_Operator>;
  id?: InputMaybe<UserPreference_Id_Operator>;
  setting?: InputMaybe<UserPreference_Setting_Operator>;
  updatedAt?: InputMaybe<UserPreference_UpdatedAt_Operator>;
  user?: InputMaybe<UserPreference_User_Operator>;
};

export type UserPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<UserPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserPreference_Where_Or>>>;
  createdAt?: InputMaybe<UserPreference_CreatedAt_Operator>;
  id?: InputMaybe<UserPreference_Id_Operator>;
  setting?: InputMaybe<UserPreference_Setting_Operator>;
  updatedAt?: InputMaybe<UserPreference_UpdatedAt_Operator>;
  user?: InputMaybe<UserPreference_User_Operator>;
};

export type UserPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<UserPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<UserPreference_Where_Or>>>;
  createdAt?: InputMaybe<UserPreference_CreatedAt_Operator>;
  id?: InputMaybe<UserPreference_Id_Operator>;
  setting?: InputMaybe<UserPreference_Setting_Operator>;
  updatedAt?: InputMaybe<UserPreference_UpdatedAt_Operator>;
  user?: InputMaybe<UserPreference_User_Operator>;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  docs: Array<UserPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UserPreferencesCreateAccess = {
  __typename?: 'UserPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreferencesCreateDocAccess = {
  __typename?: 'UserPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreferencesDeleteAccess = {
  __typename?: 'UserPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreferencesDeleteDocAccess = {
  __typename?: 'UserPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreferencesDocAccessFields = {
  __typename?: 'UserPreferencesDocAccessFields';
  createdAt?: Maybe<UserPreferencesDocAccessFields_CreatedAt>;
  setting?: Maybe<UserPreferencesDocAccessFields_Setting>;
  updatedAt?: Maybe<UserPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<UserPreferencesDocAccessFields_User>;
};

export type UserPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'UserPreferencesDocAccessFields_createdAt';
  create?: Maybe<UserPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UserPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UserPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UserPreferencesDocAccessFields_CreatedAt_Update>;
};

export type UserPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'UserPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UserPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'UserPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'UserPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_Setting = {
  __typename?: 'UserPreferencesDocAccessFields_setting';
  create?: Maybe<UserPreferencesDocAccessFields_Setting_Create>;
  delete?: Maybe<UserPreferencesDocAccessFields_Setting_Delete>;
  read?: Maybe<UserPreferencesDocAccessFields_Setting_Read>;
  update?: Maybe<UserPreferencesDocAccessFields_Setting_Update>;
};

export type UserPreferencesDocAccessFields_Setting_Create = {
  __typename?: 'UserPreferencesDocAccessFields_setting_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_Setting_Delete = {
  __typename?: 'UserPreferencesDocAccessFields_setting_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_Setting_Read = {
  __typename?: 'UserPreferencesDocAccessFields_setting_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_Setting_Update = {
  __typename?: 'UserPreferencesDocAccessFields_setting_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'UserPreferencesDocAccessFields_updatedAt';
  create?: Maybe<UserPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UserPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UserPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UserPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type UserPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UserPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UserPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UserPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UserPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_User = {
  __typename?: 'UserPreferencesDocAccessFields_user';
  create?: Maybe<UserPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<UserPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<UserPreferencesDocAccessFields_User_Read>;
  update?: Maybe<UserPreferencesDocAccessFields_User_Update>;
};

export type UserPreferencesDocAccessFields_User_Create = {
  __typename?: 'UserPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_User_Delete = {
  __typename?: 'UserPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_User_Read = {
  __typename?: 'UserPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesDocAccessFields_User_Update = {
  __typename?: 'UserPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields = {
  __typename?: 'UserPreferencesFields';
  createdAt?: Maybe<UserPreferencesFields_CreatedAt>;
  setting?: Maybe<UserPreferencesFields_Setting>;
  updatedAt?: Maybe<UserPreferencesFields_UpdatedAt>;
  user?: Maybe<UserPreferencesFields_User>;
};

export type UserPreferencesFields_CreatedAt = {
  __typename?: 'UserPreferencesFields_createdAt';
  create?: Maybe<UserPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<UserPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<UserPreferencesFields_CreatedAt_Read>;
  update?: Maybe<UserPreferencesFields_CreatedAt_Update>;
};

export type UserPreferencesFields_CreatedAt_Create = {
  __typename?: 'UserPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_CreatedAt_Delete = {
  __typename?: 'UserPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_CreatedAt_Read = {
  __typename?: 'UserPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_CreatedAt_Update = {
  __typename?: 'UserPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_Setting = {
  __typename?: 'UserPreferencesFields_setting';
  create?: Maybe<UserPreferencesFields_Setting_Create>;
  delete?: Maybe<UserPreferencesFields_Setting_Delete>;
  read?: Maybe<UserPreferencesFields_Setting_Read>;
  update?: Maybe<UserPreferencesFields_Setting_Update>;
};

export type UserPreferencesFields_Setting_Create = {
  __typename?: 'UserPreferencesFields_setting_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_Setting_Delete = {
  __typename?: 'UserPreferencesFields_setting_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_Setting_Read = {
  __typename?: 'UserPreferencesFields_setting_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_Setting_Update = {
  __typename?: 'UserPreferencesFields_setting_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_UpdatedAt = {
  __typename?: 'UserPreferencesFields_updatedAt';
  create?: Maybe<UserPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<UserPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<UserPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<UserPreferencesFields_UpdatedAt_Update>;
};

export type UserPreferencesFields_UpdatedAt_Create = {
  __typename?: 'UserPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'UserPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_UpdatedAt_Read = {
  __typename?: 'UserPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_UpdatedAt_Update = {
  __typename?: 'UserPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_User = {
  __typename?: 'UserPreferencesFields_user';
  create?: Maybe<UserPreferencesFields_User_Create>;
  delete?: Maybe<UserPreferencesFields_User_Delete>;
  read?: Maybe<UserPreferencesFields_User_Read>;
  update?: Maybe<UserPreferencesFields_User_Update>;
};

export type UserPreferencesFields_User_Create = {
  __typename?: 'UserPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_User_Delete = {
  __typename?: 'UserPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_User_Read = {
  __typename?: 'UserPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesFields_User_Update = {
  __typename?: 'UserPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserPreferencesReadAccess = {
  __typename?: 'UserPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreferencesReadDocAccess = {
  __typename?: 'UserPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreferencesUpdateAccess = {
  __typename?: 'UserPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserPreferencesUpdateDocAccess = {
  __typename?: 'UserPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum UserUpdate_Role_MutationInput {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type User_Accounts = {
  __typename?: 'User_Accounts';
  docs: Array<Account>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Carts = {
  __typename?: 'User_Carts';
  docs: Array<Cart>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Items = {
  __typename?: 'User_Items';
  docs: Array<UserItem>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Point = {
  __typename?: 'User_Point';
  docs: Array<UserPoint>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Preference = {
  __typename?: 'User_Preference';
  docs: Array<UserPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type User_Supplier = {
  __typename?: 'User_Supplier';
  docs: Array<Supplier>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type User_Avatar_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Credit_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Orders_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum User_Role {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export enum User_Role_Input {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export enum User_Role_MutationInput {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type User_Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  equals?: InputMaybe<User_Role_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  not_equals?: InputMaybe<User_Role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Username_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  avatar?: InputMaybe<User_Avatar_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  credit?: InputMaybe<User_Credit_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  image?: InputMaybe<User_Image_Operator>;
  orders?: InputMaybe<User_Orders_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  avatar?: InputMaybe<User_Avatar_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  credit?: InputMaybe<User_Credit_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  image?: InputMaybe<User_Image_Operator>;
  orders?: InputMaybe<User_Orders_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  avatar?: InputMaybe<User_Avatar_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  credit?: InputMaybe<User_Credit_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  image?: InputMaybe<User_Image_Operator>;
  orders?: InputMaybe<User_Orders_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  accounts?: Maybe<UsersDocAccessFields_Accounts>;
  avatar?: Maybe<UsersDocAccessFields_Avatar>;
  carts?: Maybe<UsersDocAccessFields_Carts>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  credit?: Maybe<UsersDocAccessFields_Credit>;
  email?: Maybe<UsersDocAccessFields_Email>;
  image?: Maybe<UsersDocAccessFields_Image>;
  items?: Maybe<UsersDocAccessFields_Items>;
  orders?: Maybe<UsersDocAccessFields_Orders>;
  point?: Maybe<UsersDocAccessFields_Point>;
  preference?: Maybe<UsersDocAccessFields_Preference>;
  role?: Maybe<UsersDocAccessFields_Role>;
  sessions?: Maybe<UsersDocAccessFields_Sessions>;
  supplier?: Maybe<UsersDocAccessFields_Supplier>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
  username?: Maybe<UsersDocAccessFields_Username>;
};

export type UsersDocAccessFields_Accounts = {
  __typename?: 'UsersDocAccessFields_accounts';
  create?: Maybe<UsersDocAccessFields_Accounts_Create>;
  delete?: Maybe<UsersDocAccessFields_Accounts_Delete>;
  read?: Maybe<UsersDocAccessFields_Accounts_Read>;
  update?: Maybe<UsersDocAccessFields_Accounts_Update>;
};

export type UsersDocAccessFields_Accounts_Create = {
  __typename?: 'UsersDocAccessFields_accounts_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Accounts_Delete = {
  __typename?: 'UsersDocAccessFields_accounts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Accounts_Read = {
  __typename?: 'UsersDocAccessFields_accounts_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Accounts_Update = {
  __typename?: 'UsersDocAccessFields_accounts_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar = {
  __typename?: 'UsersDocAccessFields_avatar';
  create?: Maybe<UsersDocAccessFields_Avatar_Create>;
  delete?: Maybe<UsersDocAccessFields_Avatar_Delete>;
  read?: Maybe<UsersDocAccessFields_Avatar_Read>;
  update?: Maybe<UsersDocAccessFields_Avatar_Update>;
};

export type UsersDocAccessFields_Avatar_Create = {
  __typename?: 'UsersDocAccessFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Delete = {
  __typename?: 'UsersDocAccessFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Read = {
  __typename?: 'UsersDocAccessFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Avatar_Update = {
  __typename?: 'UsersDocAccessFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Carts = {
  __typename?: 'UsersDocAccessFields_carts';
  create?: Maybe<UsersDocAccessFields_Carts_Create>;
  delete?: Maybe<UsersDocAccessFields_Carts_Delete>;
  read?: Maybe<UsersDocAccessFields_Carts_Read>;
  update?: Maybe<UsersDocAccessFields_Carts_Update>;
};

export type UsersDocAccessFields_Carts_Create = {
  __typename?: 'UsersDocAccessFields_carts_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Carts_Delete = {
  __typename?: 'UsersDocAccessFields_carts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Carts_Read = {
  __typename?: 'UsersDocAccessFields_carts_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Carts_Update = {
  __typename?: 'UsersDocAccessFields_carts_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Credit = {
  __typename?: 'UsersDocAccessFields_credit';
  create?: Maybe<UsersDocAccessFields_Credit_Create>;
  delete?: Maybe<UsersDocAccessFields_Credit_Delete>;
  read?: Maybe<UsersDocAccessFields_Credit_Read>;
  update?: Maybe<UsersDocAccessFields_Credit_Update>;
};

export type UsersDocAccessFields_Credit_Create = {
  __typename?: 'UsersDocAccessFields_credit_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Credit_Delete = {
  __typename?: 'UsersDocAccessFields_credit_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Credit_Read = {
  __typename?: 'UsersDocAccessFields_credit_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Credit_Update = {
  __typename?: 'UsersDocAccessFields_credit_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Image = {
  __typename?: 'UsersDocAccessFields_image';
  create?: Maybe<UsersDocAccessFields_Image_Create>;
  delete?: Maybe<UsersDocAccessFields_Image_Delete>;
  read?: Maybe<UsersDocAccessFields_Image_Read>;
  update?: Maybe<UsersDocAccessFields_Image_Update>;
};

export type UsersDocAccessFields_Image_Create = {
  __typename?: 'UsersDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Image_Delete = {
  __typename?: 'UsersDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Image_Read = {
  __typename?: 'UsersDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Image_Update = {
  __typename?: 'UsersDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Items = {
  __typename?: 'UsersDocAccessFields_items';
  create?: Maybe<UsersDocAccessFields_Items_Create>;
  delete?: Maybe<UsersDocAccessFields_Items_Delete>;
  read?: Maybe<UsersDocAccessFields_Items_Read>;
  update?: Maybe<UsersDocAccessFields_Items_Update>;
};

export type UsersDocAccessFields_Items_Create = {
  __typename?: 'UsersDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Items_Delete = {
  __typename?: 'UsersDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Items_Read = {
  __typename?: 'UsersDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Items_Update = {
  __typename?: 'UsersDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders = {
  __typename?: 'UsersDocAccessFields_orders';
  create?: Maybe<UsersDocAccessFields_Orders_Create>;
  delete?: Maybe<UsersDocAccessFields_Orders_Delete>;
  read?: Maybe<UsersDocAccessFields_Orders_Read>;
  update?: Maybe<UsersDocAccessFields_Orders_Update>;
};

export type UsersDocAccessFields_Orders_Create = {
  __typename?: 'UsersDocAccessFields_orders_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Delete = {
  __typename?: 'UsersDocAccessFields_orders_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Read = {
  __typename?: 'UsersDocAccessFields_orders_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Orders_Update = {
  __typename?: 'UsersDocAccessFields_orders_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Point = {
  __typename?: 'UsersDocAccessFields_point';
  create?: Maybe<UsersDocAccessFields_Point_Create>;
  delete?: Maybe<UsersDocAccessFields_Point_Delete>;
  read?: Maybe<UsersDocAccessFields_Point_Read>;
  update?: Maybe<UsersDocAccessFields_Point_Update>;
};

export type UsersDocAccessFields_Point_Create = {
  __typename?: 'UsersDocAccessFields_point_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Point_Delete = {
  __typename?: 'UsersDocAccessFields_point_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Point_Read = {
  __typename?: 'UsersDocAccessFields_point_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Point_Update = {
  __typename?: 'UsersDocAccessFields_point_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Preference = {
  __typename?: 'UsersDocAccessFields_preference';
  create?: Maybe<UsersDocAccessFields_Preference_Create>;
  delete?: Maybe<UsersDocAccessFields_Preference_Delete>;
  read?: Maybe<UsersDocAccessFields_Preference_Read>;
  update?: Maybe<UsersDocAccessFields_Preference_Update>;
};

export type UsersDocAccessFields_Preference_Create = {
  __typename?: 'UsersDocAccessFields_preference_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Preference_Delete = {
  __typename?: 'UsersDocAccessFields_preference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Preference_Read = {
  __typename?: 'UsersDocAccessFields_preference_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Preference_Update = {
  __typename?: 'UsersDocAccessFields_preference_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role = {
  __typename?: 'UsersDocAccessFields_role';
  create?: Maybe<UsersDocAccessFields_Role_Create>;
  delete?: Maybe<UsersDocAccessFields_Role_Delete>;
  read?: Maybe<UsersDocAccessFields_Role_Read>;
  update?: Maybe<UsersDocAccessFields_Role_Update>;
};

export type UsersDocAccessFields_Role_Create = {
  __typename?: 'UsersDocAccessFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Delete = {
  __typename?: 'UsersDocAccessFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Read = {
  __typename?: 'UsersDocAccessFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Update = {
  __typename?: 'UsersDocAccessFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_Sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_Sessions_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Update>;
};

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersDocAccessFields_Sessions_Id>;
};

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Supplier = {
  __typename?: 'UsersDocAccessFields_supplier';
  create?: Maybe<UsersDocAccessFields_Supplier_Create>;
  delete?: Maybe<UsersDocAccessFields_Supplier_Delete>;
  read?: Maybe<UsersDocAccessFields_Supplier_Read>;
  update?: Maybe<UsersDocAccessFields_Supplier_Update>;
};

export type UsersDocAccessFields_Supplier_Create = {
  __typename?: 'UsersDocAccessFields_supplier_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Supplier_Delete = {
  __typename?: 'UsersDocAccessFields_supplier_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Supplier_Read = {
  __typename?: 'UsersDocAccessFields_supplier_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Supplier_Update = {
  __typename?: 'UsersDocAccessFields_supplier_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Username = {
  __typename?: 'UsersDocAccessFields_username';
  create?: Maybe<UsersDocAccessFields_Username_Create>;
  delete?: Maybe<UsersDocAccessFields_Username_Delete>;
  read?: Maybe<UsersDocAccessFields_Username_Read>;
  update?: Maybe<UsersDocAccessFields_Username_Update>;
};

export type UsersDocAccessFields_Username_Create = {
  __typename?: 'UsersDocAccessFields_username_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Username_Delete = {
  __typename?: 'UsersDocAccessFields_username_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Username_Read = {
  __typename?: 'UsersDocAccessFields_username_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Username_Update = {
  __typename?: 'UsersDocAccessFields_username_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  accounts?: Maybe<UsersFields_Accounts>;
  avatar?: Maybe<UsersFields_Avatar>;
  carts?: Maybe<UsersFields_Carts>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  credit?: Maybe<UsersFields_Credit>;
  email?: Maybe<UsersFields_Email>;
  image?: Maybe<UsersFields_Image>;
  items?: Maybe<UsersFields_Items>;
  orders?: Maybe<UsersFields_Orders>;
  point?: Maybe<UsersFields_Point>;
  preference?: Maybe<UsersFields_Preference>;
  role?: Maybe<UsersFields_Role>;
  sessions?: Maybe<UsersFields_Sessions>;
  supplier?: Maybe<UsersFields_Supplier>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
  username?: Maybe<UsersFields_Username>;
};

export type UsersFields_Accounts = {
  __typename?: 'UsersFields_accounts';
  create?: Maybe<UsersFields_Accounts_Create>;
  delete?: Maybe<UsersFields_Accounts_Delete>;
  read?: Maybe<UsersFields_Accounts_Read>;
  update?: Maybe<UsersFields_Accounts_Update>;
};

export type UsersFields_Accounts_Create = {
  __typename?: 'UsersFields_accounts_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Accounts_Delete = {
  __typename?: 'UsersFields_accounts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Accounts_Read = {
  __typename?: 'UsersFields_accounts_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Accounts_Update = {
  __typename?: 'UsersFields_accounts_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar = {
  __typename?: 'UsersFields_avatar';
  create?: Maybe<UsersFields_Avatar_Create>;
  delete?: Maybe<UsersFields_Avatar_Delete>;
  read?: Maybe<UsersFields_Avatar_Read>;
  update?: Maybe<UsersFields_Avatar_Update>;
};

export type UsersFields_Avatar_Create = {
  __typename?: 'UsersFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Delete = {
  __typename?: 'UsersFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Read = {
  __typename?: 'UsersFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Avatar_Update = {
  __typename?: 'UsersFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Carts = {
  __typename?: 'UsersFields_carts';
  create?: Maybe<UsersFields_Carts_Create>;
  delete?: Maybe<UsersFields_Carts_Delete>;
  read?: Maybe<UsersFields_Carts_Read>;
  update?: Maybe<UsersFields_Carts_Update>;
};

export type UsersFields_Carts_Create = {
  __typename?: 'UsersFields_carts_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Carts_Delete = {
  __typename?: 'UsersFields_carts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Carts_Read = {
  __typename?: 'UsersFields_carts_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Carts_Update = {
  __typename?: 'UsersFields_carts_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Credit = {
  __typename?: 'UsersFields_credit';
  create?: Maybe<UsersFields_Credit_Create>;
  delete?: Maybe<UsersFields_Credit_Delete>;
  read?: Maybe<UsersFields_Credit_Read>;
  update?: Maybe<UsersFields_Credit_Update>;
};

export type UsersFields_Credit_Create = {
  __typename?: 'UsersFields_credit_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Credit_Delete = {
  __typename?: 'UsersFields_credit_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Credit_Read = {
  __typename?: 'UsersFields_credit_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Credit_Update = {
  __typename?: 'UsersFields_credit_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Image = {
  __typename?: 'UsersFields_image';
  create?: Maybe<UsersFields_Image_Create>;
  delete?: Maybe<UsersFields_Image_Delete>;
  read?: Maybe<UsersFields_Image_Read>;
  update?: Maybe<UsersFields_Image_Update>;
};

export type UsersFields_Image_Create = {
  __typename?: 'UsersFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Image_Delete = {
  __typename?: 'UsersFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Image_Read = {
  __typename?: 'UsersFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Image_Update = {
  __typename?: 'UsersFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Items = {
  __typename?: 'UsersFields_items';
  create?: Maybe<UsersFields_Items_Create>;
  delete?: Maybe<UsersFields_Items_Delete>;
  read?: Maybe<UsersFields_Items_Read>;
  update?: Maybe<UsersFields_Items_Update>;
};

export type UsersFields_Items_Create = {
  __typename?: 'UsersFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Items_Delete = {
  __typename?: 'UsersFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Items_Read = {
  __typename?: 'UsersFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Items_Update = {
  __typename?: 'UsersFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders = {
  __typename?: 'UsersFields_orders';
  create?: Maybe<UsersFields_Orders_Create>;
  delete?: Maybe<UsersFields_Orders_Delete>;
  read?: Maybe<UsersFields_Orders_Read>;
  update?: Maybe<UsersFields_Orders_Update>;
};

export type UsersFields_Orders_Create = {
  __typename?: 'UsersFields_orders_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Delete = {
  __typename?: 'UsersFields_orders_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Read = {
  __typename?: 'UsersFields_orders_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Orders_Update = {
  __typename?: 'UsersFields_orders_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Point = {
  __typename?: 'UsersFields_point';
  create?: Maybe<UsersFields_Point_Create>;
  delete?: Maybe<UsersFields_Point_Delete>;
  read?: Maybe<UsersFields_Point_Read>;
  update?: Maybe<UsersFields_Point_Update>;
};

export type UsersFields_Point_Create = {
  __typename?: 'UsersFields_point_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Point_Delete = {
  __typename?: 'UsersFields_point_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Point_Read = {
  __typename?: 'UsersFields_point_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Point_Update = {
  __typename?: 'UsersFields_point_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Preference = {
  __typename?: 'UsersFields_preference';
  create?: Maybe<UsersFields_Preference_Create>;
  delete?: Maybe<UsersFields_Preference_Delete>;
  read?: Maybe<UsersFields_Preference_Read>;
  update?: Maybe<UsersFields_Preference_Update>;
};

export type UsersFields_Preference_Create = {
  __typename?: 'UsersFields_preference_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Preference_Delete = {
  __typename?: 'UsersFields_preference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Preference_Read = {
  __typename?: 'UsersFields_preference_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Preference_Update = {
  __typename?: 'UsersFields_preference_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role = {
  __typename?: 'UsersFields_role';
  create?: Maybe<UsersFields_Role_Create>;
  delete?: Maybe<UsersFields_Role_Delete>;
  read?: Maybe<UsersFields_Role_Read>;
  update?: Maybe<UsersFields_Role_Update>;
};

export type UsersFields_Role_Create = {
  __typename?: 'UsersFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Delete = {
  __typename?: 'UsersFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Read = {
  __typename?: 'UsersFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Update = {
  __typename?: 'UsersFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_Sessions_Create>;
  delete?: Maybe<UsersFields_Sessions_Delete>;
  fields?: Maybe<UsersFields_Sessions_Fields>;
  read?: Maybe<UsersFields_Sessions_Read>;
  update?: Maybe<UsersFields_Sessions_Update>;
};

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersFields_Sessions_Id>;
};

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_Sessions_Id_Create>;
  delete?: Maybe<UsersFields_Sessions_Id_Delete>;
  read?: Maybe<UsersFields_Sessions_Id_Read>;
  update?: Maybe<UsersFields_Sessions_Id_Update>;
};

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Supplier = {
  __typename?: 'UsersFields_supplier';
  create?: Maybe<UsersFields_Supplier_Create>;
  delete?: Maybe<UsersFields_Supplier_Delete>;
  read?: Maybe<UsersFields_Supplier_Read>;
  update?: Maybe<UsersFields_Supplier_Update>;
};

export type UsersFields_Supplier_Create = {
  __typename?: 'UsersFields_supplier_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Supplier_Delete = {
  __typename?: 'UsersFields_supplier_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Supplier_Read = {
  __typename?: 'UsersFields_supplier_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Supplier_Update = {
  __typename?: 'UsersFields_supplier_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Username = {
  __typename?: 'UsersFields_username';
  create?: Maybe<UsersFields_Username_Create>;
  delete?: Maybe<UsersFields_Username_Delete>;
  read?: Maybe<UsersFields_Username_Read>;
  update?: Maybe<UsersFields_Username_Update>;
};

export type UsersFields_Username_Create = {
  __typename?: 'UsersFields_username_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Username_Delete = {
  __typename?: 'UsersFields_username_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Username_Read = {
  __typename?: 'UsersFields_username_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Username_Update = {
  __typename?: 'UsersFields_username_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccountsAccess = {
  __typename?: 'accountsAccess';
  create?: Maybe<AccountsCreateAccess>;
  delete?: Maybe<AccountsDeleteAccess>;
  fields?: Maybe<AccountsFields>;
  read?: Maybe<AccountsReadAccess>;
  update?: Maybe<AccountsUpdateAccess>;
};

export type AccountsDocAccess = {
  __typename?: 'accountsDocAccess';
  create?: Maybe<AccountsCreateDocAccess>;
  delete?: Maybe<AccountsDeleteDocAccess>;
  fields?: Maybe<AccountsDocAccessFields>;
  read?: Maybe<AccountsReadDocAccess>;
  update?: Maybe<AccountsUpdateDocAccess>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Cart_ItemsAccess = {
  __typename?: 'cart_itemsAccess';
  create?: Maybe<CartItemsCreateAccess>;
  delete?: Maybe<CartItemsDeleteAccess>;
  fields?: Maybe<CartItemsFields>;
  read?: Maybe<CartItemsReadAccess>;
  update?: Maybe<CartItemsUpdateAccess>;
};

export type Cart_ItemsDocAccess = {
  __typename?: 'cart_itemsDocAccess';
  create?: Maybe<CartItemsCreateDocAccess>;
  delete?: Maybe<CartItemsDeleteDocAccess>;
  fields?: Maybe<CartItemsDocAccessFields>;
  read?: Maybe<CartItemsReadDocAccess>;
  update?: Maybe<CartItemsUpdateDocAccess>;
};

export type CartsAccess = {
  __typename?: 'cartsAccess';
  create?: Maybe<CartsCreateAccess>;
  delete?: Maybe<CartsDeleteAccess>;
  fields?: Maybe<CartsFields>;
  read?: Maybe<CartsReadAccess>;
  update?: Maybe<CartsUpdateAccess>;
};

export type CartsDocAccess = {
  __typename?: 'cartsDocAccess';
  create?: Maybe<CartsCreateDocAccess>;
  delete?: Maybe<CartsDeleteDocAccess>;
  fields?: Maybe<CartsDocAccessFields>;
  read?: Maybe<CartsReadDocAccess>;
  update?: Maybe<CartsUpdateDocAccess>;
};

export type CountAccounts = {
  __typename?: 'countAccounts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCartItems = {
  __typename?: 'countCartItems';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCarts = {
  __typename?: 'countCarts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountFaqs = {
  __typename?: 'countFaqs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountOrderItems = {
  __typename?: 'countOrderItems';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountOrders = {
  __typename?: 'countOrders';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadKvs = {
  __typename?: 'countPayloadKvs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPointTransactions = {
  __typename?: 'countPointTransactions';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPosts = {
  __typename?: 'countPosts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPrices = {
  __typename?: 'countPrices';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountProductPromotions = {
  __typename?: 'countProductPromotions';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountProducts = {
  __typename?: 'countProducts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPromotions = {
  __typename?: 'countPromotions';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountRatings = {
  __typename?: 'countRatings';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountStocks = {
  __typename?: 'countStocks';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountSuppliers = {
  __typename?: 'countSuppliers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountTags = {
  __typename?: 'countTags';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUserItems = {
  __typename?: 'countUserItems';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUserPoints = {
  __typename?: 'countUserPoints';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUserPreferences = {
  __typename?: 'countUserPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type FaqsAccess = {
  __typename?: 'faqsAccess';
  create?: Maybe<FaqsCreateAccess>;
  delete?: Maybe<FaqsDeleteAccess>;
  fields?: Maybe<FaqsFields>;
  read?: Maybe<FaqsReadAccess>;
  update?: Maybe<FaqsUpdateAccess>;
};

export type FaqsDocAccess = {
  __typename?: 'faqsDocAccess';
  create?: Maybe<FaqsCreateDocAccess>;
  delete?: Maybe<FaqsDeleteDocAccess>;
  fields?: Maybe<FaqsDocAccessFields>;
  read?: Maybe<FaqsReadDocAccess>;
  update?: Maybe<FaqsUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationAccountInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAccountUpdateInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCartInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<Cart_Status_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCartItemInput = {
  cart?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCartItemUpdateInput = {
  cart?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCartUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<CartUpdate_Status_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFaqInput = {
  answer?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFaqUpdateInput = {
  answer?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationOrderInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status: Order_Status_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderItemInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  userItem?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderItemUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  userItem?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<OrderUpdate_Status_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadKvInput = {
  data: Scalars['JSON']['input'];
  key: Scalars['String']['input'];
};

export type MutationPayloadKvUpdateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPointTransactionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiredAt?: InputMaybe<Scalars['String']['input']>;
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PointTransaction_Status_MutationInput>;
  type: PointTransaction_Type_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPointTransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiredAt?: InputMaybe<Scalars['String']['input']>;
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PointTransactionUpdate_Status_MutationInput>;
  type?: InputMaybe<PointTransactionUpdate_Type_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPriceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_type?: InputMaybe<Price_Price_Type_MutationInput>;
  product?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPriceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_type?: InputMaybe<PriceUpdate_Price_Type_MutationInput>;
  product?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductInput = {
  averageScore?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  media?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  previewImage?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status: Product_Status_MutationInput;
  stock?: InputMaybe<Scalars['String']['input']>;
  supplier?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductPromotionInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productId?: InputMaybe<Scalars['String']['input']>;
  promotionId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductPromotionUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productId?: InputMaybe<Scalars['String']['input']>;
  promotionId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdateInput = {
  averageScore?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['JSON']['input']>;
  media?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewImage?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<ProductUpdate_Status_MutationInput>;
  stock?: InputMaybe<Scalars['String']['input']>;
  supplier?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPromotionInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  discountType?: InputMaybe<Promotion_DiscountType_MutationInput>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPromotionUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  discountType?: InputMaybe<PromotionUpdate_DiscountType_MutationInput>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRatingInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRatingUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSettingInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  redirect: Scalars['String']['input'];
  smtpHost: Scalars['String']['input'];
  smtpPass: Scalars['String']['input'];
  smtpPort: Scalars['String']['input'];
  smtpUser: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStockInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  type: Stock_Type_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStockUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<StockUpdate_Type_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSupplierInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSupplierUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTagInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  credit?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role: User_Role_MutationInput;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type MutationUserItemInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserItemUpdateInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserPointInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  total_point: Scalars['Float']['input'];
  total_spent: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserPointUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  total_point?: InputMaybe<Scalars['Float']['input']>;
  total_spent?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  setting?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  setting?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  credit?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserUpdate_Role_MutationInput>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type MutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type Order_ItemsAccess = {
  __typename?: 'order_itemsAccess';
  create?: Maybe<OrderItemsCreateAccess>;
  delete?: Maybe<OrderItemsDeleteAccess>;
  fields?: Maybe<OrderItemsFields>;
  read?: Maybe<OrderItemsReadAccess>;
  update?: Maybe<OrderItemsUpdateAccess>;
};

export type Order_ItemsDocAccess = {
  __typename?: 'order_itemsDocAccess';
  create?: Maybe<OrderItemsCreateDocAccess>;
  delete?: Maybe<OrderItemsDeleteDocAccess>;
  fields?: Maybe<OrderItemsDocAccessFields>;
  read?: Maybe<OrderItemsReadDocAccess>;
  update?: Maybe<OrderItemsUpdateDocAccess>;
};

export type OrdersAccess = {
  __typename?: 'ordersAccess';
  create?: Maybe<OrdersCreateAccess>;
  delete?: Maybe<OrdersDeleteAccess>;
  fields?: Maybe<OrdersFields>;
  read?: Maybe<OrdersReadAccess>;
  update?: Maybe<OrdersUpdateAccess>;
};

export type OrdersDocAccess = {
  __typename?: 'ordersDocAccess';
  create?: Maybe<OrdersCreateDocAccess>;
  delete?: Maybe<OrdersDeleteDocAccess>;
  fields?: Maybe<OrdersDocAccessFields>;
  read?: Maybe<OrdersReadDocAccess>;
  update?: Maybe<OrdersUpdateDocAccess>;
};

export type Payload_KvAccess = {
  __typename?: 'payload_kvAccess';
  create?: Maybe<PayloadKvCreateAccess>;
  delete?: Maybe<PayloadKvDeleteAccess>;
  fields?: Maybe<PayloadKvFields>;
  read?: Maybe<PayloadKvReadAccess>;
  update?: Maybe<PayloadKvUpdateAccess>;
};

export type Payload_KvDocAccess = {
  __typename?: 'payload_kvDocAccess';
  create?: Maybe<PayloadKvCreateDocAccess>;
  delete?: Maybe<PayloadKvDeleteDocAccess>;
  fields?: Maybe<PayloadKvDocAccessFields>;
  read?: Maybe<PayloadKvReadDocAccess>;
  update?: Maybe<PayloadKvUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type Point_TransactionsAccess = {
  __typename?: 'point_transactionsAccess';
  create?: Maybe<PointTransactionsCreateAccess>;
  delete?: Maybe<PointTransactionsDeleteAccess>;
  fields?: Maybe<PointTransactionsFields>;
  read?: Maybe<PointTransactionsReadAccess>;
  update?: Maybe<PointTransactionsUpdateAccess>;
};

export type Point_TransactionsDocAccess = {
  __typename?: 'point_transactionsDocAccess';
  create?: Maybe<PointTransactionsCreateDocAccess>;
  delete?: Maybe<PointTransactionsDeleteDocAccess>;
  fields?: Maybe<PointTransactionsDocAccessFields>;
  read?: Maybe<PointTransactionsReadDocAccess>;
  update?: Maybe<PointTransactionsUpdateDocAccess>;
};

export type PostsAccess = {
  __typename?: 'postsAccess';
  create?: Maybe<PostsCreateAccess>;
  delete?: Maybe<PostsDeleteAccess>;
  fields?: Maybe<PostsFields>;
  read?: Maybe<PostsReadAccess>;
  update?: Maybe<PostsUpdateAccess>;
};

export type PostsDocAccess = {
  __typename?: 'postsDocAccess';
  create?: Maybe<PostsCreateDocAccess>;
  delete?: Maybe<PostsDeleteDocAccess>;
  fields?: Maybe<PostsDocAccessFields>;
  read?: Maybe<PostsReadDocAccess>;
  update?: Maybe<PostsUpdateDocAccess>;
};

export type PricesAccess = {
  __typename?: 'pricesAccess';
  create?: Maybe<PricesCreateAccess>;
  delete?: Maybe<PricesDeleteAccess>;
  fields?: Maybe<PricesFields>;
  read?: Maybe<PricesReadAccess>;
  update?: Maybe<PricesUpdateAccess>;
};

export type PricesDocAccess = {
  __typename?: 'pricesDocAccess';
  create?: Maybe<PricesCreateDocAccess>;
  delete?: Maybe<PricesDeleteDocAccess>;
  fields?: Maybe<PricesDocAccessFields>;
  read?: Maybe<PricesReadDocAccess>;
  update?: Maybe<PricesUpdateDocAccess>;
};

export type Product_PromotionsAccess = {
  __typename?: 'product_promotionsAccess';
  create?: Maybe<ProductPromotionsCreateAccess>;
  delete?: Maybe<ProductPromotionsDeleteAccess>;
  fields?: Maybe<ProductPromotionsFields>;
  read?: Maybe<ProductPromotionsReadAccess>;
  update?: Maybe<ProductPromotionsUpdateAccess>;
};

export type Product_PromotionsDocAccess = {
  __typename?: 'product_promotionsDocAccess';
  create?: Maybe<ProductPromotionsCreateDocAccess>;
  delete?: Maybe<ProductPromotionsDeleteDocAccess>;
  fields?: Maybe<ProductPromotionsDocAccessFields>;
  read?: Maybe<ProductPromotionsReadDocAccess>;
  update?: Maybe<ProductPromotionsUpdateDocAccess>;
};

export type ProductsAccess = {
  __typename?: 'productsAccess';
  create?: Maybe<ProductsCreateAccess>;
  delete?: Maybe<ProductsDeleteAccess>;
  fields?: Maybe<ProductsFields>;
  read?: Maybe<ProductsReadAccess>;
  update?: Maybe<ProductsUpdateAccess>;
};

export type ProductsDocAccess = {
  __typename?: 'productsDocAccess';
  create?: Maybe<ProductsCreateDocAccess>;
  delete?: Maybe<ProductsDeleteDocAccess>;
  fields?: Maybe<ProductsDocAccessFields>;
  read?: Maybe<ProductsReadDocAccess>;
  update?: Maybe<ProductsUpdateDocAccess>;
};

export type PromotionsAccess = {
  __typename?: 'promotionsAccess';
  create?: Maybe<PromotionsCreateAccess>;
  delete?: Maybe<PromotionsDeleteAccess>;
  fields?: Maybe<PromotionsFields>;
  read?: Maybe<PromotionsReadAccess>;
  update?: Maybe<PromotionsUpdateAccess>;
};

export type PromotionsDocAccess = {
  __typename?: 'promotionsDocAccess';
  create?: Maybe<PromotionsCreateDocAccess>;
  delete?: Maybe<PromotionsDeleteDocAccess>;
  fields?: Maybe<PromotionsDocAccessFields>;
  read?: Maybe<PromotionsReadDocAccess>;
  update?: Maybe<PromotionsUpdateDocAccess>;
};

export type RatingsAccess = {
  __typename?: 'ratingsAccess';
  create?: Maybe<RatingsCreateAccess>;
  delete?: Maybe<RatingsDeleteAccess>;
  fields?: Maybe<RatingsFields>;
  read?: Maybe<RatingsReadAccess>;
  update?: Maybe<RatingsUpdateAccess>;
};

export type RatingsDocAccess = {
  __typename?: 'ratingsDocAccess';
  create?: Maybe<RatingsCreateDocAccess>;
  delete?: Maybe<RatingsDeleteDocAccess>;
  fields?: Maybe<RatingsDocAccessFields>;
  read?: Maybe<RatingsReadDocAccess>;
  update?: Maybe<RatingsUpdateDocAccess>;
};

export type SettingsAccess = {
  __typename?: 'settingsAccess';
  fields?: Maybe<SettingsFields>;
  read?: Maybe<SettingsReadAccess>;
  update?: Maybe<SettingsUpdateAccess>;
};

export type SettingsDocAccess = {
  __typename?: 'settingsDocAccess';
  fields?: Maybe<SettingsDocAccessFields>;
  read?: Maybe<SettingsReadDocAccess>;
  update?: Maybe<SettingsUpdateDocAccess>;
};

export type StocksAccess = {
  __typename?: 'stocksAccess';
  create?: Maybe<StocksCreateAccess>;
  delete?: Maybe<StocksDeleteAccess>;
  fields?: Maybe<StocksFields>;
  read?: Maybe<StocksReadAccess>;
  update?: Maybe<StocksUpdateAccess>;
};

export type StocksDocAccess = {
  __typename?: 'stocksDocAccess';
  create?: Maybe<StocksCreateDocAccess>;
  delete?: Maybe<StocksDeleteDocAccess>;
  fields?: Maybe<StocksDocAccessFields>;
  read?: Maybe<StocksReadDocAccess>;
  update?: Maybe<StocksUpdateDocAccess>;
};

export type SuppliersAccess = {
  __typename?: 'suppliersAccess';
  create?: Maybe<SuppliersCreateAccess>;
  delete?: Maybe<SuppliersDeleteAccess>;
  fields?: Maybe<SuppliersFields>;
  read?: Maybe<SuppliersReadAccess>;
  update?: Maybe<SuppliersUpdateAccess>;
};

export type SuppliersDocAccess = {
  __typename?: 'suppliersDocAccess';
  create?: Maybe<SuppliersCreateDocAccess>;
  delete?: Maybe<SuppliersDeleteDocAccess>;
  fields?: Maybe<SuppliersDocAccessFields>;
  read?: Maybe<SuppliersReadDocAccess>;
  update?: Maybe<SuppliersUpdateDocAccess>;
};

export type TagsAccess = {
  __typename?: 'tagsAccess';
  create?: Maybe<TagsCreateAccess>;
  delete?: Maybe<TagsDeleteAccess>;
  fields?: Maybe<TagsFields>;
  read?: Maybe<TagsReadAccess>;
  update?: Maybe<TagsUpdateAccess>;
};

export type TagsDocAccess = {
  __typename?: 'tagsDocAccess';
  create?: Maybe<TagsCreateDocAccess>;
  delete?: Maybe<TagsDeleteDocAccess>;
  fields?: Maybe<TagsDocAccessFields>;
  read?: Maybe<TagsReadDocAccess>;
  update?: Maybe<TagsUpdateDocAccess>;
};

export type User_ItemsAccess = {
  __typename?: 'user_itemsAccess';
  create?: Maybe<UserItemsCreateAccess>;
  delete?: Maybe<UserItemsDeleteAccess>;
  fields?: Maybe<UserItemsFields>;
  read?: Maybe<UserItemsReadAccess>;
  update?: Maybe<UserItemsUpdateAccess>;
};

export type User_ItemsDocAccess = {
  __typename?: 'user_itemsDocAccess';
  create?: Maybe<UserItemsCreateDocAccess>;
  delete?: Maybe<UserItemsDeleteDocAccess>;
  fields?: Maybe<UserItemsDocAccessFields>;
  read?: Maybe<UserItemsReadDocAccess>;
  update?: Maybe<UserItemsUpdateDocAccess>;
};

export type User_PointsAccess = {
  __typename?: 'user_pointsAccess';
  create?: Maybe<UserPointsCreateAccess>;
  delete?: Maybe<UserPointsDeleteAccess>;
  fields?: Maybe<UserPointsFields>;
  read?: Maybe<UserPointsReadAccess>;
  update?: Maybe<UserPointsUpdateAccess>;
};

export type User_PointsDocAccess = {
  __typename?: 'user_pointsDocAccess';
  create?: Maybe<UserPointsCreateDocAccess>;
  delete?: Maybe<UserPointsDeleteDocAccess>;
  fields?: Maybe<UserPointsDocAccessFields>;
  read?: Maybe<UserPointsReadDocAccess>;
  update?: Maybe<UserPointsUpdateDocAccess>;
};

export type User_PreferencesAccess = {
  __typename?: 'user_preferencesAccess';
  create?: Maybe<UserPreferencesCreateAccess>;
  delete?: Maybe<UserPreferencesDeleteAccess>;
  fields?: Maybe<UserPreferencesFields>;
  read?: Maybe<UserPreferencesReadAccess>;
  update?: Maybe<UserPreferencesUpdateAccess>;
};

export type User_PreferencesDocAccess = {
  __typename?: 'user_preferencesDocAccess';
  create?: Maybe<UserPreferencesCreateDocAccess>;
  delete?: Maybe<UserPreferencesDeleteDocAccess>;
  fields?: Maybe<UserPreferencesDocAccessFields>;
  read?: Maybe<UserPreferencesReadDocAccess>;
  update?: Maybe<UserPreferencesUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'usersLoginResult', exp?: number | null, token?: string | null } | null };

export type UpdateCartMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationCartUpdateInput;
}>;


export type UpdateCartMutation = { __typename?: 'Mutation', updateCart?: { __typename?: 'Cart', id: string, status?: Cart_Status | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: string } | null, items?: Array<{ __typename?: 'CartItem', id: string }> | null } | null };

export type GetCartQueryVariables = Exact<{
  where?: InputMaybe<Cart_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCartQuery = { __typename?: 'Query', Carts?: { __typename?: 'Carts', docs: Array<{ __typename?: 'Cart', createdAt?: any | null, id: string, status?: Cart_Status | null, updatedAt?: any | null, items?: Array<{ __typename?: 'CartItem', id: string, quantity: number, product?: { __typename?: 'Product', id: string, name: string, description?: string | null, details?: any | null, averageScore?: number | null, status: Product_Status, publishedAt?: any | null, updatedAt?: any | null, createdAt?: any | null, supplier?: { __typename?: 'Supplier', id: string, name: string, description?: string | null, user?: { __typename?: 'User', id: string, email: any, username: string } | null } | null, price?: { __typename?: 'Price', price?: number | null, description?: string | null, price_type?: Price_Price_Type | null, id: string } | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null, previewImage?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null, media?: Array<
            | { __typename?: 'ExternalMedia', url: string }
            | { __typename?: 'InternalMedia', file?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null }
          > | null } | null }> | null, user?: { __typename?: 'User', id: string, username: string } | null }> } | null };

export type CreateCartItemMutationVariables = Exact<{
  data: MutationCartItemInput;
}>;


export type CreateCartItemMutation = { __typename?: 'Mutation', createCartItem?: { __typename?: 'CartItem', id: string, quantity: number, cart?: { __typename?: 'Cart', id: string } | null, product?: { __typename?: 'Product', id: string } | null } | null };

export type DeleteCartItemMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCartItemMutation = { __typename?: 'Mutation', deleteCartItem?: { __typename?: 'CartItem', id: string } | null };

export type MediaFieldFragment = { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null };

export type GetMediaQueryVariables = Exact<{
  where?: InputMaybe<Media_Where>;
}>;


export type GetMediaQuery = { __typename?: 'Query', allMedia?: { __typename?: 'allMedia', docs: Array<{ __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null }> } | null };

export type CreateMediaMutationVariables = Exact<{
  data: MutationMediaInput;
}>;


export type CreateMediaMutation = { __typename?: 'Mutation', createMedia?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null };

export type PointTransactionFieldFragment = { __typename?: 'PointTransaction', id: string, type: PointTransaction_Type, amount?: number | null, status?: PointTransaction_Status | null, metaData?: any | null, expiredAt?: any | null, createdAt?: any | null, updatedAt?: any | null, isFavorite?: boolean | null, user?: { __typename?: 'User', id: string } | null, orders?: Array<{ __typename?: 'Order', id: string }> | null };

export type GetPointTransactionsQueryVariables = Exact<{
  where?: InputMaybe<PointTransaction_Where>;
  sort?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPointTransactionsQuery = { __typename?: 'Query', PointTransactions?: { __typename?: 'PointTransactions', totalDocs: number, totalPages: number, page: number, limit: number, hasNextPage: boolean, hasPrevPage: boolean, nextPage?: number | null, prevPage?: number | null, docs: Array<{ __typename?: 'PointTransaction', id: string, type: PointTransaction_Type, amount?: number | null, status?: PointTransaction_Status | null, metaData?: any | null, expiredAt?: any | null, createdAt?: any | null, updatedAt?: any | null, isFavorite?: boolean | null, user?: { __typename?: 'User', id: string } | null, orders?: Array<{ __typename?: 'Order', id: string }> | null }> } | null };

export type CreatePointTransactionMutationVariables = Exact<{
  data: MutationPointTransactionInput;
}>;


export type CreatePointTransactionMutation = { __typename?: 'Mutation', createPointTransaction?: { __typename?: 'PointTransaction', id: string, type: PointTransaction_Type, amount?: number | null, status?: PointTransaction_Status | null, metaData?: any | null, expiredAt?: any | null, createdAt?: any | null, updatedAt?: any | null, isFavorite?: boolean | null, user?: { __typename?: 'User', id: string } | null, orders?: Array<{ __typename?: 'Order', id: string }> | null } | null };

export type UpdatePointTransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationPointTransactionUpdateInput;
}>;


export type UpdatePointTransactionMutation = { __typename?: 'Mutation', updatePointTransaction?: { __typename?: 'PointTransaction', id: string, type: PointTransaction_Type, amount?: number | null, status?: PointTransaction_Status | null, metaData?: any | null, expiredAt?: any | null, createdAt?: any | null, updatedAt?: any | null, isFavorite?: boolean | null, user?: { __typename?: 'User', id: string } | null, orders?: Array<{ __typename?: 'Order', id: string }> | null } | null };

export type DeletePointTransactionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePointTransactionMutation = { __typename?: 'Mutation', deletePointTransaction?: { __typename?: 'PointTransaction', id: string, type: PointTransaction_Type, amount?: number | null, status?: PointTransaction_Status | null, metaData?: any | null, expiredAt?: any | null, createdAt?: any | null, updatedAt?: any | null, isFavorite?: boolean | null, user?: { __typename?: 'User', id: string } | null, orders?: Array<{ __typename?: 'Order', id: string }> | null } | null };

export type ProductFieldsFragment = { __typename?: 'Product', id: string, name: string, description?: string | null, details?: any | null, averageScore?: number | null, status: Product_Status, publishedAt?: any | null, updatedAt?: any | null, createdAt?: any | null, supplier?: { __typename?: 'Supplier', id: string, name: string, description?: string | null, user?: { __typename?: 'User', id: string, email: any, username: string } | null } | null, price?: { __typename?: 'Price', price?: number | null, description?: string | null, price_type?: Price_Price_Type | null, id: string } | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null, previewImage?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null, media?: Array<
    | { __typename?: 'ExternalMedia', url: string }
    | { __typename?: 'InternalMedia', file?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null }
  > | null };

export type GetProductsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Product_Where>;
}>;


export type GetProductsQuery = { __typename?: 'Query', Products?: { __typename?: 'Products', totalDocs: number, totalPages: number, page: number, limit: number, hasNextPage: boolean, hasPrevPage: boolean, nextPage?: number | null, prevPage?: number | null, docs: Array<{ __typename?: 'Product', id: string, name: string, description?: string | null, details?: any | null, averageScore?: number | null, status: Product_Status, publishedAt?: any | null, updatedAt?: any | null, createdAt?: any | null, supplier?: { __typename?: 'Supplier', id: string, name: string, description?: string | null, user?: { __typename?: 'User', id: string, email: any, username: string } | null } | null, price?: { __typename?: 'Price', price?: number | null, description?: string | null, price_type?: Price_Price_Type | null, id: string } | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null, previewImage?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null, media?: Array<
        | { __typename?: 'ExternalMedia', url: string }
        | { __typename?: 'InternalMedia', file?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null }
      > | null }> } | null };

export type GetProductsCountQueryVariables = Exact<{
  where?: InputMaybe<Product_Where>;
}>;


export type GetProductsCountQuery = { __typename?: 'Query', Products?: { __typename?: 'Products', totalDocs: number } | null };

export type GetProductQueryVariables = Exact<{
  where?: InputMaybe<Product_Where>;
}>;


export type GetProductQuery = { __typename?: 'Query', Products?: { __typename?: 'Products', docs: Array<{ __typename?: 'Product', id: string, name: string, description?: string | null, details?: any | null, averageScore?: number | null, status: Product_Status, publishedAt?: any | null, updatedAt?: any | null, createdAt?: any | null, supplier?: { __typename?: 'Supplier', id: string, name: string, description?: string | null, user?: { __typename?: 'User', id: string, email: any, username: string } | null } | null, price?: { __typename?: 'Price', price?: number | null, description?: string | null, price_type?: Price_Price_Type | null, id: string } | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null, previewImage?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null, media?: Array<
        | { __typename?: 'ExternalMedia', url: string }
        | { __typename?: 'InternalMedia', file?: { __typename?: 'Media', id: string, name?: string | null, altText?: string | null, filesize?: number | null, width?: number | null, height?: number | null, url?: string | null } | null }
      > | null }> } | null };

export type SupplierFieldsFragment = { __typename?: 'Supplier', id: string, name: string, description?: string | null, user?: { __typename?: 'User', id: string, email: any, username: string } | null };

export type GetUserAItemConfigQueryVariables = Exact<{
  where?: InputMaybe<UserItem_Where>;
}>;


export type GetUserAItemConfigQuery = { __typename?: 'Query', UserItems?: { __typename?: 'UserItems', docs: Array<{ __typename: 'UserItem', config?: any | null, createdAt?: any | null, id: string, updatedAt?: any | null, item?: { __typename?: 'OrderItem', id: string, product?: { __typename?: 'Product', name: string, status: Product_Status, createdAt?: any | null, updatedAt?: any | null, previewImage?: { __typename?: 'Media', altText?: string | null, id: string, name?: string | null, url?: string | null, filesize?: number | null, height?: number | null, width?: number | null } | null } | null } | null, user?: { __typename?: 'User', id: string, email: any, username: string } | null }> } | null };

export type GetUserPointQueryVariables = Exact<{
  where?: InputMaybe<UserPoint_Where>;
}>;


export type GetUserPointQuery = { __typename?: 'Query', UserPoints?: { __typename?: 'UserPoints', docs: Array<{ __typename: 'UserPoint', id: string, total_point: number, updatedAt?: any | null, total_spent: number, user?: { __typename?: 'User', id: string } | null }> } | null };

export type GetUserPreferenceQueryVariables = Exact<{
  where?: InputMaybe<UserPreference_Where>;
}>;


export type GetUserPreferenceQuery = { __typename?: 'Query', UserPreferences?: { __typename?: 'UserPreferences', docs: Array<{ __typename?: 'UserPreference', id: string, setting?: any | null, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: string } | null }> } | null };

export type CreateUserPreferenceMutationVariables = Exact<{
  data: MutationUserPreferenceInput;
}>;


export type CreateUserPreferenceMutation = { __typename?: 'Mutation', createUserPreference?: { __typename?: 'UserPreference', id: string, setting?: any | null, user?: { __typename?: 'User', id: string } | null } | null };

export type UpdateUserPreferenceMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: MutationUserPreferenceUpdateInput;
}>;


export type UpdateUserPreferenceMutation = { __typename?: 'Mutation', updateUserPreference?: { __typename?: 'UserPreference', id: string, setting?: any | null } | null };

export type DeleteUserPreferenceMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserPreferenceMutation = { __typename?: 'Mutation', deleteUserPreference?: { __typename?: 'UserPreference', id: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', Users?: { __typename?: 'Users', docs: Array<{ __typename?: 'User', username: string, email: any, role: User_Role }> } | null };

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
export const PointTransactionFieldFragmentDoc = new TypedDocumentString(`
    fragment PointTransactionField on PointTransaction {
  id
  user {
    id
  }
  type
  amount
  status
  orders {
    id
  }
  metaData
  expiredAt
  createdAt
  updatedAt
  isFavorite
}
    `, {"fragmentName":"PointTransactionField"}) as unknown as TypedDocumentString<PointTransactionFieldFragment, unknown>;
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
}
    `, {"fragmentName":"SupplierFields"}) as unknown as TypedDocumentString<SupplierFieldsFragment, unknown>;
export const MediaFieldFragmentDoc = new TypedDocumentString(`
    fragment MediaField on Media {
  id
  name
  altText
  filesize
  width
  height
  url
}
    `, {"fragmentName":"MediaField"}) as unknown as TypedDocumentString<MediaFieldFragment, unknown>;
export const ProductFieldsFragmentDoc = new TypedDocumentString(`
    fragment ProductFields on Product {
  id
  supplier {
    ...SupplierFields
  }
  name
  description
  details
  price {
    price
    description
    price_type
    id
  }
  tags {
    id
    name
  }
  averageScore
  status
  publishedAt
  updatedAt
  createdAt
  previewImage {
    ...MediaField
  }
  media {
    ... on InternalMedia {
      file {
        ...MediaField
      }
    }
    ... on ExternalMedia {
      url
    }
  }
}
    fragment MediaField on Media {
  id
  name
  altText
  filesize
  width
  height
  url
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
}`, {"fragmentName":"ProductFields"}) as unknown as TypedDocumentString<ProductFieldsFragment, unknown>;
export const LoginUserDocument = new TypedDocumentString(`
    mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    exp
    token
  }
}
    `) as unknown as TypedDocumentString<LoginUserMutation, LoginUserMutationVariables>;
export const UpdateCartDocument = new TypedDocumentString(`
    mutation UpdateCart($id: String!, $data: mutationCartUpdateInput!) {
  updateCart(id: $id, data: $data) {
    id
    user {
      id
    }
    status
    items {
      id
    }
    createdAt
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<UpdateCartMutation, UpdateCartMutationVariables>;
export const GetCartDocument = new TypedDocumentString(`
    query getCart($where: Cart_where, $limit: Int, $page: Int, $sort: String) {
  Carts(where: $where, limit: $limit, page: $page, sort: $sort) {
    docs {
      createdAt
      id
      items {
        id
        quantity
        product {
          ...ProductFields
        }
      }
      status
      updatedAt
      user {
        id
        username
      }
    }
  }
}
    fragment MediaField on Media {
  id
  name
  altText
  filesize
  width
  height
  url
}
fragment ProductFields on Product {
  id
  supplier {
    ...SupplierFields
  }
  name
  description
  details
  price {
    price
    description
    price_type
    id
  }
  tags {
    id
    name
  }
  averageScore
  status
  publishedAt
  updatedAt
  createdAt
  previewImage {
    ...MediaField
  }
  media {
    ... on InternalMedia {
      file {
        ...MediaField
      }
    }
    ... on ExternalMedia {
      url
    }
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
}`) as unknown as TypedDocumentString<GetCartQuery, GetCartQueryVariables>;
export const CreateCartItemDocument = new TypedDocumentString(`
    mutation CreateCartItem($data: mutationCartItemInput!) {
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
    mutation DeleteCartItem($id: String!) {
  deleteCartItem(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const GetMediaDocument = new TypedDocumentString(`
    query GetMedia($where: Media_where) {
  allMedia(where: $where) {
    docs {
      ...MediaField
    }
  }
}
    fragment MediaField on Media {
  id
  name
  altText
  filesize
  width
  height
  url
}`) as unknown as TypedDocumentString<GetMediaQuery, GetMediaQueryVariables>;
export const CreateMediaDocument = new TypedDocumentString(`
    mutation CreateMedia($data: mutationMediaInput!) {
  createMedia(data: $data) {
    ...MediaField
  }
}
    fragment MediaField on Media {
  id
  name
  altText
  filesize
  width
  height
  url
}`) as unknown as TypedDocumentString<CreateMediaMutation, CreateMediaMutationVariables>;
export const GetPointTransactionsDocument = new TypedDocumentString(`
    query getPointTransactions($where: PointTransaction_where, $sort: String, $limit: Int, $page: Int) {
  PointTransactions(where: $where, sort: $sort, limit: $limit, page: $page) {
    docs {
      ...PointTransactionField
    }
    totalDocs
    totalPages
    page
    limit
    hasNextPage
    hasPrevPage
    nextPage
    prevPage
  }
}
    fragment PointTransactionField on PointTransaction {
  id
  user {
    id
  }
  type
  amount
  status
  orders {
    id
  }
  metaData
  expiredAt
  createdAt
  updatedAt
  isFavorite
}`) as unknown as TypedDocumentString<GetPointTransactionsQuery, GetPointTransactionsQueryVariables>;
export const CreatePointTransactionDocument = new TypedDocumentString(`
    mutation createPointTransaction($data: mutationPointTransactionInput!) {
  createPointTransaction(data: $data) {
    ...PointTransactionField
  }
}
    fragment PointTransactionField on PointTransaction {
  id
  user {
    id
  }
  type
  amount
  status
  orders {
    id
  }
  metaData
  expiredAt
  createdAt
  updatedAt
  isFavorite
}`) as unknown as TypedDocumentString<CreatePointTransactionMutation, CreatePointTransactionMutationVariables>;
export const UpdatePointTransactionDocument = new TypedDocumentString(`
    mutation updatePointTransaction($id: String!, $data: mutationPointTransactionUpdateInput!) {
  updatePointTransaction(id: $id, data: $data) {
    ...PointTransactionField
  }
}
    fragment PointTransactionField on PointTransaction {
  id
  user {
    id
  }
  type
  amount
  status
  orders {
    id
  }
  metaData
  expiredAt
  createdAt
  updatedAt
  isFavorite
}`) as unknown as TypedDocumentString<UpdatePointTransactionMutation, UpdatePointTransactionMutationVariables>;
export const DeletePointTransactionDocument = new TypedDocumentString(`
    mutation deletePointTransaction($id: String!) {
  deletePointTransaction(id: $id) {
    ...PointTransactionField
  }
}
    fragment PointTransactionField on PointTransaction {
  id
  user {
    id
  }
  type
  amount
  status
  orders {
    id
  }
  metaData
  expiredAt
  createdAt
  updatedAt
  isFavorite
}`) as unknown as TypedDocumentString<DeletePointTransactionMutation, DeletePointTransactionMutationVariables>;
export const GetProductsDocument = new TypedDocumentString(`
    query GetProducts($limit: Int, $page: Int, $sort: String, $where: Product_where) {
  Products(limit: $limit, page: $page, sort: $sort, where: $where) {
    docs {
      ...ProductFields
    }
    totalDocs
    totalPages
    page
    limit
    hasNextPage
    hasPrevPage
    nextPage
    prevPage
  }
}
    fragment MediaField on Media {
  id
  name
  altText
  filesize
  width
  height
  url
}
fragment ProductFields on Product {
  id
  supplier {
    ...SupplierFields
  }
  name
  description
  details
  price {
    price
    description
    price_type
    id
  }
  tags {
    id
    name
  }
  averageScore
  status
  publishedAt
  updatedAt
  createdAt
  previewImage {
    ...MediaField
  }
  media {
    ... on InternalMedia {
      file {
        ...MediaField
      }
    }
    ... on ExternalMedia {
      url
    }
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
}`) as unknown as TypedDocumentString<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsCountDocument = new TypedDocumentString(`
    query GetProductsCount($where: Product_where) {
  Products(limit: 1, where: $where) {
    totalDocs
  }
}
    `) as unknown as TypedDocumentString<GetProductsCountQuery, GetProductsCountQueryVariables>;
export const GetProductDocument = new TypedDocumentString(`
    query GetProduct($where: Product_where) {
  Products(where: $where) {
    docs {
      ...ProductFields
    }
  }
}
    fragment MediaField on Media {
  id
  name
  altText
  filesize
  width
  height
  url
}
fragment ProductFields on Product {
  id
  supplier {
    ...SupplierFields
  }
  name
  description
  details
  price {
    price
    description
    price_type
    id
  }
  tags {
    id
    name
  }
  averageScore
  status
  publishedAt
  updatedAt
  createdAt
  previewImage {
    ...MediaField
  }
  media {
    ... on InternalMedia {
      file {
        ...MediaField
      }
    }
    ... on ExternalMedia {
      url
    }
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
}`) as unknown as TypedDocumentString<GetProductQuery, GetProductQueryVariables>;
export const GetUserAItemConfigDocument = new TypedDocumentString(`
    query GetUserAItemConfig($where: UserItem_where) {
  UserItems(where: $where) {
    docs {
      config
      createdAt
      id
      item {
        id
        product {
          name
          previewImage {
            altText
            id
            name
            url
            filesize
            height
            width
          }
          status
          createdAt
          updatedAt
        }
      }
      updatedAt
      user {
        id
        email
        username
      }
      __typename
    }
  }
}
    `) as unknown as TypedDocumentString<GetUserAItemConfigQuery, GetUserAItemConfigQueryVariables>;
export const GetUserPointDocument = new TypedDocumentString(`
    query GetUserPoint($where: UserPoint_where) {
  UserPoints(where: $where) {
    docs {
      id
      total_point
      updatedAt
      total_spent
      __typename
      user {
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetUserPointQuery, GetUserPointQueryVariables>;
export const GetUserPreferenceDocument = new TypedDocumentString(`
    query GetUserPreference($where: UserPreference_where) {
  UserPreferences(where: $where) {
    docs {
      id
      setting
      createdAt
      updatedAt
      user {
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetUserPreferenceQuery, GetUserPreferenceQueryVariables>;
export const CreateUserPreferenceDocument = new TypedDocumentString(`
    mutation CreateUserPreference($data: mutationUserPreferenceInput!) {
  createUserPreference(data: $data) {
    id
    setting
    user {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CreateUserPreferenceMutation, CreateUserPreferenceMutationVariables>;
export const UpdateUserPreferenceDocument = new TypedDocumentString(`
    mutation UpdateUserPreference($id: String!, $data: mutationUserPreferenceUpdateInput!) {
  updateUserPreference(id: $id, data: $data) {
    id
    setting
  }
}
    `) as unknown as TypedDocumentString<UpdateUserPreferenceMutation, UpdateUserPreferenceMutationVariables>;
export const DeleteUserPreferenceDocument = new TypedDocumentString(`
    mutation DeleteUserPreference($id: String!) {
  deleteUserPreference(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteUserPreferenceMutation, DeleteUserPreferenceMutationVariables>;
export const GetUsersDocument = new TypedDocumentString(`
    query GetUsers {
  Users {
    docs {
      username
      email
      role
    }
  }
}
    `) as unknown as TypedDocumentString<GetUsersQuery, GetUsersQueryVariables>;