/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type AuthenticatedItem = User;

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
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAndLogin?: Maybe<RegisterAndLoginResult>;
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
  createProduct?: Maybe<Product>;
  createProductPromotion?: Maybe<ProductPromotion>;
  createProductPromotions?: Maybe<Array<Maybe<ProductPromotion>>>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createPromotion?: Maybe<Promotion>;
  createPromotions?: Maybe<Array<Maybe<Promotion>>>;
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
  deleteProduct?: Maybe<Product>;
  deleteProductPromotion?: Maybe<ProductPromotion>;
  deleteProductPromotions?: Maybe<Array<Maybe<ProductPromotion>>>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deletePromotion?: Maybe<Promotion>;
  deletePromotions?: Maybe<Array<Maybe<Promotion>>>;
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
  updateProduct?: Maybe<Product>;
  updateProductPromotion?: Maybe<ProductPromotion>;
  updateProductPromotions?: Maybe<Array<Maybe<ProductPromotion>>>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updatePromotion?: Maybe<Promotion>;
  updatePromotions?: Maybe<Array<Maybe<Promotion>>>;
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


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateAndLoginArgs = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  provider?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
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
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<User>;
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
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<UserRelateToOneForCreateInput>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID']['output'];
  orderId?: Maybe<Order>;
  productId?: Maybe<Product>;
  unitPrice?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  userItem?: Maybe<UserItem>;
};

