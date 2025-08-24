import { graphql } from "../generates";

graphql(`
  fragment SupplierFields on Supplier {
    id
    name
    description
    user {
      id
      email
      username
    }
    productsCount
  }
`);
