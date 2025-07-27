import { graphql } from "../generates";

graphql(`
  query GetImage($where: ImageWhereUniqueInput!) {
    image(where: $where) {
      name
      src {
        id
        extension
        filesize
        height
        url
        width
      }
      id
      altText
    }
  }

  mutation CreateImages($data: [ImageCreateInput!]!) {
    createImages(data: $data) {
      name
      id
      altText
      src {
        id
        filesize
        width
        height
        extension
        url
      }
    }
  }

  mutation CreateImage($data: ImageCreateInput!) {
    createImage(data: $data) {
      altText
      id
      name
      src {
        extension
        filesize
        height
        id
        url
        width
      }
    }
  }
`);
