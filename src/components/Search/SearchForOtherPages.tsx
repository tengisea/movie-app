"use client";
import { AnimatePresence, motion } from "framer";
import { SearchInput } from "./SearchInput";
import { GenresDropDown } from "../Header";
import { searchBarAnimationVarients } from "../constants/search-bar-animation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export const SearchForOtherPages = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchButtonClick = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="flex items-center justify-between md:justify-center flex-1 md:flex gap-x-3">
      <div className="hidden md:flex gap-3">
        <GenresDropDown />
        <SearchInput />
      </div>

      <Button
        variant={"outline"}
        className="flex md:hidden ml-auto"
        onClick={handleSearchButtonClick}>
        <Search size={16} />
      </Button>

      <AnimatePresence>
        {showSearch && (
          <motion.div
            variants={searchBarAnimationVarients}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="z-10 absolute inset-x-0 flex md:hidden px-5 py-[7.5px] gap-3  bg-white">
            <GenresDropDown />
utas
            <SearchInput />
            <Button variant={"ghost"} onClick={handleSearchButtonClick}>
              <X />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
