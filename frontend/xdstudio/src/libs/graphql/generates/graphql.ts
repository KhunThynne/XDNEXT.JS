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
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  jwt_token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthPayload>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  register?: Maybe<User>;
  registerAndLogin?: Maybe<AuthPayload>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  provider?: InputMaybe<UserProvider>;
  role?: InputMaybe<Role>;
  username: Scalars['String']['input'];
};


export type MutationRegisterAndLoginArgs = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  provider?: InputMaybe<UserProvider>;
  role?: InputMaybe<Role>;
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  users: Array<User>;
};

export enum Role {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<UserProvider>;
  role?: Maybe<Role>;
  username: Scalars['String']['output'];
};

export enum UserProvider {
  Amazon = 'AMAZON',
  Apple = 'APPLE',
  Credentials = 'CREDENTIALS',
  Discord = 'DISCORD',
  Facebook = 'FACEBOOK',
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Linkedin = 'LINKEDIN',
  Microsoft = 'MICROSOFT',
  Twitter = 'TWITTER'
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', jwt_token: string, user: { __typename?: 'User', id: number, username: string, email: string, role?: Role | null, provider?: UserProvider | null } } | null };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  image?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<UserProvider>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'User', id: number, username: string, email: string, role?: Role | null, image?: string | null, provider?: UserProvider | null } | null };

export type RegisterAndLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  provider?: InputMaybe<UserProvider>;
  image?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterAndLoginMutation = { __typename?: 'Mutation', registerAndLogin?: { __typename?: 'AuthPayload', jwt_token: string, user: { __typename?: 'User', id: number, provider?: UserProvider | null, username: string, email: string, role?: Role | null, image?: string | null } } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, username: string, email: string, role?: Role | null }> };

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

export const LoginDocument = new TypedDocumentString(`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    jwt_token
    user {
      id
      username
      email
      role
      provider
    }
  }
}
    `) as unknown as TypedDocumentString<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = new TypedDocumentString(`
    mutation Register($email: String!, $password: String!, $username: String!, $role: Role, $image: String, $provider: UserProvider) {
  register(
    email: $email
    password: $password
    username: $username
    role: $role
    image: $image
    provider: $provider
  ) {
    id
    username
    email
    role
    image
    provider
  }
}
    `) as unknown as TypedDocumentString<RegisterMutation, RegisterMutationVariables>;
export const RegisterAndLoginDocument = new TypedDocumentString(`
    mutation RegisterAndLogin($email: String!, $password: String!, $username: String!, $role: Role, $provider: UserProvider, $image: String) {
  registerAndLogin(
    email: $email
    password: $password
    username: $username
    provider: $provider
    role: $role
    image: $image
  ) {
    jwt_token
    user {
      id
      provider
      username
      email
      role
      image
      provider
    }
  }
}
    `) as unknown as TypedDocumentString<RegisterAndLoginMutation, RegisterAndLoginMutationVariables>;
export const GetUsersDocument = new TypedDocumentString(`
    query GetUsers {
  users {
    id
    username
    email
    role
  }
}
    `) as unknown as TypedDocumentString<GetUsersQuery, GetUsersQueryVariables>;