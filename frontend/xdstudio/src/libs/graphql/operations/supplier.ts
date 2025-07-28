import { graphql } from "../generates";

graphql(`
  fragment SupplierFields on Supplier {
    id
    supplierName
    supplierDetails
    user {
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
`);
