import { graphql } from "../generates";

graphql(`
  fragment ProductFields on Product {
    id
    name
    description

    price {
      price
      description
      price_type
      price_type
      id
    }
    tags {
      id
      name
      posts {
        id
      }
    }
    faqs {
      id
      question
    }
    averageScore
    status
    publishedAt
    updatedAt
    createdAt
  }
`);

graphql(`
  query GetProducts {
    Products {
      docs {
        ...ProductFields
      }
    }
  }
`);
