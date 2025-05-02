"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { SearchResultCard } from "./SearchResultCard";

type SearchValue = {
  searchValue: string;
};

export const SearchDropDown = ({ searchValue }: SearchValue) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild></DropdownMenuTrigger>
      <DropdownMenuContent className="w-73.5 md:w-144.25 p-5">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuItem>
            <SearchResultCard searchValue={searchValue} />
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
