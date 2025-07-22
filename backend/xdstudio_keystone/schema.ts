// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  json,
  integer,
  image
} from '@keystone-6/core/fields'

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document'
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import { type Lists } from '.keystone/types'
import { fileField } from './src/shared/utils/fileField'

export const lists = {
  User: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,
    ui: {
      listView: {
        initialColumns: ['name', 'username', 'email', 'role'],
        pageSize: 10
      }
    },
    // this is the fields for our User list
    fields: {
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      name: text({ validation: { isRequired: true } }),
      username: text({
        validation: { isRequired: true }
      }),
      provider: text({
        defaultValue: 'credentials'
      }),
      image: text(),
      images: relationship({ ref: 'Image', many: true }),
      role: select({
        options: [
          { label: 'Admin', value: 'ADMIN' },
          { label: 'User', value: 'USER' },
          { label: 'Moderator', value: 'MODERATOR' },
          { label: 'Guest', value: 'GUEST' }
        ],
        defaultValue: 'USER',
        ui: {
          displayMode: 'select'
        }
      }),
      email: text({
        validation: { isRequired: true },
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: 'unique'
      }),
      password: password({ validation: { isRequired: true } }),
      // we can use this field to see what Posts this User has authored
      //   more on that in the Post list below
      posts: relationship({ ref: 'Post.author', many: true }),
      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: 'now' }
      })
    }
  }),

  UserProduct: list({
    access: allowAll,
    ui: {
      label: 'User Product',
      listView: {
        initialColumns: ['userId', 'createdAt'],
        pageSize: 10
      }
    },
    fields: {
      userId: relationship({
        ref: 'User',
        many: true,
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineConnect: true
        }
      }),
      productId: relationship({
        ref: 'Product'
      }),
      config: json({
        defaultValue: {},
        ui: {
          // สามารถระบุ custom view ได้ถ้ามี
          // views: './admin/components/JsonEditor.tsx'
        }
      }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
        ui: {
          itemView: { fieldMode: 'read' }
        }
      }),
      updateAt: timestamp({
        defaultValue: { kind: 'now' }
      })
    }
  }),

  UserPreference: list({
    access: allowAll,
    ui: {
      label: 'User Preference',
      listView: {
        initialColumns: ['userId']
      }
    },
    fields: {
      userId: relationship({
        ref: 'User',
        ui: {
          displayMode: 'select'
        }
      }),
      setting: document({
        formatting: true,
        links: true,
        dividers: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ]
      })
    }
  }),

  OrderItem: list({
    access: allowAll,
    ui: {
      label: 'Order Item',
      listView: {
        initialColumns: ['orderId', 'productId', 'unitPrice']
      }
    },
    fields: {
      orderId: relationship({ ref: 'Order' }),
      productId: relationship({ ref: 'Product' }),
      unitPrice: integer(),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
        ui: {
          itemView: { fieldMode: 'read' }
        }
      }),
      updateAt: timestamp()
    }
  }),
  UserPoint: list({
    access: allowAll,
    fields: {
      userId: relationship({ ref: 'User', many: true }),
      total_point: integer({
        defaultValue: 0,
        validation: { isRequired: true, min: 0 }
      }),
      updateAt: timestamp()
    }
  }),

  PointTransaction: list({
    access: allowAll,
    fields: {
      userId: relationship({ ref: 'User', many: true }),
      type: select({
        options: [
          { label: 'Earn', value: 'earn' },
          { label: 'Redeem', value: 'redeem' }
        ],
        defaultValue: 'Earn',
        ui: {
          displayMode: 'select'
        },
        validation: { isRequired: true }
      }),
      amount: integer(),
      description: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true
      }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
        validation: { isRequired: false },
        ui: {
          createView: { fieldMode: 'edit' },
          itemView: { fieldMode: 'read' }
        }
      })
    }
  }),
  Suppiler: list({
    access: allowAll,
    fields: {
      userId: relationship({ ref: 'User', many: true }),
      supplierName: text(),
      supplierDetails: text()
    }
  }),
  Product: list({
    access: allowAll,
    ui: {
      listView: {
        initialColumns: ['id', 'name', 'createdAt', 'details'],
        pageSize: 10
      }
    },
    fields: {
      suppilersId: relationship({ ref: 'Suppiler' }),
      name: text({ validation: { isRequired: true } }),
      details: text({
        ui: {
          displayMode: 'textarea'
        }
      }),
      status: select({
        options: [
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' }
        ],
        defaultValue: 'draft',
        validation: { isRequired: true },
        ui: { displayMode: 'segmented-control' }
      }),
      publishedAt: timestamp(),
      updateAt: timestamp({
        defaultValue: { kind: 'now' }
      }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
        validation: { isRequired: false },
        ui: {
          createView: { fieldMode: 'edit' },
          itemView: { fieldMode: 'read' }
        }
      })
    }
  }),
  Order: list({
    access: allowAll,
    fields: {
      userId: relationship({ ref: 'User', many: true }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
        validation: { isRequired: false },
        ui: {
          createView: { fieldMode: 'edit' },
          itemView: { fieldMode: 'read' }
        }
      }),
      updateAt: timestamp({
        defaultValue: { kind: 'now' },
        validation: { isRequired: false },
        ui: {
          createView: { fieldMode: 'edit' },
          itemView: { fieldMode: 'read' }
        }
      })
    }
  }),
  Image: list({
    access: allowAll,
    fields: {
      name: text({
        validation: {
          isRequired: true
        }
      }),
      altText: text(),
      image: image({ storage: 'my_local_images' })
    }
  }),
  Post: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,
    // this is the fields for our Post list
    fields: {
      title: text({ validation: { isRequired: true } }),
      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true
      }),

      // image: image({
      //   storage: 'local_images'
      // }),
      // with this field, you can set a User as the author for a Post
      author: relationship({
        // we could have used 'User', but then the relationship would only be 1-way
        ref: 'User.posts',
        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineConnect: true
        },
        // a Post can only have one author
        //   this is the default, but we show it here for verbosity
        many: false
      }),

      // with this field, you can add some Tags to Posts
      tags: relationship({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: 'Tag.posts',

        // a Post can have many Tags, not just one
        many: true,

        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] }
        }
      })
    }
  }),

  // this last list is our Tag list, it only has a name field for now
  Tag: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
    ui: {
      isHidden: true
    },

    // this is the fields for our Tag list
    fields: {
      name: text(),
      // this can be helpful to find out all the Posts associated with a Tag
      posts: relationship({ ref: 'Post.tags', many: true })
    }
  })
} satisfies Lists
