import { graphql } from "../generates";

export const ProductFields = graphql(`
  fragment ProductFields on Product {
    id
    supplier {
      ...SupplierFields
    }
    name
    description
    details
    price {
      price
      description
      price_type
      id
    }
    tags {
      id
      name
    }
    faqs {
      id
      question
      answer
    }
    averageScore
    status
    publishedAt
    updatedAt
    createdAt
    previewImage {
      ...MediaField
    }
    media
  }
`);

export const GetProducts = graphql(`
  query GetProducts(
    $limit: Int
    $page: Int
    $sort: String
    $where: Product_where
  ) {
    Products(limit: $limit, page: $page, sort: $sort, where: $where) {
      docs {
        ...ProductFields
      }
      totalDocs
      totalPages
      page
      limit
      hasNextPage
      hasPrevPage
      nextPage
      prevPage
    }
  }
`);

export const GetProductsCount = graphql(`
  query GetProductsCount($where: Product_where) {
    Products(limit: 1, where: $where) {
      totalDocs
    }
  }
`);

export const GetProduct = graphql(`
  query GetProduct($where: Product_where) {
    Products(where: $where) {
      docs {
        ...ProductFields
      }
    }
  }
`);
