import { graphql } from "../generates";

graphql(`
  fragment ImageField on Image {
    id
    name
    altText
    src {
      filesize
      width
      height
      extension
      url
      id
    }
  }
`);
graphql(`
  query GetImage($where: ImageWhereUniqueInput!) {
    image(where: $where) {
      ...ImageField
    }
  }

  mutation CreateImages($data: [ImageCreateInput!]!) {
    createImages(data: $data) {
      ...ImageField
    }
  }

  mutation CreateImage($data: ImageCreateInput!) {
    createImage(data: $data) {
      ...ImageField
    }
  }
`);
