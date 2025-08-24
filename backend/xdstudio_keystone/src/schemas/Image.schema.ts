import { list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { image, text } from '@keystone-6/core/fields';
export const Image: ListConfig<any> = list({
  access: allowAll,
  fields: {
    name: text({
      // validation: {
      //   isRequired: true
      // }
    }),
    altText: text(),
    src: image({
      storage: 'my_local_images',
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
  },
  hooks: {
    resolveInput: async ({ operation, inputData, resolvedData }) => {
      console.log("test")
      if (operation === 'create') {
        const upload = await inputData.src.upload;
        if (!resolvedData.name) {
          resolvedData.name = upload.filename;
        }
      }
      return resolvedData;
    },
  },
});
