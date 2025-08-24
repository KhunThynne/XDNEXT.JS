// keystone/mutations/oauthLogin.ts
import { graphql } from '@keystone-6/core';
import { Context, Lists, UserWhereInput } from '.keystone/types';
import { email } from 'zod';
import _ from 'lodash';

interface AuthProvidersFailure {
  message: string;
}
interface AuthProvidersSuccess {
  item: object;
  accessToken: string;
  refetchToken?: string;
  sessionToken: string;
}

const authenticateAndLinkProvider = (base: graphql.BaseSchemaMeta) => {
  const AuthProvidersFailure = graphql.object<AuthProvidersFailure>()({
    name: 'AuthProvidersFailure',
    fields: {
      message: graphql.field({ type: graphql.String }),
    },
  });

  const AuthProvidersSuccess = graphql.object<AuthProvidersSuccess>()({
    name: 'AuthProvidersSuccess',
    fields: {
      item: graphql.field({ type: graphql.nonNull(base.object('User')) }),
      accessToken: graphql.field({ type: graphql.nonNull(graphql.String) }),
      refetchToken: graphql.field({ type: graphql.String }),
      sessionToken: graphql.field({ type: graphql.nonNull(graphql.String) }),
    },
  });
  const AuthPayload = graphql.union({
    name: 'AuthProvidersResponse',
    types: [AuthProvidersSuccess, AuthProvidersFailure],
    resolveType: (value) => {
      if ('sessionToken' in value) {
        return 'AuthProvidersSuccess';
      }
      return 'AuthProvidersFailure';
    },
  });

  return graphql.field({
    type: AuthPayload,
    args: {
      provider: graphql.arg({ type: graphql.nonNull(graphql.String) }),
      email: graphql.arg({ type: graphql.nonNull(graphql.String) }),
      name: graphql.arg({ type: graphql.String }),
      providerAccountId: graphql.arg({ type: graphql.nonNull(graphql.String) }),
      accessToken: graphql.arg({ type: graphql.String }),
      refreshToken: graphql.arg({ type: graphql.String }),
    },
    async resolve(
      __,
      { provider, providerAccountId, email, accessToken, refreshToken, name },
      context: Context,
    ) {
      let account;
      let user;
      try {
        const accountdata = await context.db.Account.findMany({
          where: { providerAccountId: { equals: providerAccountId } },
        });
        user = await context.db.User.findOne({
          where: { email },
        });
        if (!user) {
          user = await context.db.User.createOne({
            data: {
              name: name ?? email,
              email,
              password: `${provider}-${providerAccountId}`,
              role: 'USER',
            },
          });
        }
        if (!_.isEmpty(accountdata)) {
          const [accountSelect] = accountdata;
          account = await context.db.Account.updateOne({
            where: { id: accountSelect.id },
            data: {
              accessToken,
              refreshToken,
            },
          });
        } else {
          account = await context.db.Account.createOne({
            data: {
              provider,
              providerAccountId,
              accessToken,
              refreshToken,
              user: { connect: { id: user?.id } },
            },
          });
        }
        if (!account.accessToken) {
          throw new Error('Not found access token');
        }
        if (user) {
          const sessionToken = await context.sessionStrategy?.start({
            context,
            data: { id: user.id },
          });
          return {
            __typename: 'AuthProvidersSuccess' as const,
            item: user,
            accessToken: account.accessToken as string,
            refetchToken: account.refreshToken as string,
            sessionToken: sessionToken as string,
          };
        }
        throw new Error('User not found');
      } catch (error) {
        console.log(error);
        return {
          __typename: 'AuthProvidersFailure',
          message: (error as Error).message || 'Unknown error',
        };
      }
    },
  });
};

export default authenticateAndLinkProvider;
