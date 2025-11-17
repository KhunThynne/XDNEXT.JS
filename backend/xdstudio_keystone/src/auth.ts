// Welcome to some authentication for Keystone
//
// This is using @keystone-6/auth to add the following
// - A sign-in page for your Admin UI
// - A cookie-based stateless session strategy
//    - Using a User email as the identifier
//    - 30 day cookie expiration
//
// This file does not configure what Users can do, and the default for this starter
// project is to allow anyone - logged-in or not - to do anything.
//
// If you want to prevent random people on the internet from accessing your data,
// you can find out how by reading https://keystonejs.com/docs/guides/auth-and-access-control
//
// If you want to learn more about how our out-of-the-box authentication works, please
// read https://keystonejs.com/docs/apis/auth#authentication-api

import { randomBytes } from 'node:crypto';
import { createAuth } from '@keystone-6/auth';

// see https://keystonejs.com/docs/apis/session for the session docs
import { statelessSessions } from '@keystone-6/core/session';

import { Context } from '.keystone/types';
import _ from 'lodash';

import env from '../env';
import { sendEmail } from './shared/utils/sendEmail';
// withAuth is a function we can use to wrap our base configuration
const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',

  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: 'name createdAt',
  secretField: 'password',

  passwordResetLink: {
    sendToken: async (args) => {
      const { itemId, identity, token, context } = args;
      const contextCon = context as unknown as Context;
      const setting = await contextCon.db.Setting.findOne({
        where: { id: '1' },
      });
      if (!setting) throw new Error('System settings not found');
      await sendEmail(setting, {
        to: identity,
        subject: 'Reset your password',
        text: `Click here to reset: <a href='${setting?.redirect ?? 'unknown'}?token=${token}&email=${identity}'>Click here</a>`,
      });
    },
    tokensValidForMins: 60,
  },

  //   WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ['name', 'email', 'password'],

    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  },
});

// statelessSessions uses cookies for session tracking
//   these cookies have an expiry, in seconds
//   we use an expiry of 30 days for this starter
const sessionMaxAge = 60 * 60 * 24 * 30;

// you can find out more at https://keystonejs.com/docs/apis/session#session-api
const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: env.SESSION_SECRET,
});

export { withAuth, session };

// Withoon
// P@ssw0rd@vst

// admin/P@ssw0rd@!#!
