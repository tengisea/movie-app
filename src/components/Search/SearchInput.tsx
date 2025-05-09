"use client";
import { Search } from "lucide-react";
import { SearchResultCard } from "./SearchResultCard";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const SearchInput = () => {
  const [searchValue, setSearchvalue] = useState("");
  const [open, setOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchvalue(event.target.value);
    setOpen(true);
  };

  return (
    <div className="flex items-center gap-2.5 bg-white dark:bg-black px-3 border-1 rounded w-fit ">
      <Search opacity={0.5} size={16} />

      <DropdownMenu onOpenChange={setOpen} open={open}>
        <input
          value={searchValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Search"
          className="p-y-3 focus:outline-none"
        />

        {searchValue && (
          <DropdownMenuContent
            align="center"
            className="absolute ml-11 md:ml-220 mt-15 w-83.5 md:w-144.5 p-3  rounded">
            <DropdownMenuItem>
              <SearchResultCard searchValue={searchValue} page={1} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};
