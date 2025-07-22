// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config
import './configs/dotenv.config'
import { config, graphql } from '@keystone-6/core'

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema'
import type { GraphQLSchema } from 'graphql'
// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth'
import env from './env'
import { Context } from '.keystone/types'
import { password } from '@keystone-6/core/fields'

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'postgresql',
      url: env.DATABASE_URL,
      // onConnect: async context => { /* ... */ },
      // Optional advanced configuration
      enableLogging: true,
      idField: { kind: 'uuid' },
      shadowDatabaseUrl: env.SHADOW_DATABASE_URL
    },

    lists,
    storage: {
      my_local_images: {
        kind: 'local',
        type: 'image',
        generateUrl: (path: string) => `${env.API_BACKEND_URL}${env.IMAGE_PATH}${path}`,
        serverRoute: {
          path: env.IMAGE_PATH
        },
        storagePath: env.STORAGE_IMAGE_PATH
      }
    },
    graphql: {
      extendGraphqlSchema: graphql.extend((base) => {
        const RegisterAndLoginResult = graphql.object<{
          item: any
          sessionToken: string
        }>()({
          name: 'RegisterAndLoginResult',
          fields: {
            item: graphql.field({
              type: base.object('User'),
              resolve(source) {
                return source.item
              }
            }),
            sessionToken: graphql.field({
              type: graphql.String,
              resolve(source) {
                return source.sessionToken
              }
            })
          }
        })

        return {
          mutation: {
            createAndLogin: graphql.field({
              type: RegisterAndLoginResult,
              args: {
                email: graphql.arg({ type: graphql.nonNull(graphql.String) }),
                password: graphql.arg({ type: graphql.nonNull(graphql.String) }),
                username: graphql.arg({ type: graphql.String }),
                image: graphql.arg({ type: graphql.String }),
                provider: graphql.arg({ type: graphql.String })
              },
              async resolve(_, arg, context: Context) {
                const { email, username, provider } = arg
                let user = await context.db.User.findOne({ where: { email } })

                if (!user) {
                  user = await context.db.User.createOne({
                    data: { ...arg, name: username, provider: provider ?? 'gust', role: 'user' }
                  })
                }
                const sessionToken = await context.session.authenticateUserWithPassword({
                  data: { email: user.email, password: arg.password }
                })
                return { item: user, sessionToken }
              }
            })
          }
        }
      })
    },
    session,
    server: { port: env.PORT },
    ui: {
      isAccessAllowed: () => true
      // : false,
    }
  })
)