export type OrderItemCreateInput = {
  orderId?: InputMaybe<OrderRelateToOneForCreateInput>;
  productId?: InputMaybe<ProductRelateToOneForCreateInput>;
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
  orderId?: InputMaybe<OrderRelateToOneForUpdateInput>;
  productId?: InputMaybe<ProductRelateToOneForUpdateInput>;
  unitPrice?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userItem?: InputMaybe<UserItemRelateToOneForUpdateInput>;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  orderId?: InputMaybe<OrderWhereInput>;
  productId?: InputMaybe<ProductWhereInput>;
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
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<OrderItemManyRelationFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<UserWhereInput>;
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
  description?: Maybe<PointTransaction_Description_Document>;
  id: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Array<User>>;
  userIdCount?: Maybe<Scalars['Int']['output']>;
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
  description?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type PointTransactionOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type PointTransactionUpdateArgs = {
  data: PointTransactionUpdateInput;
  where: PointTransactionWhereUniqueInput;
};

export type PointTransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type PointTransactionWhereInput = {
  AND?: InputMaybe<Array<PointTransactionWhereInput>>;
  NOT?: InputMaybe<Array<PointTransactionWhereInput>>;
  OR?: InputMaybe<Array<PointTransactionWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
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

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  suppilersId?: Maybe<Supplier>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
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

export type ProductCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  suppilersId?: InputMaybe<SupplierRelateToOneForCreateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductManyRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  details?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updateAt?: InputMaybe<OrderDirection>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  suppilersId?: InputMaybe<SupplierRelateToOneForUpdateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  details?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<StringFilter>;
  suppilersId?: InputMaybe<SupplierWhereInput>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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
  authenticatedItem?: Maybe<AuthenticatedItem>;
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
  product?: Maybe<Product>;
  productPromotion?: Maybe<ProductPromotion>;
  productPromotions?: Maybe<Array<ProductPromotion>>;
  productPromotionsCount?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  promotion?: Maybe<Promotion>;
  promotions?: Maybe<Array<Promotion>>;
  promotionsCount?: Maybe<Scalars['Int']['output']>;
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

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type RegisterAndLoginResult = {
  __typename?: 'RegisterAndLoginResult';
  item?: Maybe<User>;
  sessionToken?: Maybe<Scalars['String']['output']>;
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
  id: Scalars['ID']['output'];
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  supplierDetails?: Maybe<Scalars['String']['output']>;
  supplierName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<User>;
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
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  supplierDetails?: InputMaybe<Scalars['String']['input']>;
  supplierName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type SupplierManyRelationFilter = {
  every?: InputMaybe<SupplierWhereInput>;
  none?: InputMaybe<SupplierWhereInput>;
  some?: InputMaybe<SupplierWhereInput>;
};

export type SupplierOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  supplierDetails?: InputMaybe<OrderDirection>;
  supplierName?: InputMaybe<OrderDirection>;
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
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  supplierDetails?: InputMaybe<Scalars['String']['input']>;
  supplierName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type SupplierWhereInput = {
  AND?: InputMaybe<Array<SupplierWhereInput>>;
  NOT?: InputMaybe<Array<SupplierWhereInput>>;
  OR?: InputMaybe<Array<SupplierWhereInput>>;
  id?: InputMaybe<IdFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
  supplierDetails?: InputMaybe<StringFilter>;
  supplierName?: InputMaybe<StringFilter>;
  userId?: InputMaybe<UserWhereInput>;
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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Array<Order>>;
  orderCount?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetToken?: Maybe<PasswordState>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  preference?: Maybe<UserPreference>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  yourItem?: Maybe<Array<UserItem>>;
  yourItemCount?: Maybe<Scalars['Int']['output']>;
  yourPoint?: Maybe<UserPoint>;
  yourSuppiler?: Maybe<Array<Supplier>>;
  yourSuppilerCount?: Maybe<Scalars['Int']['output']>;
};


export type UserImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ImageWhereInput;
};


export type UserImagesCountArgs = {
  where?: ImageWhereInput;
};


export type UserOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};


export type UserOrderCountArgs = {
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


export type UserYourItemArgs = {
  cursor?: InputMaybe<UserItemWhereUniqueInput>;
  orderBy?: Array<UserItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserItemWhereInput;
};


export type UserYourItemCountArgs = {
  where?: UserItemWhereInput;
};


export type UserYourSuppilerArgs = {
  cursor?: InputMaybe<SupplierWhereUniqueInput>;
  orderBy?: Array<SupplierOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SupplierWhereInput;
};


export type UserYourSuppilerCountArgs = {
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  preference?: InputMaybe<UserPreferenceRelateToOneForCreateInput>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  yourItem?: InputMaybe<UserItemRelateToManyForCreateInput>;
  yourPoint?: InputMaybe<UserPointRelateToOneForCreateInput>;
  yourSuppiler?: InputMaybe<SupplierRelateToManyForCreateInput>;
};

export type UserItem = {
  __typename?: 'UserItem';
  config?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<OrderItem>;
  productId?: Maybe<Product>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<User>;
};

export type UserItemCreateInput = {
  config?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  item?: InputMaybe<OrderItemRelateToOneForCreateInput>;
  productId?: InputMaybe<ProductRelateToOneForCreateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<UserRelateToOneForCreateInput>;
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
  productId?: InputMaybe<ProductRelateToOneForUpdateInput>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserItemWhereInput = {
  AND?: InputMaybe<Array<UserItemWhereInput>>;
  NOT?: InputMaybe<Array<UserItemWhereInput>>;
  OR?: InputMaybe<Array<UserItemWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  item?: InputMaybe<OrderItemWhereInput>;
  productId?: InputMaybe<ProductWhereInput>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<UserWhereInput>;
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
  userId?: Maybe<User>;
};

export type UserPointCreateInput = {
  total_point?: InputMaybe<Scalars['Int']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<UserRelateToOneForCreateInput>;
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
  userId?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserPointWhereInput = {
  AND?: InputMaybe<Array<UserPointWhereInput>>;
  NOT?: InputMaybe<Array<UserPointWhereInput>>;
  OR?: InputMaybe<Array<UserPointWhereInput>>;
  id?: InputMaybe<IdFilter>;
  total_point?: InputMaybe<IntFilter>;
  updateAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<UserWhereInput>;
};

export type UserPointWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<UserWhereUniqueInput>;
};

export type UserPreference = {
  __typename?: 'UserPreference';
  id: Scalars['ID']['output'];
  setting?: Maybe<UserPreference_Setting_Document>;
  userId?: Maybe<User>;
};

export type UserPreferenceCreateInput = {
  setting?: InputMaybe<Scalars['JSON']['input']>;
  userId?: InputMaybe<UserRelateToOneForCreateInput>;
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
  userId?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserPreferenceWhereInput = {
  AND?: InputMaybe<Array<UserPreferenceWhereInput>>;
  NOT?: InputMaybe<Array<UserPreferenceWhereInput>>;
  OR?: InputMaybe<Array<UserPreferenceWhereInput>>;
  id?: InputMaybe<IdFilter>;
  userId?: InputMaybe<UserWhereInput>;
};

export type UserPreferenceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<UserWhereUniqueInput>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  preference?: InputMaybe<UserPreferenceRelateToOneForUpdateInput>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  yourItem?: InputMaybe<UserItemRelateToManyForUpdateInput>;
  yourPoint?: InputMaybe<UserPointRelateToOneForUpdateInput>;
  yourSuppiler?: InputMaybe<SupplierRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderManyRelationFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  preference?: InputMaybe<UserPreferenceWhereInput>;
  provider?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringFilter>;
  yourItem?: InputMaybe<UserItemManyRelationFilter>;
  yourPoint?: InputMaybe<UserPointWhereInput>;
  yourSuppiler?: InputMaybe<SupplierManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  preference?: InputMaybe<UserPreferenceWhereUniqueInput>;
  yourPoint?: InputMaybe<UserPointWhereUniqueInput>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, name?: string | null, username?: string | null, provider?: string | null, role?: string | null, email?: string | null, image?: string | null, postsCount?: number | null, createdAt?: any | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, posts?: Array<{ __typename?: 'Post', id: string, title?: string | null, tagsCount?: number | null }> | null } } | null };

export type GetImageQueryVariables = Exact<{
  where: ImageWhereUniqueInput;
}>;


export type GetImageQuery = { __typename?: 'Query', image?: { __typename?: 'Image', name?: string | null, id: string, altText?: string | null, src?: { __typename?: 'ImageFieldOutput', id: string, extension: ImageExtension, filesize: number, height: number, url: string, width: number } | null } | null };

export type CreateImagesMutationVariables = Exact<{
  data: Array<ImageCreateInput> | ImageCreateInput;
}>;


export type CreateImagesMutation = { __typename?: 'Mutation', createImages?: Array<{ __typename?: 'Image', name?: string | null, id: string, altText?: string | null, src?: { __typename?: 'ImageFieldOutput', id: string, filesize: number, width: number, height: number, extension: ImageExtension, url: string } | null } | null> | null };

export type CreateImageMutationVariables = Exact<{
  data: ImageCreateInput;
}>;


export type CreateImageMutation = { __typename?: 'Mutation', createImage?: { __typename?: 'Image', altText?: string | null, id: string, name?: string | null, src?: { __typename?: 'ImageFieldOutput', extension: ImageExtension, filesize: number, height: number, id: string, url: string, width: number } | null } | null };

export type SupplierFieldsFragment = { __typename?: 'Supplier', id: string, supplierName?: string | null, supplierDetails?: string | null, productsCount?: number | null, userId?: { __typename?: 'User', id: string, email?: string | null, username?: string | null } | null } & { ' $fragmentName'?: 'SupplierFieldsFragment' };

export type ImageFieldsFragment = { __typename?: 'Image', id: string, name?: string | null, altText?: string | null, src?: { __typename?: 'ImageFieldOutput', id: string, filesize: number, width: number, height: number, extension: ImageExtension, url: string } | null } & { ' $fragmentName'?: 'ImageFieldsFragment' };

export type ProductFieldsFragment = { __typename?: 'Product', id: string, name?: string | null, details?: string | null, status?: string | null, publishedAt?: any | null, updateAt?: any | null, createdAt?: any | null, imagesCount?: number | null, suppilersId?: (
    { __typename?: 'Supplier' }
    & { ' $fragmentRefs'?: { 'SupplierFieldsFragment': SupplierFieldsFragment } }
  ) | null, images?: Array<(
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'ImageFieldsFragment': ImageFieldsFragment } }
  )> | null } & { ' $fragmentName'?: 'ProductFieldsFragment' };

