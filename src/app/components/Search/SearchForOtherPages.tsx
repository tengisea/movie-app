import { AnimatePresence, motion } from "framer";
import { SearchInput } from "./SearchInput";
import { GenresDropDown } from "../Header";
import { searchBarAnimationVarients } from "../constants/search-bar-animation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search,X } from "lucide-react";

export const SearchForOtherPages = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchButtonClick= () => {
    setShowSearch(!showSearch)
  }
  return (
    <div className="flex items-center flex-1 md:flex gap-x-3">
      <div className="hidden lg:flex">
        <GenresDropDown />

        <SearchInput />
      </div>

      <Button
        className="flex md:hidden ml-auto"
        onClick={handleSearchButtonClick}>
        <Search />
      </Button>

      {showSearch && (
        <AnimatePresence>
          <motion.div
            variants={searchBarAnimationVarients}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" absolute inset-x-0 flex md:hidden px-5 py-[7.5px]">
            <GenresDropDown />

            <SearchInput />
            <Button 
            onClick={handleSearchButtonClick}>>
                <X/>
            </Button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
