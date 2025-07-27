import { graphql } from "../generates";

graphql(`
  fragment SupplierFields on Supplier {
    id
    supplierName
    supplierDetails
    userId {
      id
      email
      username
    }
    productsCount
  }

  fragment ImageFields on Image {
    id
    name
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

  fragment ProductFields on Product {
    id
    suppilersId {
      ...SupplierFields
    }
    name
    details
    status
    publishedAt
    updateAt
    createdAt
    images {
      ...ImageFields
    }
    imagesCount
  }

  query getProducts(
    $take: Int
    $skip: Int!
    $orderBy: [ProductOrderByInput!]!
  ) {
    products(take: $take, skip: $skip, orderBy: $orderBy) {
      ...ProductFields
    }
  }

  query getProduct($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      ...ProductFields
    }
  }
`);