export type GetProductsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip: Scalars['Int']['input'];
  orderBy: Array<ProductOrderByInput> | ProductOrderByInput;
}>;


export type GetProductsQuery = { __typename?: 'Query', products?: Array<(
    { __typename?: 'Product' }
    & { ' $fragmentRefs'?: { 'ProductFieldsFragment': ProductFieldsFragment } }
  )> | null };

export type GetProductQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type GetProductQuery = { __typename?: 'Query', product?: (
    { __typename?: 'Product' }
    & { ' $fragmentRefs'?: { 'ProductFieldsFragment': ProductFieldsFragment } }
  ) | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username?: string | null, email?: string | null, role?: string | null }> | null };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', createdAt?: any | null, email?: string | null, image?: string | null, id: string, images?: Array<{ __typename?: 'Image', name?: string | null, id: string, altText?: string | null }> | null } | null };

export type CreateUserMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name?: string | null, username?: string | null, provider?: string | null, image?: string | null, role?: string | null, email?: string | null, createdAt?: any | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null } | null };

export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserByEmailQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name?: string | null, username?: string | null, provider?: string | null, image?: string | null, role?: string | null, email?: string | null, postsCount?: number | null, createdAt?: any | null, passwordResetIssuedAt?: any | null, passwordResetRedeemedAt?: any | null } | null };

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
export const SupplierFieldsFragmentDoc = new TypedDocumentString(`
    fragment SupplierFields on Supplier {
  id
  supplierName
  supplierDetails
  userId {
    id
    email
    username
  }
  productsCount
}
    `, {"fragmentName":"SupplierFields"}) as unknown as TypedDocumentString<SupplierFieldsFragment, unknown>;
