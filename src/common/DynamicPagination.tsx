"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@/hooks/usePagination";

type DynamicPaginationProps = {
  totalPage: number;
};

export const DynamicPagination = ({ totalPage }: DynamicPaginationProps) => {
  const {
    currentPageIntoNumber,
    pageLimit,
    handlePrevious,
    handleNext,
    handlePageChange,
    displayButtons,
  } = usePagination(totalPage);

  return (
    <Pagination>
      <PaginationContent>
        {currentPageIntoNumber > 1 && (
          <PaginationItem onClick={handlePrevious}>
            <PaginationPrevious />
          </PaginationItem>
        )}

        {currentPageIntoNumber > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {displayButtons.map((pageNumber) => (
          <PaginationItem
            onClick={handlePageChange(pageNumber)}
            key={pageNumber}>
            <PaginationLink>{pageNumber}</PaginationLink>
          </PaginationItem>
        ))}

        {pageLimit !== currentPageIntoNumber && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPageIntoNumber < pageLimit && (
          <PaginationItem onClick={handleNext}>
            <PaginationNext />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
