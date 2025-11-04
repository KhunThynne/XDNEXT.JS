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
    tag {
      id
      name
      postsCount
    }
    faqs {
      id
      question
      answer {
        document
      }
    }
    averageScore
    status
    publishedAt
    updateAt
    createdAt
    previewImage {
      ...ImageField
    }
    media {
      document(hydrateRelationships: true)
      __typename
    }
  }

  query getProducts(
    $take: Int
    $skip: Int!
    $orderBy: [ProductOrderByInput!]!
  ) {
    products(take: $take, skip: $skip, orderBy: $orderBy) {
      ...ProductFields
    }
    productsCount
  }

  query getProductsCount {
    productsCount
  }

  query getProduct($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      ...ProductFields
    }
  }
`);
