import { graphql } from "../generates";

graphql(`
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
    ordersCount
    metaData
    expiredAt
    createdAt
    updateAt
    isFavorite
  }
`);

graphql(`
  query getPointTransaction($where: PointTransactionWhereUniqueInput!) {
    pointTransactionsCount
    pointTransaction(where: $where) {
      ...PointTransactionField
    }
  }
  query getPointTransactions(
    $where: PointTransactionWhereInput!
    $orderBy: [PointTransactionOrderByInput!]!
    $take: Int
    $skip: Int!
    $cursor: PointTransactionWhereUniqueInput
  ) {
    pointTransactionsCount
    pointTransactions(
      where: $where
      orderBy: $orderBy
      take: $take
      skip: $skip
      cursor: $cursor
    ) {
      ...PointTransactionField
    }
  }
`);

graphql(`
  mutation CreatePointTransaction($data: PointTransactionCreateInput!) {
    createPointTransaction(data: $data) {
      ...PointTransactionField
    }
  }

  mutation updatePointTransaction(
    $where: PointTransactionWhereUniqueInput!
    $data: PointTransactionUpdateInput!
  ) {
    updatePointTransaction(where: $where, data: $data) {
      ...PointTransactionField
    }
  }
`);
