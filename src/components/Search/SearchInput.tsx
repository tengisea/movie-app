"use client";
import { Search } from "lucide-react";
import { SearchResultCard } from "./SearchResultCard";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type SearchValue = {
  searchValue:string
};

export const SearchInput = () => {
  const [searchValue, setSearchvalue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchvalue(event.target.value);
  };
console.log(searchValue);

  return (
    <div className="flex items-center gap-2.5 bg-white dark:bg-black px-3 border-1 rounded w-fit ">
      <Search opacity={0.5} size={16} />

      <DropdownMenu>
        <input
          value={searchValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Search"
          className="p-y-3 focus:outline-none"
          onFocus={() => <DropdownMenuTrigger />}
        />
        <DropdownMenuContent className="w-73.5 md:w-137.5 p-3 border-8 rounded">
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SearchResultCard searchValue={searchValue} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <SearchResultCard searchValue={searchValue} />
    </div>
  );
};
