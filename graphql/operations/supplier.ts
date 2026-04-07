import { graphql } from "../generates";

export const SupplierFields = graphql(`
  fragment SupplierFields on Supplier {
    id
    name
    description
    user {
      id
      email
      username
    }
  }
`);
