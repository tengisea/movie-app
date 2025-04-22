import { Film, Search, Moon } from "lucide-react";
import { GenresDropDown } from "./GenresDropDown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className="flex px-4 justify-between items-center">
      <header className="flex text-[#4338CA] font-bold gap-2">
        <Film size={20} color="#4338CA" /> Movie Z
      </header>

      <div className="flex gap-3">
        <GenresDropDown />

        <div className="flex">
          <Search size={16} color="#ada9a9" />
          <Input placeholder="Search" />
        </div>
      </div>

      <Button variant="outline" size="icon">
        <Moon />
      </Button>
    </div>
  );
};
