import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="flex items-center gap-2.5 bg-white dark:bg-black px-3 border-1 rounded w-fit ">
      <Search opacity={0.5} size={16}/>
      <input
        type="text"
        placeholder="Search"
        className="p-y-3 focus:outline-none"
      />
    </div>
  );
};
