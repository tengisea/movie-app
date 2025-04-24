"use client";
import { usePathname } from "next/navigation";
import { SearchForOtherPages, SearchForSearchPage } from "../Search";
import { MovieZLogo, ThemeSwitch } from "../Button";

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex py-[7.5] md:py-[11.5px] px-5 md:px-20 md:justify-between items-center">
      <MovieZLogo />

      {pathname === "/search" ? (
        <SearchForSearchPage />
      ) : (
        <SearchForOtherPages />
      )}
      
      <ThemeSwitch />
    </div>
  );
};
