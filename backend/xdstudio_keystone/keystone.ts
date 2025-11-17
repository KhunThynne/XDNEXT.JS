// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config
import './configs/dotenv.config';
import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './src/auth';
import env from './env';
import { lists } from './src/schemas';
import { extendGraphqlSchema } from './src/extendGraphqlSchema';
import { SeedData } from './seed-data';

import IntigrationSocketIo from './src/shared/libs/socket-io';
export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'postgresql',
      url: env.DATABASE_URL,
      // Optional advanced configuration
      onConnect: async (context) => {
        console.log(env.NODE_ENV);
        await SeedData(context);
      },
      enableLogging: true,
      idField: { kind: 'uuid' },
      shadowDatabaseUrl: env.SHADOW_DATABASE_URL,
    },

    lists,
    storage: {
      my_local_images: {
        kind: 'local',
        type: 'image',
        generateUrl: (path: string) => `${env.API_BACKEND_URL}${env.IMAGE_PATH}${path}`,
        serverRoute: {
          path: env.IMAGE_PATH,
        },
        storagePath: env.STORAGE_IMAGE_PATH,
      },
    },
    graphql: {
      extendGraphqlSchema,
    },
    session,
    server: {
      cors: { origin: false },
      options: { host: '127.0.0.1' },
      port: env.PORT,
      extendHttpServer(server, context) {
        console.log('Attaching Socket.IO Server...');
        IntigrationSocketIo(server, context);
      },
    },
    ui: {
      isAccessAllowed: () => true,
      // : false,
    },
  }),
);
