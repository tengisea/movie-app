import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="flex items-center gap-2.5 bg-white px-3 ">
      <Search opacity={0.5} />
      <input
        type="text"
        placeholder="Search"
        className="p-y-3 focus:outline-none"
      />
    </div>
  );
};
