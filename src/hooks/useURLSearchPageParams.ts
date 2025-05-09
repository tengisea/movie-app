"use client";

import { useSearchParams } from "next/navigation";

export const useURLSearchPageParams = () => {
  const searchParams = useSearchParams();

  const selectedGenresIds =
    searchParams.get("search")?.split(",").filter(Boolean) ?? [];

  const generateQueryParams = () => {
    const queryParams = new URLSearchParams();

    const newParams = queryParams.toString();

    return `search/?${newParams}`;
  };

  return { selectedGenresIds, generateQueryParams };
};
