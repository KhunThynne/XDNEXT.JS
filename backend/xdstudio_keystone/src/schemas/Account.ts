import { TypeInfo } from '.keystone/types';
import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, timestamp, json } from '@keystone-6/core/fields';

export const Account = list({
  access: allowAll,
  fields: {
    provider: text({
      validation: { isRequired: true },
      ui: { description: 'The name of the provider, e.g., google, github, facebook, line' },
    }),
    providerAccountId: text({
      validation: { isRequired: true },
      ui: { description: 'The unique user ID provided by the external provider' },
    }),
    user: relationship({
      ref: 'User.accounts',
      ui: {
        displayMode: 'select',
        labelField: 'email',
        description: 'The user associated with this provider account',
      },
    }),
    accessToken: text({
      ui: { description: 'Access token used to call the provider API (short-lived)' },
    }),
    refreshToken: text({
      ui: { description: 'Refresh token used to obtain a new access token when expired' },
    }),
    expiresAt: timestamp({
      ui: { description: 'Expiration time of the access token' },
    }),
    scope: text({
      ui: { description: 'The scope or permissions granted by the provider for this token' },
    }),
    meta: json({
      ui: { description: 'Additional provider-specific data stored as a JSON object' },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['provider', 'providerAccountId', 'user'],
    },
    isHidden: true,
  },
}) satisfies ListConfig<TypeInfo['lists']['Account']>;
