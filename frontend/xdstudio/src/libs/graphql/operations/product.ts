import { graphql } from "../generates";

graphql(`
  fragment ProductFields on Product {
    id
    suppilers {
      ...SupplierFields
    }
    media {
      document(hydrateRelationships: true)
      __typename
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
    images {
      ...ImageField
    }
    previewImage {
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
