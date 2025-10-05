export const getVisiblePages = (
  totalPages: number,
  currentPage: number
): number[] => {

  const SIBLING_COUNT = 2;

  const TOTAL_BUTTONS = 3 + SIBLING_COUNT * 2;
  if (totalPages <= TOTAL_BUTTONS + 2) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const startSibling = Math.max(1, currentPage - SIBLING_COUNT);
  const endSibling = Math.min(totalPages, currentPage + SIBLING_COUNT);

  const pages: number[] = [];

  pages.push(1);

  pages.push(totalPages);

  for (let i = startSibling; i <= endSibling; i++) {
    pages.push(i);
  }

  const uniquePages = Array.from(new Set(pages)).sort((a, b) => a - b);
  const finalPages: number[] = [];
  let lastPage = 0;
  for (const page of uniquePages) {
    if (page - lastPage > 1) {
      if (lastPage > 1 || page < totalPages) {
        finalPages.push(0);
      }
    }
    finalPages.push(page);
    lastPage = page;
  }

  return finalPages
    .filter((page, index) => {
      if (page !== 0) return true;

      const prev = finalPages[index - 1];
      const next = finalPages[index + 1];

      if (prev === 1 && next === 3 && totalPages > 3) return true;
      if (prev === totalPages - 2 && next === totalPages && totalPages > 3)
        return true; // เก็บ Ellipsis ด้านขวา (N-2 ... N)

      return prev < 1 || next > totalPages || next - prev > 2;
    })
    .filter((p, i, arr) => p !== 0 || arr[i - 1] !== 0); // ลบ Ellipsis ซ้ำ
};
