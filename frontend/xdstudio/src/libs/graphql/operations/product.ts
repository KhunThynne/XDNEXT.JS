import { graphql } from "../generates";

graphql(`
  fragment ProductFields on Product {
    id
    suppilers {
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
