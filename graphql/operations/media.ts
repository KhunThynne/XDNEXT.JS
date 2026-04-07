import { graphql } from "../generates";

export const MediaFieldFragment = graphql(`
  fragment MediaField on Media {
    id
    name
    altText
    filesize
    width
    height
    url
  }
`);

export const GetMedia = graphql(`
  query GetMedia($where: Media_where) {
    allMedia(where: $where) {
      docs {
        ...MediaField
      }
    }
  }
`);

export const CreateMedia = graphql(`
  mutation CreateMedia($data: mutationMediaInput!) {
    createMedia(data: $data) {
      ...MediaField
    }
  }
`);
