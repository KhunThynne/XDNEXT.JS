// utils/paginationUtil.ts
export const getSkipFromPage = (page: number, take: number) => {
  if (page <= 1) return 0;
  return (page - 1) * take;
};

export const getTotalPages = (totalItems: number, take: number) => {
  return Math.ceil(totalItems / take);
};
