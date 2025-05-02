"use client"

import { useFetchDataInClient } from "@/hooks/useFetchDataClient";
import { SearchLoading } from "./SearchLoading";
import { MovieCard } from "../Movie";
import { useState, useEffect } from "react";

type SearchValue = {
  searchValue: string;
};
export const SearchResultCard = ({ searchValue }: SearchValue) => {
  const { data, isLoading } = useFetchDataInClient(
    `/search/movie?query=${searchValue}&language=en-US&page=page1`
  );
  console.log(data);
  

    if (isLoading) return <SearchLoading />;

  const inputValue = data?.id ?? [];
  console.log(inputValue);

  //   const [suggestions, setSuggestions] = useState([]);

  // useEffect(() => {
  //   if (inputValue.trim() === "") {
  //     setSuggestions([]);
  //     return;
  //   }

  //   const filteredSuggestions = movies
  //     .flatMap((movies) =>
  //       country.cities.map((city) => `${city}, ${country.country}`)
  //     )
  //     .filter((location) =>
  //       location.toLowerCase().startsWith(inputValue.toLowerCase())
  //     )
  //     .slice(0, 4);

  //   setSuggestions(filteredSuggestions);
  // }, [inputValue, countries]);
  
  return (
    <div>
      {Array.isArray(inputValue) &&
        inputValue.map((movie, index) => <MovieCard key={index} {...movie} />)}
    </div>
  );
  }
