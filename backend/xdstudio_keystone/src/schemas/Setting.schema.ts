import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';
import { TypeInfo } from '.keystone/types';
export const Setting = list({
  access: allowAll,
  isSingleton: true,
  fields: {
    smtpHost: text({ validation: { isRequired: true } }),
    smtpPort: text({ validation: { isRequired: true } }),
    smtpUser: text({ validation: { isRequired: true } }),
    smtpPass: text({
      validation: { isRequired: true },
      ui: {
        itemView: { fieldMode: 'edit' },
      },
    }),
    redirect: text({
      validation: { isRequired: true },
      ui: {
        description: 'This field can be setting redirection app url',
      },
    }),
  },
  ui: {
    label: 'SMTP Settings',
    hideDelete: true,
  },
}) satisfies ListConfig<TypeInfo['lists']['Setting']>;
