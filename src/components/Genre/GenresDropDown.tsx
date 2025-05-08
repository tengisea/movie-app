"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { AllMovieGenres } from "./AllMovieGenres";
export const GenresDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> <span className="hidden md:block">Genre</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-73.5 md:w-144.25 p-5">
        <DropdownMenuLabel className="font-bold">Genres</DropdownMenuLabel>
        <DropdownMenuLabel className="font-normal">
          See lists of movies by genre
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuItem className=" w-[375px]">
            <AllMovieGenres />
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
