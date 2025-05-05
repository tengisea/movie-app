"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const usePagination = (totalPage: number) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const maxButtons = 2;
  const pageLimit = Math.max(totalPage, 10);
  const currentPage = searchParams.get("page") ?? 1;
  const currentPageIntoNumber = Number(currentPage);

  const handlePageChange = (pageNumber: number) => () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    push(`${pathname}?${params.toString()}`);
  };

  const handlePrevious = () => {
    if (currentPageIntoNumber > 1) {
      handlePageChange(currentPageIntoNumber - 1)();
    }
  };

  const handleNext = () => {
    if (currentPageIntoNumber < pageLimit) {
      handlePageChange(currentPageIntoNumber + 1)();
    }
  };

  let start = Math.max(currentPageIntoNumber - Math.floor(maxButtons / 2), 1);
  let end = start + maxButtons ;

  if (end > pageLimit) {
    end = pageLimit;
    start = end - maxButtons + 1;
  }

  const displayButtons = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );
  return {
    currentPageIntoNumber,
    pageLimit,
    handlePrevious,
    handleNext,
    handlePageChange,
    displayButtons,
  };
};
