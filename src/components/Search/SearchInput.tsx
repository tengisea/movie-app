"use client";
import { Search } from "lucide-react";
import { SearchDropDown } from "./SearchDropDown";
import { useState } from "react";

type SearchValue = {
  searchValue:string
};

export const SearchInput = () => {
  const [searchValue, setSearchvalue] = useState("");

  const handleInputChange = (event) => {
    setSearchvalue(event.target.value);
  };

  return (
    <div className="flex items-center gap-2.5 bg-white dark:bg-black px-3 border-1 rounded w-fit ">
      <Search opacity={0.5} size={16} />
      <input
        value={searchValue}
        onChange={setSearchvalue}
        type="text"
        placeholder="Search"
        className="p-y-3 focus:outline-none"
      />
      <SearchDropDown searchValue={searchValue} />
    </div>
  );
};
