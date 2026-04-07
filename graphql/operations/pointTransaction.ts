import { graphql } from "../generates";

export const PointTransactionField = graphql(`
  fragment PointTransactionField on PointTransaction {
    id
    user {
      id
    }
    type
    amount
    status
    orders {
      id
    }
    metaData
    expiredAt
    createdAt
    updatedAt
    isFavorite
  }
`);

export const getPointTransactions = graphql(`
  query getPointTransactions(
    $where: PointTransaction_where
    $sort: String
    $limit: Int
    $page: Int
  ) {
    PointTransactions(where: $where, sort: $sort, limit: $limit, page: $page) {
      docs {
        ...PointTransactionField
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

export const createPointTransaction = graphql(`
  mutation createPointTransaction($data: mutationPointTransactionInput!) {
    createPointTransaction(data: $data) {
      ...PointTransactionField
    }
  }
`);

export const updatePointTransaction = graphql(`
  mutation updatePointTransaction($id: String!, $data: mutationPointTransactionUpdateInput!) {
    updatePointTransaction(id: $id, data: $data) {
      ...PointTransactionField
    }
  }
`);

export const deletePointTransaction = graphql(`
  mutation deletePointTransaction($id: String!) {
    deletePointTransaction(id: $id) {
      ...PointTransactionField
    }
  }
`);
