import { graphql } from "../generates";

graphql(`
  fragment ProductFields on Product {
    id
    suppilers {
      ...SupplierFields
    }
    name
    description
    details {
      document
    }
    price {
      price
      description
      price_type
      price_type
      id
    }
    status
    publishedAt
    updateAt
    createdAt
    images {
      ...ImageField
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
