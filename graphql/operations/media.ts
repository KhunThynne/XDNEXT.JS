import { graphql } from "../generates";

graphql(`
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

graphql(`
  query GetMedia($where: Media_where) {
    allMedia(where: $where) {
      docs {
        ...MediaField
      }
    }
  }
`);

graphql(`
  mutation CreateMedia($data: mutationMediaInput!) {
    createMedia(data: $data) {
      ...MediaField
    }
  }
`);
