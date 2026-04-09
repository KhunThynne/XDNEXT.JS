export type CheckUserProductStatusQuery = {
  checkUserProductStatus: {
    __typename: "CheckProductSuccess";
    inCart: boolean;
    inUserItem: boolean;
  };
};