export const ImageFieldsFragmentDoc = new TypedDocumentString(`
    fragment ImageFields on Image {
  id
  name
  altText
  src {
    id
    filesize
    width
    height
    extension
    url
  }
}
    `, {"fragmentName":"ImageFields"}) as unknown as TypedDocumentString<ImageFieldsFragment, unknown>;
export const ProductFieldsFragmentDoc = new TypedDocumentString(`
    fragment ProductFields on Product {
  id
  suppilersId {
    ...SupplierFields
  }
  name
  details
  status
  publishedAt
  updateAt
  createdAt
  images {
    ...ImageFields
  }
  imagesCount
}
    fragment SupplierFields on Supplier {
  id
  supplierName
  supplierDetails
  userId {
    id
    email
    username
  }
  productsCount
}
fragment ImageFields on Image {
  id
  name
  altText
  src {
    id
    filesize
    width
    height
    extension
    url
  }
}`, {"fragmentName":"ProductFields"}) as unknown as TypedDocumentString<ProductFieldsFragment, unknown>;
export const LoginDocument = new TypedDocumentString(`
    mutation Login($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
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
        posts {
          id
          title
          tagsCount
        }
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
    `) as unknown as TypedDocumentString<LoginMutation, LoginMutationVariables>;
export const GetImageDocument = new TypedDocumentString(`
    query GetImage($where: ImageWhereUniqueInput!) {
  image(where: $where) {
    name
    src {
      id
      extension
      filesize
      height
      url
      width
    }
    id
    altText
  }
}
    `) as unknown as TypedDocumentString<GetImageQuery, GetImageQueryVariables>;
export const CreateImagesDocument = new TypedDocumentString(`
    mutation CreateImages($data: [ImageCreateInput!]!) {
  createImages(data: $data) {
    name
    id
    altText
    src {
      id
      filesize
      width
      height
      extension
      url
    }
  }
}
    `) as unknown as TypedDocumentString<CreateImagesMutation, CreateImagesMutationVariables>;
export const CreateImageDocument = new TypedDocumentString(`
    mutation CreateImage($data: ImageCreateInput!) {
  createImage(data: $data) {
    altText
    id
    name
    src {
      extension
      filesize
      height
      id
      url
      width
    }
  }
}
    `) as unknown as TypedDocumentString<CreateImageMutation, CreateImageMutationVariables>;
export const GetProductsDocument = new TypedDocumentString(`
    query getProducts($take: Int, $skip: Int!, $orderBy: [ProductOrderByInput!]!) {
  products(take: $take, skip: $skip, orderBy: $orderBy) {
    ...ProductFields
  }
}
    fragment SupplierFields on Supplier {
  id
  supplierName
  supplierDetails
  userId {
    id
    email
    username
  }
  productsCount
}
fragment ImageFields on Image {
  id
  name
  altText
  src {
    id
    filesize
    width
    height
    extension
    url
  }
}
fragment ProductFields on Product {
  id
  suppilersId {
    ...SupplierFields
  }
  name
  details
  status
  publishedAt
  updateAt
  createdAt
  images {
    ...ImageFields
  }
  imagesCount
}`) as unknown as TypedDocumentString<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = new TypedDocumentString(`
    query getProduct($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    ...ProductFields
  }
}
    fragment SupplierFields on Supplier {
  id
  supplierName
  supplierDetails
  userId {
    id
    email
    username
  }
  productsCount
}
fragment ImageFields on Image {
  id
  name
  altText
  src {
    id
    filesize
    width
    height
    extension
    url
  }
}
fragment ProductFields on Product {
  id
  suppilersId {
    ...SupplierFields
  }
  name
  details
  status
  publishedAt
  updateAt
  createdAt
  images {
    ...ImageFields
  }
  imagesCount
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
    id
    images {
      name
      id
      altText
    }
  }
}
    `) as unknown as TypedDocumentString<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = new TypedDocumentString(`
    mutation CreateUser($name: String, $username: String, $provider: String, $password: String, $email: String) {
  createUser(
    data: {name: $name, username: $username, provider: $provider, password: $password, email: $email}
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
    role
    email
    postsCount
    createdAt
    passwordResetIssuedAt
    passwordResetRedeemedAt
  }
}
    `) as unknown as TypedDocumentString<GetUserByEmailQuery, GetUserByEmailQueryVariables>;