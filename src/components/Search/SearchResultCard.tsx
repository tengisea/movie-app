"use client"

import { useFetchDataInClient } from "@/hooks/useFetchDataClient";
import { SearchLoading } from "./SearchLoading";
import { MovieCard } from "../Movie";

type SearchValue = {
  searchValue: string;
};
export const SearchResultCard = ({ searchValue }: SearchValue) => {
  const { data, isLoading } = useFetchDataInClient(
    `/search/movie?query=${searchValue}&language=en-US&page=page=1`
  );
  // console.log(data);
  

    if (isLoading) return <SearchLoading />;

  const inputValue = data?.results ?? [];


  return (
    <div className="flex flex-wrap items-start content-start self-stretch gap-4 pt-3">
      {inputValue.map(({ id, name }, index) => {
        return (
          <div
            key={index}>
            {name}
          </div>
        );
      })}
    </div>
  );
  }
