import env from '../env'
export const storage = {
  my_local_images: {
    kind: 'local',
    type: 'image',
    generateUrl: (path: string) => `${env.API_BACKEND_URL}${env.IMAGE_PATH}${path}`,
    serverRoute: {
      path: env.IMAGE_PATH
    },
    storagePath: env.STORAGE_IMAGE_PATH
  }
}
